import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'https://parseapi.back4app.com/users'
const headers = {
  'Content-Type': 'application/json',
  'X-Parse-Application-Id': '4hPPyxt4b0tlUbJAUzz4SdtJ4vqBXpPsdadPF9jr',
  'X-Parse-REST-API-Key': 'JoUCGU1crWNA2LptiPFx1WHOPlkGpE9C55TbK29w',
  'X-Parse-Session-Token': ''
}


@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) {
  }


  sendHistoryCars(id: string, history: {}): Observable<Array<{}>> {
    let userData = JSON.parse(localStorage.getItem("userData")!)

    headers['X-Parse-Session-Token'] = userData.sessionToken
    return this.http.put<Array<{}>>(BASE_URL + `/${id}`, history, { headers })
  }


}
