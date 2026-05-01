'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 animate-slideInDown">
      <div className="container-custom flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold">
            J&I
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-gray-800">J & I</span>
            <span className="text-xs text-gray-600">Facilities Management</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => scrollToSection('services')}
            className="text-gray-600 hover:text-primary transition-colors font-medium"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('booking')}
            className="text-gray-600 hover:text-primary transition-colors font-medium"
          >
            Booking
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="text-gray-600 hover:text-primary transition-colors font-medium"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection('booking')}
            className="btn-primary"
          >
            Book Now
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600 hover:text-primary transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 animate-slideInDown">
          <div className="container-custom flex flex-col gap-4 py-4">
            <button
              onClick={() => scrollToSection('services')}
              className="text-left text-gray-600 hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="text-left text-gray-600 hover:text-primary transition-colors font-medium"
            >
              Booking
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-left text-gray-600 hover:text-primary transition-colors font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="btn-primary w-full"
            >
              Book Now
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
