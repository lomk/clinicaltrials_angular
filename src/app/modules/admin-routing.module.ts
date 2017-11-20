import {RouterModule, Routes}         from '@angular/router';
import {NgModule}                     from '@angular/core';

import {AdminComponent}               from '../components/admin.component';
import {RemoteIpComponent}            from '../unused/remote-ip/remote-ip.component';
import {RemoteIpFormComponent}        from '../unused/remote-ip/remote-ip-form.component';
import {QueueRuleComponent}           from '../unused/queue-rule/queue-rule.component';
import {QueueRuleFormComponent}       from '../unused/queue-rule/queue-rule-form.component';
import {LocalIpComponent}             from '../unused/local-ip/local-ip.component';
import {LocalIpFormComponent}         from '../unused/local-ip/local-ip-form.component';
import {NetComponent}                 from '../unused/net/net.component';
import {NetFormComponent}             from '../unused/net/net-form.component';
import {ProviderComponent}            from '../unused/provider/provider.component';
import {ProviderFormComponent}        from '../unused/provider/provider-form.component';
import {QueueTypeComponent}           from '../unused/queue-type/queue-type.component';
import {QueueTypeFormComponent}       from '../unused/queue-type/queue-type-form.component';
import {TrafficQueueComponent}        from '../unused/traffic-queue/traffic-queue.component';
import {TrafficQueueFormComponent}    from '../unused/traffic-queue/traffic-queue-form.component';
import {RoleFormComponent}            from '../components/role-form.component';
import {RoleComponent}                from '../components/role.component';
import {UserComponent}                from '../components/user.component';
import {UserFormComponent}            from '../components/user-form.component';
import {UserIpComponent}              from '../unused/user-ip/user-ip.component';
import {UserIpFormComponent}          from '../unused/user-ip/user-ip-form.component';
import {AdminGuard}                   from '../services/admin-guard.service';



const adminRoutes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'remote-ips',               component: RemoteIpComponent },
      { path: 'remote-ips/new',           component: RemoteIpFormComponent },
      { path: 'queue-rules',              component: QueueRuleComponent },
      { path: 'queue-rules/new',          component: QueueRuleFormComponent },
      { path: 'local-ips',                component: LocalIpComponent },
      { path: 'local-ips/new',            component: LocalIpFormComponent },
      { path: 'nets',                     component: NetComponent },
      { path: 'nets/new',                 component: NetFormComponent},
      { path: 'providers',                component: ProviderComponent},
      { path: 'providers/new',            component: ProviderFormComponent},
      { path: 'queue-types',              component: QueueTypeComponent},
      { path: 'queue-types/new',          component: QueueTypeFormComponent},
      { path: 'traffic-queues',           component: TrafficQueueComponent},
      { path: 'traffic-queues/new',       component: TrafficQueueFormComponent},
      { path: 'roles',                    component: RoleComponent},
      { path: 'roles/new',                component: RoleFormComponent},
      { path: 'users',                    component: UserComponent},
      { path: 'users/new',                component: UserFormComponent},
      { path: 'user-ips',                 component: UserIpComponent},
      { path: 'user-ips/new',             component: UserIpFormComponent}
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
