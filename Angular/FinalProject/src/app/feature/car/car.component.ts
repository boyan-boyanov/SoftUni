import { Component, OnInit } from '@angular/core';
import { AllCarsService } from '../../services/all-cars.service';
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
  admin: Boolean = false;
  isLoged: Boolean = false;
  constructor(private getAllCarsServices: AllCarsService,
    private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('userData') != null) {
      this.isLoged = true
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
    //this.router.navigate(['/allcars/editcar'], navigationExtras);
    this.router.navigate(['/varnacars/allcars/editcar'], navigationExtras);
  }

  viewDetails(event: any){
    const carId = event.target.id
    this.router.navigate(['/varnacars/allcars/'+carId])
   // this.getSingleCarServices.getSingleCar(carId).subscribe(data => {
   //   console.log(data);
      
   // })
    
  }

}
