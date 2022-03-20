import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistersService } from './registers.service';
import { CurrentUserComponent } from './current-user/current-user.component';



@NgModule({
  declarations: [LoginComponent,
    RegisterComponent,
    CurrentUserComponent,
    ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
      ],
      exports: [
        LoginComponent,
        RegisterComponent
      ],
      providers: [RegistersService, RegistersService],
})
export class AuthModule { }
