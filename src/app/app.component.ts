import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <br/>
      <em>Voltage Complaints Form</em>
      <br/>
      <br/>
    <app-complaint></app-complaint>
    </div>
    <br/>
    <div class='app'>
      <br/>
      <em> Voltage Complaints Register</em>
      <br/>
      <br/>
      <app-customer-list></app-customer-list>
    </div>`,
  styles: ['.app {color: white; background-color:#f58220;margin:3px;padding: 3px;}']
})
export class AppComponent {
}
