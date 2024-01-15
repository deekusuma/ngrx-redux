import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../_models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly http = inject(HttpClient);

  constructor() { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('api/products');
  }

}
