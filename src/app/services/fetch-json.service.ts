import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchJsonService {

  constructor(private http: HttpClient) {}

  public getMovies() {
    return this.http.get("../assets/movies.json");
  }
}
