import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { ArticlesComponent } from './articles.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleResolverService } from './article-resolver.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ArticleHeaderInterceptor } from './add-header.interceptor.service';
import { AuthGuard } from '../auth.guard';
import { articleReducer } from './state/article.reducer';

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleCardComponent,
    ArticleDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('articles', articleReducer),
    RouterModule.forChild([
      {
        path: 'articles/:title',
        component: ArticleDetailComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'articles',
        component: ArticlesComponent,
        resolve: {
          articlesResponse: ArticleResolverService,
        },
        canActivate: [AuthGuard],
      },
    ]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ArticleHeaderInterceptor,
      multi: true,
    },
  ],
  exports: [ArticlesComponent],
})
export class ArticleModule {}
