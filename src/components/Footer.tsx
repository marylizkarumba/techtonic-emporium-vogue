
import React from 'react';
import { Mail, Phone } from "lucide-react";

export const Footer: React.FC = () => {
  return (
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
          <div className="flex justify-center items-center space-x-4 mb-4">
            <Mail className="w-5 h-5 text-cyan-400" />
            <span className="text-gray-300">techtonic792@gmail.com</span>
            <span className="text-gray-500">|</span>
            <Phone className="w-5 h-5 text-cyan-400" />
            <span className="text-gray-300">+254 797552830</span>
          </div>
          <p className="text-gray-400">&copy; 2025 TechTonic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
