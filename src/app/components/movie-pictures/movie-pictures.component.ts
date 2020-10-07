import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchJsonService } from '../../services/fetch-json.service';

@Component({
  selector: 'app-movie-pictures',
  templateUrl: './movie-pictures.component.html',
  styleUrls: ['./movie-pictures.component.scss']
})
export class MoviePicturesComponent implements OnInit {

  currentIndex: any = -1;
  showFlag: boolean = false;
  imageObject: Array<object> = [];

  constructor(
    private route: ActivatedRoute,
    private fetchJson: FetchJsonService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // console.log(params);
      this.loadImages(params.id);
    });
  }

  loadImages(movieId: number) {
    this.fetchJson.getMovieImages(movieId).subscribe(response => {
      // this.imagesUrl = response;
      this.imageObject = response;
    });
  }

  showLightbox(index) {
    this.currentIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
    this.showFlag = false;
    this.currentIndex = -1;
  }

}
