import {Component, inject, signal} from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {Button} from 'primeng/button';
import {MovieService} from '../../services/movie-service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-home',
  imports: [
    InputText,
    Button,
    FormsModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  private _router = inject(Router);

  title!: string;

  searchMovie() {
      this._router.navigate(["/movie-search", this.title]);
  }

}
