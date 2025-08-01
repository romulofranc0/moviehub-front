import {Component, inject, OnInit} from '@angular/core';
import {MovieDetailsCard} from '../../components/movie-details-card/movie-details-card';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../services/movie-service';
import {MovieDetailsResponse} from '../../models/movie-details-response';
import {switchMap} from 'rxjs';

@Component({
  selector: 'app-movie-details',
  imports: [
    MovieDetailsCard
  ],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss'
})
export class MovieDetails implements OnInit {
  private _movieService = inject(MovieService);
  private _route = inject(ActivatedRoute);
  movie!: MovieDetailsResponse;

  imdbId!: string;

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


}
