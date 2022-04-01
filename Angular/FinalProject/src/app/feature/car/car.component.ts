import { Component, OnInit } from '@angular/core';
import { AllCarsService } from '../../services/all-cars.service';
import { Router, NavigationExtras } from '@angular/router';
import { CurrentUserComponent } from 'src/app/auth/current-user/current-user.component';
import { ReserveCarService } from 'src/app/services/reserve-car.service';
import { UserDataService } from 'src/app/services/user-data.service';

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
  reservedArray: any = []
  constructor(private getAllCarsServices: AllCarsService,
    private router: Router,
    private test: CurrentUserComponent,
    private reservedCarServices: ReserveCarService,
    private getUserDataServices: UserDataService) { }


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
    const carId = event.target.parentElement.id
    const navigationExtras: NavigationExtras = {
      state: {
        id: carId,
      }
    };

    this.router.navigate(['/varnacars/allcars/editcar'], navigationExtras);
  }

  viewDetails(event: any) {

    const carId = event.target.parentElement.id
    this.router.navigate(['/varnacars/allcars/' + carId])
  }

  public reserveCar(event: any) {
    if (localStorage.getItem('userData') != null) {

      let curentUser = JSON.parse(localStorage.getItem('userData')!)
      // console.log(curentUser.reservedCars);

      this.getUserDataServices.getUserData(curentUser.objectId)
        .subscribe(data => {
          this.reservedArray = data.reservedCars;
          const carId = event.target.parentElement.id;
          this.reservedArray.push(carId);
          let reservedCarData = {
            "reservedCars": this.reservedArray
          }
          this.reservedCarServices.reservedCars(curentUser.objectId, reservedCarData)
            .subscribe(data => {
              this.router.navigate(['/user'])
            })
        })

    }
  }

  findCar() {
    let key = document.getElementById('search')['value']

    let myCars = this.collectCars.results.filter(car => car.carName.toLowerCase() == key.toLowerCase())
    if (myCars.length == 0) {
      let myCars = this.collectCars.results.filter(car => car.carModel.toLowerCase() == key.toLowerCase())
      this.allCars = myCars
      
      return
    }

    this.allCars = myCars

  }

}
