import {Component, input} from '@angular/core';
import {Card} from 'primeng/card';
import {MovieResponse} from '../../models/movie-response';

@Component({
  selector: 'app-movie-card',
  imports: [
    Card
  ],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss'
})
export class MovieCard {
  movie = input<MovieResponse>

}
