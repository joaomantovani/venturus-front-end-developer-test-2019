import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../../../../shared/models/user.model';
import {RideGroup} from '../../../../../shared/models/rideGroup.model';
import {DaysOfWeek} from '../../../../../shared/models/daysOfWeek.model';
import {MessageService} from 'primeng/api';
import {Post} from '../../../../../shared/models/post.model';
import {Albums} from '../../../../../shared/models/album.model';
import {MockService} from '../../../../../shared/services/mock/mock.service';
import {UserService} from '../../../../../shared/services/user/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass']
})
export class UserFormComponent implements OnInit {

  user: User;
  @Output() newUser = new EventEmitter();

  constructor(private router: Router,
              private messageService: MessageService,
              private mockService: MockService) { }

  ngOnInit() {
    this.user = new User();
    this.user.posts = [new Post()];
    this.user.albums = [new Albums()];
    this.user.daysOfWeek = new DaysOfWeek();
    this.user.rideInGroup = new RideGroup();
  }

  checkForm(form: NgForm) {
    const cadastro = {...form.value, ...this.user};

    this.mockService.index('users-from-db').subscribe(value => {
      const lastId = value.reverse()[0] ? value.reverse()[0].id : 1000;
      cadastro.id = lastId + 1;

      this.mockService.createUser('users-from-db', cadastro as User).subscribe(callback => {
          this.newUser.emit(callback);
          this.user = new User();
          form.reset();
          this.router.navigateByUrl('/users');
          this.messageService.add({severity: 'info', summary: 'User created', detail: 'Added in the table'});
        }
      );
    });
  }

  resetForm(form: NgForm) {
    form.reset();
    this.messageService.add({severity: 'info', summary: 'Form reseted'});
  }
}
