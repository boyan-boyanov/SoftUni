import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewCarComponent } from '../add-new-car/add-new-car.component';
import { CurrentUserComponent } from './current-user/current-user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
   { path: 'login', component: LoginComponent },
   {path: 'register', component: RegisterComponent},
   {path: 'user', component: CurrentUserComponent},
   {path: 'admin/newcar', component: AddNewCarComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
