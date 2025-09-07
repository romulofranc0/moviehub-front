import {Component, inject, OnInit} from '@angular/core';
import {MovieDetailsCard} from '../../components/movie-details-card/movie-details-card';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../services/movie-service';
import {MovieDetailsResponse} from '../../models/movie-details-response';
import {switchMap} from 'rxjs';
import {MovieReview} from "../../components/movie-review-create/movie-review";
import {MovieReviewDetails} from '../../components/movie-review-details/movie-review-details';

@Component({
  selector: 'app-movie-details',
  imports: [
    MovieDetailsCard,
    MovieReview,
    MovieReviewDetails
  ],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss'
})
export class MovieDetails implements OnInit {
  private _movieService = inject(MovieService);
  private _route = inject(ActivatedRoute);
  movie!: MovieDetailsResponse;

  imdbId!: string;
  createReviewEnabled: boolean = false;
  showMovieDetails: boolean = true;
  reviewExists: boolean = false;

  ngOnInit() {
    this._route.params.pipe(
      switchMap(params => {
        const imdbId = params['imdbId']

        return this._movieService.getMovieDetails(imdbId);
      })
    ).subscribe({
      next: result => {
        this.movie = result;
      }
    });
  }

  isReviewEnabled($event: boolean) {
    this.createReviewEnabled = $event;
  }

  isMovieDetailsEnabled($event: boolean) {
    this.showMovieDetails = $event;
  }

  isReviewExists($event: boolean) {
    this.reviewExists = $event;
  }
}
