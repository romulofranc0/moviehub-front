export interface ReviewRequest {
  imdbId: string;
  rating: number;
  reviewText: string;
  watchDate: Date | undefined;
}
