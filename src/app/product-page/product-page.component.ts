import { Component, inject, Input } from '@angular/core';
import { Product } from '../modals/product';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  @Input() product!: Product;
  productId: number | null = null;
  route: ActivatedRoute = inject(ActivatedRoute)
  productService : ProductService = inject(ProductService)


  selectedSizeIndex: number = 0;
  quantity: number = 1;

  constructor() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadProductDetails();
  }

  loadProductDetails(): void {
    if (this.productId) {
      this.product = this.productService.getProductById(this.productId);
    }
  }

  // Function to select the size of the product
  selectSize(index: number): void {
    this.selectedSizeIndex = index;
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

    console.log(`Added ${this.quantity} of ${this.product.name} (${selectedSize}) to the cart at $${price} each.`);
  }

  // Placeholder function for checkout
  checkout(): void {
    console.log('Proceeding to checkout...');
  }
}
