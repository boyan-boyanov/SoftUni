import { Component, OnInit } from '@angular/core';
import { IRegisterUser } from '../authInterfaces/loginInterfaces';
import { RegistersService } from '../registers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginModel = new IRegisterUser("", "", "", "")
  errorMsg = "";
  
  constructor(private registerServices: RegistersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(event:any) {         
    
    this.registerServices.register(this.loginModel)
    .subscribe(data => {
          
      
        this.router.navigate(['/login'])
      
            
    },
    error => {
      console.log(error);      
    }
    )

  }

}
