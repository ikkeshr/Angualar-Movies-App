import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  list: any[];

  constructor() {
    this.list = [];
  }

  ngOnInit(): void {
    this.list = [
      {id:0, name: 'Port-Louis', temperature: 35.1},
      {id: 1, name: 'London', temperature: 4},
      {id: 2, name: 'Abu dhabi', temperature: 18},
      {id: 2, name: 'Rome', temperature: 7},
      {id: 2, name: 'Paris', temperature: -1}
    ]
  }

}
