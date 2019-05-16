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

  weekDays = [];

  fieldsFocus: any;

  constructor(private router: Router,
              private messageService: MessageService,
              private mockService: MockService) { }

  ngOnInit() {
    this.user = new User();
    this.user.posts = [new Post()];
    this.user.albums = [new Albums()];
    this.user.daysOfWeek = new DaysOfWeek();
    this.user.rideInGroup = new RideGroup();

    this.fieldsFocus = {
      username: false,
      email: false,
      name: false,
      city: false,
    };

    this.weekDays = [
      {inputId: 'sun', label: 'Sun', name: 'daysOfWeek', value: 'Sun'},
      {inputId: 'mon', label: 'Mon', name: 'daysOfWeek', value: 'Mon'},
      {inputId: 'tue', label: 'Tue', name: 'daysOfWeek', value: 'Tue'},
      {inputId: 'wed', label: 'Wed', name: 'daysOfWeek', value: 'Wed'},
      {inputId: 'thu', label: 'Thu', name: 'daysOfWeek', value: 'Thu'},
      {inputId: 'fri', label: 'Fri', name: 'daysOfWeek', value: 'Fri'},
      {inputId: 'sat', label: 'Sat', name: 'daysOfWeek', value: 'Sat'},
    ];
  }

  checkForm(form: NgForm) {
    if (form.invalid) {
      this.messageService.add({severity: 'error', summary: 'Form invalid', detail: 'Please, fill all the fields'});
      return;
    }

    const cadastro = {...form.value, ...this.user};

    this.mockService.index('users-from-db').subscribe(value => {
      cadastro.id = Math.floor(Math.random() * Math.floor(100000));

      this.mockService.createUser('users-from-db', cadastro as User).subscribe(callback => {
          this.newUser.emit(callback);
          this.user = new User();
          form.reset();
          this.router.navigateByUrl('/users');
          this.messageService.add({severity: 'success', summary: 'User created', detail: 'Added in the table'});
        }
      );
    });
  }

  resetForm(form: NgForm) {
    if (form.touched || form.dirty) {
      form.reset();
      this.messageService.add({severity: 'info', summary: 'Form reseted'});
    }
  }

  onFocus(name: string) {
    this.fieldsFocus.city = false;
    this.fieldsFocus.email = false;
    this.fieldsFocus.name = false;
    this.fieldsFocus.username = false;
    this.fieldsFocus[name] = true;
  }

  setChecked(user: User, $event: any) {
    this.user.daysOfWeek.days = user.daysOfWeek.days;
  }
}
