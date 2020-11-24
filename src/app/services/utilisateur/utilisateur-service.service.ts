import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur';

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

  public save(utilisateur: any): Observable<any> {
    return this.httpClient.post(this.baseURL, utilisateur);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id)
  }

  public deleted(id: number): Observable<any> {
    return this.httpClient.put(this.baseURL + "/" + id,"")
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

  selectUserByLogin(login : any): Observable<any> {
    return this.httpClient.get(this.baseURL+"ByLogin?login="+login);
  }

}
