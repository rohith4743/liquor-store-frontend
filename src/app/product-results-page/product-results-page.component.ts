import { Component, OnInit } from '@angular/core';
import { Product } from '../modals/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { ActivatedRoute } from '@angular/router';
import { ProductFiltersComponent } from '../product-filters/product-filters.component';
import { ProductsSortingComponent } from '../products-sorting/products-sorting.component';
import { ProductsPaginationComponent } from '../products-pagination/products-pagination.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-results-page',
  standalone: true,
  imports: [ProductCardComponent, BreadcrumbComponent, ProductFiltersComponent, ProductsSortingComponent, ProductsPaginationComponent],
  templateUrl: './product-results-page.component.html',
  styleUrl: './product-results-page.component.css'
})
export class ProductResultsPageComponent implements OnInit {

  // products: Product[] = []; 
  cards: any[] = []
  pathSegments: string[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  currentSort: string = '';
  
  category : string | undefined;
  searchTerm: string | undefined;
  subcategory: string | undefined;
  minABV: number | undefined;
  maxABV: number | undefined;
  minPrice: number | undefined;
  origin: string | undefined;
  maxPrice: number | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}


  ngOnInit(): void {
    
    if (this.route.children && this.route.children.length > 0) {
      const childRoute = this.route.children[0]; 
  
      childRoute.url.subscribe(urlSegments => {
        let segments = urlSegments.map(segment => segment.path);
        this.pathSegments = segments;
        
        if (segments.length > 0) {
          this.category = segments[0];
        } else {
          this.category = "";
          
        }
        this.subcategory = "";

        if (segments.length > 1) {
          this.subcategory = segments.slice(1).join(", ");
        } else {
          this.subcategory = "";
        }
  
        this.loadProducts();
      });
    }
  
    // Subscribe to query parameters to get the search term
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['search'] || '';
      this.loadProducts();
    });

  }
  


  applyFilters(filters: any) {

    if (filters["category"] != this.category) {
      filters["subcategory"] = "";
    }
    
    this.category = filters["category"];
    this.subcategory = filters["subcategory"];

    if (this.category && this.subcategory) {
      this.pathSegments = [this.category, ...this.subcategory.split(", ")];
    } else if(this.category) {
        this.pathSegments = [this.category];
    }


    this.minABV = filters["minAbv"];
    this.maxABV = filters["maxAbv"];
    this.minPrice = filters["minPrice"];
    this.maxPrice = filters["maxPrice"];
    this.origin = filters["country"];
    this.loadProducts();
  }

  onItemsPerPageChange(data:number) {
      this.currentPage = 1;
     this.itemsPerPage = data;
     this.loadProducts();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadProducts();
  }

  // Handling sort change event
  handleSortChange(sortOption: string) {
    
  }

  loadProducts(): void {

    this.productService
      .getProducts(this.searchTerm, this.category, this.subcategory, this.minPrice, this.maxPrice, this.minABV, this.maxABV, undefined, undefined, this.origin, undefined, this.currentPage - 1, this.itemsPerPage)
      .subscribe({
        next: (data) => {
          
          this.cards = data["data"].map((product : any) => {
            return {
              ...product,
              image:  '/assets/wine-g.jpeg'
            };
          });
          this.totalItems = data["total"];
          
        },
        error: (error) => console.log(error)
      });
  }
}
