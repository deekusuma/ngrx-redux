import { createAction, createActionGroup, props } from '@ngrx/store';
import { Product } from '../_models/product.model';

export const toggleProductCodeAction = createAction(
  '[Product] Toggle Product Code'
);

export const loadProductsAction = createAction('[Product] Load Products');

export const loadProductsSuccessAction = createAction(
  '[Product] Load Products Success',
  props<{ products: Product[] }>()
);

