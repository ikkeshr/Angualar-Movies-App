import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movies-top-bar',
  templateUrl: './movies-top-bar.component.html',
  styleUrls: ['./movies-top-bar.component.scss']
})
export class MoviesTopBarComponent implements OnInit {

  @Output() searchMovieTitle = new EventEmitter<string>();
  dropSettings: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  showSettings(): void {
    this.dropSettings = !this.dropSettings;
  }

  searchMovieByTitle(movieTitle: string): void {
    // console.log("FROM TOPMENU search: " + movieTitle);
    this.searchMovieTitle.emit(movieTitle);
  }

}
