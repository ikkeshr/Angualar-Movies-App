import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-movies-content',
  templateUrl: './movies-content.component.html',
  styleUrls: ['./movies-content.component.scss']
})
export class MoviesContentComponent implements OnInit {

  @Input() title: string;
  movieCard = {
    title: "The Wailing",
    genre: "Mystery, Thriller",
    picUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0UCnlXifoMjR3VMcz13_wZYcnsvKOy0Xm3kl0G_HEIC4Z5Zm-",
    rating: 8.0
  }

  skeletonFill: any = [];

  constructor() {
    this.skeletonFill = new Array(7).fill(0);
  }

  ngOnInit(): void {
  }
  

}
