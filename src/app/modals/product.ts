export class Product {
  id: number; // Unique ID for the selected size
  ids: number[]; // Array of IDs for different sizes
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
  sizes: string[]; // Array of sizes (e.g., 50ml, 100ml)
  prices: number[]; // Corresponding prices for each size
  onSale: boolean[]; // Flags to indicate if the sizes are on sale
  salePrices: number[]; // Sale prices for sizes on sale

  constructor() {
    this.id = 0;
    this.ids = [];
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
