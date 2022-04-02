import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsAdminService {

  constructor() { }

  isAdmin() {

    let curentUser = JSON.parse(localStorage.getItem('userData')!)
    if (curentUser.objectId == 'JaLOs6NPtK') {
      return true
    } else {
      return false
    }


  }
}
