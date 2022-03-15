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
export class AddCarsService {

  constructor(private http: HttpClient) { }

  enroll(carModels: IaddCar) {
    return this.http.post<any>(BASE_URL, carModels, { headers })
      .pipe(catchError(this.errorHandler))
        
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }

}
