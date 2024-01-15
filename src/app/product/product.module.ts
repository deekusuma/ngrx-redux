import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './_state/product.reducer';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './_state/product.effects';



@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('product', productReducer),  
    FormsModule,
    EffectsModule.forFeature([ProductEffects]),
  ],
  exports: [ProductListComponent],
})
export class ProductModule { }
