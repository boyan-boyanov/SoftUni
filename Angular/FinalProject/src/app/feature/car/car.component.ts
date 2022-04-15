import { Component, OnInit } from '@angular/core';
import { AllCarsService } from '../../services/all-cars.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
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
  reservedArray: any = [];
  usedCars: Array<string> = [];
  readonly pageSize = 3;
  currentPage: number = 1;
  totalPage: number;
  showList: any;
  pagination: Boolean = true
  onSearch: Boolean = false
  nissan: string = ""


  constructor(private getAllCarsServices: AllCarsService,
    private router: Router,
    private reservedCarServices: ReserveCarService,
    private getUserDataServices: UserDataService,
    private getAdminDataServices: IsAdminService,
    private deleteCarServices: EditCarService,
    private usedCarSercices: UsedCarService,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    let hiddenMenu = document.getElementById("hidden-nav-bar")
    hiddenMenu!.style.display = "none"

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
      this.totalPage = Math.ceil(this.collectCars.results.length / this.pageSize)
      this.showList = this.collectCars.results.slice(0, this.pageSize)
      this.nissan = this.route.snapshot.params['info']
      this.isLoading = false;
      if (this.nissan) {
        this.findCar(this.nissan)
      }
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
    this.router.navigate(['/varnacars/allcars/' + carId, { used: this.usedCars }])
  }

  public reserveCar(event: any) {
    if (localStorage.getItem('userData') != null) {

      let curentUser = JSON.parse(localStorage.getItem('userData')!)
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

  findCar(special?) {

    this.onSearch = true
    let key = document.getElementById('search')['value']
    if (special) {
      key = special;
    }
    if (key.trim() == "") {
      this.showList = this.collectCars.results
      this.pagination = false
      return
    }
    this.pagination = true
    let myCars = this.collectCars.results.filter(car => car.carName.toLowerCase() == key.toLowerCase())

    if (myCars.length == 0) {
      myCars = this.collectCars.results.filter(car => car.carModel.toLowerCase() == key.toLowerCase())
    }
    this.totalPage = Math.ceil(myCars.length / this.pageSize)
    this.currentPage = 1
    this.showList = myCars.slice(0, this.pageSize)
    this.allCars = myCars
  }
  
  allItems() {
    this.onSearch = false
    this.showList = this.collectCars.results
    this.pagination = false
    return
  }

  goPageBack(): void {
    this.currentPage--
    if (this.onSearch) {
      this.showList = this.allCars.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
    } else {
      this.showList = this.collectCars.results.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
    }
  }

  goPageForward(): void {
    this.currentPage++
    if (this.onSearch) {
      this.showList = this.allCars.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
    } else {
      this.showList = this.collectCars.results.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
    }
  }
}


