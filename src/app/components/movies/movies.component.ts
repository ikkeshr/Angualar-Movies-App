import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  textFromSideMenu: string;

  constructor() {
  }

  ngOnInit(): void {
    this.textFromSideMenu="New Releases";
  }

  setTextFromSideMenu(text: string) {
    this.textFromSideMenu = text;
  }

}
