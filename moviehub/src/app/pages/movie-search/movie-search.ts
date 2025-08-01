import {Component, inject, OnInit, signal} from '@angular/core';
import {MovieSearchCard} from '../../components/movie-search-card/movie-search-card';
import {MovieService} from '../../services/movie-service';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from "rxjs";

@Component({
  selector: 'app-movie-search',
  imports: [
    MovieSearchCard
  ],
  templateUrl: './movie-search.html',
  styleUrl: './movie-search.scss'
})
export class MovieSearch implements OnInit {
  protected _movieService = inject(MovieService)
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);

  ngOnInit(): void {
    this._route.params.pipe(
        switchMap(params => {
          const title = params['title'];
          return this._movieService.searchMovie(title);
        })
    ).subscribe();
  }


  selectMovie(imdbId: string) {
    this._movieService.getMovieDetails(imdbId).pipe().subscribe({
      next: () => {
        this._router.navigate(['/movie-details/',imdbId]);
      },
      error: err => {
        console.error('Falha ao obter detalhes do filme. A navegação foi cancelada.', err);
      }
    });

  }
}
