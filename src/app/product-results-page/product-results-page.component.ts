import { Component, OnInit } from '@angular/core';
import { Product } from '../modals/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { ProductFiltersComponent } from '../product-filters/product-filters.component';
import { ProductsSortingComponent } from '../products-sorting/products-sorting.component';
import { ProductsPaginationComponent } from '../products-pagination/products-pagination.component';

@Component({
  selector: 'app-product-results-page',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, BreadcrumbComponent, ProductFiltersComponent, ProductsSortingComponent, ProductsPaginationComponent],
  templateUrl: './product-results-page.component.html',
  styleUrl: './product-results-page.component.css'
})
export class ProductResultsPageComponent implements OnInit {
  products: Product[] = []; 
  cards: any[] = []
  pathSegments: string[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  currentSort: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {

    if (this.route.children && this.route.children.length > 0) {
      const childRoute = this.route.children[0]; // Access the first child route

      // Subscribe to the child's url observable to get the segments
      childRoute.url.subscribe(urlSegments => {
        
        let segments = urlSegments.map(segment => segment.path);
        this.pathSegments = segments;
        this.fetchProducts(segments);
      });
    }
  }

  applyFilters(filters: any) {
    // Handle filter logic
    console.log('Applied Filters:', filters);
    // Use the filters to fetch or filter products as needed
  }
  applySorting(sortOption: string): void {
    this.currentSort = sortOption;

    if (sortOption === 'price_asc') {
      this.products.sort((a, b) => a.prices[0] - b.prices[0]);
    } else if (sortOption === 'price_desc') {
      this.products.sort((a, b) => b.prices[0] - a.prices[0]);
    } else if (sortOption === 'rating_asc') {
      this.products.sort((a, b) => a.rating - b.rating);
    } else if (sortOption === 'rating_desc') {
      this.products.sort((a, b) => b.rating - a.rating);
    }

    this.applyPagination(); // Re-apply pagination after sorting
  }

  fetchProducts(route: string[]): void {
    console.log(route)
    this.products = [
      {
        id: 1,
        ids: [1, 2],
        name: 'La Marca',
        description: 'A sparkling wine',
        tags: ['sparkling', 'refreshing'],
        category: 'wine',
        subCategory: 'sparkling wine,prosecco',
        brand: 'La Marca',
        imageUrl: 'assets/wine-g.jpeg',
        abv: 11,
        reviews: [],
        rating: 4.5,
        coupons: [],
        sizes: ['50ml', '100ml'],
        prices: [15.99, 25.99],
        onSale: [false, true],
        salePrices: [0, 19.99]
      },
      // Add more mock products as needed
    ];

    this.totalItems = this.products.length;
    this.applyPagination();
  }

  applyPagination(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.cards = this.products.slice(startIndex, endIndex).map((product) => {
      const selectedSizeIndex = product.ids.indexOf(product.id);
      const price = product.onSale[selectedSizeIndex] ? product.salePrices[selectedSizeIndex] : product.prices[selectedSizeIndex];

      return {
        id: product.id,
        name: product.name,
        price: price,
        image: product.imageUrl,
      };
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.applyPagination();
  }

  // Handling sort change event
  handleSortChange(sortOption: string) {
    this.applySorting(sortOption);
  }
}
