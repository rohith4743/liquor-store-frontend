// src/app/components/product-page/product-page.component.ts

import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../modals/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  product!: Product;
  productId: number | null = null;
  route: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductService = inject(ProductService);
  router: Router = inject(Router); 
  cartService: CartService = inject(CartService);

  selectedSizeIndex: number = 0;
  quantity: number = 1;

  constructor() {}

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.paramMap.subscribe((params) => {
      this.productId = Number(params.get('id'));
      this.loadProductDetails();
    });
  }

  loadProductDetails(): void {
    if (this.productId) {

      this.productService.getProductById(this.productId).subscribe({
        next: (data: Product) => {
          console.log(data)
          this.product = data;

          this.selectedSizeIndex = this.product?.ids.indexOf(this.productId || 1);

        },
        error: (error) => {
          console.error('Error fetching product:', error);
        }
      });
      // this.product = this.productService.getProductById(this.productId);
      // Determine the selected size index based on the product ID
    }
  }

  // Function to select the size of the product
  selectSize(index: number): void {
    this.selectedSizeIndex = index;
    const newProductId = this.product.ids[index];

    // Navigate to the new product ID to reload the page
    this.router.navigate(['/product', newProductId]);
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

    this.cartService.addToCart(this.product, this.quantity);
  }

  // Placeholder function for checkout
  checkout(): void {
    console.log('Proceeding to checkout...');
  }
}
