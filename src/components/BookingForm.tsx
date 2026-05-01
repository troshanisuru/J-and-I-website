'use client';

import React, { useState } from 'react';
import { Calendar, MapPin, Phone, Mail } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyType: 'condo' | 'hdb' | 'office' | '';
  address: string;
  serviceType: string;
  preferredDate: string;
  comments: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyType: '',
    address: '',
    serviceType: '',
    preferredDate: '',
    comments: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Format the message for WhatsApp and Email
      const message = `
Booking Request from J & I Facilities Management

Customer Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}

Property Details:
- Property Type: ${formData.propertyType.toUpperCase()}
- Address: ${formData.address}

Service Details:
- Service Type: ${formData.serviceType}
- Preferred Date: ${formData.preferredDate}
- Additional Comments: ${formData.comments || 'None'}

Please confirm this booking request.
      `.trim();

      // Send to backend API (you'll need to set up the backend endpoint)
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          message,
        }),
      });

      if (response.ok) {
        setSubmitMessage('✅ Booking request submitted successfully! You will receive a confirmation via WhatsApp and email shortly.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          propertyType: '',
          address: '',
          serviceType: '',
          preferredDate: '',
          comments: '',
        });

        // Clear message after 5 seconds
        setTimeout(() => setSubmitMessage(''), 5000);
      } else {
        setSubmitMessage('❌ Error submitting booking. Please try again.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      setSubmitMessage('❌ Error submitting booking. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="section-title">Book Your Cleaning Service</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and we'll send confirmation details to your WhatsApp and email
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-slideInUp">
            {submitMessage && (
              <div className={`mb-6 p-4 rounded-lg text-center font-semibold ${
                submitMessage.includes('✅') 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Phone size={24} className="text-primary" />
                  Your Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Property Details */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <MapPin size={24} className="text-secondary" />
                  Property Details
                </h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Property Type *
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors bg-white"
                    >
                      <option value="">Select Property Type</option>
                      <option value="condo">Condo</option>
                      <option value="hdb">HDB</option>
                      <option value="office">Office Workspace</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Service Type *
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors bg-white"
                    >
                      <option value="">Select Service</option>
                      <option value="house-cleaning">House Cleaning</option>
                      <option value="office-cleaning">Office Cleaning</option>
                      <option value="deep-cleaning">Deep Cleaning</option>
                      <option value="renovation-cleaning">Renovation Cleaning</option>
                      <option value="tenancy-cleaning">Tenancy Moving Cleaning</option>
                    </select>
                  </div>
                </div>

                <input
                  type="text"
                  name="address"
                  placeholder="Full Address *"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Booking Details */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Calendar size={24} className="text-accent" />
                  Booking Details
                </h3>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Additional Comments (Optional)
                  </label>
                  <textarea
                    name="comments"
                    placeholder="Tell us anything specific about your cleaning needs..."
                    value={formData.comments}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-lg py-4"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
              </button>

              <p className="text-center text-gray-600 text-sm">
                By submitting, you agree to receive booking confirmation via WhatsApp and email
              </p>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
              <div className="inline-block p-3 bg-primary/10 rounded-lg mb-4">
                <Phone size={24} className="text-primary" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Call Us</h4>
              <p className="text-gray-600">+65 1234 5678</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
              <div className="inline-block p-3 bg-secondary/10 rounded-lg mb-4">
                <Mail size={24} className="text-secondary" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Email Us</h4>
              <p className="text-gray-600">info@jifacilities.com</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
              <div className="inline-block p-3 bg-accent/10 rounded-lg mb-4">
                <MapPin size={24} className="text-accent" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">WhatsApp</h4>
              <p className="text-gray-600">+65 9876 5432</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
