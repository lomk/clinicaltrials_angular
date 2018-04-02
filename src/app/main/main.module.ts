import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import {HttpModule}                 from '@angular/http';

import {AppRoutingModule}           from '../app-routing.module';

import {MainComponent} from "./main.component";
import {AboutUsComponent} from '../about-us/about-us.component';
import {NewsComponent} from '../components/news.component';
import {CompaniesComponent} from '../company/companies.component';
import {TrialBaseComponent} from '../components/trial-base.component';
import {ContactsComponent} from '../contact/contacts.component';
import {Globals} from '../globals';
import {ArticleService} from '../services/article.service';
import {MenuService} from '../services/menu.service';
import {SectionService} from '../services/section.service';
import {AboutTrialsComponent} from '../about-trials/about-trials.component';
import {SectionMenuComponent} from '../components/section-menu.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    MainComponent,
    SectionMenuComponent,
    AboutUsComponent,
    AboutTrialsComponent,
    NewsComponent,
    CompaniesComponent,
    TrialBaseComponent,
    ContactsComponent
  ],
  providers: [
    ArticleService,
    MenuService,
    SectionService
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
