import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private BASE_URL = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  public saveContact(name: string, phone:string): Observable<boolean>{
    return of(true);
    //return this.http.get<boolean>(this.BASE_URL + `/getMementoHistory?name=${name}&phone=${phone}`);
  }
}
