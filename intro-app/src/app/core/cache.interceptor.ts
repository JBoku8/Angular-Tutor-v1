import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { HttpCacheService } from './http-cache.service';

@Injectable({
  providedIn: 'root',
})
export class CacheInterceptor implements HttpInterceptor {
  constructor(private cacheService: HttpCacheService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    /**
     * !HTTP VERBS
     * * GET - CACHED
     * * POST, PUT, PATCH, DELETE - NO CACHE
     */
    if (req.method !== 'GET') {
      console.log('CacheInterceptor invalidating cache', `url ${req.url}`);
      this.cacheService.invalidateCache();
      return next.handle(req);
    }

    const cachedResponse: HttpResponse<any> | undefined = this.cacheService.get(
      req.url
    );
    if (cachedResponse) {
      console.log('Cached response url', cachedResponse.url);
      console.log(cachedResponse);
      return of(cachedResponse);
    }

    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          console.log('Caching response for the ', req.url);
          this.cacheService.put(req.url, event);
        }
      })
    );
  }
}
