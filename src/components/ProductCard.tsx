
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  formatPrice: (price: number) => string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, formatPrice }) => {
  const handleImageLoad = () => {
    console.log(`Image loaded successfully: ${product.name}`);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error(`Failed to load image for ${product.name}:`, e.currentTarget.src);
    e.currentTarget.src = '/placeholder.svg';
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-purple-200 hover:border-purple-400">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
        />
        <div className="absolute top-2 right-2">
          <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            ⭐ {product.rating}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="mb-3">
          <h4 className="font-semibold text-sm text-gray-700 mb-1">Key Specs:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {product.specs?.slice(0, 2).map((spec, index) => (
              <li key={index}>• {spec}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {formatPrice(product.price)}
          </span>
          <Button 
            onClick={() => onAddToCart(product)}
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white transform hover:scale-105 transition-all duration-200"
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
