import { Component, OnInit } from '@angular/core';
import {User} from '../../../../../shared/models/user.model';
import {BreadcrumbService} from '../../../../../shared/components/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-user-form-page',
  templateUrl: './user-form-page.component.html',
  styleUrls: ['./user-form-page.component.sass']
})
export class UserFormPageComponent implements OnInit {

  newUser: User;

  constructor(private breadcrumb: BreadcrumbService) { }

  ngOnInit() {
    setTimeout(() =>
      this.breadcrumb.setCrumbs([{
        label: 'Home',
        routerLink: '/users'
      }, {
        label: 'Users',
        routerLink: '/users'
      }, {
        label: 'New',
        routerLink: '/users/new'
      }])
    );
  }

  receiverNewUser(newUser) {
    this.newUser = newUser;
  }
}
