import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Card} from 'primeng/card';
import {Button} from 'primeng/button';
import {Rating} from 'primeng/rating';
import {FormsModule} from '@angular/forms';
import {MovieDetailsResponse} from '../../models/movie-details-response';
import {ActivatedRoute, Router} from '@angular/router';
import {ReviewService} from "../../services/review-service";


@Component({
  selector: 'app-movie-details-card',
  imports: [
    Card,
    Button,
    FormsModule
  ],
  templateUrl: './movie-details-card.html',
  styleUrl: './movie-details-card.scss'
})
export class MovieDetailsCard {
  private _reviewService= inject(ReviewService);
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);

  @Input() movie!: MovieDetailsResponse;
  @Output() createReviewEnabled = new EventEmitter<boolean>();
  @Output() reviewExists = new EventEmitter<boolean>();
  @Output() showMovieDetails = new EventEmitter<boolean>();

  verifyExistingReview() {
    this._reviewService.verifyReview(this._route.snapshot.params['imdbId']).subscribe({
      next: (result) => {

          this.reviewExists.emit(result);
          this.createReviewEnabled.emit(!result);
          this.showMovieDetails.emit(false);

      },error:() =>{

      }
    })
  }

}
