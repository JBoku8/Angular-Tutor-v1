import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PublicModule } from '../public/public.module';

import { RatingComponent } from '../shared/rating/rating.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';

import { AuthGuard } from '../auth.guard';
import { ConvertToSpace } from '../shared/pipes/convertToSpace.pipe';

@NgModule({
  declarations: [
    ConvertToSpace,
    ProductListComponent,
    RatingComponent,
    ProductAddComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PublicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'add',
        component: ProductAddComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'edit/:productId',
        component: ProductEditComponent,
        canActivate: [AuthGuard],
      },
    ]),
  ],
})
export class ProductModule {}
