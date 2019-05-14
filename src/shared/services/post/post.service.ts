import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Post} from '../../models/post.model';
import {Observable} from 'rxjs';
import {concatMap, filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  POSTS_API = environment.POSTS_API;

  constructor(private http: HttpClient) { }

  getPostsFromUserId(userId: number) {
    return this.http.get(this.POSTS_API).pipe(
      map(this.jsonDataToPosts),
    );
  }

  private jsonDataToPosts(json: any[]): Post[] {
    const posts: Post[] = [];

    json.forEach((value: Post) => {
      const post: Post = Object.assign(new Post(), value);
      posts.push(post);
    });

    return posts;
  }

}
