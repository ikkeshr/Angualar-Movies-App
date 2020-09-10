import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-top-bar',
  templateUrl: './movies-top-bar.component.html',
  styleUrls: ['./movies-top-bar.component.scss']
})
export class MoviesTopBarComponent implements OnInit {

  dropSettings: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  showSettings() {
    this.dropSettings = !this.dropSettings;
  }

}
