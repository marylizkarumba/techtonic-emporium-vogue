
import { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, Star, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  featured?: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', icon: '🔥' },
    { id: 'phones', name: 'Smartphones', icon: '📱' },
    { id: 'laptops', name: 'Laptops', icon: '💻' },
    { id: 'smartwatches', name: 'Smartwatches', icon: '⌚' },
    { id: 'gaming', name: 'Gaming', icon: '🎮' },
    { id: 'audio', name: 'Audio', icon: '🎧' },
    { id: 'accessories', name: 'Accessories', icon: '🔌' }
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 1199,
      originalPrice: 1299,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
      category: "phones",
      rating: 4.9,
      reviews: 2847,
      featured: true
    },
    {
      id: 2,
      name: "MacBook Pro 16-inch",
      price: 2399,
      originalPrice: 2599,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
      category: "laptops",
      rating: 4.8,
      reviews: 1923,
      featured: true
    },
    {
      id: 3,
      name: "Apple Watch Ultra 2",
      price: 799,
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
      category: "smartwatches",
      rating: 4.7,
      reviews: 1456,
      featured: true
    },
    {
      id: 4,
      name: "Sony PlayStation 5",
      price: 499,
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400",
      category: "gaming",
      rating: 4.9,
      reviews: 3241,
    },
    {
      id: 5,
      name: "Sony WH-1000XM5",
      price: 399,
      originalPrice: 449,
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400",
      category: "audio",
      rating: 4.8,
      reviews: 2156,
    },
    {
      id: 6,
      name: "Samsung Galaxy S24 Ultra",
      price: 1199,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
      category: "phones",
      rating: 4.7,
      reviews: 1834,
    },
    {
      id: 7,
      name: "Dell XPS 13 Plus",
      price: 1299,
      originalPrice: 1499,
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400",
      category: "laptops",
      rating: 4.6,
      reviews: 967,
    },
    {
      id: 8,
      name: "Samsung Galaxy Watch 6",
      price: 329,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      category: "smartwatches",
      rating: 4.5,
      reviews: 1234,
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const updateQuantity = (id: number, change: number) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                TechTonic
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Home
                </a>
                <a href="#products" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Products
                </a>
                <a href="#categories" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Categories
                </a>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Contact
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCartOpen(true)}
                className="relative text-white hover:text-blue-400"
              >
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-blue-500 text-xs">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#products" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Products</a>
              <a href="#categories" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Categories</a>
              <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                TechTonic
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover the latest in technology. Premium devices, unbeatable prices, and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <a href="#products">Shop Now</a>
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                <a href="#categories">Browse Categories</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Products</h2>
            <p className="text-gray-400 text-lg">Hand-picked premium devices just for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.filter(p => p.featured).map((product) => (
              <Card key={product.id} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {product.originalPrice && (
                      <Badge className="absolute top-2 right-2 bg-red-500">
                        Save ${product.originalPrice - product.price}
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                        }`}
                      />
                    ))}
                    <span className="text-gray-400 text-sm ml-2">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-bold text-xl">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <Button
                      onClick={() => addToCart(product)}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Shop by Category</h2>
            <p className="text-gray-400 text-lg">Find exactly what you're looking for</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-lg border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 border-blue-500 text-white'
                    : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-800'
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="text-sm font-medium">{category.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">All Products</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-700 text-white w-64"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-4">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {product.originalPrice && (
                      <Badge className="absolute top-2 right-2 bg-red-500">
                        Save ${product.originalPrice - product.price}
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                        }`}
                      />
                    ))}
                    <span className="text-gray-400 text-xs ml-1">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <span className="text-white font-bold">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
                      )}
                    </div>
                    <Button
                      size="sm"
                      onClick={() => addToCart(product)}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-400 text-lg">Have questions? We'd love to hear from you.</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">First Name</label>
                      <Input className="bg-gray-700 border-gray-600 text-white" />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Last Name</label>
                      <Input className="bg-gray-700 border-gray-600 text-white" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Email</label>
                    <Input type="email" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                TechTonic
              </h3>
              <p className="text-gray-400">
                Your premium destination for the latest technology and gadgets.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="text-gray-400 hover:text-white block">Home</a>
                <a href="#products" className="text-gray-400 hover:text-white block">Products</a>
                <a href="#categories" className="text-gray-400 hover:text-white block">Categories</a>
                <a href="#contact" className="text-gray-400 hover:text-white block">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Categories</h4>
              <div className="space-y-2">
                <div className="text-gray-400">Smartphones</div>
                <div className="text-gray-400">Laptops</div>
                <div className="text-gray-400">Smartwatches</div>
                <div className="text-gray-400">Gaming</div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <div className="text-gray-400">Help Center</div>
                <div className="text-gray-400">Shipping Info</div>
                <div className="text-gray-400">Returns</div>
                <div className="text-gray-400">Warranty</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 TechTonic. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Shopping Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsCartOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-gray-900 shadow-xl">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <h2 className="text-lg font-semibold text-white">Shopping Cart</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsCartOpen(false)}
                  className="text-white"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4">
                {cart.length === 0 ? (
                  <div className="text-center text-gray-400 mt-8">
                    <ShoppingCart className="h-16 w-16 mx-auto mb-4" />
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="bg-gray-800/50 rounded-lg p-4">
                        <div className="flex items-center space-x-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h3 className="text-white font-medium text-sm">{item.name}</h3>
                            <p className="text-gray-400 text-sm">${item.price}</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, -1)}
                                className="h-6 w-6 p-0"
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="text-white text-sm">{item.quantity}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, 1)}
                                className="h-6 w-6 p-0"
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-400 hover:text-red-300 ml-auto"
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {cart.length > 0 && (
                <div className="border-t border-gray-800 p-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white font-semibold">Total: ${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    Checkout
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
