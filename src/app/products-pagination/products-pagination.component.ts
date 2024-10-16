import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-pagination',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products-pagination.component.html',
  styleUrls: ['./products-pagination.component.css']
})
export class ProductsPaginationComponent implements OnInit {
  @Input() totalItems: number = 0; // Total number of items
  @Input() currentPage: number = 1; // Current page
  @Output() pageChanged = new EventEmitter<number>();
  @Output() itemsPerPageChanged = new EventEmitter<number>();

  itemsPerPage: number = 10;
  totalPages: number = 0;
  pages: number[] = [];

  ngOnInit(): void {
    this.calculatePages();
  }

  ngOnChanges(): void {
    this.calculatePages();
  }

  calculatePages(): void {
    const maxVisiblePages = 7; // Adjust this to show more/less pages around current page
    const maxSidePages = 3; // Pages to show on each side of the current page
  
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.pages = [];
  
    if (this.totalPages <= maxVisiblePages) {
      // If total pages are less than maxVisiblePages, show all pages
      this.pages = Array(this.totalPages)
        .fill(0)
        .map((_, i) => i + 1);
    } else {
      // Show first page, last page, and a few pages around the current page
      let startPage = Math.max(2, this.currentPage - maxSidePages);  // Start page after first
      let endPage = Math.min(this.totalPages - 1, this.currentPage + maxSidePages); // End page before last
  
      // Ensure at least maxSidePages pages are shown after the first and before the last
      if (startPage > 2) {
        this.pages.push(1, -1); // Add first page and ellipsis
      } else {
        this.pages.push(1);
      }
  
      for (let i = startPage; i <= endPage; i++) {
        this.pages.push(i);
      }
  
      if (endPage < this.totalPages - 1) {
        this.pages.push(-1); // Add ellipsis before last page
      }
  
      this.pages.push(this.totalPages); // Always include the last page
    }
  }
  

  changePage(page: number): void {
    if (page !== this.currentPage && page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChanged.emit(this.currentPage);
    }
  }

  onItemsPerPageChange(): void {
    this.currentPage = 1; 
    this.calculatePages();
    this.itemsPerPageChanged.emit(this.itemsPerPage);
  }

}
