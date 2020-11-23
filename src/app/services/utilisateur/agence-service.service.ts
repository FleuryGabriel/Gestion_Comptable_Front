import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agence } from 'src/app/models/utilisateur/agence';


@Injectable({
  providedIn: 'root'
})
export class AgenceServiceService {

  private baseURL = "http://localhost:9090/agences";
  constructor(private http:HttpClient) { }

  public findAll():Observable<any>{
    return this.http.get(this.baseURL);
  }

  public findOne(id:number):Observable<any>{
    return this.http.get(this.baseURL+"/"+id);
  }

  public save(agence:Agence):Observable<any>{
    return this.http.post(this.baseURL, agence);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete(this.baseURL+"/"+id)
  }

  public deleted(id:number, agence:Agence):Observable<any>{
    return this.http.put(this.baseURL+"/"+id, agence);
  }
}
