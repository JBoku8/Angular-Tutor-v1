import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list.component';
import { ConvertToSpace } from '../shared/pipes/convertToSpace.pipe';
import { RatingComponent } from '../shared/rating/rating.component';
import { AuthGuard } from '../auth.guard';

@NgModule({
  declarations: [ConvertToSpace, ProductListComponent, RatingComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductListComponent,
        canActivate: [AuthGuard],
      },
    ]),
  ],
})
export class ProductModule {}
