import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    console.log("OUAIS OUAIS !");
    if((localStorage.getItem('utilisateur')) !== null) {
      console.log("OUAIS OUAIS T'es un bon !");
      return true;
    } 
    else {
      console.log("NOP BRO !");
      return false;
    }
}

}
