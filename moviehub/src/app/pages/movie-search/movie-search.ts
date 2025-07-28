import {Component, signal} from '@angular/core';
import {MovieSearchCard} from '../../components/movie-search-card/movie-search-card';
import {MovieSearchResponse} from '../../models/movie-search-response';

@Component({
  selector: 'app-movie-search',
  imports: [
    MovieSearchCard
  ],
  templateUrl: './movie-search.html',
  styleUrl: './movie-search.scss'
})
export class MovieSearch {
  private _movies = signal<MovieSearchResponse[]>([]);



}
