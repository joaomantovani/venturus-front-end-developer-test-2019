import {Component, Input, OnInit} from '@angular/core';
import {BreadcrumbService} from '../../../../../shared/components/breadcrumb/breadcrumb.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-user-table-page',
  templateUrl: './user-table-page.component.html',
  styleUrls: ['./user-table-page.component.sass']
})
export class UserTablePageComponent implements OnInit {
  @Input() newUser: any;

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
