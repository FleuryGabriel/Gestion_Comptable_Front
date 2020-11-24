import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LigneEcriture } from 'src/app/models/journal/ligne-ecriture';

@Injectable({
  providedIn: 'root'
})
export class LigneEcritureServiceService {

  private baseURL = "http://localhost:9092/ligne_ecritures"
  constructor(private http:HttpClient) { }

  public findAll():Observable<any>{
    return this.http.get(this.baseURL);
  }

  public findOne(id:number):Observable<any>{
    return this.http.get(this.baseURL+"/"+id);
  }

  public save(ligne_ecriture:LigneEcriture):Observable<any>{
    return this.http.post(this.baseURL, ligne_ecriture);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete(this.baseURL+"/"+id)
  }

  public deleted(id:number, ligne_ecriture:LigneEcriture):Observable<any>{
    return this.http.put(this.baseURL+"/"+id, ligne_ecriture);
  }
}
