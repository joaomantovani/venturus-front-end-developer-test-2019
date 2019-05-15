import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  // todo Adicionar alias para o enviroment
  url = environment.LOCALHOST;

  constructor(private http: HttpClient) { }

  /**
   * Generic index API call
   *
   * @method index
   * @summary Call the backend API using the index method
   *
   * @param callType Name of the route to call in the API
   */
  index(callType: string) {
    return this.http.get<any[]>(`${this.url}${callType}`).pipe(
      map(value => value)
    );
  }

  /**
   * Generic show API call
   *
   * @method show
   * @summary Call the backend API using the show method
   *
   * @param callType Name of the route to call in the API
   * @param query Query to handle on backend. Example: ?matricula=312088
   */
  show(callType: string, query: string): Observable<any> {
    return this.http.get<any>(`${this.url}${callType}${query}`).pipe(
      map(value => value)
    );
  }

  /**
   * Generic create API call
   *
   * @method create
   * @summary Call the backend API using the create method
   *
   * @param callType Name of the route to call in the API
   * @param query Query to handle on backend. Example: ?matricula=312088
   */
  createUser(callType: string, genericObj: any): Observable<any> {
    return this.http.post<any>(`${this.url}${callType}`, genericObj);
  }

  /**
   * Generic create API call
   *
   * @method create
   * @summary Call the backend API using the create method
   *
   * @param callType Name of the route to call in the API
   * @param query Query to handle on backend. Example: ?matricula=312088
   */
  delete(callType: string, id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}${callType}/${id}`);
  }
}
