import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './components/home-page/home-page.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesTopBarComponent } from './components/movies-top-bar/movies-top-bar.component';
import { MoviesSidebarComponent } from './components/movies-sidebar/movies-sidebar.component';
import { MoviesContentComponent } from './components/movies-content/movies-content.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ChipComponent } from './components/chip/chip.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { LoginComponent } from './components/login/login.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { NgxStarsModule } from 'ngx-stars';

// Register the locale information 'fr' and 'it'
// Used to present movie release date in french and italian in the movie-details component
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeIt from "@angular/common/locales/it";
import { MovieRatingComponent } from './components/movie-rating/movie-rating.component';
import { MoviePicturesComponent } from './components/movie-pictures/movie-pictures.component';
registerLocaleData(localeFr, 'fr');
registerLocaleData(localeIt, 'it');

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MoviesComponent,
    MoviesTopBarComponent,
    MoviesSidebarComponent,
    MoviesContentComponent,
    MovieCardComponent,
    SearchbarComponent,
    ChipComponent,
    MovieDetailsComponent,
    LoginComponent,
    CheckboxComponent,
    MovieRatingComponent,
    MoviePicturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageFullscreenViewModule,
    NgxStarsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
