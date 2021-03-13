import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { API_KEY } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class ArticleHeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.info('ArticleHeaderInterceptor', req.url);
    const clonedReq: HttpRequest<any> = req.clone({
      setHeaders: {
        // Authorization: API_KEY,
        'X-Api-Key': API_KEY,
      },
    });

    return next.handle(clonedReq);
  }
}
