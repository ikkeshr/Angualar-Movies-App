import { Component, OnInit, Input } from '@angular/core';
import {SimpleChanges} from '@angular/core';
import {Movie} from '../../dto/movie';

@Component({
  selector: 'app-movies-content',
  templateUrl: './movies-content.component.html',
  styleUrls: ['./movies-content.component.scss']
})
export class MoviesContentComponent implements OnInit {

  @Input() title: string;
  @Input('moviesToDisplay') moviesToDisplay: Movie[] = []; 



  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.moviesToDisplay);
  }
  

}
