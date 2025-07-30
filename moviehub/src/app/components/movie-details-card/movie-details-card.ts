import {Component, Input} from '@angular/core';
import {Card} from 'primeng/card';
import {Button} from 'primeng/button';
import {Rating} from 'primeng/rating';
import {FormsModule} from '@angular/forms';
import {MovieDetailsResponse} from '../../models/movie-details-response';

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
  @Input() movie!: MovieDetailsResponse;
  rating: any;


}
