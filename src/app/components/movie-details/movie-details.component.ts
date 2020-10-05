import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchJsonService } from '../../services/fetch-json.service';
import { MovieDetails } from  '../../dto/movie-details';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails: MovieDetails;

  // Genre list to pass to sidebar
  genreList: string[];
  showRatingAction: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private fetchJson: FetchJsonService,
    private router: Router,
    public translate: TranslateService
  ) {
    // this.movieDetails = new MovieDetails();
  }

  ngOnInit(): void {
    this.getMovieIdParam();
    this.getGenresList();
  }

  getMovieIdParam(): void {
    this.route.paramMap.subscribe(params => {
      // console.log(params.get('id'));
      this.fetchMovieDetails(+params.get('id'));
    });
  }

  fetchMovieDetails(movieId: number): void {
    this.fetchJson.getMovieDetails(movieId)
    .subscribe((movieDetails: MovieDetails) => {
      // console.log(movieDetails);
      this.movieDetails = movieDetails;
    });
  }

  getGenresList(): void {
    this.fetchJson.fetchMovieGenres().subscribe((response: string[]) => {
      this.genreList = response;
    });
  }

  selectedGenreFromSideMenu(genreSelected: string): void {
    // console.log(genreSelected);
    this.router.navigate(['/'], {queryParams: {action:'side', genre:genreSelected}});
  }

  selectedTrendFromTopBar(trendSelected: string): void {
    // console.log(trendSelected);
    this.router.navigate(['/'], {queryParams: {action:'top', trend:trendSelected}});
  }

  openLink(url: string): void {
    window.open(url, "_blank");
  }

  toggleRatingAction(event): void {
    this.showRatingAction = !this.showRatingAction;
  }

}
