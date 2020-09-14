import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  @Output() searchMovieTitle = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  search(event: any) {
    // console.log(event.target.value);
    this.searchMovieTitle.emit(event.target.value);
  }

}
