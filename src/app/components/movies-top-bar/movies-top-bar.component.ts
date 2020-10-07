import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { TranslationConf } from '../../configurations/translation-conf';

@Component({
  selector: 'app-movies-top-bar',
  templateUrl: './movies-top-bar.component.html',
  styleUrls: ['./movies-top-bar.component.scss']
})
export class MoviesTopBarComponent implements OnInit {

  @Output() searchMovieTitle = new EventEmitter<string>();
  @Output() selectedTrending = new EventEmitter<string>();
  @Input('trendItemSelected') trendItemSelected: string;
  @Input('showSearch') showSearch: boolean = true;

  dropSettings: boolean = false;
  showLanguages: boolean = false;
  translationLanguages: string[];

  constructor(
    private router: Router,
    private translate: TranslateService,
    private route: ActivatedRoute
  ) {
    this.translationLanguages = new TranslationConf().getLanguages();
    // this.route.params.subscribe(params => {
    //   console.log(params);
      
    // });
  }

  ngOnInit(): void {
    
  }

  toggleSettings(): void {
    this.dropSettings = !this.dropSettings;
  }

  searchMovieByTitle(movieTitle: string): void {
    // this.searchMovieTitle.emit(movieTitle);
    this.router.navigate([`/search/${movieTitle}`]);
  }

  showTrending(value: string): void {
    this.trendItemSelected = value;
    this.router.navigate([`/trend/${value}`]);
  }

  toggleLanguages(): void {
    this.showLanguages = !this.showLanguages;
  }

  changeLanguage(lang: string): void {
    this.translate.setDefaultLang(lang);
    localStorage.setItem("language", lang);
  }

  logout(): void {
    this.dropSettings = false;
    // localStorage.removeItem("token");
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
