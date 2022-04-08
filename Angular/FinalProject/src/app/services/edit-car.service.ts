import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IaddCar } from '../interfaces/addCar';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const BASE_URL = 'https://parseapi.back4app.com/classes/allCars'
const headers = {
  'Content-Type': 'application/json',
  'X-Parse-Application-Id': '4hPPyxt4b0tlUbJAUzz4SdtJ4vqBXpPsdadPF9jr',
  'X-Parse-REST-API-Key': 'JoUCGU1crWNA2LptiPFx1WHOPlkGpE9C55TbK29w'
}

@Injectable({
  providedIn: 'root'
})
export class EditCarService {

  constructor(private http: HttpClient) { }

  editCars(carModels: IaddCar, carId: any) {
    return this.http.put<any>(BASE_URL + "/" + carId, carModels, { headers })
      .pipe(catchError(this.errorHandler))
  }
 

  deleteCars( carId: any) {
    return this.http.delete<any>(BASE_URL + "/" + carId, { headers })
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
  
}
