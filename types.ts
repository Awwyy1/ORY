
export type ProductSize = 'S' | 'M' | 'L' | 'XL';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  sizes: ProductSize[];
}

export interface CartItem extends Product {
  selectedSize: ProductSize;
  quantity: number;
}
