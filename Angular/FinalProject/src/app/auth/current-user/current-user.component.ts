import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {
  admin: Boolean = false;
  constructor() { }
userData: any;
  ngOnInit() {
    if (localStorage.getItem('userData') != null) {
      let curentUser = JSON.parse(localStorage.getItem('userData')!)
      if (curentUser.objectId == 'JaLOs6NPtK') {
        this.admin = true
        }
               
    }
    
  }
  logout() {
    localStorage.removeItem("userData")
  }
}
