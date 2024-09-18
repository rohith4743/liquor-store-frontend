import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent],
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

  constructor() {}

  ngOnInit(): void {}
}
