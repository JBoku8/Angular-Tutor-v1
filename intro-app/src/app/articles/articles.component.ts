import { Component, OnInit, OnDestroy } from '@angular/core';

import { ArticleService } from './article.service';

import { IArticle, IArticleResponse } from './article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles: IArticle[] = [];
  constructor(private _articleService: ArticleService) {}

  ngOnInit(): void {
    this._articleService
      .getArticles('apple', 30, 1)
      .subscribe((response: IArticleResponse) => {
        if ((response.status = 'ok')) {
          this.articles = response.articles;
        }
      });
  }
}
