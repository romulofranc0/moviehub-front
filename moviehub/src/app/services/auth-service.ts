import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CreateUserRequest} from '../models/create-user-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  registerUser(userRequest:CreateUserRequest):Observable<any> {

    return this.http.post('http://localhost:8080/api/auth/register', userRequest)
  }


}
