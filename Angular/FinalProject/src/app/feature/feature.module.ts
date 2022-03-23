import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { AddNewCarComponent } from './add-new-car/add-new-car.component';
import { FormsModule } from '@angular/forms';
import { CarComponent } from './car/car.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { CarDetailsComponent } from './car-details/car-details.component';



@NgModule({
  declarations: [WelcomeComponent,
    HomePageComponent,
    HomeCardComponent,
    AddNewCarComponent,
    CarComponent,
    EditCarComponent,
    CarDetailsComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule    
  ],
  exports: [CarDetailsComponent]
})
export class FeatureModule { }
