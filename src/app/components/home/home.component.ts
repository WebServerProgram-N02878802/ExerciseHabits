import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  DisplayedTab: number = 1;

  constructor() { }

  ngOnInit() {
  }

  toggleTab(e: MouseEvent, index: number) {
    e.preventDefault();
    this.DisplayedTab = index;
  }

}
