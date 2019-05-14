import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { UserComponent } from '../shared/components/user/user.component';
import { UserTableComponent } from './user-table/user-table.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import { FieldDaysComponent } from './user-table/field-days/field-days.component';
import {ConfirmationService, ConfirmDialogModule, MessageService} from 'primeng/primeng';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserTableComponent,
    FieldDaysComponent
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
  ],
  providers: [
    HttpClientModule,
    ConfirmDialogModule,
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
