import { createReducer, on } from '@ngrx/store';
import { ProductStateModel, initialState } from './product.state.model';
import { loadProductsSuccessAction, toggleProductCodeAction } from './product.action';

export const productReducer = createReducer(
  initialState,
  on(toggleProductCodeAction, (state: ProductStateModel) => {
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  }),
  on(loadProductsSuccessAction, (state: ProductStateModel, action) => {
    return {
      ...state,
      products: action.products,
    };
  })
);
