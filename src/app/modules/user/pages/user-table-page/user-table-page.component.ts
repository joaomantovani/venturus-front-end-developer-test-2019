import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-table-page',
  templateUrl: './user-table-page.component.html',
  styleUrls: ['./user-table-page.component.sass']
})
export class UserTablePageComponent implements OnInit {
  @Input() newUser: any;

  constructor() { }

  ngOnInit() {
  }

}
