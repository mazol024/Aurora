import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';
import { VoltageComplaintsComponent } from './voltage-complaints/voltage-complaints.component';
import { OutageInformationComponent } from './outage-information/outage-information.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'outage-information',
    component: OutageInformationComponent
  },
  {
    path: 'voltage-complaints',
    component: VoltageComplaintsComponent
  },
  {
    path: 'leaflet-map',
    component: LeafletMapComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
