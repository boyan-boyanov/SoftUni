import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'https://parseapi.back4app.com/classes/allCars'
const BASE_HEADERS = {
  'Content-Type': 'application/json',
  'X-Parse-Application-Id': '4hPPyxt4b0tlUbJAUzz4SdtJ4vqBXpPsdadPF9jr',
  'X-Parse-REST-API-Key': 'JoUCGU1crWNA2LptiPFx1WHOPlkGpE9C55TbK29w'
}
const requestOptions = {                                                                                                                                                                                 
  headers: new HttpHeaders(BASE_HEADERS), 
};

@Injectable({
  providedIn: 'root'
})
export class SingleCarService {

  constructor(private http: HttpClient) { }
  getSingleCar(id:string): Observable<Array<{}>> {
    return this.http.get<Array<{}>>(BASE_URL+`/${id}`, requestOptions)
  }
}
