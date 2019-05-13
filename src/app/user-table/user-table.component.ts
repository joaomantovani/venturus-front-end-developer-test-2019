import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/models/user.model';
import {UserTableService} from './user-table.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.sass']
})
export class UserTableComponent implements OnInit {

  users: User[];

  constructor(private userTableService: UserTableService) { }

  ngOnInit() {
    this.userTableService.getAllUsers().subscribe(
      (users: User[]) => this.users = users
    );
  }

}
