import { Component, OnInit } from '@angular/core';
import { FetchJsonService } from '../../services/fetch-json.service';
import { Movie } from '../../dto/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  textFromSideMenu: string;
  movieList: Movie[] = [];
  movieGenres: string[] = [];
  moviesListToDisplay: Movie[] = [];

  constructor(private fetchJson: FetchJsonService) {
  }

  ngOnInit(): void {
    this.textFromSideMenu="New Releases";
    this.getMoviesJson();
  }

  //on side menu item seleted
  setTextFromSideMenu(text: string): void {
    this.textFromSideMenu = text;
    this.moviesListToDisplay = this.getMoviesByGenre(text);
  }

  getSearchValue(value: string): void {
    // console.log("FROM MOVIES search: " + value);
    // console.log(this.getMoviesByTitle(value));
    this.setTextFromSideMenu("Search '" + value + "'");
    this.moviesListToDisplay = this.getMoviesByTitle(value);

    if (this.moviesListToDisplay.length < 1) {
      this.setTextFromSideMenu("Search '" + value + "' - No Results");
    }
  }

  getTrendSelected(value: string): void {
    console.log("Movie component: " + value);
    if (value === "upcoming_movies") {
      this.fetchJson.getUpcomingMovies().subscribe((movies: Movie[]) => {
        this.textFromSideMenu = "Upcoming Movies";
        this.moviesListToDisplay = movies;
      });
    } else if (value === "popular_movies") {
      this.fetchJson.getPopularMovies().subscribe((movies: Movie[]) => {
        this.textFromSideMenu = "Popular Movies";
        this.moviesListToDisplay = movies;
      });
    }
  }

  getMoviesJson(): void {
    this.fetchJson.getMovies().subscribe((data: any[]) => {
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
        

        this.movieList.push(movie);
      });
      
      // Get the genres of the movie Objects in the array and removes duplicate genres 
      this.movieGenres = [...new Set(this.movieList.map(m => m.getGenre()).join().split(","))].sort();

      // Set default seleted
      this.setTextFromSideMenu(this.movieGenres[0]);
    });
  }

  getMoviesByGenre (genre: string): Movie[] {
    var movies: Movie[] = [];

    this.movieList.forEach(m => {
      if (m.getGenre().includes(genre))  {
        movies.push(m);
      }
    });

    return movies;
  }

  getMoviesByTitle(title: string): Movie[] {
    let re = new RegExp('^' + title, "i");
    var movies = this.movieList.filter(m => re.test(m.getTitle()) );
    return movies;
  }

}
