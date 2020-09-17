import { Component, OnInit, Input } from '@angular/core';
import {SimpleChanges} from '@angular/core';
import {Movie} from '../../dto/movie';

@Component({
  selector: 'app-movies-content',
  templateUrl: './movies-content.component.html',
  styleUrls: ['./movies-content.component.scss']
})
export class MoviesContentComponent implements OnInit {

  @Input() title: string;
  @Input('moviesToDisplay') moviesToDisplay: Movie[] = []; 
  moviesToDisplayOriginal: Movie[] = []; 

  sortMoviesBy: string = "all";

  constructor() {}

  ngOnInit(): void {}

  // runs when @inputs variables receives new values
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    this.moviesToDisplayOriginal = changes.moviesToDisplay.currentValue;

    if (this.sortMoviesBy !== "all") {
      this.sortMovies(this.sortMoviesBy);
    }
  }

  sortMovies(sortOption: string): void {
    this.sortMoviesBy = sortOption;

    if (sortOption === "all") {
      this.moviesToDisplay = this.moviesToDisplayOriginal;
    } else if (sortOption === "positive") {
      this.moviesToDisplay = this.moviesToDisplayOriginal.filter(m => m.getRating() > 5);
    } else if (sortOption === "neutral") {
      this.moviesToDisplay = this.moviesToDisplayOriginal.filter(m => m.getRating() === 5);
    } else if (sortOption === "critical") {
      this.moviesToDisplay = this.moviesToDisplayOriginal.filter(m => m.getRating() < 5);
    }

  }
  

}
