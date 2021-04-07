import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterForm } from '../data/filter-form-shape.interface';

import {
  IArticle,
  IArticleResponse,
  IArticleResponseError,
} from './shared/article';
import { ArticleService } from './article.service';
import {
  getArticlesStateSelector,
  getArticlesSelector,
} from './state/article.selectors';
import { setArticlesAction } from './state/article.actions';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit, OnChanges, OnDestroy {
  articles: IArticle[] = [];
  filterData: FilterForm = this._articleService.filterData;

  constructor(
    private _articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {
    this.store.select(getArticlesStateSelector).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
    const result: IArticleResponse = this.route.snapshot.data[
      'articlesResponse'
    ];

    this.articles = result.articles;

    this.store.dispatch(setArticlesAction({ articles: result.articles }));
  }

  ngOnChanges(): void {
    console.log('CHANGES');
  }
  ngOnDestroy(): void {
    console.log('Destroy');
  }

  private loadArticles() {
    const query: string = new URLSearchParams(
      this.filterData as any
    ).toString();

    this.router.navigate([], {
      queryParamsHandling: 'merge',
      replaceUrl: true,
      queryParams: this.filterData,
    });

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
