import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {Browser} from 'selenium-webdriver';
import {NgModule} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <h2>
      <em>Voltage Complaints Form</em>
      </h2>
      <br/>
    <app-complaint></app-complaint>
    </div>
    <br/>
   `,
  styles: ['.app {color: white; background-color:#f58220;margin:3px;padding: 3px;}']
})
export class AppComponent {
}
