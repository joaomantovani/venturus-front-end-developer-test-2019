import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from '../../../../../shared/models/user.model';
import {ApiService} from '../../../../../shared/services/api/api.service';
import {MockService} from '../../../../../shared/services/mock/mock.service';
import {RideGroup} from '../../../../../shared/models/rideGroup.model';
import {DaysOfWeek} from '../../../../../shared/models/daysOfWeek.model';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Albums} from '../../../../../shared/models/album.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.sass']
})
export class UserTableComponent implements OnInit, OnChanges {

  users: User[] = [];
  faTrash = faTrash;

  @Input() newUser: User;

  constructor(private apiService: ApiService,
              private mockService: MockService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.users = [];

    this.apiService.index('users').subscribe(users => {
      this.users.push(...users);
      this.mockService.index('users-from-db').subscribe(usersFromDb => this.users.push(...usersFromDb));

      this.users.map(user => {
        user.posts = [];
        user.albums = [];
        user.rideInGroup = new RideGroup();
        user.daysOfWeek = new DaysOfWeek();

        // Load user posts
        this.apiService.show('posts', `?userId=${user.id}`).subscribe(posts => {
          user.posts = posts;
        });

        this.mockService.show('ride', `?userId=${user.id}`).subscribe(value => user.rideInGroup = value[0]);
        this.mockService.show('days', `?userId=${user.id}`).subscribe(value => user.daysOfWeek = value[0]);

        // Load user albums
        this.apiService.show('albums', `?userId=${user.id}`).subscribe(albums => {
          user.albums = albums;

          // Go through every album
          user.albums.map(album => {
            // Initialize album
            album.photos = [];

            // Load all photos from album
            this.apiService.show('photos', `?albumId=${album.id}`).subscribe(photos => {
              album.photos = photos;
            });
          });
        });
      });
    });
  }

  calcPhoto(user) {
    let cont = 0;

    if (user.albums.length !== undefined) {
      user.albums.forEach(album => {
        return album.photos ? cont += (album.photos.length - 1) : 0;
      });
    }

    return cont;
  }

  delete(user: User) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        // Remove user from users array
        this.mockService.delete('users', user.id).subscribe(value => {
        });

        this.users.splice(this.users.indexOf(user), 1);
        this.messageService.add({severity: 'success', summary: 'Successfully deleted', detail: 'The user was removed from table'});
      },
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.newUser.isFirstChange()) {
      const formValues = changes.newUser.currentValue;

      this.users.push(formValues);
    }
  }
}
