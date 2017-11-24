
import {RouterModule, Routes}   from '@angular/router';
import {NgModule}               from '@angular/core';

import {MainComponent}          from '../components/main.component';
import {AboutUsComponent}       from '../components/about-us.component';
import {NewsComponent}          from '../components/news.component';
import {AboutTrialsComponent}   from '../components/about-trials.component';
import {TrialBaseComponent}     from '../components/trial-base.component';
import {ContactsComponent}      from '../components/contacts.component';
import {CompaniesComponent}     from '../components/companies.component';

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
