import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CompteComptableServiceService {
  private baseURL='http://localhost:9090/compteComptables'
  constructor(private httpClient: HttpClient) { }

  public findAll():Observable<any>{
    return this.httpClient.get(this.baseURL)
  }

  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }

  public save(compteComptable:any):Observable<any>
   {return this.httpClient.post(this.baseURL,compteComptable);}

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id)
  }
  public deleted(id:number,compteComptable:any):Observable<any>{
  return this.httpClient.put(this.baseURL+"/"+id,compteComptable);
}
}
