import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurServiceService {

  private baseURL = 'http://localhost:9091/utilisateurs'
  constructor(private httpClient: HttpClient, private router:Router) { }

  public findAll(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }

  public findOne(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id)
  }

  public save(role: any): Observable<any> {
    return this.httpClient.post(this.baseURL, role);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id)
  }

  public deleted(id: number, role: any): Observable<any> {
    return this.httpClient.put(this.baseURL + "/" + id, role)
  }

  Autentification(login, password): any {
    return this.httpClient.get(this.baseURL+"Authentification?login="+login+"&password="+ password);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('Role');
    localStorage.removeItem('utilisateur');
    this.router.navigate(['login']);
  }

  selectUserByLogin(login : any): any {
    return this.httpClient.get(this.baseURL+"ByLogin?login="+login);
  }

}
