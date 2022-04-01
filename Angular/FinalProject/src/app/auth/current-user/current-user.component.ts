import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
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

  constructor(private router: Router,
    private getUserDataServices: UserDataService,
    private http: HttpClient) { }

  userData: any;
  ngOnInit() {
    if (localStorage.getItem('userData') != null) {
      let curentUser = JSON.parse(localStorage.getItem('userData')!)
      this.activeUser = curentUser
      if (curentUser.objectId == 'JaLOs6NPtK') {
        this.admin = true
      }
      this.getUserDataServices.getUserData(curentUser.objectId)
        .subscribe(data => {
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
          forkJoin(dataArray).subscribe(results => {              
             this.reservedCars = results
             this.isLoading = false;
             //console.log(this.reservedCars);
             const sumTotal = arr =>
              arr.reduce((sum, { price}) => sum + price, 0)
              this.totalCosts = sumTotal(this.reservedCars)
              this.totalCars = this.reservedCars.length
          });
          
        })
      //console.log(this.activeUser);
    }

  }
  logout() {
    localStorage.removeItem("userData")
  }

}


