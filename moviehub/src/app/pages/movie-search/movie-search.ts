import {Component, signal} from '@angular/core';
import {MovieCard} from '../../components/movie-card/movie-card';
import {MovieResponse} from '../../models/movie-response';

@Component({
  selector: 'app-movie-search',
  imports: [
    MovieCard
  ],
  templateUrl: './movie-search.html',
  styleUrl: './movie-search.scss'
})
export class MovieSearch {
  private _movies = signal<MovieResponse[]>([]);

}
