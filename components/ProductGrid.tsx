
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

const PRODUCTS: Product[] = [
  {
    id: 'stealth',
    name: 'Ory Stealth',
    price: 85,
    description: 'Black Obsidian Silk',
    image: 'https://images.unsplash.com/photo-1590673366451-3f63d0431ae2?auto=format&fit=crop&q=80&w=2070',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'carbon',
    name: 'Ory Carbon',
    price: 95,
    description: 'Matte Grey Fusion',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=2030',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'ice',
    name: 'Ory Ice',
    price: 85,
    description: 'Cold Silver Weave',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1780',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'deep-blue',
    name: 'Ory Midnight',
    price: 110,
    description: 'Royal Deep Blue',
    image: 'https://images.unsplash.com/photo-1582533089852-0240222083e9?auto=format&fit=crop&q=80&w=2070',
    sizes: ['S', 'M', 'L', 'XL']
  }
];

const ProductGrid: React.FC = () => {
  return (
    <section id="shop" className="py-24 px-6 md:px-12 bg-[#0F0F0F]">
      <div className="mb-16">
        <h2 className="brand-font text-3xl mb-4">The Armory</h2>
        <div className="w-20 h-1 bg-sky-500"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
