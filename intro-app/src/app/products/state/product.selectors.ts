import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

export const getProductsFeatureSelector = createFeatureSelector<ProductState>(
  'products'
);

export const getCurrentProductSelector = createSelector(
  getProductsFeatureSelector,
  (state) => state.product
);

export const getProductsSelector = createSelector(
  getProductsFeatureSelector,
  (state) => state.data
);
