import {Component, inject} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../services/auth-service';

@Component({
  selector: 'app-navbar',
  imports: [
    ButtonModule,
    RouterLink,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  private _router = inject(Router);
  isLoggedIn = false;

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn$.subscribe(value => {
      this.isLoggedIn = value;
    });
  }

  logout() {
    this.authService.logout();
    this._router.navigate(["/home"]);
  }

}
