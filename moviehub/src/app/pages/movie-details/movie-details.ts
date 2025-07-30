import {Component, inject, OnInit} from '@angular/core';
import {MovieDetailsCard} from '../../components/movie-details-card/movie-details-card';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../services/movie-service';
import {MovieDetailsResponse} from '../../models/movie-details-response';

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
    this.imdbId = this._route.snapshot.paramMap.get('imdbId')!;
    this._movieService.getMovieDetails(this.imdbId).subscribe({
      next: (result) => {
        this.movie = result;
      }
    })
  }


}
