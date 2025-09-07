import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../envinronments/environment';
import {ReviewRequest} from '../models/review-request';
import {Observable} from 'rxjs';

@Injectable(
 {providedIn: 'root'}
)
export class ReviewService {
  private _http = inject(HttpClient);
  private _url = environment.apiUrl;

  saveReview(reviewRequest: ReviewRequest): Observable<any> {

    return this._http.post('http://localhost:8080/api/reviews', reviewRequest)
  }

  getReviewByImdbId(imdbId:string):Observable<any> {
    return this._http.get(`http://localhost:8080/api/reviews/imdb/${imdbId}`);
  }

  verifyReview(imdbId: string): Observable<boolean> {
    return this._http.get<boolean>(`http://localhost:8080/api/reviews/verify/${imdbId}`);
  }

  deleteReview(reviewId:number):Observable<any> {
    return this._http.delete(`http://localhost:8080/api/reviews/${reviewId}`);
  }


}
