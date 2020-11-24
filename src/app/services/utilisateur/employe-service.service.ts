import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from 'src/app/models/utilisateur/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeServiceService {

  private baseURL = 'http://localhost:9091/employes';

  constructor(private http:HttpClient) { }

  public findAll():Observable<any>{
    return this.http.get(this.baseURL);
  }

  public findOne(id:number):Observable<any>{
    return this.http.get(this.baseURL+"/"+id);
  }

  public save(employe:Employe):Observable<any>{
    return this.http.post(this.baseURL, employe);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete(this.baseURL+"/"+id);
  }

  public deleted(id:number, employe:Employe):Observable<any>{
    return this.http.put(this.baseURL+"/"+id, employe);
  }
}
