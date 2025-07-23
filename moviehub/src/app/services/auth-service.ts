import {Injectable} from '@angular/core';
import {Observable, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CreateUserRequest} from '../models/create-user-request';
import {LoginUserRequest} from '../models/login-user-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  registerUser(userRequest:CreateUserRequest):Observable<any> {

    return this.http.post('http://localhost:8080/api/auth/register', userRequest)
  }


  loginUser(userRequest: LoginUserRequest) {

    return this.http.post<{token:string}>('http://localhost:8080/api/auth/login', userRequest).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
      })
    )
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  logout() {
    localStorage.removeItem('auth_token');
  }
}
