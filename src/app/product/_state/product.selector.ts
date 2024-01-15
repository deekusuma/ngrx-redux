import { createSelector } from '@ngrx/store';
import { ProductStateModel, State } from './product.state.model';
import { Product } from '../_models/product.model';

const getProuctFeatureSelector = (state: State): ProductStateModel => state.product

export const getShowProductCode = createSelector(
  getProuctFeatureSelector,
  (product: ProductStateModel): boolean => product.showProductCode
);

export const getProducts = createSelector(
  getProuctFeatureSelector,
  (product: ProductStateModel): Product[] => product.products
);
