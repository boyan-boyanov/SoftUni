import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  userId: any
  isLoading: Boolean = false;
  history: any
  totalSpend: number = 0
  constructor(private route: ActivatedRoute,
    private getUserDataServices: UserDataService,
    private http: HttpClient) {
    this.userId = this.route.snapshot.params;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.getUserDataServices.getUserData(this.userId.id)
      .subscribe(data => {
        this.history = data.history
        for (let el of this.history) {
          this.totalSpend += Number(el.price)
        }


        this.isLoading = false;
      })
  }

  getReservedDate(car) {
    let year = car.reservedDate.slice(0, 4)
    let month = car.reservedDate.slice(5, 7)
    let day = car.reservedDate.slice(8, 10)
    let time = car.reservedDate.slice(11, 19)
    let showDate = `Reserved on date: ${day}/${month}/${year} - time: ${time}`

    return showDate
  }

  returnDate(car) {
    let year = car.returnDate.slice(0, 4)
    let month = car.returnDate.slice(5, 7)
    let day = car.returnDate.slice(8, 10)
    let time = car.returnDate.slice(11, 19)
    let showDate = `Returned on date: ${day}/${month}/${year} - time: ${time}`

    return showDate
  }

  calcDays(car) {
    let days = Math.floor((car.returnedTime - car.reservedTime) / 86400000 + 1)
    return days
  }

  calcPrice(car) {
    let price = Math.floor((car.returnedTime - car.reservedTime) / 86400000 + 1) * car.price
    const test = document.querySelector("td.rentPrice")
    // console.log(test);

    return price
  }

  totalPrice(): void {
    const test = document.querySelectorAll("td.rentPrice")
    //console.log(test);
    let calc = 0
    if (typeof test === "object") {
      for (let i = 0; i < test.length; i++) {
        calc += Number(test[i].textContent)
      }
      if (this.totalSpend != 0) {
        this.totalSpend = calc
      }

    }
  }

}
