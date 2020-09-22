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

import { HttpClientModule } from '@angular/common/http';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ChipComponent } from './components/chip/chip.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

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
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
