'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'J & I Facilities provided exceptional cleaning service. My home has never looked better. The team was professional, punctual, and thorough. Highly recommended!',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Office Manager',
    content: 'We switched to J & I for our office cleaning and could not be happier. The attention to detail is remarkable. Our workspace feels fresh and clean every single day.',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    id: 3,
    name: 'Lisa Wong',
    role: 'Property Owner',
    content: 'The tenancy cleaning service was outstanding. They handled all the details perfectly and the property was ready for new tenants. Thank you!',
    rating: 5,
    avatar: '👩‍🦰',
  },
  {
    id: 4,
    name: 'David Kumar',
    role: 'Restaurant Owner',
    content: 'After renovation, J & I cleaned our restaurant completely. The deep cleaning was thorough and professional. We reopened with confidence!',
    rating: 5,
    avatar: '👨‍🍳',
  },
  {
    id: 5,
    name: 'Emma Rodriguez',
    role: 'Corporate Client',
    content: 'Outstanding service quality and reliability. The team is always professional and accommodating. We trust them completely with our office space.',
    rating: 5,
    avatar: '👩‍💻',
  },
  {
    id: 6,
    name: 'James Smith',
    role: 'Residential Client',
    content: 'Best cleaning company in the area. Reliable, affordable, and they do excellent work. I have been using their services for over a year now!',
    rating: 5,
    avatar: '👨‍⚕️',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust J & I Facilities Management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-slideInUp">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to experience our service excellence?
          </h3>
          <button className="btn-primary text-lg px-8 py-4">
            Book Your Cleaning Today
          </button>
        </div>
      </div>
    </section>
  );
}
