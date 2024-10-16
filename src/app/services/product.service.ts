import { Injectable } from '@angular/core';
import { Product } from '../modals/product';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProductById(productId: number): Observable<Product> {
    

    return this.http.get<Product>("http://localhost:8080/products/" + productId);
  }

  

  getProducts(
    keyword?: string,
    category?: string,
    subcategory?: string,
    minPrice?: number,
    maxPrice?: number,
    minABV?: number,
    maxABV?: number,
    size?: string,
    packSize?: string,
    regionOrigin?: string,
    onSale?: boolean,
    page: number = 0,
    sizePerPage: number = 10
  ): Observable<any> {
    let params = new HttpParams();
  
    // Set parameters only if they are not null or undefined
    if (keyword) params = params.set('keyword', keyword);
    if (category) params = params.set('category', category);
    if (subcategory) params = params.set('subcategory', subcategory);
    if (minPrice != null) params = params.set('minPrice', minPrice);
    if (maxPrice != null) params = params.set('maxPrice', maxPrice);
    if (minABV != null) params = params.set('minABV', minABV);
    if (maxABV != null) params = params.set('maxABV', maxABV);
    if (size) params = params.set('size', size);
    if (packSize) params = params.set('packSize', packSize);
    if (regionOrigin) params = params.set('regionOrigin', regionOrigin);
    if (onSale != null) params = params.set('onSale', onSale);
    params = params.set('page', page).set('sizePerPage', sizePerPage);
  
    return this.http.get<any[]>("http://localhost:8080/products", { params });
  }

  
  
}
