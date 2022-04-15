import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, forkJoin, never, Observable } from 'rxjs';
import { HistoryService } from 'src/app/services/history.service';
import { ReserveCarService } from 'src/app/services/reserve-car.service';
import { UsedCarService } from 'src/app/services/used-car.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator, passwordMatch } from '../util';
import { throwError } from 'rxjs';

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
  usedCars: any
  newPic?: File
  showForm: string = ""
  loading = false
  updateError = ''

  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(6)])

  updateUsernameFormGroup: FormGroup = this.formBuilder.group({
    "email": new FormControl('', [Validators.required, emailValidator]),
    "username": new FormControl(null, [Validators.required, Validators.minLength(3)]),
    "password": new FormControl(null, [Validators.required, Validators.minLength(6)]),
  })

  updatePasswordFormGroup: FormGroup = this.formBuilder.group({
    "newpass": this.passwordControl,
    "repass": new FormControl(null, [passwordMatch(this.passwordControl), Validators.minLength(1)]),
    "oldpass": new FormControl(null, [Validators.required, Validators.minLength(6)])
  })


  constructor(private router: Router,
    private getUserDataServices: UserDataService,
    private http: HttpClient,
    private reservedCarServices: ReserveCarService,
    private historyUserServices: HistoryService,
    private usedCarService: UsedCarService,
    private formBuilder: FormBuilder,
  ) { }

  userData: any;
  ngOnInit() {
    let hiddenMenu = document.getElementById("hidden-nav-bar")
    hiddenMenu!.style.display = "none"
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
          let dataArray = []

          if (data.reservedCars != null) {
            dataArray = data.reservedCars.map((x: any) => {
              const BASE_HEADERS = {
                'Content-Type': 'application/json',
                'X-Parse-Application-Id': '4hPPyxt4b0tlUbJAUzz4SdtJ4vqBXpPsdadPF9jr',
                'X-Parse-REST-API-Key': 'JoUCGU1crWNA2LptiPFx1WHOPlkGpE9C55TbK29w'
              }
              const requestOptions = {
                headers: new HttpHeaders(BASE_HEADERS),
              };
              let character = this.http.get('https://parseapi.back4app.com/classes/allCars/' + x.carId, requestOptions)
              character['reservedDate'] = x.reservedDate
              character['reservedTime'] = x.reservedTime
              return character;
            })
          }

          this.isLoading = true;
          if (dataArray.length != 0) {
            let i = 0
            forkJoin(dataArray).subscribe(results => {
              this.reservedCars = results
              this.isLoading = false;
              this.reservedCars.map(x => {
                x.reservedDate = dataArray[i].reservedDate
                x.reservedTime = dataArray[i].reservedTime
                i++
              })
              const sumTotal = arr =>
                arr.reduce((sum, { price }) => sum + price, 0)
              this.totalCosts = sumTotal(this.reservedCars)
              this.totalCars = this.reservedCars.length
            });
          } else {
            this.isLoading = false;
          }
        })
    }
  }

  logout() {
    localStorage.removeItem("userData")
  }

  removeCar(event) {
    const index = this.reservedCars.findIndex(car => {
      return car.objectId === event.target.id;
    });
    this.usedCarService.getUsedCar().subscribe(data => {
      const usedIndex = data.results.findIndex(car => {
        return car.rentedCar === event.target.id
      })
      const deleteUsedCars = data.results[usedIndex]
      console.log(usedIndex);
      const deletedUsedCarsId = deleteUsedCars.objectId;
      this.usedCarService.deleteUsedCar(deletedUsedCarsId).subscribe()
    })

    let now = new Date()
    let returnedCar = this.reservedCars[index]
    returnedCar.returnDate = now
    returnedCar.returnedTime = now.getTime()

    this.history.push(returnedCar)
    let userHistory = {
      'history': this.history
    }

    this.reservedCars.splice(index, 1)
    let reservedCarData = {
      'reservedCars': this.reservedCars.map(car => {
        return {
          carId: car.objectId,
          reservedDate: car.reservedDate,
          reservedTime: car.reservedTime
        }
      })
    }

    this.historyUserServices.sendHistoryCars(this.activeUser.objectId, userHistory).subscribe()
    this.reservedCarServices.putReservedCars(this.activeUser.objectId, reservedCarData)
      .subscribe(() => {
        this.router.navigate([`varnacars/user/${this.activeUser.objectId}`])
      })
  }

  getHistory() {
    console.log(this.activeUser.objectId);
    this.router.navigate([`varnacars/user/${this.activeUser.objectId}`])
  }

  getDate(car) {
    let year = car.reservedDate.slice(0, 4)
    let month = car.reservedDate.slice(5, 7)
    let day = car.reservedDate.slice(8, 10)
    let time = car.reservedDate.slice(11, 19)
    let showDate = `Reserved on date: ${day}/${month}/${year} - time: ${time}`

    return showDate
  }

  showEditProfile(formType: any, event) {
    if (formType == 'username' && this.showForm != "") {
      event.target.textContent = 'Edit profile'
      this.showForm = ''
    } else {
      this.showForm = formType
      if (formType == 'username') {
        event.target.textContent = 'Hide'
      }
    }
  }

  updateUsername() {
    this.loading = true;
    const { email, username, password } = this.updateUsernameFormGroup.value
    const userInfo = {
      username: username,
      email: email
    }
    this.getUserDataServices.getUserData(this.activeUser.objectId).subscribe({
      next: data => {
        if (password == data.repass) {
          this.getUserDataServices.updateUserData(this.activeUser, userInfo).subscribe({
            next: data => {
              this.getUserDataServices.getUserData(this.activeUser.objectId).subscribe({
                next: data => {
                  localStorage.setItem('userData', JSON.stringify(data));

                },
                complete: () => {
                  this.loading = false;
                  this.showForm = '';
                  this.onInit()
                }
              })
            }
          })
        } else {
          this.updateError = "Invalid Password";
          this.loading = false;
          setTimeout(() => {
            this.updateError = "";
          }, 5000);
        }
      },
    })
  }

  updatePassword() {
    this.updateError = "Sorry change password must be available soon...";
          this.loading = false;
          setTimeout(() => {
            this.updateError = "";
          }, 5000);
  }
}
