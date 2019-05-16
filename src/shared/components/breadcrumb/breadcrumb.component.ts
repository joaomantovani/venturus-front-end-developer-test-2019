import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {Observable} from 'rxjs';
import {BreadcrumbService} from './breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass']
})
export class BreadcrumbComponent implements OnInit {
  crumbs$: Observable<MenuItem[]>;
  home: MenuItem;

  constructor(private breadcrumb: BreadcrumbService) { }

  ngOnInit() {
    this.crumbs$ = this.breadcrumb.crumbs$;
    this.home = {icon: 'pi pi-home'};
  }
}
