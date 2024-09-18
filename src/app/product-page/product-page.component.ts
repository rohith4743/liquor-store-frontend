// src/app/components/product-page/product-page.component.ts

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../modals/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  product!: Product;
  productId: number | null = null;
  route: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductService = inject(ProductService);
  router: Router = inject(Router); // Add the Router to navigate to new size

  selectedSizeIndex: number = 0;
  quantity: number = 1;

  constructor() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadProductDetails();
  }

  loadProductDetails(): void {
    if (this.productId) {
      this.product = this.productService.getProductById(this.productId);
      // Determine the selected size index based on the product ID
      this.selectedSizeIndex = this.product.ids.indexOf(this.productId);
    }
  }

  // Function to select the size of the product
  selectSize(index: number): void {
    this.selectedSizeIndex = index;
    const newProductId = this.product.ids[index];

    // Navigate to the new product ID to reload the page
    this.router.navigate(['/product', newProductId])
  }

  // Function to set the quantity
  setQuantity(qty: number): void {
    if (qty > 0) {
      this.quantity = qty;
    }
  }

  // Function to add the product to the cart
  addToCart(): void {
    const selectedSize = this.product.sizes[this.selectedSizeIndex];
    const price = this.product.onSale[this.selectedSizeIndex]
      ? this.product.salePrices[this.selectedSizeIndex]
      : this.product.prices[this.selectedSizeIndex];

    console.log(
      `Added ${this.quantity} of ${this.product.name} (${selectedSize}) to the cart at $${price} each.`
    );
  }

  // Placeholder function for checkout
  checkout(): void {
    console.log('Proceeding to checkout...');
  }
}
