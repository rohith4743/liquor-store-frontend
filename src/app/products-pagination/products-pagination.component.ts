import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-pagination.component.html',
  styleUrl: './products-pagination.component.css'
})
export class ProductsPaginationComponent implements OnInit {
  @Input() totalItems: number = 0; // Total number of items
  @Input() itemsPerPage: number = 10; // Items per page
  @Input() currentPage: number = 1; // Current page

  @Output() pageChanged = new EventEmitter<number>();

  totalPages: number = 0;
  pages: number[] = [];

  ngOnInit(): void {
    this.calculatePages();
  }

  ngOnChanges(): void {
    this.calculatePages();
  }

  calculatePages(): void {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.pages = Array(this.totalPages)
      .fill(0)
      .map((_, i) => i + 1);
  }

  changePage(page: number) {
    if (page !== this.currentPage) {
      this.currentPage = page;
      this.pageChanged.emit(this.currentPage);
    }
  }

}
