import { Component, OnInit } from '@angular/core';
import { IaddCar } from '../interfaces/addCar';
import { AddCarsService } from '../services/add-cars.service';

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.css']
})
export class AddNewCarComponent implements OnInit {

  carModels = new IaddCar('', '', '', 0, 0, 0, '')
  errorMsg = "";
  
  constructor(private addCarServices: AddCarsService) { }


  ngOnInit(): void {


  }

  onSubmit() {

    this.addCarServices.enroll(this.carModels)
      .subscribe(
        data => console.log('Success!', data),
        error => this.errorMsg = error.statusText
      );

  }

}
