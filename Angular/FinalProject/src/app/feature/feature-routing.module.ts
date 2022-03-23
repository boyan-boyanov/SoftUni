import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewCarComponent } from './add-new-car/add-new-car.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarComponent } from './car/car.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: WelcomeComponent},
  { path: 'varnacars', component: WelcomeComponent },
  {path: 'varnacars/newcar', component: AddNewCarComponent},
  { path: 'varnacars/allcars', component: CarComponent },
  {path: 'varnacars/allcars/editcar', component: EditCarComponent},
{path: 'varnacars/allcars/:id', component: CarDetailsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
