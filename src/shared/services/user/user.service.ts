import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../models/user.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {PostService} from '../post/post.service';
import {catchError, filter, map} from 'rxjs/operators';
import {Post} from '../../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_API = environment.USER_API;

  constructor(private http: HttpClient,
              private postService: PostService) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get(this.USER_API).pipe(
      map(this.jsonDataToUsers)
    );
  }

  private jsonDataToUsers(json: any[]): User[] {
    const users: User[] = [];

    json.forEach(value => {
      const user: User = Object.assign(new User(), value);
      users.push(user);
    });

    return users;
  }
}
