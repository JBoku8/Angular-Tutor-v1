import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ArticleModule } from './articles/article.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './products/product.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './core/pagenotfound/pagenotfound.component';

import { ArticleResolverService } from './articles/article-resolver.service';
import { LogResponseInterceptor } from './core/log-response.interceptor';
import { CacheInterceptor } from './core/cache.interceptor';
import { AddAuthTokenInterceptor } from './core/add-auth-token.interceptor';

// tree shaking
@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddAuthTokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogResponseInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
