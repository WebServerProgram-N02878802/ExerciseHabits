import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Router } from '@angular/router';
import { Observable } from 'rxjs'; //alternatives?
import { map } from 'rxjs/operators';

import { User, Map, Todo } from '../models/app';

//dev-dep for google library | could use google: any
import { } from '@types/googlemaps';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _api = "/app";

  Me: User;
  Pic: string;
  Token: string;

  Map: google.maps.Map;

  constructor(private http: Http,
    private _Router: Router) { }




  /*
      LOGIN SERVICES
  */
  login(name: string, password: string) {
    if (password == '123') {
      this.Me = { name: name, map: new Map(), todo: new Todo() };
      //log user in server
      this.http.post(this._api + "/login", { Name: this.Me.name }).subscribe();  //.subscribe for err
      this._Router.navigate(['/app']);
    }
  }

  oAuthLogin(name: string, token: string, pic: string) {
    this.Me = { name: name, map: new Map(), todo: new Todo() };
    this.Pic = pic;
    this.Token = token;
    //log user in server
    this.http.post(this._api + "/login", { Name: this.Me.name }).subscribe();  //.subscribe for err
    this._Router.navigate(['/app']);
  }



  /*
      MAP SERVICES
  */
  MapRefresh(): Observable<any> {
    return this.http.get(this._api + "/map/state", { params: { Name: this.Me.name } }).pipe(map(res => res.json()));
  }

  MapAddMarker(): Observable<any> {
    return this.http.post(this._api + "/map/add", { Name: this.Me.name });
  }

  MapDelMarker(index: number): Observable<any> {
    return this.http.post(this._api + "/map/del", { Name: this.Me.name, Index: index });
  }



  /*
      TODO LIST SERVICES
  */
  TodoRefresh(): Observable<any> {
    return this.http.get(this._api + "/todo/state", { params: { Name: this.Me.name } }).pipe(map(res => res.json()));
  }

  TodoAddElement(): Observable<any> {
    return this.http.post(this._api + "/todo/add", { Name: this.Me.name });
  }

  TodoDelElement(index: number): Observable<any> {
    return this.http.post(this._api + "/todo/del", { Name: this.Me.name, Index: index });
  }

}

