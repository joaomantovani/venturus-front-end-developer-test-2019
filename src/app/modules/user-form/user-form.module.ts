import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFormRoutingModule } from './user-form-routing.module';
import { UserFormPageComponent } from './pages/user-form-page/user-form-page.component';
import {UserFormComponent} from './components/user-form/user-form.component';
import {FormsModule} from '@angular/forms';
import {CheckboxModule, RadioButtonModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    UserFormPageComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UserFormRoutingModule,
    FormsModule,
    RadioButtonModule,
    CheckboxModule
  ]
})
export class UserFormModule { }
