import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Router } from '@angular/router';

import { AppService } from '../../../services/app.service';
import { User, Map, Todo } from '../../../models/app';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private _api = "/app";

  Me: User;

  constructor(private _App: AppService,
    private _Router: Router,
    private http: Http) {
    this.Me = _App.Me;
    if (!this.Me) {
      _Router.navigate(['/login']);
    }
  }

  ngOnInit() { }


}
