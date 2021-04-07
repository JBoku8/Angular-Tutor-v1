import { createAction, props } from '@ngrx/store';
import { IProduct } from '../shared/product';

export const editProductAction = createAction(
  '[Products Edit Product]',
  props<{ product: IProduct }>()
);

export const setProductsAction = createAction(
  '[Products Set Products List]',
  props<{ data: IProduct[] }>()
);
