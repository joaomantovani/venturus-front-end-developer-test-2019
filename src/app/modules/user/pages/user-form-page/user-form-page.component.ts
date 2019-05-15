import { Component, OnInit } from '@angular/core';
import {User} from '../../../../../shared/models/user.model';
import {BreadcrumbService} from '../../../../../shared/components/breadcrumb/breadcrumb.service';
import {faPuzzlePiece, faTrophy, faSign, faTrash} from '@fortawesome/free-solid-svg-icons/';
import {library} from '@fortawesome/fontawesome-svg-core';

library.add(faPuzzlePiece, faTrophy, faSign);

@Component({
  selector: 'app-user-form-page',
  templateUrl: './user-form-page.component.html',
  styleUrls: ['./user-form-page.component.sass']
})
export class UserFormPageComponent implements OnInit {

  newUser: User;
  faPuzzlePiece = faPuzzlePiece;
  faTrophy = faTrophy;
  faSign = faSign;

  constructor(private breadcrumb: BreadcrumbService) { }

  icons: any[] = [
    {icon: faPuzzlePiece, h5: 'Cycling', small: 'Sport Type'},
    {icon: faTrophy, h5: 'Advanced', small: 'Mode'},
    {icon: faSign, h5: '30 miles', small: 'Route'},
  ];

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
