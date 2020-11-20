import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  private baseURL = 'http://localhost:9090/roles'
  constructor(private httpClient: HttpClient) { }

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
}
