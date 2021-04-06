import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/User';




@Injectable({
  providedIn: 'root'
})
export class DbService {

  usersUrl: string = 'http://localhost:8000/users'

  constructor(private http: HttpClient) { }


  // Get Useres
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }



}
