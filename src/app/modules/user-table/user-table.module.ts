import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTableRoutingModule } from './user-table-routing.module';
import { UserTablePageComponent } from './pages/user-table-page/user-table-page.component';
import {UserTableComponent} from './components/user-table/user-table.component';
import {TableModule} from 'primeng/table';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FieldDaysComponent} from './components/field-days/field-days.component';

@NgModule({
  declarations: [
    UserTablePageComponent,
    UserTableComponent,
    FieldDaysComponent
  ],
  imports: [
    CommonModule,
    UserTableRoutingModule,
    TableModule,
    FontAwesomeModule
  ]
})
export class UserTableModule { }
