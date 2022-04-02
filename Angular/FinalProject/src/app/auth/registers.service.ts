import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRegisterUser } from './authInterfaces/loginInterfaces';

const BASE_URL = 'https://parseapi.back4app.com'
const headers = {
  'Content-Type': 'application/json',
  'X-Parse-Application-Id': '4hPPyxt4b0tlUbJAUzz4SdtJ4vqBXpPsdadPF9jr',
  'X-Parse-REST-API-Key': 'JoUCGU1crWNA2LptiPFx1WHOPlkGpE9C55TbK29w',
  'X-Parse-Revocable-Session': '1'
}

@Injectable({
  providedIn: 'root'
})
export class RegistersService {

  constructor(private http: HttpClient) { }

  register(userData: IRegisterUser) {
    return this.http.post<any>(BASE_URL + "/users", userData, { headers })

  }

  login(params: any) {
    return this.http.get<any>(BASE_URL + "/login" + params, { headers })
  }


}
