import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

import { IArticleResponse, IArticle, IArticleResponseError } from './article';
import { FilterForm } from '../data/filter-form-shape.interface';

import { BASE_API_URL } from '../../config';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  public filterData: FilterForm = {
    page: 1,
    pageSize: 20,
    qInTitle: 'google',
  };
  private baseUrl: string = BASE_API_URL;

  constructor(private http: HttpClient) {}

  getArticles(
    query: string
  ): Observable<IArticleResponse | IArticleResponseError> {
    return this.http
      .get<IArticleResponse>(`${this.baseUrl}/everything?${query}`)
      .pipe(catchError((err) => this.handleError(err)));
  }

  getArticlesCustom(query: string): Observable<IArticle[]> {
    return this.http
      .get<IArticleResponse>(`${this.baseUrl}/everything?${query}`)
      .pipe(
        map((data: IArticleResponse) => {
          return data.articles.map((article) => article);
        })
      );
    // catchError((err) => this.handleError(err))
  }

  getArticle(articleTitle: string): Observable<IArticleResponse> {
    return this.http.get<IArticleResponse>(
      `${this.baseUrl}/everything?&qInTitle=${articleTitle}&pageSize=1&page=1`
    );
  }

  private handleError(
    error: HttpErrorResponse
  ): Observable<IArticleResponseError> {
    const errorMessage: IArticleResponseError = {};

    errorMessage.status = error.status;
    errorMessage.friendlyMessage =
      'Something went wrong, please try again, later';
    errorMessage.message = error.statusText;

    // console.error('handleError', errorMessage);
    return throwError(errorMessage);
  }
}
