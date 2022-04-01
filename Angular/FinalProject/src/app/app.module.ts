import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingHomeService } from './services/landing-home.service';
import { HttpClientModule } from '@angular/common/http';
import { AllCarsService } from './services/all-cars.service';
import { FormsModule } from '@angular/forms';
import { AddCarsService } from './services/add-cars.service';
import { EditCarService } from './services/edit-car.service';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';
import { AddCommentService } from './services/add-comment.service';
import { ReserveCarService } from './services/reserve-car.service';
import { UserDataService } from './services/user-data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthRoutingModule,
    AuthModule,
    CoreModule,
    FeatureModule,
    BrowserAnimationsModule
  ],
  providers: [LandingHomeService,
    AllCarsService,
    AddCarsService,
    EditCarService,
    AddCommentService,
    ReserveCarService,
    UserDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


