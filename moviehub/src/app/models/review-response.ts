import {MovieDetailsResponse} from './movie-details-response';

export interface ReviewResponse {
  reviewId: number;
  imdbId: string;
  rating: number;
  reviewText: string;
  watchDate: Date;
  movieResponse: MovieDetailsResponse;
}
