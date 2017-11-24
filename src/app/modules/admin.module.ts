import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import {HttpModule}                 from '@angular/http';

import {AppRoutingModule}           from '../app-routing.module';
import {Globals }                   from '../globals';
import {RoleComponent}              from '../components/role.component';
import {RoleFormComponent}          from '../components/role-form.component';
import {RoleService}                from '../services/role.service';
import {UserService}                from '../services/user.service';
import {UserComponent}              from '../components/user.component';
import {UserFormComponent}          from '../components/user-form.component';
import {AuthService}                from '../services/auth.service';
import {AdminComponent}             from '../components/admin.component';
import {AdminGuard}                 from '../services/admin-guard.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AdminComponent,
    RoleComponent,
    RoleFormComponent,
    UserComponent,
    UserFormComponent
  ],
  providers: [
    Globals,
    RoleService,
    UserService,
    AuthService,
    AdminGuard
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
