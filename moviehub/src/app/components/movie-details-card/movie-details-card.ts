import { Component } from '@angular/core';
import {MovieDetailsResponse} from '../../models/movie-details-response';
import {Card} from 'primeng/card';
import {Button} from 'primeng/button';
import {Rating} from 'primeng/rating';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-movie-details-card',
  imports: [
    Card,
    Button,
    Rating,
    FormsModule
  ],
  templateUrl: './movie-details-card.html',
  styleUrl: './movie-details-card.scss'
})
export class MovieDetailsCard {
  public movie: MovieDetailsResponse = {
    title: "Drive",
    director: "Nicolas Winding Refn",
    plot: "This action drama follows a mysterious man who has multiple jobs as a garage mechanic, a Hollywood stuntman and a getaway driver seems to be trying to escape his shady past as he falls for his neighbor - whose husband is in prison and who's looking after her child alone. Meanwhile, his garage mechanic boss is trying to set up a race team using gangland money, which implicates our driver as he is to be used as the race team's main driver. Our hero gets more than he bargained for when he meets the man who is married to the woman he loves.",
    year: "2011",
    genre: "Action, Drama",
    imdbID: "tt0780504",
    imdbRating: 7.9,
    poster: "https://m.media-amazon.com/images/M/MV5BYTFmNTFlOTAtNzEyNi00MWU2LTg3MGEtYjA2NWY3MDliNjlkXkEyXkFqcGc@._V1_SX300.jpg"
  };
  rating: any;

}
