import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { Dashboard } from './dashboard/dashboard.component';
import { ProductList } from './product/product-list.component';
import { ConvertToSpace } from './shared/pipes/convertToSpace.pipe';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    Dashboard,
    ProductList,
    ConvertToSpace,
    RatingComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
