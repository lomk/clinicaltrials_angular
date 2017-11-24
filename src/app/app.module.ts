import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import {HttpModule}                 from '@angular/http';

import { AppComponent }             from './app.component';
import {AppRoutingModule}           from './app-routing.module';
import {Globals }                   from './globals';
import {LoginComponent}             from './components/login.component';
import {LogoutComponent}            from './components/logout.component';
import {AdminModule}                from './modules/admin.module';
import {AuthService}                from './services/auth.service';
import {MainModule} from './modules/main.module';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AdminModule,
      MainModule,
      AppRoutingModule
  ],
    declarations: [
        AppComponent,
        // RemoteIpDetailComponent,
        LoginComponent,
        LogoutComponent
  ],
    providers: [
        Globals,
        AuthService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
