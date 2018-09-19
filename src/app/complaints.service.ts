import { Injectable } from '@angular/core';
import {AppComplaintComponent} from './app-complaint.component';
import {AppComponent} from './app.component';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {
  complaint = {num: '', name: '', address: '', date: '', compl: '',
    disstaff: '', advice: '', status: '', category: '', complited: '', distype: ''};
  complaintsList = [
    { num: 'CQ3/12', name: 'Brian', address: '8 View St, Dunedin, 9016', date: '22/02/2015', compl: 'Flicking during mornig',
      disstaff: 'NF', advice: '12/03/2015', status: 'Finish', category: 'LV', complited: '12/03/2015', distype: 'Low'},
    { num: '03452', name: 'Mr. Peter', address: '49 Riselaw Rd, Calton Hill, Dunedin 9012', date: '11/12/2011', compl: 'Low voltage',
      disstaff: 'BDD', advice: '02/01/2012', status: 'Finish', category: 'N/A', complited: '13/12/2011', distype: 'FCK'},
    { num: '03025', name: 'Janet', address: '22 Hunt St, Andersons Bay, Dunedin 9013', date: '01/06/2014',
      compl: 'Check out all commection',
      disstaff: 'JP', advice: '-', status: 'Finish', category: 'NFAULT', complited: '03/06/2014', distype: 'Low'},
    { num: 'ZQ6/31', name: 'John', address: '2 Leight St, Dunedin, 9016', date: '22/02/2014', compl: 'Omega Installed',
      disstaff: 'NF', advice: '12/03/2015', status: 'Finish', category: 'LV', complited: '22/03/2014', distype: 'FCK'},
    { num: '04234', name: 'Sienna', address: '46 Morning St, Dunedin, 9016', date: '22/01/2015', compl: 'As Phase 10V Down ',
      disstaff: 'NF', advice: '27/01/2015', status: 'Finish', category: 'LV', complited: '02/02/2015', distype: '-'},
    { num: 'ZZW/12', name: 'Nick', address: '61 Princess Street, Dunedin, 9013', date: '17/04/2015', compl: 'Flicking during mornig',
      disstaff: 'NF', advice: '-', status: 'Finish', category: 'JP', complited: '12/05/2015', distype: 'Low'}
  ];
  getComplaints() {
    return this.complaintsList;
  }
  constructor() { }

}
