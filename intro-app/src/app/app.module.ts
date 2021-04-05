import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { StoreModule } from '@ngrx/store';

import { ArticleModule } from './articles/article.module';
import { AuthModule } from './auth/auth.module';
import { PublicModule } from './public/public.module';
// import { ProductModule } from './products/product.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './core/pagenotfound/pagenotfound.component';

import { ArticleResolverService } from './articles/article-resolver.service';
import { LogResponseInterceptor } from './core/log-response.interceptor';
import { CacheInterceptor } from './core/cache.interceptor';
import { AddAuthTokenInterceptor } from './core/add-auth-token.interceptor';

import { firebaseConfig } from '../firebaseConfig';

// reducer
import { counterReducer } from './home/state/counter.reducer';
import { languageReducer } from './ngrx/state/language.reducer';

// tree shaking
@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    PublicModule,
    CoreModule,
    ArticleModule,
    AuthModule,
    StoreModule.forRoot(
      {
        counter: counterReducer,
        app: languageReducer,
      },
      {}
    ),
    RouterModule.forRoot([
      {
        path: 'products',
        loadChildren: () =>
          import('./products/product.module').then((m) => m.ProductModule),
      },
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
