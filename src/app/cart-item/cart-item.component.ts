import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../modals/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() product!: Product; // Product details
  @Input() quantity!: number; // Quantity of the product in the cart
  @Output() quantityChange = new EventEmitter<{ id: number, quantity: number }>();
  @Output() removeItem = new EventEmitter<number>();

  sizeIndex: number = 0;

  ngOnInit(): void {
    // Find the index of the current size using the product's ID
    this.sizeIndex = this.product.ids.indexOf(this.product.id);
  }

  // Trigger quantity change
  onQuantityChange(newQuantity: number) {
    if (newQuantity > 0) {
      this.quantityChange.emit({ id: this.product.id, quantity: newQuantity });
    } else {
      this.removeItem.emit(this.product.id);
    }
  }

  // Trigger removal of the item
  onRemove() {
    this.removeItem.emit(this.product.id);
  }
}
