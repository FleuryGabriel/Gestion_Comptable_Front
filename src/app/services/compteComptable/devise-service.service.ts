import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviseServiceService {
  private baseURL='http://localhost:9090/devises'
  constructor(private httpClient: HttpClient) { }

  public findAll():Observable<any>{
    return this.httpClient.get(this.baseURL)
  }

  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }

  public save(devise:any):Observable<any>
   {return this.httpClient.post(this.baseURL,devise);}

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id)
  }
  public deleted(id:number,devise:any):Observable<any>{
  return this.httpClient.put(this.baseURL+"/"+id,devise);
}
}
