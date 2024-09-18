import { Injectable } from '@angular/core';
import { Product } from '../modals/product';

interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private storageKey = 'cart';

  constructor() {}
// Get the current cart from sessionStorage
getCart(): CartItem[] {
  const cart = sessionStorage.getItem(this.storageKey);
  return cart ? JSON.parse(cart) : [];
}

// Save the current cart to sessionStorage
private saveCart(cart: CartItem[]): void {
  sessionStorage.setItem(this.storageKey, JSON.stringify(cart));
}

// Add a product to the cart
addToCart(product: Product, quantity: number): void {
  const cart = this.getCart();
  const existingCartItemIndex = cart.findIndex((item) => item.product.name === product.name);

  if (existingCartItemIndex > -1) {
    // If the product already exists in the cart, update its quantity
    cart[existingCartItemIndex].quantity += quantity;
  } else {
    // Add the new product to the cart with the specified quantity
    cart.push({ product, quantity });
  }

  this.saveCart(cart);
}

// Update the quantity of a product in the cart
updateQuantity(productName: string, quantity: number): void {
  const cart = this.getCart();
  const cartItemIndex = cart.findIndex((item) => item.product.name === productName);

  if (cartItemIndex > -1) {
    if (quantity <= 0) {
      // If the quantity is less than or equal to 0, remove the product from the cart
      this.deleteFromCart(productName);
    } else {
      cart[cartItemIndex].quantity = quantity;
      this.saveCart(cart);
    }
  }
}

// Delete a product from the cart
deleteFromCart(productName: string): void {
  let cart = this.getCart();
  cart = cart.filter((item) => item.product.name !== productName);
  this.saveCart(cart);
}

// Clear the entire cart
clearCart(): void {
  sessionStorage.removeItem(this.storageKey);
}
}
