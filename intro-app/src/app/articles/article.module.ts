import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ArticlesComponent } from './articles.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleCardComponent,
    ArticleDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'articles',
        component: ArticlesComponent,
      },
      {
        path: 'articles/:title',
        component: ArticleDetailComponent,
      },
    ]),
  ],
  exports: [ArticlesComponent],
})
export class ArticleModule {}
