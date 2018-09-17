import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {Browser} from 'selenium-webdriver';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { Router, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Aurora';
}
