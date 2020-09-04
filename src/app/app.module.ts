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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MoviesComponent,
    MoviesTopBarComponent,
    MoviesSidebarComponent,
    MoviesContentComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
