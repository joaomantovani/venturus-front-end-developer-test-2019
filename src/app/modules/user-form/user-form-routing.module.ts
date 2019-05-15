import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserFormPageComponent} from './pages/user-form-page/user-form-page.component';

const routes: Routes = [
  {path: 'new', component: UserFormPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserFormRoutingModule { }
