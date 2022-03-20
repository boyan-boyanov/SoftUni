import { Component, OnInit } from '@angular/core';
import { AllCarsService } from '../services/all-cars.service';
import { SingleCarService } from '../services/single-car.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  collectCars: any;
  allCars: any;
  isLoading: Boolean = false;
  admin: Boolean = false
  constructor(private getAllCarsServices: AllCarsService,
    private getSingleCarServices: SingleCarService,
    private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('userData') != null) {
      let curentUser = JSON.parse(localStorage.getItem('userData')!)
      if (curentUser.objectId == 'JaLOs6NPtK') {
        this.admin = true
        }
               
    }
    this.isLoading = true;
    this.getAllCarsServices.getAllCars().subscribe(data => {
      this.collectCars = data;
      this.allCars = this.collectCars.results
      this.isLoading = false;
    });
  }

  editCar(event: any) {
    const carId = event.target.id
    const navigationExtras: NavigationExtras = {
      state: {
        id: carId,
      }
    };
    this.router.navigate(['/allcars/editcar'], navigationExtras);
  }

}
