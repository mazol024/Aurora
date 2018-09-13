import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list.component';
import { CustomerComponent } from './customer.component';
import { AppComplaintComponent } from './app-complaint.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerComponent,
    AppComplaintComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
