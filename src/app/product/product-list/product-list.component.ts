import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  ProductStateModel,
  State,
  initialState,
} from '../_state/product.state.model';
import {
  loadProductsAction,
  toggleProductCodeAction,
} from '../_state/product.action';
import { Product } from '../_models/product.model';
import { getProducts, getShowProductCode } from '../_state/product.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  public showProductCode: boolean = initialState.showProductCode;
  public displayCode: boolean = false;
  public products$: Observable<Product[]>;

  private store = inject(Store<State>);

  constructor() {
    this.products$ = this.store.select(getProducts);
  }

  public toggleProductCode(): void {
    this.store.dispatch(toggleProductCodeAction());
  }

  public ngOnInit(): void {
    this.store
      .select(getShowProductCode)
      .subscribe((data) => (this.displayCode = data));


    this.store.dispatch(loadProductsAction());
  }
}
