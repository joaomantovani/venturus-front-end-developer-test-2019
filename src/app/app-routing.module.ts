import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './modules/user-table/user-table.module#UserTableModule'},
  {path: 'users', loadChildren: './modules/user-form/user-form.module#UserFormModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
