import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserTablePageComponent} from './pages/user-table-page/user-table-page.component';
import {UserFormPageComponent} from './pages/user-form-page/user-form-page.component';

const routes: Routes = [
  {path: '', component: UserTablePageComponent },
  {path: 'new', component: UserFormPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
