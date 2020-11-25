import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Journal } from 'src/app/models/journal/journal';

@Injectable({
  providedIn: 'root'
})
export class JournalServiceService {

  private baseURL = "http://localhost:9092/journaux";
  constructor(private http:HttpClient) { }

  public findAll():Observable<any>{
    return this.http.get(this.baseURL);
  }

  public findOne(id:number):Observable<any>{
    return this.http.get(this.baseURL+"/"+id);
  }

  public save(journal:Journal):Observable<any>{
    return this.http.post(this.baseURL, journal);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete(this.baseURL+"/"+id)
  }

  public deleted(id:number, journal:Journal):Observable<any>{
    return this.http.put(this.baseURL+"/"+id, journal);
  }

  public findNotDeleted():Observable<any>{
    return this.http.get(this.baseURL+"NotDeleted");
  }
}
