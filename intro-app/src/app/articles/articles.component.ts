import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IArticle, IArticleResponse } from './article';
import { ArticleService } from './article.service';
import { FilterForm } from '../data/filter-form-shape.interface';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles: IArticle[] = [];
  filterData: FilterForm = {
    page: 1,
    pageSize: 20,
    qInTitle: 'google',
  };
  constructor(private _articleService: ArticleService) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  private loadArticles() {
    // @ts-ignore
    const query: string = new URLSearchParams(this.filterData).toString();
    this._articleService
      .getArticles(query)
      .subscribe((response: IArticleResponse) => {
        if ((response.status = 'ok')) {
          this.articles = response.articles;
        }
      });
  }

  onSubmit(form: NgForm) {
    this.loadArticles();
  }
}
