import { Component, OnInit } from '@angular/core';
import { LandingHomeService } from '..//../services/landing-home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  collectCars: any;
  allCars: any;
  singleCar: any;

  constructor(private landingMovieServicies: LandingHomeService ) { }

  ngOnInit() {
    this.landingMovieServicies.getLandingCars().subscribe(data => {
      this.collectCars = data;
      this.allCars = this.collectCars.results.slice(0,2)
      this.singleCar = this.allCars[0];           
    });
    
  }

}
