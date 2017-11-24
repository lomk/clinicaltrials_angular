import {RouterModule, Routes}         from '@angular/router';
import {NgModule}                     from '@angular/core';

import {AdminComponent}               from '../components/admin.component';
import {RoleFormComponent}            from '../components/role-form.component';
import {RoleComponent}                from '../components/role.component';
import {UserComponent}                from '../components/user.component';
import {UserFormComponent}            from '../components/user-form.component';
import {AdminGuard}                   from '../services/admin-guard.service';



const adminRoutes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'roles',                    component: RoleComponent},
      { path: 'roles/new',                component: RoleFormComponent},
      { path: 'users',                    component: UserComponent},
      { path: 'users/new',                component: UserFormComponent}
      ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
