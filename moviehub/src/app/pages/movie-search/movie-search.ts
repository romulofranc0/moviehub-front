import {Component, inject, OnInit, signal} from '@angular/core';
import {MovieSearchCard} from '../../components/movie-search-card/movie-search-card';
import {MovieSearchResponse} from '../../models/movie-search-response';
import {MovieService} from '../../services/movie-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-search',
  imports: [
    MovieSearchCard
  ],
  templateUrl: './movie-search.html',
  styleUrl: './movie-search.scss'
})
export class MovieSearch implements OnInit {
  private _movieService = inject(MovieService)
  private _route = inject(ActivatedRoute);


  public movieSearchResults: MovieSearchResponse[] = [];

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._movieService.searchMovie(params['title']).subscribe({
        next: result => {
          this.movieSearchResults = result;
        }
        }

      )
    })
  }




}
