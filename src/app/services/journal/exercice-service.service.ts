import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercice } from 'src/app/models/journal/exercice';

@Injectable({
  providedIn: 'root'
})
export class ExerciceServiceService {

  private baseURL = "http://localhost:9092/exercices";
  constructor(private http:HttpClient) { }

  public findAll():Observable<any>{
    return this.http.get(this.baseURL);
  }

  public findOne(id:number):Observable<any>{
    return this.http.get(this.baseURL+"/"+id);
  }

  public save(exercice:Exercice):Observable<any>{
    return this.http.post(this.baseURL, exercice);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete(this.baseURL+"/"+id)
  }

  public deleted(id:number, exercice:Exercice):Observable<any>{
    return this.http.put(this.baseURL+"/"+id, exercice);
  }

  public findNotDeleted():Observable<any>{
    return this.http.get(this.baseURL+"NotDeleted");
  }
}
