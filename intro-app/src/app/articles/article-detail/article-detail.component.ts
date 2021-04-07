import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle, IArticleResponse } from '../shared/article';
import { ArticleService } from '../article.service';
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent implements OnInit {
  pageTitle: string = 'Article Detail';
  article?: IArticle;
  constructor(
    private route: ActivatedRoute,
    private _articleService: ArticleService
  ) {}

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    if (title) {
      this._articleService
        .getArticle(title)
        .subscribe((data: IArticleResponse) => {
          this.article = data.articles[0];
        });
    }
  }
}
