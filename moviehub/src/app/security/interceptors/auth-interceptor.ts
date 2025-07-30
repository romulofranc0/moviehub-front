import {inject} from '@angular/core';
import {AuthService} from '../../services/auth-service';
import {HttpInterceptorFn} from '@angular/common/http';
import {catchError, throwError} from 'rxjs';
import {Router} from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (req.url.includes('auth/login') || req.url.includes('auth/register')) {
    return next(req);
  }

  const token = authService.getToken();
  let authReq = req;

  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`

  }
    });
  }

    return next(authReq).pipe(
    catchError(error => {
      if (error.status === 401 || error.status === 403) {
        authService.logout();
        router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
};
