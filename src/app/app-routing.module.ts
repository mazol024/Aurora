import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComplaintComponent} from './app-complaint.component';
import {AppOutagesComponent} from './app-outages.component';
import {AppAboutComponent} from './app-about.component';
import {AppMainsiteComponent} from './app-mainsite.component';

const routes: Routes = [
  { path: '', redirectTo: '/complaints', pathMatch: 'full'
  },
  { path: 'complaints', component: AppComplaintComponent },
  { path: 'outages', component: AppOutagesComponent },
  { path: 'about', component: AppAboutComponent },
  { path: 'mainsite', component: AppMainsiteComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
