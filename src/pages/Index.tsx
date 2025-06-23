import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Star, Phone, Laptop, Watch, Gamepad2, Headphones, Cable, Menu, X, Plus, Minus, Mail, Clock } from "lucide-react";

const Index = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const formatPrice = (price) => {
    return `KSh ${price.toLocaleString('en-KE')}`;
  };

  const products = {
    phones: [
      { id: 1, name: "iPhone 15 Pro", price: 140000, image: "https://unsplash.com/photos/an-iphone-is-sitting-on-top-of-a-box-LunVPm34ly4?w=400&h=400&fit=crop", rating: 4.8, category: "phones" },
      { id: 2, name: "Samsung Galaxy S23 ultra", price: 112000, image: "https://unsplash.com/photos/a-close-up-of-a-samsung-galaxy-s23-ultra-phone-v-yctrWmRHo?w=400&h=400&fit=crop", rating: 4.7, category: "phones" },
      { id: 3, name: "Google Pixel 8", price: 65000, image: "https://unsplash.com/photos/a-close-up-of-a-cell-phone-on-a-table-vn6A4UKMR3I?w=400&h=400&fit=crop", rating: 4.6, category: "phones" },
      { id: 4, name: "Realme C75", price: 26500, image: "https://unsplash.com/photos/a-close-up-of-a-cell-phone-on-a-wooden-surface-KOgh9vct6ng?w=400&h=400&fit=crop", rating: 4.5, category: "phones" },
    ],
    laptops: [
      { id: 5, name: "MacBook Pro", price: 120000, image: "https://unsplash.com/photos/macbook-pro-on-box-fhmRqhD_dYg?w=400&h=400&fit=crop", rating: 4.9, category: "laptops" },
      { id: 6, name: "Dell XPS 13D", price: 65000, image: "https://unsplash.com/photos/a-laptop-computer-sitting-on-top-of-a-bed-GpvmJ4hqlL4?w=400&h=400&fit=crop", rating: 4.6, category: "laptops" },
      { id: 7, name: "Lenovo Thinkpad Corei7", price: 55000, image: "https://media.istockphoto.com/id/1286866209/photo/black-laptop-with-place-on-the-screen-for-text-or-pictures-isolated-on-white-background-high.jpg?s=1024x1024&w=is&k=20&c=dc_rnnl-BkXdDulug1DEb-he2XoPq7IS8EbjWh-cWLc=?w=400&h=400&fit=crop", rating: 4.7, category: "laptops" },
      { id: 8, name: "Hp Elitebook 840", price: 41000, image: "https://images.unsplash.com/photo-1618410325698-018bb3eb2318?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&h=400&fit=crop", rating: 4.5, category: "laptops" },
    ],
    smartwatches: [
      { id: 9, name: "Apple Watch Series 9", price: 40000, image: "/placeholder.svg", rating: 4.8, category: "smartwatches" },
      { id: 10, name: "Samsung Galaxy Watch 6", price: 32000, image: "/placeholder.svg", rating: 4.6, category: "smartwatches" },
      { id: 11, name: "Garmin Forerunner 955", price: 50000, image: "/placeholder.svg", rating: 4.7, category: "smartwatches" },
      { id: 12, name: "Fitbit Versa 4", price: 20000, image: "/placeholder.svg", rating: 4.4, category: "smartwatches" },
    ],
    gaming: [
      { id: 13, name: "PS5 Console", price: 55000, image: "/placeholder.svg", rating: 4.9, category: "gaming" },
      { id: 14, name: "Xbox Series X", price: 55000, image: "/placeholder.svg", rating: 4.8, category: "gaming" },
      { id: 15, name: "Nintendo Switch OLED", price: 36000, image: "/placeholder.svg", rating: 4.7, category: "gaming" },
      { id: 16, name: "Steam Deck", price: 40000, image: "/placeholder.svg", rating: 4.6, category: "gaming" },
    ],
    audio: [
      { id: 17, name: "AirPods Pro 2", price: 25000, image: "/placeholder.svg", rating: 4.8, category: "audio" },
      { id: 18, name: "Sony WH-1000XM5", price: 40000, image: "/placeholder.svg", rating: 4.7, category: "audio" },
      { id: 19, name: "Bose QuietComfort", price: 34000, image: "/placeholder.svg", rating: 4.6, category: "audio" },
      { id: 20, name: "JBL Flip 6", price: 12900, image: "/placeholder.svg", rating: 4.5, category: "audio" },
    ],
    accessories: [
      { id: 21, name: "MagSafe Charger", price: 3900, image: "/placeholder.svg", rating: 4.5, category: "accessories" },
      { id: 22, name: "Anker PowerBank", price: 4900, image: "/placeholder.svg", rating: 4.6, category: "accessories" },
      { id: 23, name: "Logitech MX Master 3", price: 9900, image: "/placeholder.svg", rating: 4.7, category: "accessories" },
      { id: 24, name: "USB-C Hub", price: 7900, image: "/placeholder.svg", rating: 4.4, category: "accessories" },
    ],
  };

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, change) => {
    setCartItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      }).filter(Boolean)
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const ProductCard = ({ product }) => (
    <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-purple-200 hover:border-purple-400">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            ⭐ {product.rating}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {formatPrice(product.price)}
          </span>
          <Button 
            onClick={() => addToCart(product)}
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white transform hover:scale-105 transition-all duration-200"
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const CategorySection = ({ title, products, icon: Icon, gradient }) => (
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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-purple-50 to-pink-100">
      {/* Navigation */}
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
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-pulse">
              Welcome to <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">TechTonic</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Discover the latest in technology with our curated collection of premium devices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-200">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4 rounded-full transition-all duration-200">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <CategorySection 
        title="Smartphones" 
        products={products.phones} 
        icon={Phone}
        gradient="bg-gradient-to-r from-blue-500 to-cyan-500"
      />
      
      <CategorySection 
        title="Laptops" 
        products={products.laptops} 
        icon={Laptop}
        gradient="bg-gradient-to-r from-purple-500 to-pink-500"
      />
      
      <CategorySection 
        title="Smartwatches" 
        products={products.smartwatches} 
        icon={Watch}
        gradient="bg-gradient-to-r from-green-500 to-teal-500"
      />
      
      <CategorySection 
        title="Gaming" 
        products={products.gaming} 
        icon={Gamepad2}
        gradient="bg-gradient-to-r from-red-500 to-orange-500"
      />
      
      <CategorySection 
        title="Audio" 
        products={products.audio} 
        icon={Headphones}
        gradient="bg-gradient-to-r from-indigo-500 to-purple-500"
      />
      
      <CategorySection 
        title="Accessories" 
        products={products.accessories} 
        icon={Cable}
        gradient="bg-gradient-to-r from-pink-500 to-rose-500"
      />

      {/* Shopping Cart Display */}
      {cartItems.length > 0 && (
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
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-purple-100 text-lg">Have questions? We'd love to hear from you!</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800">Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you soon</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
                        <Input id="name" className="mt-2 border-2 border-purple-200 focus:border-purple-500" />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                        <Input id="email" type="email" className="mt-2 border-2 border-purple-200 focus:border-purple-500" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-gray-700 font-medium">Subject</Label>
                      <Input id="subject" className="mt-2 border-2 border-purple-200 focus:border-purple-500" />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        className="mt-2 w-full px-3 py-2 border-2 border-purple-200 rounded-md focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg py-3">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800">Contact Information</CardTitle>
                  <CardDescription>Reach out to us through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600">+254 700 123 456</p>
                      <p className="text-gray-600">+254 722 987 654</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">info@techtonic.co.ke</p>
                      <p className="text-gray-600">support@techtonic.co.ke</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Business Hours</p>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-purple-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="font-bold text-3xl mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              TechTonic
            </div>
            <p className="text-gray-300 mb-6">Your premier destination for cutting-edge technology</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">Terms of Service</a>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">Support</a>
            </div>
            <p className="text-gray-400">&copy; 2025 TechTonic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
