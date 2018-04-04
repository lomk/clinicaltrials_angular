import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import {LoginComponent}             from './auth/login.component';
import {LogoutComponent}            from './auth/logout.component';
import {AdminComponent}             from './admin/admin.component';
import {AdminRoutingModule}         from './admin/admin-routing.module';
import {AuthService}                from './auth/auth.service';
import {MainRoutingModule} from './main/main-routing.module';
import {MainComponent} from './main/main.component';

const routes: Routes = [
    { path: '',                         redirectTo: '/main', pathMatch: 'full' },
    { path: 'main',                     component: MainComponent},
    { path: 'login',                    component: LoginComponent},
    { path: 'logout',                   component: LogoutComponent},
    { path: 'admin',                    component: AdminComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes), AdminRoutingModule, MainRoutingModule ],
    exports: [ RouterModule ], providers : [
  AuthService
]
})
export class AppRoutingModule {}
