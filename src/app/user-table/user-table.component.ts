import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/models/user.model';
import {UserService} from '../../shared/services/user/user.service';
import {PostService} from '../../shared/services/post/post.service';
import {Post} from '../../shared/models/post.model';
import {ApiService} from '../../shared/services/api/api.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.sass']
})
export class UserTableComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService,
              private postService: PostService,
              private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.index('users').subscribe(users => {
      this.users = users;

      this.users.map(user => {
        user.posts = [];
        user.albums = [];

        this.apiService.show('posts', `?userId=${user.id}`).subscribe(posts => {
          user.posts = posts;
        });

        this.apiService.show('albums', `?userId=${user.id}`).subscribe(albums => {
          user.albums = albums;
          user.albums.map(album => {
            album.photos = [];

            this.apiService.show('photos', `?albumId=${album.id}`).subscribe(photos => {
              album.photos = photos;
            });

            return album;
          });
        });

        return user;
      });
    });
  }
}
