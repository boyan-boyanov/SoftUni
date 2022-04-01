import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistersService } from '../registers.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Boolean = false;
  errorMsg = "";

  loginFormGroup: FormGroup = this.formBuilder.group({
    "email": new FormControl('', [Validators.required, emailValidator]),
    "password": new FormControl(null, [Validators.required, Validators.minLength(6)])

  })

  constructor(
    private registerServices: RegistersService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (localStorage.getItem('userData') != null) {
      let curentUser = JSON.parse(localStorage.getItem('userData')!)
      if (curentUser) {
        this.router.navigate(['/user'])
      }
      if (curentUser.objectId == 'JaLOs6NPtK') {
        this.user = true
      }
    }


  }
  onSubmit() {
    this.errorMsg = ""
    const { email, password } = this.loginFormGroup.value

    const body: { [key: string]: string } = {
      email: email,
      password: password,
    }

    let params = `?email=${body['email']}&password=${body['password']}`

    this.registerServices.login(params).subscribe({
      next: data => {
        localStorage.setItem('userData', JSON.stringify(data));
      },
      complete: () => {
        this.router.navigate(['/'])
      },
      error: (err) => {
        this.errorMsg = err.error.error
      }
    })

  }

}

