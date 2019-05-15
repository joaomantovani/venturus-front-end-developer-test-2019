import { Component } from '@angular/core';
import {User} from '../shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'venturus-test';

  newUser: User;

  receiverNewUser(newUser) {
    console.log(newUser);
    this.newUser = newUser;
  }
}
