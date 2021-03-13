import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ArticleModule } from './articles/article.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './products/product.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ArticleResolverService } from './articles/article-resolver.service';
import { ArticleHeaderInterceptor } from './articles/add-header.interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ArticleModule,
    AuthModule,
    ProductModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
        resolve: {
          articlesResponse: ArticleResolverService,
        },
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
