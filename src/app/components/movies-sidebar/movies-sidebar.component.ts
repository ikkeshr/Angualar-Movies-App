import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movies-sidebar',
  templateUrl: './movies-sidebar.component.html',
  styleUrls: ['./movies-sidebar.component.scss']
})
export class MoviesSidebarComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();
  nameSelected: string;

  constructor() {
    this.nameSelected = "New Releases";
  }

  ngOnInit(): void {
    this.sendToParent(this.nameSelected);
  }

  changeColor(name: string) {
    this.nameSelected = name;
    this.sendToParent(name);
  }

  sendToParent(value: string) {
    this.newItemEvent.emit(value);
  }

}
