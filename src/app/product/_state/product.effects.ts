import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadProductsAction,
  loadProductsSuccessAction,
} from './product.action';
import { Injectable, inject } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { map, mergeMap } from 'rxjs';

@Injectable()
export class ProductEffects {
  private readonly productService = inject(ProductService);
  private readonly actions$ = inject(Actions);

  public loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProductsAction),
      mergeMap(() =>
        this.productService
          .getProducts()
          .pipe(map((products) => loadProductsSuccessAction({ products })))
      )
    );
  });
}
