import { Component, OnInit } from '@angular/core';
import { AllCarsService } from '../../services/all-cars.service';
import { Router, NavigationExtras } from '@angular/router';
import { CurrentUserComponent } from 'src/app/auth/current-user/current-user.component';
import { ReserveCarService } from 'src/app/services/reserve-car.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { IsAdminService } from 'src/app/services/is-admin.service';
import { EditCarService } from 'src/app/services/edit-car.service';
import { UsedCarService } from 'src/app/services/used-car.service';

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
  usedCars: Array<string> = []


  constructor(private getAllCarsServices: AllCarsService,
    private router: Router,
    private reservedCarServices: ReserveCarService,
    private getUserDataServices: UserDataService,
    private getAdminDataServices: IsAdminService,
    private deleteCarServices: EditCarService,
    private usedCarSercices: UsedCarService) { }


  ngOnInit(): void {
    if (localStorage.getItem('userData') != null) {
      this.isLoged = true
      this.admin = this.getAdminDataServices.isAdmin()
    }
    this.onInit()
  }

  onInit() {
    this.isLoading = true;
    this.usedCarSercices.getUsedCar().subscribe(data => {
      for (let usedCar of data.results) {
        this.usedCars.push(usedCar.rentedCar)
      }
    })
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

  deleteCar(event) {
    const carId = event.target.parentElement.id
    this.deleteCarServices.deleteCars(carId).subscribe()
    this.onInit()
  }

  viewDetails(event: any) {
    const carId = event.target.parentElement.id
    this.router.navigate(['/varnacars/allcars/' + carId, {used: this.usedCars}])
  }

  public reserveCar(event: any) {
    if (localStorage.getItem('userData') != null) {

      let curentUser = JSON.parse(localStorage.getItem('userData')!)
      // console.log(curentUser.reservedCars);
      let reservedDate = new Date()

      this.getUserDataServices.getUserData(curentUser.objectId)
        .subscribe(data => {
          this.reservedArray = data.reservedCars;
          const carId = event.target.parentElement.id;
          const reservedData = {
            carId: carId,
            reservedDate: reservedDate,
            reservedTime: reservedDate.getTime()
          }
          this.reservedArray.push(reservedData);

          let reservedCarData = {
            "reservedCars": this.reservedArray
          }
          this.usedCarSercices.saveUsedCar({ "rentedCar": carId }).subscribe()
          this.reservedCarServices.putReservedCars(curentUser.objectId, reservedCarData)
            .subscribe(data => {
              this.router.navigate(['/user'])
            })
        })

    }
  }

  findCar() {

    let key = document.getElementById('search')['value']
    if (key.trim() == "") {
      console.log('empty');
      this.allCars = this.collectCars.results
      return
    }
    let myCars = this.collectCars.results.filter(car => car.carName.toLowerCase() == key.toLowerCase())
    key = ""
    this.allCars = myCars
  }
  allItems() {
    this.allCars = this.collectCars.results
    return
  }
}
