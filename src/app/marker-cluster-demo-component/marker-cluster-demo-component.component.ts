import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import '../../vendor.ts';
import { icon, latLng, marker, polyline, tileLayer, markerClusterGroup } from 'leaflet';

@Component({
  selector: 'app-marker-cluster-demo-component',
  templateUrl: './marker-cluster-demo-component.component.html',
  styleUrls: ['./marker-cluster-demo-component.component.scss']
})
export class MarkerClusterDemoComponentComponent implements OnInit {
  // Open Street Map Definition
  LAYER_OSM = {
    id: 'openstreetmap',
    name: 'Open Street Map',
    enabled: false,
    layer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Open Street Map'
    })
  };

  // Values to bind to Leaflet Directive
  layersControlOptions = { position: 'bottomright' };
  baseLayers = {
    'Open Street Map': this.LAYER_OSM.layer
  };
  options = {
    zoom: 7,
    center: L.latLng([-45.87416, 170.50361])
  };

  // Marker cluster stuff
  markerClusterGroup: L.MarkerClusterGroup;
  markerClusterData: any[] = [];
  markerClusterOptions: L.MarkerClusterGroupOptions;

  // Generators for lat/lon values Random values around the Dunedin area
  generateLat() {
    return -46.6 + Math.random();
  }
  generateLon() {
    return 169.802 + Math.random();
  }

  ngOnInit() {
    this.generateData();
  }

  markerClusterReady(group: L.MarkerClusterGroup) {
    this.markerClusterGroup = group;
  }

  generateData() {
    const data: any[] = [];

    for (let i = 0; i < 1000; i++) {
      const icon = L.icon({
        iconUrl: '../../assets/leaflet/images/marker-icon.png',
      shadowUrl: '../../assets/leaflet/images/marker-shadow.png'
      });

      data.push(L.marker([this.generateLat(), this.generateLon()], { icon }));
    }

    this.markerClusterData = data;
  }
}
