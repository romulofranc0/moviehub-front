import {inject, Injectable} from '@angular/core';
import {AuthService} from '../../services/auth-service';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
  }
)
export class AuthInterceptor implements HttpInterceptor {
  private _authService= inject(AuthService);

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this._authService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: token
        }
      })
    }
    return next.handle(request);
  }



}
