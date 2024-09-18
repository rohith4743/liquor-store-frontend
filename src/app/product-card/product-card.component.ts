import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product: any; // Input property to accept product data

  constructor(private router: Router) {}

  // Placeholder function for adding the product to the cart
  addToCart() {
    console.log(`${this.product.name} added to cart!`);
  }
  goToProductPage(): void {
    this.router.navigate(['/product', this.product.id]); // Assuming 'name' is unique
  }

}
