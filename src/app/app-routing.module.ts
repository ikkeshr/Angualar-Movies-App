import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './guards/auth.guard';
import { MoviesContentComponent } from './components/movies-content/movies-content.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: MoviesComponent, canActivate: [AuthGuard], 
    children: [
      {path: 'genre/:genre', component: MoviesContentComponent},
      {path: 'trend/:trend', component: MoviesContentComponent},
      {path: 'search/:query', component: MoviesContentComponent},
      {path: 'movie/:id', component: MovieDetailsComponent}
    ]  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
