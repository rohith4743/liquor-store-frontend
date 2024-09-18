import { Injectable } from '@angular/core';
import { Product } from '../modals/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProductById(productId: number): Product {
    // Mocking data for "Jack Daniels"
    if (true) {
      return {
        id: 1,
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

        sizes: ['50ml', '100ml', '200ml', '375ml', '750ml', '1.75L'],
        prices: [5, 10, 18, 25, 40, 60],

        onSale: [false, false, false, true, true, true],
        salePrices: [0, 0, 0, 20, 35, 50] // Sale prices for items on sale
      };
    }
    // Return a default product if not found
    return new Product();
  }
}
