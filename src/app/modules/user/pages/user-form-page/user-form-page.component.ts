import { Component, OnInit } from '@angular/core';
import {User} from '../../../../../shared/models/user.model';
import {BreadcrumbService} from '../../../../../shared/components/breadcrumb/breadcrumb.service';
import {faHeartbeat} from '@fortawesome/free-solid-svg-icons/';
import {faLifeRing, faSmile} from '@fortawesome/free-regular-svg-icons/';

@Component({
  selector: 'app-user-form-page',
  templateUrl: './user-form-page.component.html',
  styleUrls: ['./user-form-page.component.sass']
})
export class UserFormPageComponent implements OnInit {

  newUser: User;

  constructor(private breadcrumb: BreadcrumbService) { }

  icons: any[] = [
    {icon: faLifeRing, title: 'Need help?',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta blandit ligula. Ut quis suscipit elit, nec cursus orci'
    },
    {icon: faHeartbeat, title: 'Why register?',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta blandit ligula. Ut quis suscipit elit, nec cursus orci'
    },
    {icon: faSmile, title: 'What people are saying...',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta blandit ligula. Ut quis suscipit elit, nec cursus orci'
    },
  ];

  ngOnInit() {
    setTimeout(() =>
      this.breadcrumb.setCrumbs([{
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
