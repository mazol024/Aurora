import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormControl} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppComplaintComponent } from './app-complaint.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComplaintComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
