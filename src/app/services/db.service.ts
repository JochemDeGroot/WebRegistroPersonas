import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/User';
import { AddUser } from '../models/AddUser';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class DbService {

  apiUrl: string = 'https://api-ocrgvlp62q-ez.a.run.app/api/';

  constructor(private http: HttpClient) { }

  // Get Users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}view`);
  }

  // Add User
  addUser(user: AddUser): Observable<AddUser> {
    console.log('about to send it')
    return this.http.post<AddUser>(this.apiUrl, user, httpOptions);
  }

}
