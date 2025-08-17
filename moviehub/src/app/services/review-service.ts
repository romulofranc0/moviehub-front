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

    return this._http.post('http://localhost:8080/api/review', reviewRequest)
  }

}
