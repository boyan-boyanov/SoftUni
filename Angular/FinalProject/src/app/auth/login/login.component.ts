import { Component, OnInit } from '@angular/core';
import { IloginUser } from '../authInterfaces/loginInterfaces';
import { Router } from '@angular/router';
import { RegistersService } from '../registers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Boolean = false;
  loginModel = new IloginUser("", "")
  errorMsg = "";
  constructor(private registerServices: RegistersService,
    private router: Router,) { }

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
    console.log(this.loginModel);
    let params = `?email=${this.loginModel.email}&password=${this.loginModel.password}`
    
    this.registerServices.login(params)
      .subscribe(data => {
        localStorage.setItem('userData', JSON.stringify(data));
        if (localStorage.getItem("userData")) {
          this.router.navigate(['/'])
        }
      },
        error => {
          console.log(error);
        }
      )

  }

}
