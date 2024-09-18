
export class Product {
    id: number;
    name: string;
    description: string;
    tags: string[];
    category: string;
    subCategory: string;
    brand: string;
    imageUrl: string;
    abv: number; // Alcohol by volume
    reviews: any[]; // Placeholder for review objects
    rating: number;
    coupons: any[]; // Placeholder for coupon objects
  
    sizes: string[]; // Array of sizes (e.g., 50 ml, 100 ml)
    prices: number[]; // Corresponding prices for each size
  
    // Optional arrays
    onSale: boolean[];
    salePrices: number[];
  
    constructor() {
        this.id = 0;
      this.name = '';
      this.description = '';
      this.tags = [];
      this.category = '';
      this.subCategory = '';
      this.brand = '';
      this.imageUrl = '';
      this.abv = 0;
      this.reviews = [];
      this.rating = 0;
      this.coupons = [];
  
      this.sizes = [];
      this.prices = [];
      this.onSale = [];
      this.salePrices = [];
    }
  }
  