import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IaddCar } from '../../interfaces/addCar';
import { AddCarsService } from '../../services/add-cars.service';

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.css']
})
export class AddNewCarComponent implements OnInit {

  carModels = new IaddCar('', '', '', 4, 5, 300, '')
  errorMsg = "";

  constructor(private addCarServices: AddCarsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.addCarServices.enroll(this.carModels).subscribe({
      next: data => {
        console.log('Success!', data)
      },
      complete: () => {
        this.router.navigate(['varnacars/allcars'])
      },
      error: (error) => {
        this.errorMsg = error.statusText
      }
    })
  }

}


