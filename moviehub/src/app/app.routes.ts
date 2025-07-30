import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Login} from './pages/login/login';
import {Register} from './pages/register/register';
import {MovieSearch} from './pages/movie-search/movie-search';
import {MovieDetails} from './pages/movie-details/movie-details';

export const routes: Routes = [
  {
    path:"",
    component:Home
  },
  {
  path:"login",
  component:Login
  },
  {
    path:"register",
    component:Register
  },
  {
    path:"home",
    component:Home
  },
  {
    path:"movie-search/:title",
    component:MovieSearch
  },
  {
    path:"movie-details/:imdbId",
    component:MovieDetails
  }
];
