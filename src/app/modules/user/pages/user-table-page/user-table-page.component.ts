import {Component, Input, OnInit} from '@angular/core';
import {BreadcrumbService} from '../../../../../shared/components/breadcrumb/breadcrumb.service';
import {Title} from '@angular/platform-browser';
import {faPuzzlePiece, faSign, faTrophy} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-table-page',
  templateUrl: './user-table-page.component.html',
  styleUrls: ['./user-table-page.component.sass']
})
export class UserTablePageComponent implements OnInit {
  @Input() newUser: any;

  faPuzzlePiece = faPuzzlePiece;
  faTrophy = faTrophy;
  faSign = faSign;

  icons: any[] = [
    {icon: faPuzzlePiece, h5: 'Cycling', small: 'Sport Type'},
    {icon: faTrophy, h5: 'Advanced', small: 'Mode'},
    {icon: faSign, h5: '30 miles', small: 'Route'},
  ];

  constructor(private breadcrumb: BreadcrumbService,
              private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Users');

    setTimeout(() =>
      this.breadcrumb.setCrumbs([{
        label: 'Users',
        routerLink: '/users'
      }])
    );
  }

}
