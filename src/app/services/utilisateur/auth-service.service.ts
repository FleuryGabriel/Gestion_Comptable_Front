import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    console.log("is Authentificated is running (guard)");
    if((localStorage.getItem('utilisateur')) !== null) {
      console.log("Authentification succed !");
      return true;
    } 
    else {
      console.log("Error Authentification");
      return false;
    }
}

}
