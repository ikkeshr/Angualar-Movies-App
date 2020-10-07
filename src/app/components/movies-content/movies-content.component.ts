import { Component, OnInit, Input } from '@angular/core';
import {SimpleChanges} from '@angular/core';
import {Movie} from '../../dto/movie';
import { ActivatedRoute } from '@angular/router';
import { FetchJsonService } from '../../services/fetch-json.service';

@Component({
  selector: 'app-movies-content',
  templateUrl: './movies-content.component.html',
  styleUrls: ['./movies-content.component.scss']
})
export class MoviesContentComponent implements OnInit {

  @Input() title: string;
  moviesList: Movie[] = [];
  moviesToDisplay: Movie[] = []; 
  moviesToDisplayOriginal: Movie[] = []; 

  sortMoviesBy: string = "all";

  constructor(
    private route: ActivatedRoute,
    private fetchJson: FetchJsonService
  ) {}

  ngOnInit(): void {
    this.getMoviesJson().then(() => {
      // console.log(this.moviesList.length);
      this.route.params.subscribe(params => {
        // console.log(params);
        if (params.genre) {
          this.moviesToDisplay = this.getMoviesByGenre(params.genre);
          this.moviesToDisplayOriginal = this.moviesToDisplay; // For sorting
        }
        else if (params.trend) {
          this.getMoviesByTrend(params.trend);
        } 
        else if (params.query) {
          this.moviesToDisplay = this.searchMoviesByTitle(params.query);
          this.moviesToDisplayOriginal = this.moviesToDisplay; // For sorting
        }
      });
    });
    
  }

  // runs when @inputs variables receives new values
  // ngOnChanges(changes: SimpleChanges): void {
  //   // console.log(changes);
  //   this.moviesToDisplayOriginal = changes.moviesToDisplay.currentValue;

  //   if (this.sortMoviesBy !== "all") {
  //     this.sortMovies(this.sortMoviesBy);
  //   }
  // }

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

   async getMoviesJson(): Promise<void> {
    await this.fetchJson.getMovies().toPromise().then(data => {//.subscribe((data: any[]) => {
       data.forEach(m => {
         var movie = new Movie();
         movie.setGenre(m.genres);
         movie.setPosterUrl(m.posterurl);
         movie.setRating(m.imdbRating);

         if (m.originalTitle === "") {
           movie.setTitle(m.title);
         } else {
           movie.setTitle(m.originalTitle);
         }

         this.moviesList.push(movie);
       });

     });
  }

  getMoviesByGenre (genre: string): Movie[] {
    var movies: Movie[] = [];
    this.moviesList.forEach(m => {
      if (m.getGenre().includes(genre))  {
        movies.push(m);
      }
    });
    return movies;
  }

  getMoviesByTrend(trend: string): void {
    if (trend === "upcoming_movies") {
      this.fetchJson.getUpcomingMovies().subscribe((movies: Movie[]) => {
        this.moviesToDisplay = movies;
        this.moviesToDisplayOriginal = this.moviesToDisplay; //For sorting
      });
    } else if (trend === "popular_movies") {
      this.fetchJson.getPopularMovies().subscribe((movies: Movie[]) => {
        this.moviesToDisplay = movies;
        this.moviesToDisplayOriginal = this.moviesToDisplay; // For sorting
      });
    }
  }

  searchMoviesByTitle(title: string): Movie[] {
    let re = new RegExp('^' + title, "i");
    var movies = this.moviesList.filter(m => re.test(m.getTitle()) );
    return movies;
  }
  

}
