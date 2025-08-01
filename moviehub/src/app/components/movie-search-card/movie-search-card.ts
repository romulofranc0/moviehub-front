import {Component, Input, input} from '@angular/core';
import {Card} from 'primeng/card';
import {MovieSearchResponse} from '../../models/movie-search-response';

@Component({
  selector: 'app-movie-search-card',
  imports: [
    Card
  ],
  templateUrl: './movie-search-card.html',
  styleUrl: './movie-search-card.scss'
})
export class MovieSearchCard {
  @Input() movie!: MovieSearchResponse;

  movieSelected($event: MouseEvent) {

  }
}
