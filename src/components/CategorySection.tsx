
import React from 'react';
import { ProductCard } from './ProductCard';
import { LucideIcon } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  description: string;
  specs: string[];
}

interface CategorySectionProps {
  title: string;
  products: Product[];
  icon: LucideIcon;
  gradient: string;
  onAddToCart: (product: Product) => void;
  formatPrice: (price: number) => string;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ 
  title, 
  products, 
  icon: Icon, 
  gradient, 
  onAddToCart, 
  formatPrice 
}) => (
  <section id={title.toLowerCase().replace(' ', '')} className="py-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <div className={`inline-flex items-center gap-3 p-4 rounded-2xl mb-4 ${gradient}`}>
          <Icon className="w-8 h-8 text-white" />
          <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart}
            formatPrice={formatPrice}
          />
        ))}
      </div>
    </div>
  </section>
);
