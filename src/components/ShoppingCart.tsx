
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ShoppingCartProps {
  cartItems: CartItem[];
  updateQuantity: (id: number, change: number) => void;
  getTotalPrice: () => number;
  formatPrice: (price: number) => string;
}

export const ShoppingCartDisplay: React.FC<ShoppingCartProps> = ({
  cartItems,
  updateQuantity,
  getTotalPrice,
  formatPrice
}) => {
  if (cartItems.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="w-80 bg-white border-2 border-purple-300 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Shopping Cart
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 max-h-60 overflow-y-auto">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between py-2 border-b border-purple-100">
              <div className="flex-1">
                <p className="font-medium text-gray-800">{item.name}</p>
                <p className="text-purple-600">{formatPrice(item.price)}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="w-8 h-8 p-0 border-purple-300 text-purple-600"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-8 h-8 p-0 border-purple-300 text-purple-600"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
          <div className="pt-4 border-t border-purple-200">
            <div className="flex justify-between items-center font-bold text-lg">
              <span className="text-gray-800">Total:</span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {formatPrice(getTotalPrice())}
              </span>
            </div>
            <Button className="w-full mt-3 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
              Checkout
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
