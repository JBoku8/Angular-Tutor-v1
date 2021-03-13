import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { IArticle, IArticleResponse, IArticleResponseError } from './article';
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
  constructor(
    private _articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.loadArticles();
    const result: IArticleResponse = this.route.snapshot.data[
      'articlesResponse'
    ];

    this.articles = result.articles;
  }

  private loadArticles() {
    const query: string = new URLSearchParams(
      this.filterData as any
    ).toString();
    this._articleService.getArticlesCustom(query).subscribe(
      (response: IArticle[]) => {
        this.articles = response;
      },
      (err: IArticleResponseError) => {}
    );
  }

  onSubmit(form: NgForm) {
    this.loadArticles();
  }
}
