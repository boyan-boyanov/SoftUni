import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';



const BASE_URL = 'https://parseapi.back4app.com/classes/usedCars'
const headers = {
  'Content-Type': 'application/json',
  'X-Parse-Application-Id': '4hPPyxt4b0tlUbJAUzz4SdtJ4vqBXpPsdadPF9jr',
  'X-Parse-REST-API-Key': 'JoUCGU1crWNA2LptiPFx1WHOPlkGpE9C55TbK29w'
}

@Injectable({
  providedIn: 'root'
})
export class UsedCarService {

  
  constructor(private http: HttpClient) { }

  saveUsedCar(carId){
    return this.http.post<any>(BASE_URL, carId, { headers })
  }

  getUsedCar(){
    return this.http.get<any>(BASE_URL, { headers })
  }

  deleteUsedCar(id: any){
    return this.http.delete<any>(BASE_URL + `/${id}`, { headers })
  }
}
