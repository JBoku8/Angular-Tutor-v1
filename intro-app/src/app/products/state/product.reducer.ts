import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../shared/product';
import { editProductAction, setProductsAction } from './product.actions';

export interface ProductState {
  product: IProduct | null;
  data: IProduct[];
}

export const initialState: ProductState = {
  product: null,
  data: [],
};

export const productReducer = createReducer(
  initialState,
  on(
    editProductAction,
    (state, action): ProductState => {
      return {
        ...state,
        product: action.product,
      };
    }
  ),
  on(
    setProductsAction,
    (state, action): ProductState => {
      return {
        ...state,
        data: action.data,
      };
    }
  )
);
