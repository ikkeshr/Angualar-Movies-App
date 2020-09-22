import { Component, OnInit } from '@angular/core';
import { FetchJsonService } from '../../services/fetch-json.service';
import { Movie } from '../../dto/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  textFromSideMenu: string;
  movieList: Movie[] = []; // Holds all the movies from the JSON file in assets directory
  movieGenres: string[] = [];
  moviesListToDisplay: Movie[] = [];

  sideMenuSelectedGenre: string;
  topMenuSelectedTread: string;

  constructor(
    private fetchJson: FetchJsonService,
    private route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.getMoviesJson();
  }

  //on side menu item seleted
  setTextFromSideMenu(text: string): void {
    this.textFromSideMenu = text;
    this.sideMenuSelectedGenre = text;
    this.topMenuSelectedTread = "";
    this.moviesListToDisplay = this.getMoviesByGenre(text);
  }

  getSearchValue(value: string): void {
    // console.log("FROM MOVIES search: " + value);
    // console.log(this.getMoviesByTitle(value));
    this.textFromSideMenu = "Search '" + value + "'";
    this.sideMenuSelectedGenre = "";
    this.topMenuSelectedTread = "";

    this.moviesListToDisplay = this.getMoviesByTitle(value);

    if (this.moviesListToDisplay.length < 1) {
      this.textFromSideMenu = "Search '" + value + "' - No Results";
    }
  }

  getTrendSelected(value: string): void {
    // console.log("Movie component: " + value);
    this.sideMenuSelectedGenre = "";
    this.topMenuSelectedTread = value;

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

      this.retrieveQueryParams();
    });
  }

  retrieveQueryParams(): void {
    this.route.queryParamMap.subscribe(params => {
      if (params.has("action")) {
        if (params.get("action") === "side" && params.has("genre")) {
          this.setTextFromSideMenu(params.get("genre"));
        }
        else if (params.get("action") === "top" && params.has("trend")) {
          this.getTrendSelected(params.get("trend"));
        }
      }
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
