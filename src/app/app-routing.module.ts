import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import {LoginComponent}             from './components/login.component';
import {LogoutComponent}            from './components/logout.component';
import {AdminComponent}             from './components/admin.component';
import {AdminRoutingModule}         from './modules/admin-routing.module';
import {AuthService}                from './services/auth.service';
import {MainRoutingModule} from './modules/main-routing.module';

const routes: Routes = [
    { path: '',                         redirectTo: '/login', pathMatch: 'full' },
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
