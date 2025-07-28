import { Component } from '@angular/core';
import {MovieDetailsCard} from '../../components/movie-details-card/movie-details-card';

@Component({
  selector: 'app-movie-details',
  imports: [
    MovieDetailsCard
  ],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss'
})
export class MovieDetails {

}
