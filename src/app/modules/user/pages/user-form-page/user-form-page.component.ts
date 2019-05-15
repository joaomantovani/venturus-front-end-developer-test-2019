import { Component, OnInit } from '@angular/core';
import {User} from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-user-form-page',
  templateUrl: './user-form-page.component.html',
  styleUrls: ['./user-form-page.component.sass']
})
export class UserFormPageComponent implements OnInit {

  newUser: User;

  constructor() { }

  ngOnInit() {
  }

  receiverNewUser(newUser) {
    this.newUser = newUser;
  }
}
