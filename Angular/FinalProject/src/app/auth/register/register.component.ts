import { Component, OnInit } from '@angular/core';
import { RegistersService } from '../registers.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator, passwordMatch } from '../util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(6)])
  
  errorMsg = "";
  registerFormGroup: FormGroup = this.formBuilder.group({
    "email": new FormControl('', [Validators.required, emailValidator]),
    "username": new FormControl(null, [Validators.required, Validators.minLength(3)]),
    "password": this.passwordControl,
    "repass": new FormControl(null, [passwordMatch(this.passwordControl), Validators.minLength(1)])
  })

  //I'm saving repass in back-end only to not forgot it :)

  constructor(
    private registerServices: RegistersService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const { email, password, username, repass } = this.registerFormGroup.value

    const body: any = {
      email: email,
      password: password,
      username: username,
      repass: repass
    }


    this.registerServices.register(body).subscribe({
      next: data => {
        
      },
      complete: () => {
        this.router.navigate(['/login'])
      },
      error: (err) => {
        this.errorMsg = err.error.error

      }
    })
  }

}
