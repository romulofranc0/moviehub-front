import {inject, Injectable, signal} from '@angular/core';
import {Observable, tap} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../envinronments/environment';
import {MovieSearchResponse} from "../models/movie-search-response";
import {MovieDetailsResponse} from "../models/movie-details-response";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private _http = inject(HttpClient);
  private _router = inject(Router);
  private _url = environment.apiUrl;

  public readonly moviesResponse = signal<MovieSearchResponse[]>([])
  public readonly selectedMovie = signal<MovieDetailsResponse | null >(null)

  searchMovie(movieTitle: string): Observable<any> {
    this.moviesResponse.set([])
    const params = new HttpParams()
      .set('title', movieTitle);

    return this._http.get<any>(`${this._url}movie/search`, { params }).pipe(
        tap(response => this.moviesResponse.set(response))
    );
  }

  getMovieDetails(imdbId:string): Observable<any> {

    this.selectedMovie.set(null)
    const params = new HttpParams()
      .set('imdbId', imdbId)

    return this._http.get<any>(`${this._url}movie`, { params }).pipe(
        tap(response => {
          this.selectedMovie.set(response)
        })
    )
  }

}
