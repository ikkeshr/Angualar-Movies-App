import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FetchJsonService } from '../../services/fetch-json.service';

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.scss']
})
export class MovieRatingComponent implements OnInit {

  @Input("movieId") movieId: number;
  @Output("cancel") cancelEmitter = new EventEmitter<string>();
  ratingSelected: number = 1;
  showLoader: boolean = false;
  ratingSubmitted: boolean = false;
  showErrorMsg: boolean = false;
  showInvalidRatingMsg: boolean = false;

  constructor(
    private fetchJson: FetchJsonService
  ) { }

  ngOnInit(): void {
  }

  onRatingSet(rating: number): void {
    if (rating < 0.5 || rating > 10) {
      this.showInvalidRatingMsg = true;
    } else {
      this.showInvalidRatingMsg = false;
      this.ratingSelected = rating;
    }
  }

  submit(): void {
    if (this.showInvalidRatingMsg) return;

    this.showLoader = true;
    this.showErrorMsg = false;

    this.fetchJson.postRating(this.movieId, this.ratingSelected)
    .subscribe ((response: any) => {
      this.showLoader = false;
      this.ratingSubmitted = true;
      console.log(response);
    }, err => {
      this.showLoader = false;
      console.log(err);
      this.showErrorMsg = true;
    })
  }

  cancel(): void {
    this.cancelEmitter.emit();
  }

}
