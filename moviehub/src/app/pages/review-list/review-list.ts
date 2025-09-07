import {Component, inject, OnInit} from '@angular/core';
import {ReviewService} from '../../services/review-service';
import {ReviewResponse} from '../../models/review-response';
import {MovieReviewDetails} from '../../components/movie-review-details/movie-review-details';
import {MovieDetailsResponse} from '../../models/movie-details-response';


@Component({
  selector: 'app-review-list',
  imports: [
    MovieReviewDetails
  ],
  templateUrl: './review-list.html',
  styleUrl: './review-list.scss'
})
export class ReviewList implements OnInit {
  private _reviewService = inject(ReviewService);

  reviews:ReviewResponse[] = [];
  movie:MovieDetailsResponse | null = null;

  ngOnInit(): void {
    this._reviewService.listAllReviews().subscribe({
      next: response => {
          this.reviews = response;
          this.movie = response.movieResponse;
      }
    })
  }

  onRemoveReview(reviewId: number) {

    this.reviews = this.reviews.filter(r => r.reviewId !== reviewId);
  }


}
