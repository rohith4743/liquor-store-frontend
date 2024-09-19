import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../modals/product';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CommonModule } from '@angular/common';

interface CartItem {
  product: Product;
  quantity: number;
}

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CartItemComponent, CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  // Load the cart items from the service
  loadCart() {
    this.cartItems = this.cartService.getCart();
    this.calculateTotal();
  }

  // Update quantity of a product
  updateQuantity(event: { id: number, quantity: number }) {
    this.cartService.updateQuantity(event.id, event.quantity);
    this.loadCart();
  }

  // Remove a product from the cart
  removeItem(productId: number) {
    this.cartService.deleteFromCart(productId);
    this.loadCart();
  }

  // Calculate the total price of the cart
  calculateTotal() {
    this.total = this.cartItems.reduce((sum, item) => {
      const price = item.product.onSale[item.product.ids.indexOf(item.product.id)] 
        ? item.product.salePrices[item.product.ids.indexOf(item.product.id)]
        : item.product.prices[item.product.ids.indexOf(item.product.id)];
      return sum + (price * item.quantity);
    }, 0);
  }

}
