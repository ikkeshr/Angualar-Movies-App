import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movieId: number;
  @Input() movieTitle: string;
  @Input() movieRating: number;
  @Input() movieGenre: string;
  @Input() moviePicUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
