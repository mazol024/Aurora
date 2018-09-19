import { AppComplaintComponent } from './app-complaint.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OutageInformationComponent } from './outage-information/outage-information.component';
import { VoltageComplaintsComponent } from './voltage-complaints/voltage-complaints.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';
import { MarkerClusterDemoComponentComponent } from './marker-cluster-demo-component/marker-cluster-demo-component.component';

import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    OutageInformationComponent,
    VoltageComplaintsComponent,
    HomeComponent,
    HeaderComponent,
    LeafletMapComponent,
    MarkerClusterDemoComponentComponent,
    AppComplaintComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LeafletModule.forRoot(),
    LeafletMarkerClusterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

