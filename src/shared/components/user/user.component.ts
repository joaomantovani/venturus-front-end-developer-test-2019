import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {

  }

}
