import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserTablePageComponent} from './pages/user-table-page/user-table-page.component';

const routes: Routes = [
  {path: '', component: UserTablePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTableRoutingModule { }
