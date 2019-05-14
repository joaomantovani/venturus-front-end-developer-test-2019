import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private BASE_API: string = environment.BASE_API;

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
    return this.http.get<any[]>(`${this.BASE_API}${callType}`).pipe(
      map(value => value)
    );
  }

  /**
   * Generic store API call
   *
   * @method store
   * @summary Call the backend API using the store method
   *
   * @param callType Name of the route to call in the API
   */
  store(callType: string) {

  }

  /**
   * Generic create API call
   *
   * @method create
   * @summary Call the backend API using the create method
   *
   * @param callType Name of the route to call in the API
   */
  create(callType: string) {

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
  show(callType: string, query: string) {
    return this.http.get<any>(`${this.BASE_API}${callType}${query}`).pipe(
      map(value => value)
    );
  }

  /**
   * Generic update API call
   *
   * @method update
   * @summary Call the backend API using the update method
   *
   * @param callType Name of the route to call in the API
   */
  update(callType: string) {

  }

  /**
   * Generic destroy API call
   *
   * @method destroy
   * @summary Call the backend API using the destroy method
   *
   * @param callType Name of the route to call in the API
   */
  destroy(callType: string) {

  }

  /**
   * Generic edit API call
   *
   * @method edit
   * @summary Call the backend API using the edit method
   *
   * @param callType Name of the route to call in the API
   */
  edit(callType: string) {

  }
}
