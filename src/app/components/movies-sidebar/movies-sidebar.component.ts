import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FetchJsonService } from '../../services/fetch-json.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-sidebar',
  templateUrl: './movies-sidebar.component.html',
  styleUrls: ['./movies-sidebar.component.scss']
})
export class MoviesSidebarComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();
  movieGenres: string[] = ["Loading genres.."];
  @Input('itemSelected') nameSelected: string;

  constructor(
    private fetchJson: FetchJsonService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.nameSelected = "Movies";
  }

  ngOnInit(): void {
    // Go to /genre/<first genre in array>
    this.loadGenres().then (() => {
      this.route.params.subscribe(params => {
        
      });
    });
    // this.sendToParent(this.nameSelected);
  }

  selectGenre(name: string) {
    this.nameSelected = name;
    this.router.navigate([`/genre/${name}`]);
    // this.sendToParent(name);
  }

  sendToParent(value: string) {
    this.newItemEvent.emit(value);
  }

  async loadGenres(): Promise<void> {
    await this.fetchJson.fetchMovieGenres().toPromise().then((genres: string[]) => {
      this.movieGenres = genres;
    });
  }

}
