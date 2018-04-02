
import {RouterModule, Routes}   from '@angular/router';
import {NgModule}               from '@angular/core';

import {MainComponent}          from './main.component';
import {AboutUsComponent}       from '../about-us/about-us.component';
import {NewsComponent}          from '../news/news.component';
import {AboutTrialsComponent}   from '../about-trials/about-trials.component';
import {TrialBaseComponent}     from '../trial-base/trial-base.component';
import {ContactsComponent}      from '../contact/contacts.component';
import {CompaniesComponent}     from '../company/companies.component';

const mainRoutes: Routes = [
  {
    path: 'main', component: MainComponent,
    children: [
      { path: 'about-us',                 component: AboutUsComponent },
      { path: 'news',                     component: NewsComponent },
      { path: 'about-trials',             component: AboutTrialsComponent },
      { path: 'trial-base',               component: TrialBaseComponent },
      { path: 'companies-base',           component: CompaniesComponent },
      { path: 'contacts',                 component: ContactsComponent }
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
