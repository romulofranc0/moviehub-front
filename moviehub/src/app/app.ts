import { Component, signal } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {Navbar} from './components/navbar/navbar';
import {RouterOutlet} from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, Navbar, RouterOutlet],
  providers: [MessageService],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('moviehub');
}
