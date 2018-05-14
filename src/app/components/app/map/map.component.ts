import { Component, OnInit, Inject, NgZone } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { User, Map } from '../../../models/app';

//dev-dep for google library | could use google: any
import { } from '@types/googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  Map: google.maps.Map;
  Model = new Map();

  constructor(private _App: AppService,
    @Inject(NgZone) public _zone: NgZone) { }

  ngOnInit() {
    this._App.MapRefresh().subscribe(res => { this.Model = res; this.refreshCallback(); });
  }

  refreshCallback() {
    this.Map = new google.maps.Map(document.getElementById('map'), {
      center: this.Model.Position,
      zoom: this.Model.Zoom,
      disableDefaultUI: true,
      disableDoubleClickZoom: true
    });

    this.Map.addListener('dblclick', (e) => {
      this._zone.run(() => {
        this.markerCreate(e.latLng);
      });
    });
  }

  markerCreate(location: google.maps.LatLng) {
    this.Model.MapMarkers.push(new google.maps.Marker({
      position: location,
      draggable: true,
      map: this.Map
    }));
    //update server
  }
}
