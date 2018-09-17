import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormControl} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppComplaintComponent } from './app-complaint.component';
import { AppRoutingModule } from './app-routing.module';
import { AppOutagesComponent } from './app-outages.component';
import { AppAboutComponent } from './app-about.component';
import { AppMainsiteComponent } from './app-mainsite.component';


@NgModule({
  declarations: [
    AppComponent,
    AppComplaintComponent,
    AppOutagesComponent,
    AppAboutComponent,
    AppMainsiteComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
