
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Menu, X, Mail, MessageCircle } from "lucide-react";

interface CartItem {
  id: number;
  quantity: number;
}

interface NavigationProps {
  cartItems: CartItem[];
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  handleEmailContact: () => void;
  handleWhatsAppContact: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  cartItems,
  isMenuOpen,
  setIsMenuOpen,
  handleEmailContact,
  handleWhatsAppContact
}) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-purple-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            TechTonic
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Phones', 'Laptops', 'Smartwatches', 'Gaming', 'Audio', 'Accessories', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 hover:scale-105 transform"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Contact Buttons */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleEmailContact}
              className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50"
            >
              <Mail className="w-4 h-4 mr-1" />
              Email
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleWhatsAppContact}
              className="border-2 border-green-300 text-green-600 hover:bg-green-50"
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              WhatsApp
            </Button>

            <div className="relative">
              <Button variant="outline" className="relative border-2 border-purple-300 hover:border-purple-500 text-purple-600 hover:text-purple-700">
                <ShoppingCart className="w-5 h-5" />
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs">
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                  </Badge>
                )}
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              className="md:hidden text-purple-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-purple-200">
          <div className="px-4 py-2 space-y-2">
            {['Home', 'Phones', 'Laptops', 'Smartwatches', 'Gaming', 'Audio', 'Accessories', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex gap-2 py-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleEmailContact}
                className="border-2 border-blue-300 text-blue-600"
              >
                <Mail className="w-4 h-4 mr-1" />
                Email
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleWhatsAppContact}
                className="border-2 border-green-300 text-green-600"
              >
                <MessageCircle className="w-4 h-4 mr-1" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
