import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-top-bar',
  templateUrl: './movies-top-bar.component.html',
  styleUrls: ['./movies-top-bar.component.scss']
})
export class MoviesTopBarComponent implements OnInit {

  dropSettings: boolean;

  constructor() {
    this.dropSettings = false;
  }

  ngOnInit(): void {
  }

  showSettings() {
    if (this.dropSettings) {
      this.dropSettings = false;
    } else {
      this.dropSettings = true;
    }
  }

}
