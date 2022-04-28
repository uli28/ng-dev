import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoadingService } from './shared/loading/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  public constructor(private ls: LoadingService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.ls.setLoading();
    return next
      .handle(request)
      .pipe(
        catchError((err) => {
          this.ls.clearLoading();
          return err;
        })
      )
      .pipe(
        map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
          if (evt instanceof HttpResponse) {
            this.ls.clearLoading();
          }
          return evt;
        })
      );
  }
}
