import React, { useState } from 'react';
import { Phone, Laptop, Watch, Gamepad2, Headphones, Cable } from "lucide-react";
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { CategorySection } from '../components/CategorySection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { ShoppingCartDisplay } from '../components/ShoppingCart';
import { ProductModal } from '../components/ProductModal';

const Index = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handlePhoneCall = () => {
    window.open('tel:+254741645021', '_self');
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const products = {
    phones: [
      { 
        id: 1, 
        name: "Tecno-spark 30", 
        price: 21500, 
        image: "/images/tecno-spark 30.jpg", 
        rating: 4.8, 
        category: "phones",
        description: "The Tecno Spark 30 is a budget-friendly smartphone and has an advanced camera system",
        specs: ["Display: 6.78-inch FHD", "OS: Android 14", "Chip: MediaTek Helio G91", "RAM: 8GB", "Internal Storage: 128/256GB", "Front Camera: 13MP", "Main Camera: 64MP", "Connectivity: 4G, NFC, Infrared, Bluetooth, Wi-Fi", "Battery: It comes with a 5,000mAh battery that supports 18W fast charging, ensuring long battery life and quick recharges"]
      },
      { 
        id: 2, 
        name: "Tecno-spark 20", 
        price: 25000, 
        image: "/images/tecno-spark 20.jpg", 
        rating: 4.7, 
        category: "phones",
        description: "The Tecno Spark 20 is a budget-friendly smartphone with a focus on photography and performance",
        specs: ["Display: 6.6-inch IPS LCD with a 90Hz refresh rate, 720 x 1612 pixels resolution", "Processor: MediaTek Helio G85", "RAM: 8GB, with options for 128GB or 256GB internal storage, expandable via microSDXC", "Cameras: 50MP main rear camera, 32MP front-facing camera", "Battery: 5000mAh with 18W fast charging", "Operating System: Android 13", "Other Features: Side-mounted fingerprint sensor, dual SIM support, 4G LTE, Wi-Fi, Bluetooth, FM Radio, USB Type-C", "Design: Minimalist aesthetics with a three-ring design and sleek metal edges", "Colors: Available in Gravity Black, Cyber White, Magic Skin Blue, and Neon Gold"]
      },
      { 
        id: 3, 
        name: "Tecno Camon 30", 
        price: 31500, 
        image: "/images/tecno-camon 30.jpg", 
        rating: 4.6, 
        category: "phones",
        description: "The Tecno Camon 30 is a budget-friendly smartphone featuring a large 6.78-inch display with a 90Hz refresh rate a 64MP main camera and a 13MP front camera with dual-tone flash",
        specs: ["Display: 6.78-inch FHD+ IPS LCD, 90Hz refresh rate", "OS: Android 14 with HIOS 14", "Chip: MediaTek Helio G91", "RAM: 8GB", "Internal Storage: 128GB / 256GB (expandable via microSD)", "Front Camera: 13MP with dual-LED flash", "Main Camera: 64MP Sony IMX682 sensor", "Connectivity: 4G LTE, NFC, Bluetooth, Wi-Fi", "Battery: 5,000mAh with 18W fast charging support", "Audio: Dual stereo speakers with Dolby Atmos", "Build: Glass front, plastic frame, eco-leather back option", "Durability: IP64 water and dust resistant", "Special Edition: Bumblebee Transformers-themed version available"]
      },
      { 
        id: 4, 
        name: "Tecno Camon 40", 
        price: 35000, 
        image: "/images/tecno-camon 40.jpg", 
        rating: 4.5, 
        category: "phones",
        description: "Budget-friendly smartphone with reliable performance and long battery life",
        specs: ["RAM: 8GB", "Internal Storage: 128GB, 256GB","Display: 6.78 inches, AMOLED","OS: Android 15, HIOS 15","Chipset: Mediatek Helio G100 Ultimate (6 nm)","Main Camera: 50MP + 8MP","Selfie Lens: 32MP","Network: 4G","Battery: 5200mAh, 45W wired, 50% in 23 min, 100% in 43 min","Colors: Emerald Lake Green, Galaxy Black, Glacier White, Emerald Glow Green"]
      },
    ],
    laptops: [
      { 
        id: 5, 
        name: "HP EliteBook 840 Aero G8", 
        price: 120000, 
        image: "/images/HP Elitebook 840.jpg", 
        rating: 4.9, 
        category: "laptops",
        description: "HP EliteBook 840 Aero G8 Notebook PC 11th Generation Intel Core i5-1135G7 Processor 32GB DDR4-3200 SDRAM RAM 512GB SSD Storage 14″ FHD Display Iris XeGraphics Audio by Bang & Olufsen",
        specs: ["Processor: 11th Generation Intel Core i5-1135G7 (4 cores, 8 threads, 2.4 GHz base, up to 4.2 GHz turbo)","Memory: 32GB DDR4-3200 SDRAM","Storage: 512GB SSD (Solid State Drive)","Display: 14″ Full HD (1920×1080) Anti-glare, LED-backlit display","Graphics: Intel Iris Xe Graphics","Audio: Bang & Olufsen audio technology",
"Webcam: 720p HD IR Camera for facial recognition","Security: Fingerprint reader, TPM 2.0, Privacy Camera Shutter","Operating System: Windows 10 Pro"]
      },
      { 
        id: 6, 
        name: "Dell XPS 13D", 
        price: 65000, 
        image: "/images/dell-xps-13d.jpg", 
        rating: 4.6, 
        category: "laptops",
        description: "Ultra-portable Windows laptop with premium build quality",
        specs: ["13.4-inch FHD+ display", "Intel Core i7", "16GB RAM", "512GB SSD"]
      },
      { 
        id: 7, 
        name: "Lenovo Thinkpad Corei7", 
        price: 55000, 
        image: "/images/lenovo-thinkpad-i7.jpg", 
        rating: 4.7, 
        category: "laptops",
        description: "Business laptop with legendary durability and security features",
        specs: ["14-inch FHD display", "Intel Core i7", "16GB RAM", "512GB SSD"]
      },
      { 
        id: 8, 
        name: "Hp Elitebook 840", 
        price: 41000, 
        image: "/images/hp-elitebook-840.jpg", 
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
        image: "/images/apple-watch-series-9.jpg", 
        rating: 4.8, 
        category: "smartwatches",
        description: "Advanced health tracking with bright display and new S9 chip",
        specs: ["45mm Always-On Retina display", "S9 SiP chip", "Blood oxygen monitoring", "GPS + Cellular"]
      },
      { 
        id: 10, 
        name: "Samsung Galaxy Watch 6", 
        price: 32000, 
        image: "/images/samsung-galaxy-watch-6.jpg", 
        rating: 4.6, 
        category: "smartwatches",
        description: "Comprehensive health monitoring with long battery life",
        specs: ["44mm Super AMOLED display", "Exynos W930", "Sleep tracking", "4G LTE"]
      },
      { 
        id: 11, 
        name: "Garmin Forerunner 955", 
        price: 50000, 
        image: "/images/garmin-forerunner-955.jpg", 
        rating: 4.7, 
        category: "smartwatches",
        description: "GPS running watch with advanced training features",
        specs: ["1.3-inch MIP display", "Multi-band GPS", "VO2 max tracking", "32GB storage"]
      },
      { 
        id: 12, 
        name: "Fitbit Versa 4", 
        price: 20000, 
        image: "/images/fitbit-versa-4.jpg", 
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
        image: "/images/ps5-console.jpg", 
        rating: 4.9, 
        category: "gaming",
        description: "Next-gen gaming console with 4K gaming and ultra-fast SSD",
        specs: ["Custom AMD Zen 2 CPU", "10.28 TF GPU", "16GB GDDR6 RAM", "825GB SSD"]
      },
      { 
        id: 14, 
        name: "Xbox Series", 
        price: 55000, 
        image: "/images/xbox-series-x.jpg", 
        rating: 4.8, 
        category: "gaming",
        description: "Powerful gaming console with backward compatibility",
        specs: ["Custom AMD Zen 2 CPU", "12 TF GPU", "16GB GDDR6 RAM", "1TB NVMe SSD"]
      },
      { 
        id: 15, 
        name: "Nintendo Switch OLED", 
        price: 36000, 
        image: "/images/nintendo-switch-oled.jpg", 
        rating: 4.7, 
        category: "gaming",
        description: "Portable gaming console with vibrant OLED screen",
        specs: ["7-inch OLED screen", "NVIDIA Custom Tegra", "4GB RAM", "64GB internal storage"]
      },
      { 
        id: 16, 
        name: "Steam Deck", 
        price: 40000, 
        image: "/images/steam-deck.jpg", 
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
        image: "/images/airpods-pro.jpg", 
        rating: 4.8, 
        category: "audio",
        description: "Premium wireless earbuds with active noise cancellation",
        specs: ["H2 chip", "Active Noise Cancellation", "Spatial Audio", "6 hours playback"]
      },
      { 
        id: 18, 
        name: "Sony WH-1000XM5", 
        price: 40000, 
        image: "/images/sony-wh-1000xm5.jpg", 
        rating: 4.7, 
        category: "audio",
        description: "Industry-leading noise canceling wireless headphones",
        specs: ["30mm drivers", "Industry-leading ANC", "30-hour battery", "Quick charge"]
      },
      { 
        id: 19, 
        name: "Bose QuietComfort", 
        price: 34000, 
        image: "/images/bose-quietcomfort.jpg", 
        rating: 4.6, 
        category: "audio",
        description: "Comfortable over-ear headphones with excellent noise cancellation",
        specs: ["TriPort technology", "Noise cancellation", "24-hour battery", "Comfortable fit"]
      },
      { 
        id: 20, 
        name: "JBL Flip 6", 
        price: 12900, 
        image: "/images/jbl-flip-6.jpg", 
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
        image: "/images/magsafe-charger.jpg", 
        rating: 4.5, 
        category: "accessories",
        description: "Wireless charging pad with magnetic alignment for iPhone",
        specs: ["15W wireless charging", "Magnetic alignment", "USB-C connector", "iPhone 12+ compatible"]
      },
      { 
        id: 22, 
        name: "OraimoPowerBank", 
        price: 4900, 
        image: "/images/oraimo-powerbank.jpg", 
        rating: 4.6, 
        category: "accessories",
        description: "High-capacity portable charger with fast charging technology",
        specs: ["20000mAh capacity", "22.5W fast charging", "Multiple ports", "LED indicator"]
      },
      { 
        id: 23, 
        name: "Logitech MX Master 3", 
        price: 9900, 
        image: "/images/logitech-mx-master-3.jpg", 
        rating: 4.7, 
        category: "accessories",
        description: "Advanced wireless mouse for productivity and precision",
        specs: ["4000 DPI sensor", "70-day battery", "USB-C charging", "Cross-computer control"]
      },
      { 
        id: 24, 
        name: "USB-C Hub", 
        price: 7900, 
        image: "/images/usb-c-hub.jpg", 
        rating: 4.4, 
        category: "accessories",
        description: "Multi-port adapter for modern laptops and devices",
        specs: ["7-in-1 design", "4K HDMI output", "USB 3.0 ports", "SD card reader"]
      },
      { 
        id: 25, 
        name: "Type-C Charger", 
        price: 3900, 
        image: "/images/type-c-charger.jpg", 
        rating: 4.5, 
        category: "accessories",
        description: "Fast charging USB-C adapter with multiple safety features",
        specs: ["65W fast charging", "GaN technology", "Universal compatibility", "Compact design"]
      },
      { 
        id: 26, 
        name: "Oraimo PowerBank", 
        price: 4900, 
        image: "/images/oraimo-powerbank-2.jpg", 
        rating: 4.6, 
        category: "accessories",
        description: "Reliable portable power bank with fast charging capabilities",
        specs: ["10000mAh capacity", "18W fast charging", "Dual USB ports", "LED power display"]
      },
      { 
        id: 27, 
        name: "Gaming Mouse Pad", 
        price: 2900, 
        image: "/images/gaming-mouse-pad.jpg", 
        rating: 4.7, 
        category: "accessories",
        description: "Large gaming mouse pad with smooth surface and anti-slip base",
        specs: ["XXL size 900x400mm", "Smooth cloth surface", "Anti-slip rubber base", "Stitched edges"]
      },
      { 
        id: 28, 
        name: "USB-C Cable", 
        price: 1900, 
        image: "/images/usb-c-cable.jpg", 
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-purple-50 to-pink-100">
      <Navigation 
        cartItems={cartItems}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        handleEmailContact={handleEmailContact}
        handleWhatsAppContact={handleWhatsAppContact}
      />

      <HeroSection />

      <CategorySection 
        title="Phones" 
        products={products.phones} 
        icon={Phone}
        gradient="bg-gradient-to-r from-blue-500 to-cyan-500"
        onAddToCart={addToCart}
        onProductClick={handleProductClick}
        formatPrice={formatPrice}
      />
      
      <CategorySection 
        title="Laptops" 
        products={products.laptops} 
        icon={Laptop}
        gradient="bg-gradient-to-r from-purple-500 to-pink-500"
        onAddToCart={addToCart}
        onProductClick={handleProductClick}
        formatPrice={formatPrice}
      />
      
      <CategorySection 
        title="Smartwatches" 
        products={products.smartwatches} 
        icon={Watch}
        gradient="bg-gradient-to-r from-green-500 to-teal-500"
        onAddToCart={addToCart}
        onProductClick={handleProductClick}
        formatPrice={formatPrice}
      />
      
      <CategorySection 
        title="Gaming" 
        products={products.gaming} 
        icon={Gamepad2}
        gradient="bg-gradient-to-r from-red-500 to-orange-500"
        onAddToCart={addToCart}
        onProductClick={handleProductClick}
        formatPrice={formatPrice}
      />
      
      <CategorySection 
        title="Audio" 
        products={products.audio} 
        icon={Headphones}
        gradient="bg-gradient-to-r from-indigo-500 to-purple-500"
        onAddToCart={addToCart}
        onProductClick={handleProductClick}
        formatPrice={formatPrice}
      />
      
      <CategorySection 
        title="Accessories" 
        products={products.accessories} 
        icon={Cable}
        gradient="bg-gradient-to-r from-pink-500 to-rose-500"
        onAddToCart={addToCart}
        onProductClick={handleProductClick}
        formatPrice={formatPrice}
      />

      <ShoppingCartDisplay
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        getTotalPrice={getTotalPrice}
        formatPrice={formatPrice}
      />

      <ContactSection
        handleEmailContact={handleEmailContact}
        handleWhatsAppContact={handleWhatsAppContact}
        handlePhoneCall={handlePhoneCall}
      />

      <Footer />

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddToCart={addToCart}
        formatPrice={formatPrice}
      />
    </div>
  );
};

export default Index;
