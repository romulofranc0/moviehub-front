import { Component } from '@angular/core';
import {MovieReviewDetails} from "../../components/movie-review-details/movie-review-details";

@Component({
  selector: 'app-review',
  imports: [
    MovieReviewDetails
  ],
  templateUrl: './review.html',
  styleUrl: './review.scss'
})
export class Review {

}