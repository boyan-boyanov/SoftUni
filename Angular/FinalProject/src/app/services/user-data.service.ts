import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'https://parseapi.back4app.com'
const headers = {
  'Content-Type': 'application/json',
  'X-Parse-Application-Id': '4hPPyxt4b0tlUbJAUzz4SdtJ4vqBXpPsdadPF9jr',
  'X-Parse-REST-API-Key': 'JoUCGU1crWNA2LptiPFx1WHOPlkGpE9C55TbK29w',
}


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  getUserData(params: any) {
    return this.http.get<any>(BASE_URL + "/users/" + params, { headers })
  }

  updateUserData(activeUser, userInfo) {
    const userId = activeUser.objectId
        headers["X-Parse-Session-Token"] = activeUser.sessionToken
   
     return this.http.put<any>(BASE_URL + "/users/" + userId, userInfo, { headers })
  }
}
