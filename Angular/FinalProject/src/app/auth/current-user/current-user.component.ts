import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { HistoryService } from 'src/app/services/history.service';
import { ReserveCarService } from 'src/app/services/reserve-car.service';
import { UserDataService } from 'src/app/services/user-data.service';


@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {
  admin: Boolean = false;
  reservedCars: any;
  activeUser: any;
  totalCosts: any;
  totalCars: any;
  isLoading: Boolean = false;
  history: any

  constructor(private router: Router,
    private getUserDataServices: UserDataService,
    private http: HttpClient,
    private reservedCarServices: ReserveCarService,
    private historyUserServices: HistoryService) { }

  userData: any;
  ngOnInit() {
    this.onInit()
  }

  onInit() {
    if (localStorage.getItem('userData') != null) {
      let curentUser = JSON.parse(localStorage.getItem('userData')!)
      this.activeUser = curentUser
      if (curentUser.objectId == 'JaLOs6NPtK') {
        this.admin = true
        return
      }
      this.getUserDataServices.getUserData(curentUser.objectId)
        .subscribe(data => {
          this.history = data.history
          let dataArray = data.reservedCars.map((x: any) => {
            const BASE_HEADERS = {
              'Content-Type': 'application/json',
              'X-Parse-Application-Id': '4hPPyxt4b0tlUbJAUzz4SdtJ4vqBXpPsdadPF9jr',
              'X-Parse-REST-API-Key': 'JoUCGU1crWNA2LptiPFx1WHOPlkGpE9C55TbK29w'
            }
            const requestOptions = {
              headers: new HttpHeaders(BASE_HEADERS),
            };
            let character = this.http.get('https://parseapi.back4app.com/classes/allCars/' + x, requestOptions);
            return character;
          })
          this.isLoading = true;
          if(dataArray.length != 0){
            forkJoin(dataArray).subscribe(results => {
              this.reservedCars = results
              this.isLoading = false;
              //console.log(this.reservedCars);
              const sumTotal = arr =>
                arr.reduce((sum, { price }) => sum + price, 0)
              this.totalCosts = sumTotal(this.reservedCars)
              this.totalCars = this.reservedCars.length
            });

          }else {
            this.isLoading = false;
          }

        })
      //console.log(this.activeUser);
    }

  }
  logout() {
    localStorage.removeItem("userData")
  }

  removeCar(event) {
    //this.historyUserServices.sendHistoryCars(this.activeUser.objectId)
    console.log(event.target.id);
    console.log(this.reservedCars);
    const index = this.reservedCars.findIndex(car => {
      return car.objectId === event.target.id;
    });
    console.log(this.reservedCars[index]);
    console.log(this.activeUser);
    this.history.push(this.reservedCars[index])
    this.reservedCars.splice(index, 1)
    let userHistory = {
      'history': this.history
    }
    let reservedCarData = {
      "reservedCars": this.reservedCars.map(car => car.objectId)
    }
    console.log(userHistory);
    this.historyUserServices.sendHistoryCars(this.activeUser.objectId, userHistory).subscribe()
    this.reservedCarServices.putReservedCars(this.activeUser.objectId, reservedCarData)
      .subscribe(() => {
        this.onInit()
      })

  }

  getHistory() {
    console.log(this.activeUser);

    console.log(this.activeUser.history);

    console.log(this.history);
    let now = new Date()
    console.log(now.getTime());
    
  }
}


/*

*/

