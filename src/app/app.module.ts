import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { UserComponent } from '../shared/components/user/user.component';
import { UserTableComponent } from './user-table/user-table.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import { FieldDaysComponent } from './user-table/field-days/field-days.component';
import {
  CheckboxModule,
  ConfirmationService,
  ConfirmDialogModule,
  InputTextModule,
  MessageService,
  RadioButtonModule
} from 'primeng/primeng';
import {ToastModule} from 'primeng/toast';
import { UserFormComponent } from './user-table/user-form/user-form.component';
import { InputComponent } from '../shared/components/form/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserTableComponent,
    FieldDaysComponent,
    UserFormComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    TableModule,
    ConfirmDialogModule,
    ToastModule,
    ReactiveFormsModule,
    CheckboxModule,
    InputTextModule,
    RadioButtonModule,
  ],
  providers: [
    HttpClientModule,
    ConfirmDialogModule,
    ConfirmationService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
