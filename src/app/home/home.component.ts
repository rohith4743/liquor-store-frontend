import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CategoryComponent } from '../category/category.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CategoryComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Sample product data - replace with real data fetching later
  onSaleProducts = [
    { id: 1, name: 'Wine A', price: 20, image: 'assets/wine-a.jpg' },
    { id: 2, name: 'Whiskey B', price: 45, image: 'assets/whiskey-b.jpeg' },
    { id: 3, name: 'Beer C', price: 10, image: 'assets/beer-c.jpeg' }
  ];

  newProducts = [
    { id: 4, name: 'Wine D', price: 25, image: 'assets/wine-d.jpeg' },
    { id: 5, name: 'Whiskey E', price: 50, image: 'assets/whiskey-e.jpeg' },
    { id: 6, name: 'Beer F', price: 12, image: 'assets/beer-f.jpeg' }
  ];

  popularProducts = [
    { id: 7, name: 'Wine G', price: 30, image: 'assets/wine-g.jpeg' },
    { id: 8, name: 'Whiskey H', price: 60, image: 'assets/whiskey-h.webp' },
    { id: 9, name: 'Beer I', price: 15, image: 'assets/beer-i.webp' }
  ];

  categories = [
    { image: 'assets/wine-g.jpeg', label: 'Wine', url: '/products/wine' },
    { image: 'assets/wine-g.jpeg', label: 'Beer', url: '/products/beer' },
    { image: 'assets/wine-g.jpeg', label: 'Whiskey', url: '/products/liquor/whiskey' },
    { image: 'assets/wine-g.jpeg', label: 'Vodka', url: '/products/liquor/vodka' },
    { image: 'assets/wine-g.jpeg', label: 'Gin', url: '/products/spirits/gin' },
    { image: 'assets/wine-g.jpeg', label: 'Tequila', url: '/products/liquor/tequila' },
    { image: 'assets/wine-g.jpeg', label: 'Rum', url: '/products/liquor/rum' },
    { image: 'assets/wine-g.jpeg', label: 'Cider', url: '/products/other beverages/ciders & meads' },
    { image: 'assets/wine-g.jpeg', label: 'Liquor', url: '/products/liquor' },
    { image: 'assets/wine-g.jpeg', label: 'Brandy', url: '/products/liquor/brandy' }
  ];

  popularSubcategories = [
    { image: 'assets/beer-c.jpeg', label: 'Bourbon', url: '/products/liquor/whiskey/bourbon' },
    { image: 'assets/beer-c.jpeg', label: 'Pinot Noir', url: '/products/wine/red wines/pinot noir' },
    { image: 'assets/beer-c.jpeg', label: 'IPA', url: '/products/beer/ales/ipa' },
    { image: 'assets/beer-c.jpeg', label: 'Prosecco', url: '/products/wine/sparkling wines/prosecco' },
    { image: 'assets/beer-c.jpeg', label: 'Scotch Whisky', url: '/products/liquor/whiskey/scotch whisky' },
    { image: 'assets/beer-c.jpeg', label: 'Merlot', url: '/products/wine/red wines/merlot' },
    { image: 'assets/beer-c.jpeg', label: 'Chardonnay', url: '/products/wine/white wines/chardonnay' },
    { image: 'assets/beer-c.jpeg', label: 'London Dry Gin', url: '/products/spirits/gin/london dry gin' },
    { image: 'assets/beer-c.jpeg', label: 'Sauvignon Blanc', url: '/products/wine/white wines/sauvignon blanc' },
    { image: 'assets/beer-c.jpeg', label: 'Stouts & Porters', url: '/products/beer/stouts & porters' }
  ];
   

  constructor() {}

  ngOnInit(): void {}
}
