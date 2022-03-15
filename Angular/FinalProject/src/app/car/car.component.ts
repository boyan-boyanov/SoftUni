import { Component, OnInit } from '@angular/core';
import { AllCarsService } from '../services/all-cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  collectCars: any;
  allCars: any;
  
  constructor(private getAllCarsServices: AllCarsService) { }

  ngOnInit(): void {
    this.getAllCarsServices.getAllCars().subscribe(data => {
      this.collectCars = data;
      this.allCars = this.collectCars.results
      
      
      console.log(this.allCars[0], this.allCars[1]);
    });
  }

}
