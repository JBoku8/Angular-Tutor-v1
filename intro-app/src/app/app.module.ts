import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { Dashboard } from './dashboard/dashboard.component';
import { ProductList } from './product/product-list.component';
import { ConvertToSpace } from './shared/pipes/convertToSpace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    Dashboard,
    ProductList,
    ConvertToSpace,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
