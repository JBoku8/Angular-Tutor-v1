import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IArticleResponse } from './article';

import { BASE_API_URL, API_KEY } from '../../config';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private baseUrl: string = BASE_API_URL;
  private apiKey: string = API_KEY;

  constructor(private http: HttpClient) {}

  getArticles(): Observable<IArticleResponse> {
    return this.http.get<IArticleResponse>(
      `${this.baseUrl}/everything?apiKey=${this.apiKey}&q=Apple&pageSize=18&page=1`
    );
  }
  // getArticle(articleId: number): Observable<IArticle> {
  //   return this.http.get<IArticle>(`${this.baseUrl}/posts/${articleId}`);
  // }
}
