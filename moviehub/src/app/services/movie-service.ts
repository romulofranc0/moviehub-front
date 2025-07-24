import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../envinronments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private _http = inject(HttpClient);
  private _url = environment.apiUrl;

  searchMovie(movieTitle: string): Observable<any> {
    const params = new HttpParams()
      .set('title', movieTitle);

    return this._http.get<any>(`${this._url}"movie/search`, { params })
  }

}
