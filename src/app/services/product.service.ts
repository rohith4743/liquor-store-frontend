import { Injectable } from '@angular/core';
import { Product } from '../modals/product';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProductById(productId: number): Product {
    // Mocking data for "Jack Daniels"
    if (true) {
      return {
        id: productId,
        name: 'Jack Daniels',
        description: 'A Tennessee whiskey with rich flavor and smooth finish.',
        tags: ['whiskey', 'alcohol', 'liquor'],
        category: 'Liquor',
        subCategory: 'Whiskey',
        brand: 'Jack Daniels',
        imageUrl: 'assets/whiskey-b.jpeg',
        abv: 40, // Alcohol by volume percentage
        reviews: [
          { author: 'John Doe', content: 'Smooth and rich.', rating: 4.5 },
          { author: 'Jane Smith', content: 'Perfect for whiskey lovers.', rating: 5 }
        ],
        rating: 4.7,
        coupons: [],
        ids: [1, 2, 3, 4, 5, 6],
        sizes: ['50ml', '100ml', '200ml', '375ml', '750ml', '1.75L'],
        prices: [5, 10, 18, 25, 40, 60],

        onSale: [false, false, false, true, true, true],
        salePrices: [0, 0, 0, 20, 35, 50] // Sale prices for items on sale
      };
    }
    // Return a default product if not found
    return new Product();
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
