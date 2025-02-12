import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

declare const EnterpriseMap: any;

@Component({
  selector: 'app-enterprise-map-control',
  templateUrl: './enterprise-map-control.component.html',
  styleUrls: ['./enterprise-map-control.component.css']
})
export class EnterpriseMapControlComponent implements OnInit, OnDestroy {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
  private mapComponent: any;
  private mapComponentId: string = 'map'; 

  constructor() {}

  ngOnInit(): void {
    if (typeof EnterpriseMap === 'undefined') {
      console.error('EnterpriseMap is not defined. Ensure the script is loaded correctly.');
      return;
    }

    try {
      this.mapComponent = EnterpriseMap.init({
        container: this.mapComponentId, 
        center: [30.0444, 31.2357],  
        zoom: 10,  
      });

      this.mapComponent.addLayer({
        type: 'tile',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      });

      console.log('Map initialized successfully.');

      // Call the zoomToGov method to zoom to Cairo
      this.zoomToGov(19);

    } catch (error) {
      console.error('Error initializing the map:', error);
    }
  }

  zoomToGov(zoomLevel: number): void {
    if (this.mapComponent) {
      const cairoBounds = [
        [29.8, 31.0],  // Southwest corner of Cairo
        [30.2, 31.5]   // Northeast corner of Cairo
      ];

      this.mapComponent.zoomToGov(zoomLevel, cairoBounds);
      console.log(`Zooming to Cairo governorate with zoom level ${zoomLevel}`);
    } else {
      console.error('Map component is not initialized.');
    }
  }

  ngOnDestroy(): void {
    if (this.mapComponent) {
      this.mapComponent.remove();  
    }
  }
}