import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Movie } from '../dto/movie';

@Injectable({
  providedIn: 'root'
})
export class FetchJsonService {

  constructor(private http: HttpClient) {}

  public getMovies(): Observable<any> {
    return this.http.get("../assets/movies.json");
  }

  public getUpcomingMovies(): Observable<Movie[]> {
    const apiResponse = this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=fed69657ba4cc6e1078d2a6a95f51c8c");
    return this.responseToMovieArrTransform(apiResponse);
  }

  public getPopularMovies(): Observable<Movie[]> {
    const apiResponse = this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=fed69657ba4cc6e1078d2a6a95f51c8c");
    return this.responseToMovieArrTransform(apiResponse);
  }

  protected responseToMovieArrTransform = map((data: any) =>{
    if (data != null) {
      let movies: Movie[] = [];
      data.results.forEach(element => {
        let m: Movie = new Movie();
        
        m.setTitle(element.title);
        m.setGenre(null);
        m.setRating(element.vote_average);
        m.setPosterUrl(`http://image.tmdb.org/t/p/w300${element.poster_path}?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`);
        
        movies.push(m);
      });

      return movies;
    }
  });


   
}
