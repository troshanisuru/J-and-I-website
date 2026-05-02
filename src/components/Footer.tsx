'use client';

import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="animate-fadeIn">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-white">
                J&I
              </div>
              <div>
                <p className="font-bold text-lg">J & I</p>
                <p className="text-xs text-gray-400">Facilities Management</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Professional cleaning services for homes, offices, and workspaces.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="animate-slideInUp" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  House Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Office Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Deep Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Renovation Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Tenancy Cleaning
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="animate-slideInUp" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-primary transition-colors">
                  Book Now
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slideInUp" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone size={20} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p>+65 1234 5678</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail size={20} className="text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>info@jifacilities.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                  <p>+65 9876 5432</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>© {currentYear} J & I Facilities Management PTE Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
