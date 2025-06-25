import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Star, Phone, Laptop, Watch, Gamepad2, Headphones, Cable, Menu, X, Plus, Minus, Mail, Clock, MessageCircle } from "lucide-react";

const Index = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const formatPrice = (price) => {
    return `KSh ${price.toLocaleString('en-KE')}`;
  };

  // Contact handler functions
  const handleEmailContact = () => {
    window.open('mailto:techtonic792@gmail.com?subject=Product Inquiry&body=Hello, I would like to inquire about your products.', '_blank');
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = '254741645021';
    const message = 'Hello! I would like to inquire about your tech products.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const products = {
    phones: [
      { 
        id: 1, 
        name: "iPhone 15 Pro", 
        price: 140000, 
        image: "https://images.unsplash.com/photo-1702289613007-8b830e2520b0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&h=400&fit=crop", 
        rating: 4.8, 
        category: "phones",
        description: "Latest iPhone with A17 Pro chip, titanium design, and advanced camera system",
        specs: ["6.1-inch Super Retina XDR display", "A17 Pro chip", "48MP main camera", "128GB storage"]
      },
      { 
        id: 2, 
        name: "Samsung Galaxy S23 ultra", 
        price: 112000, 
        image: "https://images.unsplash.com/photo-1713027420493-e675245ea725?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&h=400&fit=crop", 
        rating: 4.7, 
        category: "phones",
        description: "Flagship Android phone with S Pen and exceptional camera performance",
        specs: ["6.8-inch Dynamic AMOLED 2X", "Snapdragon 8 Gen 2", "200MP quad camera", "256GB storage"]
      },
      { 
        id: 3, 
        name: "Google Pixel 8", 
        price: 65000, 
        image: "https://images.unsplash.com/photo-1697355360151-2866de32ad4d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&h=400&fit=crop", 
        rating: 4.6, 
        category: "phones",
        description: "Pure Android experience with exceptional computational photography",
        specs: ["6.2-inch OLED display", "Google Tensor G3", "50MP main camera", "128GB storage"]
      },
      { 
        id: 4, 
        name: "Realme C75", 
        price: 26500, 
        image: "https://images.unsplash.com/photo-1657731739322-409509986567?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&h=400&fit=crop", 
        rating: 4.5, 
        category: "phones",
        description: "Budget-friendly smartphone with reliable performance and long battery life",
        specs: ["6.72-inch HD+ display", "UNISOC Tiger T606", "50MP dual camera", "128GB storage"]
      },
    ],
    laptops: [
      { 
        id: 5, 
        name: "MacBook Pro", 
        price: 120000, 
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop", 
        rating: 4.9, 
        category: "laptops",
        description: "Professional laptop with M3 chip for ultimate performance and battery life",
        specs: ["14-inch Liquid Retina XDR", "Apple M3 chip", "8GB unified memory", "512GB SSD"]
      },
      { 
        id: 6, 
        name: "Dell XPS 13D", 
        price: 65000, 
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop", 
        rating: 4.6, 
        category: "laptops",
        description: "Ultra-portable Windows laptop with premium build quality",
        specs: ["13.4-inch FHD+ display", "Intel Core i7", "16GB RAM", "512GB SSD"]
      },
      { 
        id: 7, 
        name: "Lenovo Thinkpad Corei7", 
        price: 55000, 
        image: "https://images.unsplash.com/photo-1743456056142-1aaf69656dfa?q=80&w=868&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&h=400&fit=crop", 
        rating: 4.7, 
        category: "laptops",
        description: "Business laptop with legendary durability and security features",
        specs: ["14-inch FHD display", "Intel Core i7", "16GB RAM", "512GB SSD"]
      },
      { 
        id: 8, 
        name: "Hp Elitebook 840", 
        price: 41000, 
        image: "https://images.unsplash.com/photo-1618410325698-018bb3eb2318?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&h=400&fit=crop", 
        rating: 4.5, 
        category: "laptops",
        description: "Professional business laptop with enterprise security and performance",
        specs: ["14-inch FHD display", "Intel Core i5", "8GB RAM", "256GB SSD"]
      },
    ],
    smartwatches: [
      { 
        id: 9, 
        name: "Apple Watch Series 9", 
        price: 40000, 
        image: "/placeholder.svg", 
        rating: 4.8, 
        category: "smartwatches",
        description: "Advanced health tracking with bright display and new S9 chip",
        specs: ["45mm Always-On Retina display", "S9 SiP chip", "Blood oxygen monitoring", "GPS + Cellular"]
      },
      { 
        id: 10, 
        name: "Samsung Galaxy Watch 6", 
        price: 32000, 
        image: "/placeholder.svg", 
        rating: 4.6, 
        category: "smartwatches",
        description: "Comprehensive health monitoring with long battery life",
        specs: ["44mm Super AMOLED display", "Exynos W930", "Sleep tracking", "4G LTE"]
      },
      { 
        id: 11, 
        name: "Garmin Forerunner 955", 
        price: 50000, 
        image: "/placeholder.svg", 
        rating: 4.7, 
        category: "smartwatches",
        description: "GPS running watch with advanced training features",
        specs: ["1.3-inch MIP display", "Multi-band GPS", "VO2 max tracking", "32GB storage"]
      },
      { 
        id: 12, 
        name: "Fitbit Versa 4", 
        price: 20000, 
        image: "/placeholder.svg", 
        rating: 4.4, 
        category: "smartwatches",
        description: "Fitness-focused smartwatch with 6+ day battery life",
        specs: ["1.58-inch AMOLED display", "Built-in GPS", "Heart rate monitoring", "40+ exercise modes"]
      },
    ],
    gaming: [
      { 
        id: 13, 
        name: "PS5 Console", 
        price: 55000, 
        image: "/placeholder.svg", 
        rating: 4.9, 
        category: "gaming",
        description: "Next-gen gaming console with 4K gaming and ultra-fast SSD",
        specs: ["Custom AMD Zen 2 CPU", "10.28 TF GPU", "16GB GDDR6 RAM", "825GB SSD"]
      },
      { 
        id: 14, 
        name: "Xbox Series", 
        price: 55000, 
        image: "/placeholder.svg", 
        rating: 4.8, 
        category: "gaming",
        description: "Powerful gaming console with backward compatibility",
        specs: ["Custom AMD Zen 2 CPU", "12 TF GPU", "16GB GDDR6 RAM", "1TB NVMe SSD"]
      },
      { 
        id: 15, 
        name: "Nintendo Switch OLED", 
        price: 36000, 
        image: "/placeholder.svg", 
        rating: 4.7, 
        category: "gaming",
        description: "Portable gaming console with vibrant OLED screen",
        specs: ["7-inch OLED screen", "NVIDIA Custom Tegra", "4GB RAM", "64GB internal storage"]
      },
      { 
        id: 16, 
        name: "Steam Deck", 
        price: 40000, 
        image: "/placeholder.svg", 
        rating: 4.6, 
        category: "gaming",
        description: "Handheld PC gaming device with access to Steam library",
        specs: ["7-inch LCD touchscreen", "AMD APU", "16GB LPDDR5 RAM", "256GB NVMe SSD"]
      },
    ],
    audio: [
      { 
        id: 17, 
        name: "AirPods", 
        price: 25000, 
        image: "/placeholder.svg", 
        rating: 4.8, 
        category: "audio",
        description: "Premium wireless earbuds with active noise cancellation",
        specs: ["H2 chip", "Active Noise Cancellation", "Spatial Audio", "6 hours playback"]
      },
      { 
        id: 18, 
        name: "Sony WH-1000XM5", 
        price: 40000, 
        image: "/placeholder.svg", 
        rating: 4.7, 
        category: "audio",
        description: "Industry-leading noise canceling wireless headphones",
        specs: ["30mm drivers", "Industry-leading ANC", "30-hour battery", "Quick charge"]
      },
      { 
        id: 19, 
        name: "Bose QuietComfort", 
        price: 34000, 
        image: "/placeholder.svg", 
        rating: 4.6, 
        category: "audio",
        description: "Comfortable over-ear headphones with excellent noise cancellation",
        specs: ["TriPort technology", "Noise cancellation", "24-hour battery", "Comfortable fit"]
      },
      { 
        id: 20, 
        name: "JBL Flip 6", 
        price: 12900, 
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop", 
        rating: 4.5, 
        category: "audio",
        description: "Portable Bluetooth speaker with powerful bass and waterproof design",
        specs: ["2-way speaker system", "IP67 waterproof", "12-hour playtime", "PartyBoost"]
      },
    ],
    accessories: [
      { 
        id: 21, 
        name: "MagSafe Charger", 
        price: 3900, 
        image: "/placeholder.svg", 
        rating: 4.5, 
        category: "accessories",
        description: "Wireless charging pad with magnetic alignment for iPhone",
        specs: ["15W wireless charging", "Magnetic alignment", "USB-C connector", "iPhone 12+ compatible"]
      },
      { 
        id: 22, 
        name: "OraimoPowerBank", 
        price: 4900, 
        image: "/placeholder.svg", 
        rating: 4.6, 
        category: "accessories",
        description: "High-capacity portable charger with fast charging technology",
        specs: ["20000mAh capacity", "22.5W fast charging", "Multiple ports", "LED indicator"]
      },
      { 
        id: 23, 
        name: "Logitech MX Master 3", 
        price: 9900, 
        image: "/placeholder.svg", 
        rating: 4.7, 
        category: "accessories",
        description: "Advanced wireless mouse for productivity and precision",
        specs: ["4000 DPI sensor", "70-day battery", "USB-C charging", "Cross-computer control"]
      },
      { 
        id: 24, 
        name: "USB-C Hub", 
        price: 7900, 
        image: "/placeholder.svg", 
        rating: 4.4, 
        category: "accessories",
        description: "Multi-port adapter for modern laptops and devices",
        specs: ["7-in-1 design", "4K HDMI output", "USB 3.0 ports", "SD card reader"]
      },
      { 
        id: 25, 
        name: "Type-C Charger", 
        price: 3900, 
        image: "/placeholder.svg", 
        rating: 4.5, 
        category: "accessories",
        description: "Fast charging USB-C adapter with multiple safety features",
        specs: ["65W fast charging", "GaN technology", "Universal compatibility", "Compact design"]
      },
      { 
        id: 26, 
        name: "Oraimo PowerBank", 
        price: 4900, 
        image: "/placeholder.svg", 
        rating: 4.6, 
        category: "accessories",
        description: "Reliable portable power bank with fast charging capabilities",
        specs: ["10000mAh capacity", "18W fast charging", "Dual USB ports", "LED power display"]
      },
      { 
        id: 27, 
        name: "Gaming Mouse Pad", 
        price: 2900, 
        image: "/placeholder.svg", 
        rating: 4.7, 
        category: "accessories",
        description: "Large gaming mouse pad with smooth surface and anti-slip base",
        specs: ["XXL size 900x400mm", "Smooth cloth surface", "Anti-slip rubber base", "Stitched edges"]
      },
      { 
        id: 28, 
        name: "USB-C Cable", 
        price: 1900, 
        image: "/placeholder.svg", 
        rating: 4.4, 
        category: "accessories",
        description: "Durable USB-C cable for charging and data transfer",
        specs: ["3ft/1m length", "480Mbps data transfer", "100W power delivery", "Braided design"]
      },
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

  const ProductCard = ({ product }) => {
    const handleImageLoad = () => {
      console.log(`Image loaded successfully: ${product.name}`);
    };

    const handleImageError = (e) => {
      console.error(`Failed to load image for ${product.name}:`, e.target.src);
      e.target.src = '/placeholder.svg';
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
              onClick={() => addToCart(product)}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white transform hover:scale-105 transition-all duration-200"
            >
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

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
        title="Phones" 
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
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-purple-100 text-lg">Have questions? We'd love to hear from you!</p>
            </div>
            
            <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl">
              <CardContent className="p-8">
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
