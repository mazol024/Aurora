import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OutagesService {
  outage =  { num: 'CQ3/12', fzone: '3 - High Voltage Feeder', ftype: '1 - NotPlanned Outage', subname: '22 - Dunedin', circid: 'Feeder - 1',
    equip: '602 - Not Applicable / Planned Outage', voltage: '12', cause: '3C - Vegetation - Fall Zone', natoffault: '3 - Non System',
    locat: '70057 - AA34', discr: 'POLE REPLACEMENT - PLANNED'};
  outagesList = [
    { num: 'C18/520', fzone: '3 - High Voltage Feeder', ftype: '0 - Planned Outage', subname: '70004 - ALEXANDRA ZONE SUB',
      circid: '162 - ALEX CBD - Brige Hill',
      equip: '601 - Equipment Not Classified', voltage: '12', cause: '7I - Environmemnt Slip', natoffault: '3 - Non System',
      locat: '70057 - AA34', discr: 'ARM BRACE OFF'},
    { num: 'C21/120', fzone: '5 - Low Voltage Feeder', ftype: '0 - Planned Outage', subname: '70004 - ALEXANDRA ZONE SUB',
      circid: '162 - ALEX CBD - Brige Hill',
      equip: '602 - Not Applicable / Planned Outage', voltage: '12', cause: '1E - Planned - Pole Replacement', natoffault: '3 - Non System',
      locat: '70057 - AA34', discr: 'POLE REPLACEMENT - PLANNED'},
    { num: 'D08/020', fzone: '6 - Generation', ftype: '0 - Planned Outage', subname: '70004 - ALEXANDRA ZONE SUB',
      circid: '101 - ALEX CBD - Brige Hill',
      equip: '602 - Not Applicable / Planned Outage', voltage: '12', cause: '2A - Transpower', natoffault: '3 - Non System',
      locat: '70057 - AA34', discr: 'TRANSPOWER'},
    { num: 'E32/681', fzone: '2 - Zone Substation', ftype: '0 - Planned Outage', subname: '70004 - ALEXANDRA ZONE SUB',
      circid: '162 - ALEX CBD - Brige Hill',
      equip: '101 - CONDUCTOR', voltage: '12', cause: '6A - Weather Ice', natoffault: '3 - Non System',
      locat: '70057 - AA34', discr: 'EMERGENCY ISOLATION'},
    { num: 'E78/920', fzone: '7 - Transpower', ftype: '0 - Planned Outage', subname: '70004 - ALEXANDRA ZONE SUB',
      circid: '162 - ALEX CBD - Brige Hill',
      equip: '602 - Not Applicable / Planned Outage', voltage: '12', cause: '4A - Lightning', natoffault: '3 - Non System',
      locat: '70057 - AA34', discr: 'COMMUNICATIONS - ERRORS/FAILURE'}
  ];

  getOutage(): {} {
    return this.outage;
  }
  getOutagesList() {
    return this.outagesList;
  }
  constructor() { }
}
