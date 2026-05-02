'use client';

import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slideInUp">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-100 rounded-full">
              <span className="text-primary font-semibold text-sm">⭐ Professional Cleaning Services</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Professional <span className="gradient-text">Cleaning Solutions</span> for Your Space
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              J & I Facilities Management delivers exceptional cleaning services for homes, offices, and workspaces. From deep cleaning to renovation cleanup, we keep your space immaculate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-primary">
                Book Now
              </button>
              <button className="flex items-center gap-3 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300">
                <Play size={20} fill="currentColor" />
                Watch Demo
              </button>
            </div>

            <div className="flex gap-8 text-sm">
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">1000+</p>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">24/7</p>
                <p className="text-gray-600">Support Available</p>
              </div>
            </div>
          </div>

          {/* Right Image - Placeholder */}
          <div className="animate-slideInDown">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl p-8 shadow-2xl overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-white opacity-80"></div>
                <div className="relative flex items-center justify-center h-96">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Play size={48} fill="white" color="white" />
                    </div>
                    <p className="text-gray-600 font-semibold">Professional Cleaning Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
