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
        price: 50000, 
        image: "/images/HP Elitebook 840.jpg", 
        rating: 4.9, 
        category: "laptops",
        description: "HP EliteBook 840 Aero G8 Notebook PC 11th Generation Intel Core i5-1135G7 Processor 32GB DDR4-3200 SDRAM RAM 512GB SSD Storage 14″ FHD Display Iris XeGraphics Audio by Bang & Olufsen",
        specs: ["Processor: 11th Generation Intel Core i5-1135G7 (4 cores, 8 threads, 2.4 GHz base, up to 4.2 GHz turbo)","Memory: 32GB DDR4-3200 SDRAM","Storage: 512GB SSD (Solid State Drive)","Display: 14″ Full HD (1920×1080) Anti-glare, LED-backlit display","Graphics: Intel Iris Xe Graphics","Audio: Bang & Olufsen audio technology",
"Webcam: 720p HD IR Camera for facial recognition","Security: Fingerprint reader, TPM 2.0, Privacy Camera Shutter","Operating System: Windows 10 Pro"]
      },
      { 
        id: 6, 
        name: "Lenovo ThinkPad Yoga 370", 
        price: 45000, 
        image: "/images/Lenovo ThinkPad.jpg", 
        rating: 4.6, 
        category: "laptops",
        description: "Lenovo ThinkPad Yoga 370 Intel Core i7 7th Gen 16GB RAM 512GB SSD 13.3 Inches FHD Display",
        specs: ["Processor: Intel Core i7 7th Gen", "Memory: 16GB RAM","Storage: 512GB SSD","Display: 13.3-inch Full HD touchscreen","Graphics: Intel HD Graphics 620","Operating System: Windows 10 Pro","Ports: USB 3.0, USB Type-C, HDMI, MicroSD reader","Security: Fingerprint reader","Battery: Up to 12 hours","Weight: 1.43 kg (3.15 lbs)"]
      },
      { 
        id: 7, 
        name: "Lenovo Thinkpad X280", 
        price: 28000, 
        image: "/images/lenovo-thinkpad x280.jpg", 
        rating: 4.7, 
        category: "laptops",
        description: "Lenovo Thinkpad X280 Intel Core i5-8250U 8GB RAM 256GB SSD 12.5inch HD Business laptop with legendary durability and security features",
        specs: ["Processor: Intel Core i5-8250U","Graphics: Intel UHD Graphics 620","Display: 12.5-inch HD (1366 x 768) TN", "Storage: 256GB SSD", "Memory: 8GB DDR4 RAM", "Operating System: Windows 10 Pro", "Portability: Lightweight at 1.13 kg (2.5 lbs)", "Connectivity: Includes USB Type-C (Thunderbolt 3, DisplayPort, HDMI), USB Type-A, Ethernet, Wi-Fi, Bluetooth", "Build Material: Combination of Aluminum, Carbon, Glass Fiber, and Magnesium alloy", "Security: Fingerprint reader, Security Lock slot"]
      },
      { 
        id: 8, 
        name: "Dell Latitude", 
        price: 50000, 
        image: "/images/Dell Latitude.jpg", 
        rating: 4.5, 
        category: "laptops",
        description: "Compact, Powerful, and Reliable: The Dell Latitude 5300 is designed for professionals seeking a balance between performance, portability, and functionality. With a powerful 8th Gen Intel Core i7 processor, generous memory, and advanced storage options, this laptop is built to handle demanding business applications and multitasking effortlessly",
        specs: ["Processor: 8th Gen Intel Core i7 (Quad-Core, up to 4.6 GHz with Turbo Boost)", "Display: 13.3-inch Full HD (1920 x 1080) Anti-Glare Display with IPS technology", "Memory: 16GB DDR4 RAM (expandable for future requirements)", "Storage: 512GB PCIe NVMe M.2 SSD for lightning-fast boot times and efficient data access", "Graphics: Integrated Intel UHD 620 Graphics for smooth visuals and light graphical tasks", "Operating System: FreeDOS (Ready for your preferred OS installation)", "Connectivity:Intel Wi-Fi 6 (802.11ax)Bluetooth 5.0, USB-C with Power Delivery and DisplayPort2x USB 3.1 Gen 1 (Type-A)HDMI 1.4b,RJ-45 Ethernet port,MicroSD card reader, 3.5mm headphone/microphone combo jack", 
"Camera: HD Webcam with privacy features",
"Audio: Integrated stereo speakers with Waves MaxxAudio Pro",
"Keyboard: Backlit, spill-resistant keyboard for convenience and durability",
"Battery: 4-cell, 60Wh battery with ExpressCharge technology for quick recharging"]
      },
    ],
    smartwatches: [
      { 
        id: 9, 
        name: "Oraimo Watch Lite", 
        price: 5000, 
        image: "/images/Oraimo-Watch-Lite.jpg", 
        rating: 4.8, 
        category: "smartwatches",
        description: "Oraimo Watch Lite OSW-18 price in Kenya is Kes 4,000. It features a large and bright 1.69-inch TFT screen with 240*280p resolution. The watch relies on wireless Bluetooth V5.1 connectivity. It has 61 sports modes and 100+ watch faces for your setings. It supports 24 Hours Health Management including Heart Ratem Blood Oxygen, Pressure and Sleep Monitoring. OSW-18 comes with Call and Message reminder, making it easier for you not to miss important notifications and follow up through your handset.  It is waterproof with IP68 rating.",
        specs: ["Screen Size: 1.69-inch  TFT 240*280p", "Bluetooth Version: V5.1", "Battery Capacity: 290mAh", "Battery Type: Lithium Polymer Battery","Battery Life: 7 Days","Material: ABS /PC/TPU"]
      },
      { 
        id: 10, 
        name: "Samsung Galaxy Watch 6", 
        price: 24000, 
        image: "/images/Samsung-Galaxy-Watch-6.jpg", 
        rating: 4.6, 
        category: "smartwatches",
        description: "Comprehensive health monitoring with long battery life",
        specs: ["Color:  Graphite, Silver, Gold","Screen Size: 1.5-inch, 1.3 inch","Resolution: 480 x 480 pixels (~453 ppi density)","Internal Storage: 16 GB","RAM: 2 GB","OS: Android Wear OS 4, One UI Watch 5","Processor: Exynos W930","Dimension: 42.8 x 44.4 x 9 mm","Battery: 425 mAh, 10W wireless","Water resistance: IP68 Certified Rating"]
      },
      { 
        id: 11, 
        name: "Oraimo Watch 5", 
        price: 3200, 
        image: "/images/Oraimo Watch 5.jpg", 
        rating: 4.7, 
        category: "smartwatches",
        description: "Oraimo Watch 5N 2.01'' TFT IP68 Smart Watch",
        specs: ["Display Screen: 2.01 TFT 240*296","BT Version: V5.3","Material: ABS/PC/Silica gel","Battery Capacity: 300mAh","Battery Type: Lithium polymer","Rated Voltage: 5V","Charging Time: 3 hours","Normal Usage Time: 7 days","Standby Time: More than 30 days","Watch Size: 47.8*39.2*10.95mm","Waterproof: IP68","*oraimo Lab test results","Model: OSW-806N"]
      },
      { 
        id: 12, 
        name: "Redmi Watch 5 Active", 
        price: 7500, 
        image: "/images/Redmi-Watch-5-Active.jpg", 
        rating: 4.4, 
        category: "smartwatches",
        description: "The Redmi Watch 5 Active, offers a 2-inch LCD screen and measures 49.1 x 40.4 x 11.4mm. Crafted with a plastic body (sprayed with metal) for enhanced impact resistance and 5 ATM water resistance, this watch is a smart investment. It supports over 140 sports modes with auto-detection and over 200 watch faces to match your style. Connectivity is via Bluetooth, and the device even supports Bluetooth calls. With up to 18 days of battery life on typical usage, it ensures reduced need for frequent charging.",
        specs: ["Bluetooth Call Support","2-inch LCD Display","5ATM water resistance","140+ workout modes","200+ Watch Faces","Battery Life: 18 days typical use, 12 days heavy use","Colors: Midnight Black, Matte Silver"]    
  },
    ],
    gaming: [
      { 
        id: 13, 
        name: "PS5 Slim 1TB", 
        price: 80000, 
        image: "/images/PS5-Slim-1TB.jpg", 
        rating: 4.9, 
        category: "gaming",
        description: "PlayStation 5 Slim opens up new gaming possibilities you never anticipated. Enjoy super-fast loading with an ultra-fast 1TB SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D2 audio, and a whole new generation of incredible PlayStation games, all with incredible graphics.",
        specs: ["Processor: 3rd generation AMD Ryzen (Zen 2, 8 cores/16 threads, 3.5 GHz, 7 nm etch)", "Graphics chipset: AMD RDNA 2 Custom",
"Memory: 16 GB GDDR6", "Indicative power: 10.3 TFLOPs", "Storage: 1 TB removable SSD drive","Optical drive: 4K Blu-ray", "Max resolution: 8K", "Max framerate: 4K/120fps", "Audio: 3D, Tempest engine"]
      },
      { 
        id: 14, 
        name: "Xbox S Series", 
        price: 55000, 
        image: "/images/Xbox-S-Series.jpg", 
        rating: 4.8, 
        category: "gaming",
        description: "The Xbox S Series is Microsoft’s most extensive digital game library yet, all at a great price. The console boasts a high dynamic range, X Box Velocity Architecture, and up to 120 frames per second video. Xbox Series S is the smallest, sleekest Xbox ever. ",
        specs: ["Dimensions: 96*358*216mm", "Internal Built-in Storage: 512GB", "Memory interface: 16GB GDDR6 / 256-bit.", "CPU: AMD Zen 2-based CPU with eight cores at 3.5GHz (variable frequency)", "GPU architecture: Custom RDNA 2."]
      },
      { 
        id: 15, 
        name: "PlayStation 4 Slim", 
        price: 40000, 
        image: "/images/PlayStation-4-slim.jpg", 
        rating: 4.7, 
        category: "gaming",
        description: "PS4 500GB Console is Wi-Fi and Bluetooth enabled, making it easy to go online with friends. PS4 Console’s HDR technology improves your games’ contrast and range of colors. Thus, images look more vibrant than ever. To maximize your immersion and user experience, you need an HDR-enabled TV to enjoy the full benefit of PS4-compatible games. The console also works with PlayStation VR (note: headset and camera sold separately).",
        specs: ["Color: Black", "Weight: 261g", "HDR Game Streaming", "HDR auto-upscaling", "Internal Storage: 500GB Storage", "RAM: 8GB RAM", "Battery: 1 Lithium Polymer batteries required"]
      },
      { 
        id: 16, 
        name: "JBL Quantum 300 Headphones", 
        price: 40000, 
        image: "/images/JBL-Quantum-300.jpg", 
        rating: 4.6, 
        category: "gaming",
        description: "Get a more immersive gaming experience with the JBL Quantum 300.",
        specs: ["Earpiece Connection: Wired", "Number of Earpieces: Dual Earpiece", "Magnet Type: Neodymium", "Driver Type:  Dynamic", "Driver Size:  1.97″ / 50 mm", "Microphone: Adjustable Boom, Left Earpiece", "Frequency Response: 20 Hz to 20 kHz"]
      },
    ],
    audio: [
      { 
        id: 17, 
        name: "Oraimo OpenSnap", 
        price: 2000, 
        image: "/images/Oraimo OpenSnap.jpg", 
        rating: 4.8, 
        category: "audio",
        description: "Oraimo OpenSnap N Clip-On Open-Ear True Wireless EarbudsPremium wireless earbuds with active noise cancellation",
        specs: [" Comfortable and Secure Fit","Clear Voice in Calls", "16-Hour Long Battery Life", "Customize Your Listening", "*If the charging case is fully recharged,it can charge the earbuds about 3 times.*oraimo Lab test results"]
      },
      { 
        id: 18, 
        name: "Oraimo BoomPop Headphones", 
        price: 3500, 
        image: "/images/Oraimo BoomPop Headphones.jpg", 
        rating: 4.7, 
        category: "audio",
        description: "Oraimo BoomPop 2 ENC Over-Ear Wireless Headphones Industry-leading noise canceling wireless headphones",
        specs: [" Powerful Bass", "60-hr-Playtime", "AniFast™ Fast Charging", "ENC HD Voice in Calls"]
      },
      { 
        id: 19, 
        name: "Bose QuietComfort", 
        price: 34000, 
        image: "/images/Bose Quiet.jpg", 
        rating: 4.6, 
        category: "audio",
        description: "Comfortable over-ear headphones with excellent noise cancellation",
        specs: ["Legendary Noise Cancellation**: Combines active and passive technologies.","High-Fidelity Audio**: Clear, powerful sound with adjustable EQ.","Customizable Listening Modes**: Quiet, Aware, and custom modes with Wind Block.","Comfortable Design**: Plush earcups and padded headband.","Long Battery Life**: 24 hours playback; 15-min charge = 2.5 hours.","Wired & Wireless Options**: Includes audio cable with mic.","Multi-Device Connectivity**: Seamless switching between devices.","Voice Commands**: For calls and voice assistant access.","Spotify Tap**: Quick access to Spotify with action button.","Aware Mode**: Ambient sound passthrough for awareness.","Immersive Audio**: Spatial sound with Bose Immersive Audio.","Sleek Design**: Premium look and materials","Wind Block**: Reduces wind noise outdoors","Side Tones**: Voice feedback during calls/chats","Announce Calls**: Caller name announcement","Custom Touch Controls**: Configurable via Bose app", "Comfortable fit"]
      },
      { 
        id: 20, 
        name: "JBL Flip 6", 
        price: 13500, 
        image: "/images/JBL-Flip-6.jpg", 
        rating: 4.5, 
        category: "audio",
        description: "Portable Bluetooth speaker with powerful bass and waterproof design",
        specs: ["Transducers: 45 x 80mm woofer", "Output power:", "Frequency response: 63Hz – 20kHz", "Signal-to-noise ratio: >80dB", "Battery type: 4800mAh", "Battery charge time: 2.5 hours (5V/3A)", "Music playtime: up to 12 hours", "Cable type: USB – C charging cable"]
      },
    ],
    accessories: [
      { 
        id: 21, 
        name: "Epson EcoTank L3250", 
        price: 25000, 
        image: "/images/Epson EcoTank L3250.jpg", 
        rating: 4.5, 
        category: "accessories",
        description: "The multi-functional EcoTank L3250 is designed to improve business cost savings and print productivity. Expect a high print yield of up to 4,500 pages for black-and-white, and 7,500 pages for colour.",
        specs: ["General Specifications", "Print, scan, copy", "Compact integrated tank design", "High yield ink bottles", "Spill-free, error-free refilling", "Wi-Fi & Wi-Fi Direct", "Seamless setup via Epson Smart Panel", "Borderless printing up to 4R", "Powered by Epson Heat-Free Technology"]
      },
      { 
        id: 22, 
        name: "Oraimo PowerBank", 
        price: 2100, 
        image: "/images/oraimo-powerbank.jpg", 
        rating: 4.6, 
        category: "accessories",
        description: "Oraimo Traveler Link 20 20000mAh 12W Power Bank High-capacity portable charger with fast charging technology",
        specs: [" 2.4A Max Fast Charging", "4 Built-in Charging&Recharging Cables", "Up to 5 Phone Charges", "4 Outputs"]
      },
      { 
        id: 23, 
        name: "Epson L850", 
        price: 9900, 
        image: "/images/Epson L850.jpg", 
        rating: 4.7, 
        category: "accessories",
        description: "The Epson L850 photo all-in-one ink tank printer is a multi-functional borderless photo printer with savings. Imaging enthusiasts and professionals can look forward to the 6-color ink tank system, presenting vibrant borderless prints and unrivaled performance at a remarkably low cost through this 3-in-1 photo printer.", 
        price: 80000, 
        specs: ["High-yield ink bottles", "2.7 color LCD screen", "Direct printing via memory card slot, USB port, and PictBridge", "CD/DVD printing"]
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
        name: "Oraimo Powercube 2", 
        price: 3900, 
        image: "/images/Oraimo-Powercube-2.jpg", 
        rating: 4.5, 
        category: "accessories",
        description: "Oraimo Fast Charging Wall Charger OCW-E65S is a Charger with a type-C data cable that is supported by fast charging technology so as to provide efficient and maximum battery charging speed Advantages: Fast Charging technology provides efficient and maximum battery charging speed Safe charging",
        specs: ["Colour: Black", "Interface: USB to USB Type-C", "Charger Type: Wall Charger", "Plug Type: USB", "Output: 5V/2A", "Length: 1 meter"]
      },
      { 
        id: 26, 
        name: "Oraimo PowerBOX", 
        price: 7500, 
        image: "/images/Oraimo PowerBox 600.jpg", 
        rating: 4.6, 
        category: "accessories",
        description: "Oraimo PowerBox 600 OPB-P600Q 60,000mAh Power Banks",
        specs: ["Ultra-High Capacity: With a 60000mAh (222Wh) battery", "Multiple Outputs: Equipped with five output ports", "22.5W Super Fast Charging and 18W Quick Recharge","LED Display", "AniFast™ Technology"]
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
