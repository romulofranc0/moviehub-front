import {Component, input} from '@angular/core';
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
  //movie = input<MovieSearchResponse>();

  movie: MovieSearchResponse = {
    title: "Drive",
    year: "2011",
    type: "movie",
    imdbID: "tt0780504",
    poster: "https://m.media-amazon.com/images/M/MV5BYTFmNTFlOTAtNzEyNi00MWU2LTg3MGEtYjA2NWY3MDliNjlkXkEyXkFqcGc@._V1_SX300.jpg"
  };

}
