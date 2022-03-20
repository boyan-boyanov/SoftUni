import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { LandingHomeService } from './services/landing-home.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeCardComponent } from './home-card/home-card.component';
import { CarComponent } from './car/car.component';
import { AllCarsService } from './services/all-cars.service';
import { AddNewCarComponent } from './add-new-car/add-new-car.component';
import { FormsModule } from '@angular/forms';
import { AddCarsService } from './services/add-cars.service';
import { EditCarComponent } from './edit-car/edit-car.component';
import { EditCarService } from './services/edit-car.service';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    HomePageComponent,
    WelcomeComponent,
    FooterComponent,
    HomeCardComponent,
    CarComponent,
    AddNewCarComponent,
    EditCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthRoutingModule,
    AuthModule
  ],
  providers: [LandingHomeService, AllCarsService, AddCarsService, EditCarService],
  bootstrap: [AppComponent]
})
export class AppModule { }


