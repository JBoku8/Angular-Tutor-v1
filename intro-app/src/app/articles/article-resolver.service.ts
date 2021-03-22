import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
    const page: any =
      route.queryParamMap.get('page') || this._articleService.filterData.page;
    const pageSize: any =
      route.queryParamMap.get('pageSize') ||
      this._articleService.filterData.pageSize;
    const qInTitle: any =
      route.queryParamMap.get('qInTitle') ||
      this._articleService.filterData.qInTitle;
    const sortBy: any = route.queryParamMap.get('sortBy') || null;
    const from: any = route.queryParamMap.get('from') || null;
    const to: any = route.queryParamMap.get('to') || null;

    const filterData: FilterForm = {
      page,
      pageSize,
      qInTitle,
      sortBy,
      from,
      to,
    };
    this._articleService.filterData = filterData;

    const query: string = new URLSearchParams(filterData as any).toString();
    return this._articleService
      .getArticles(query)
      .pipe(catchError((err) => of(err)));
  }
}
