import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CreateUserRequest} from '../models/create-user-request';
import {LoginUserRequest} from '../models/login-user-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  private _http = inject(HttpClient);

  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  registerUser(userRequest:CreateUserRequest):Observable<any> {

    return this._http.post('http://localhost:8080/api/auth/register', userRequest)
  }


  loginUser(userRequest: LoginUserRequest) {

    return this._http.post<{token:string}>('http://localhost:8080/api/auth/login', userRequest).pipe(
      tap(response => {
        localStorage.removeItem('token');
        localStorage.setItem('token', response.token);
        this.isLoggedInSubject.next(true);
      })
    )
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
  }
}
