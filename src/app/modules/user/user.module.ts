import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserFormPageComponent} from './pages/user-form-page/user-form-page.component';
import {UserFormComponent} from './components/user-form/user-form.component';
import {UserTablePageComponent} from './pages/user-table-page/user-table-page.component';
import {UserTableComponent} from './components/user-table/user-table.component';
import {FieldDaysComponent} from './components/field-days/field-days.component';
import {FormsModule} from '@angular/forms';
import {CheckboxModule, InputTextModule, RadioButtonModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  declarations: [
    UserFormPageComponent,
    UserFormComponent,
    UserTablePageComponent,
    UserTableComponent,
    FieldDaysComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    RadioButtonModule,
    CheckboxModule,
    TableModule,
    FontAwesomeModule,
    InputTextModule
  ]
})
export class UserModule { }
