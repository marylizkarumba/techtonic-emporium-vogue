
import React from 'react';
import { Button } from "@/components/ui/button";

export const HeroSection: React.FC = () => {
  return (
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
  );
};
