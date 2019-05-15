import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { UserComponent } from '../shared/components/user/user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {
  CheckboxModule,
  ConfirmationService,
  ConfirmDialogModule,
  InputTextModule,
  MessageService,
  RadioButtonModule
} from 'primeng/primeng';
import {ToastModule} from 'primeng/toast';
import { InputComponent } from '../shared/components/form/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
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
