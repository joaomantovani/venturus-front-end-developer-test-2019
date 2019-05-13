import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserTableService {

  USER_API = environment.USER_API;

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.USER_API);
  }
}
