import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { catchError, of } from 'rxjs/operators';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { IArticleResponse, IArticleResponseError } from './article';
import { ArticleService } from './article.service';
import { FilterForm } from '../data/filter-form-shape.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticleResolverService
  implements Resolve<IArticleResponse | IArticleResponseError> {
  constructor(private _articleService: ArticleService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IArticleResponse | IArticleResponseError> {
    const filterData: FilterForm = {
      page: 1,
      pageSize: 20,
      qInTitle: 'google',
    };
    const query: string = new URLSearchParams(filterData as any).toString();
    return this._articleService.getArticles(query);
    //   .pipe(catchError((err) => of(err)));
  }
}
