import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.scss']
})
export class MovieRatingComponent implements OnInit {

  @Output("cancel") cancelEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.cancelEmitter.emit();
  }

}
