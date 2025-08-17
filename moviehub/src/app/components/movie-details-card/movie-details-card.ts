import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Card} from 'primeng/card';
import {Button} from 'primeng/button';
import {Rating} from 'primeng/rating';
import {FormsModule} from '@angular/forms';
import {MovieDetailsResponse} from '../../models/movie-details-response';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-movie-details-card',
  imports: [
    Card,
    Button,
    FormsModule
  ],
  templateUrl: './movie-details-card.html',
  styleUrl: './movie-details-card.scss'
})
export class MovieDetailsCard {
  private _router= inject(Router);
  private _activeRoute = inject(ActivatedRoute);

  @Input() movie!: MovieDetailsResponse;
  @Output() reviewEnabled = new EventEmitter<boolean>();

  enableReviewMode() {
    this.reviewEnabled.emit(true);
  }

}
