



import {MainComponent} from "../components/main.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const adminRoutes: Routes = [
  {
    path: 'admin', component: MainComponent,
    children: [
      { path: 'about-us',                 component: AboutUsComponent },
      { path: 'news',                     component: NewsComponent },
      { path: 'about-trials',             component: AboutTrialsComponent },
      { path: 'trial-base',               component: TrialBaseComponent },
      { path: 'companies-base',           component: CompaniesBaseComponent },
      { path: 'contacts',                 component: ContactsComponent }
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
export class MainRoutingModule { }
