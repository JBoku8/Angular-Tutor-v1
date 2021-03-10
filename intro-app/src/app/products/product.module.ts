import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list.component';
import { ConvertToSpace } from '../shared/pipes/convertToSpace.pipe';
import { RatingComponent } from '../rating/rating.component';

@NgModule({
  declarations: [ConvertToSpace, ProductListComponent, RatingComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'products',
        component: ProductListComponent,
      },
    ]),
  ],
})
export class ProductModule {}
