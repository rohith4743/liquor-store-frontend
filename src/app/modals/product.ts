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

  constructor(data?: any ) {
    this.id = data.id || 0;
    this.ids = data.ids || [];
    this.name = data.name || '';
    this.description = data.description || '';
    this.tags = data.tags || [];
    this.category = data.category || '';
    this.subCategory = data.subCategory || '';
    this.brand = data.brand || '';
    this.imageUrl = data.imageUrl || 'assets/wine-g.jpeg';
    this.abv = data.abv || 0;
    this.reviews = data.reviews || [];
    this.rating = data.rating || 0;
    this.coupons = data.coupons || [];
    this.sizes = data.sizes || [];
    this.prices = data.prices || [];
    this.onSale = data.onSale || [];
    this.salePrices = data.salePrices || [];
  }
}
