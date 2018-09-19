import { Component, OnInit } from '@angular/core';
import {OutagesService} from './outages.service';

@Component({
  selector: 'app-outages',
  templateUrl: './app-outages.component.html',
  styleUrls: ['./app-outages.component.css']
})
export class AppOutagesComponent implements OnInit {
  outage ;
  outages ;
  constructor(private otagesService: OutagesService) { }
  getOutage() {
    this.outage = this.otagesService.getOutage();
  }
  getOutagesList() {
    this.outages = this.otagesService.getOutagesList();
  }
  clearForm() {
    this.outage = {};
  }
  onSelectRow(num, fzone, ftype, subname, circid, equip, voltage, cause,natoffault, locat, discr) {
    this.outage = {num, fzone, ftype, subname, circid, equip, voltage, cause,natoffault, locat, discr};
  }
  addOutage() {}
  editOutage() {}
  ngOnInit() {
    this.getOutagesList();
    this.getOutage();

  }

}
