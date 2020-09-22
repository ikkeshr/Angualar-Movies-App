import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Movie } from '../dto/movie';
import { MovieDetails } from '../dto/movie-details';

@Injectable({
  providedIn: 'root'
})
export class FetchJsonService {

  private readonly apiKey: string = "fed69657ba4cc6e1078d2a6a95f51c8c";

  constructor(private http: HttpClient) {}

  public getMovies(): Observable<any> {
    return this.http.get("../assets/movies.json");
  }

  public getUpcomingMovies(): Observable<Movie[]> {
    const apiResponse = this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}`);
    return this.responseToMovieArrTransform(apiResponse);
  }

  public getPopularMovies(): Observable<Movie[]> {
    const apiResponse = this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`);
    return this.responseToMovieArrTransform(apiResponse);
  }

  protected responseToMovieArrTransform = map((data: any) =>{
    if (data != null) {
      let movies: Movie[] = [];
      data.results.forEach(element => {
        let m: Movie = new Movie();
        
        m.setId(element.id);
        m.setTitle(element.title);
        m.setGenre(null);
        m.setRating(element.vote_average);
        m.setPosterUrl(`http://image.tmdb.org/t/p/w300${element.poster_path}?api_key=${this.apiKey}`);
        
        movies.push(m);
      });

      return movies;
    }
  });

  public getMovieDetails(movieId: number): Observable<MovieDetails> {
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get(apiUrl).pipe(
      map ((response: any) => {
        if (response) {
          let movieDetails: MovieDetails = new MovieDetails();

          movieDetails.set_id(response.id);
          movieDetails.set_title(response.title);
          movieDetails.set_rating(response.vote_average);
          movieDetails.set_posterUrl(`http://image.tmdb.org/t/p/w300${response.poster_path}?api_key=${this.apiKey}`);
          movieDetails.set_homepage(response.homepage);
          movieDetails.set_overview(response.overview);
          movieDetails.set_releaseDate(response.release_date);
          movieDetails.set_originalTitle(response.original_title);
          movieDetails.set_voteCount(response.vote_count);

          movieDetails.set_genre(response.genres.map(g => g.name));
          movieDetails.set_productionCompanies(response.production_companies.map(pc => pc.name));
          movieDetails.set_productionCountries(response.production_countries.map(pc => pc.iso_3166_1));

          return movieDetails;
        }
      })
    );
  }

  
  public fetchMovieGenres(): Observable<string[]> {
    return this.http.get("../assets/movies.json").pipe(
      map ((response: any[]) => {
        if (response) {
          let genres: string[] = [];
          genres = [...new Set( response.map(m => m.genres).join().split(",") )].sort();
          return genres;
        }
      })
    );
  }
   
}
