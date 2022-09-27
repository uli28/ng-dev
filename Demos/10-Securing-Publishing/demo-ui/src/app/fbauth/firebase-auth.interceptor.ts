import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { FirebaseAuthService } from './firebase-auth.service';

@Injectable()
export class FirebaseAuthInterceptor implements HttpInterceptor {
  private token = this.as.getToken();

  constructor(private as: FirebaseAuthService) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.token.pipe(
      switchMap((token) => {
        if (token != '') {
          const authReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`),
          });
          return next.handle(authReq);
        } else {
          return next.handle(req);
        }
      })
    );
  }
}
