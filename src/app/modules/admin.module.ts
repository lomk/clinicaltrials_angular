import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import {HttpModule}                 from '@angular/http';

import {AppRoutingModule}           from '../app-routing.module';
import {Globals }                   from '../globals';
import {RemoteIpService}            from '../unused/remote-ip/remote-ip.service';
import {QueueRuleService}           from '../unused/queue-rule/queue-rule.service';
import {LocalIpComponent}           from '../unused/local-ip/local-ip.component';
import {LocalIpFormComponent}       from '../unused/local-ip/local-ip-form.component';
import {NetComponent}               from '../unused/net/net.component';
import {NetFormComponent}           from '../unused/net/net-form.component';
import {ProviderFormComponent}      from '../unused/provider/provider-form.component';
import {ProviderComponent}          from '../unused/provider/provider.component';
import {QueueTypeComponent}         from '../unused/queue-type/queue-type.component';
import {QueueTypeFormComponent}     from '../unused/queue-type/queue-type-form.component';
import {TrafficQueueComponent}      from '../unused/traffic-queue/traffic-queue.component';
import {TrafficQueueFormComponent}  from '../unused/traffic-queue/traffic-queue-form.component';
import {LocalIpService}             from '../unused/local-ip/local-ip.service';
import {NetService}                 from '../unused/net/net.service';
import {ProviderService}            from '../unused/provider/provider.service';
import {QueueTypeService}           from '../unused/queue-type/queue-type.service';
import {TrafficQueueService}        from '../unused/traffic-queue/traffic-queue.service';
import {RoleComponent}              from '../components/role.component';
import {RoleFormComponent}          from '../components/role-form.component';
import {RoleService}                from '../services/role.service';
import {UserService}                from '../services/user.service';
import {UserComponent}              from '../components/user.component';
import {UserFormComponent}          from '../components/user-form.component';
import {UserIpService}              from '../unused/user-ip/user-ip.service';
import {UserIpComponent}            from '../unused/user-ip/user-ip.component';
import {UserIpFormComponent}        from '../unused/user-ip/user-ip-form.component';
import {AuthService}                from '../services/auth.service';
import {AdminComponent}             from '../components/admin.component';
import {AdminGuard}                 from '../services/admin-guard.service';
import {RemoteIpComponent} from "../unused/remote-ip/remote-ip.component";
import {RemoteIpFormComponent} from "../unused/remote-ip/remote-ip-form.component";
import {QueueRuleComponent} from "../unused/queue-rule/queue-rule.component";
import {QueueRuleFormComponent} from "../unused/queue-rule/queue-rule-form.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AdminComponent,
    LocalIpComponent,
    LocalIpFormComponent,
    NetComponent,
    NetFormComponent,
    ProviderComponent,
    ProviderFormComponent,
    QueueTypeComponent,
    QueueTypeFormComponent,
    TrafficQueueComponent,
    TrafficQueueFormComponent,
    RoleComponent,
    RoleFormComponent,
    UserComponent,
    UserFormComponent,
    UserIpComponent,
    UserIpFormComponent,
    RemoteIpComponent,
    RemoteIpFormComponent,
    QueueRuleComponent,
    QueueRuleFormComponent
  ],
  providers: [
    Globals,
    RemoteIpService,
    QueueRuleService,
    LocalIpService,
    NetService,
    ProviderService,
    QueueTypeService,
    TrafficQueueService,
    RoleService,
    UserService,
    UserIpService,
    AuthService,
    AdminGuard
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
