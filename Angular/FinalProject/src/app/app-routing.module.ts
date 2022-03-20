import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewCarComponent } from './add-new-car/add-new-car.component';
import { WelcomeComponent } from './welcome/welcome.component'

import { CarComponent} from './car/car.component'
import { EditCarComponent } from './edit-car/edit-car.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: WelcomeComponent},
  { path: 'varnacars', component: WelcomeComponent },
  { path: 'newcar', component: AddNewCarComponent },
   {path: 'allcars', component: CarComponent},
  {path: 'allcars/editcar', component: EditCarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
