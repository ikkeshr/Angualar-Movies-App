import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movies-top-bar',
  templateUrl: './movies-top-bar.component.html',
  styleUrls: ['./movies-top-bar.component.scss']
})
export class MoviesTopBarComponent implements OnInit {

  @Output() searchMovieTitle = new EventEmitter<string>();
  @Output() selectedTrending = new EventEmitter<string>();
  dropSettings: boolean = false;
  trendItemSelected: string;

  constructor() {}

  ngOnInit(): void {
  }

  showSettings(): void {
    this.dropSettings = !this.dropSettings;
  }

  searchMovieByTitle(movieTitle: string): void {
    this.searchMovieTitle.emit(movieTitle);
  }

  showTrending(value: string): void {
    this.selectedTrending.emit(value);
  }

}
