import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IaddCar } from '../../interfaces/addCar';
import { EditCarService } from '../../services/edit-car.service';
import { SingleCarService } from '../../services/single-car.service';

@Component({
  selector: 'app-edit-car2',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  
  
  carModels = new IaddCar('', '', '', 0, 0, 0, '')
   
  errorMsg = "";
  carId = '';
  carData: any;
  isLoading : Boolean = false;
  
  constructor(private getSingleCarServices: SingleCarService,
    private router: Router,
    private editCarServices: EditCarService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation!.extras.state as {
      id: any,
    };
    this.carId = state.id;
  }

  ngOnInit() {
    this.isLoading = true;
    this.getSingleCarServices.getSingleCar(this.carId).subscribe(data => {
      this.carData = data
      this.carModels = {
        carName: this.carData.carName,
        carModel: this.carData.carModel,
        transmision: this.carData.transmision,
        doors: this.carData.doors,
        seets: this.carData.seets,
        price: this.carData.price,
        images: this.carData.images,
      }
      this.isLoading = false;               
    })

  }


   onSubmit() {
     this.editCarServices.editCars(this.carModels, this.carId)
     .subscribe(data => console.log("edit", data),
     error => this.errorMsg = error.statusText
     )
     this.router.navigate(['/varnacars/allcars']);
   }

}
