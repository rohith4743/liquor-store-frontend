import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-sorting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-sorting.component.html',
  styleUrl: './products-sorting.component.css'
})
export class ProductsSortingComponent {
  @Output() sortChanged = new EventEmitter<string>();

  sortOptions = [
    { value: 'price_asc', label: 'Price: Low to High' },
    { value: 'price_desc', label: 'Price: High to Low' },
    { value: 'rating_desc', label: 'Rating: High to Low' },
    { value: 'rating_asc', label: 'Rating: Low to High' },
  ];

  onSortChange(event: any) {
    this.sortChanged.emit(event.target.value);
  }
}
