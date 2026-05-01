'use client';

import React from 'react';
import { Sparkles, Home, Building2, RefreshCw, Trash2 } from 'lucide-react';

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceCard[] = [
  {
    id: 1,
    title: 'House Cleaning',
    description: 'Comprehensive cleaning services for residential spaces including kitchens, bathrooms, bedrooms, and living areas.',
    icon: <Home size={32} className="text-primary" />,
  },
  {
    id: 2,
    title: 'Office Cleaning',
    description: 'Professional office and workspace cleaning to maintain a productive and hygienic work environment.',
    icon: <Building2 size={32} className="text-secondary" />,
  },
  {
    id: 3,
    title: 'Deep Cleaning',
    description: 'Intensive deep cleaning services covering every corner, including hard-to-reach areas and detailed sanitization.',
    icon: <Sparkles size={32} className="text-accent" />,
  },
  {
    id: 4,
    title: 'Renovation Cleaning',
    description: 'Post-renovation cleanup services to remove construction dust, debris, and leave your space spotless.',
    icon: <RefreshCw size={32} className="text-primary" />,
  },
  {
    id: 5,
    title: 'Tenancy Moving Cleaning',
    description: 'End-of-tenancy cleaning services ensuring your property meets all landlord and lease requirements.',
    icon: <Trash2 size={32} className="text-secondary" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="section-title">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of professional cleaning services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="card-hover group relative p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-gray-200 hover:border-primary transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="mb-4 inline-block p-3 bg-white rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <button className="text-primary font-semibold hover:text-secondary transition-colors duration-300 flex items-center gap-2 group/btn">
                  Learn More
                  <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Note */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20 text-center animate-slideInUp">
          <p className="text-lg text-gray-700">
            Don't see what you need? <span className="font-semibold text-primary">Contact us</span> for customized cleaning solutions tailored to your specific requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
