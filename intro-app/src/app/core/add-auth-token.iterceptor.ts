import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AddAuthTokenInterceptor implements HttpInterceptor {
  constructor(private storage: LocalStorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.info('AddAuthTokenInterceptor', req.url);

    if (this.storage.exists('auth-token')) {
      const clonedReq: HttpRequest<any> = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.storage.get('auth-token')}`,
        },
      });

      return next.handle(clonedReq);
    }
    return next.handle(req);
  }
}
