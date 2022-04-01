import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../auth/guards/admin.guard';
import { ProfileGuard } from '../auth/guards/profile.guard';
import { AddNewCarComponent } from './add-new-car/add-new-car.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarComponent } from './car/car.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: WelcomeComponent},
  { path: 'varnacars', component: WelcomeComponent },
  {path: 'varnacars/newcar', component: AddNewCarComponent, canActivate: [AdminGuard]},
  { path: 'varnacars/allcars', component: CarComponent },
  {path: 'varnacars/allcars/editcar', component: EditCarComponent, canActivate: [AdminGuard]},
{path: 'varnacars/allcars/:id', component: CarDetailsComponent, canActivate: [ProfileGuard]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
