import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchJsonService {

  constructor(private http: HttpClient) {}

  public getMovies(): Observable<any> {
    return this.http.get("../assets/movies.json");
  }

  public getUpcomingMovies(): Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=fed69657ba4cc6e1078d2a6a95f51c8c");
  }

  public getPopularSeries(): Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=fed69657ba4cc6e1078d2a6a95f51c8c");
  }

   
}
