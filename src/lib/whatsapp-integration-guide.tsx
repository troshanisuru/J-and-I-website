'use client';

// This is a complete working example of integrating Twilio WhatsApp
// into your booking API. Follow the steps below to enable WhatsApp notifications.

/**
 * STEP 1: Install Twilio SDK
 * npm install twilio
 * npm install --save-dev @types/twilio
 *
 * STEP 2: Create Twilio Account & Get Credentials
 * - Sign up at https://www.twilio.com
 * - Verify phone number
 * - Go to Messaging → WhatsApp → Sandbox
 * - Get: Account SID, Auth Token, WhatsApp Number
 *
 * STEP 3: Update .env.local
 * TWILIO_ACCOUNT_SID=your_account_sid
 * TWILIO_AUTH_TOKEN=your_auth_token
 * TWILIO_WHATSAPP_NUMBER=whatsapp:+1234567890
 *
 * STEP 4: Update src/app/api/booking/route.ts with code below
 */

// Example updated route.ts with WhatsApp integration:
/*
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import twilio from 'twilio';

interface BookingData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyType: string;
  address: string;
  serviceType: string;
  preferredDate: string;
  comments: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: BookingData = await request.json();

    // Validate required fields
    if (!body.firstName || !body.email || !body.phone || !body.propertyType || !body.serviceType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Initialize Twilio client
    const twilio_client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    // Send WhatsApp message
    try {
      await twilio_client.messages.create({
        from: process.env.TWILIO_WHATSAPP_NUMBER,
        to: `whatsapp:${body.phone}`,
        body: `Hi ${body.firstName}! 👋\n\nThank you for booking with J & I Facilities Management!\n\nBooking Details:\n📍 Address: ${body.address}\n🏠 Property: ${body.propertyType.toUpperCase()}\n🧹 Service: ${body.serviceType}\n📅 Preferred Date: ${body.preferredDate}\n\nWe'll confirm your booking shortly. If you have any questions, reply here or call us at +65 1234 5678.\n\nBest regards,\nJ & I Facilities Team 🧼✨`,
      });
    } catch (whatsappError) {
      console.error('WhatsApp send error:', whatsappError);
      // Don't fail the entire request if WhatsApp fails
      // Email will still be sent
    }

    // Email sending code (same as before)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'localhost',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const emailToCompany = {
      from: process.env.SMTP_FROM || 'noreply@jifacilities.com',
      to: process.env.COMPANY_EMAIL || 'info@jifacilities.com',
      subject: `New Booking Request from ${body.firstName} ${body.lastName}`,
      html: `
        <h2>New Booking Request</h2>
        <h3>Customer Information</h3>
        <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        
        <h3>Property Details</h3>
        <p><strong>Property Type:</strong> ${body.propertyType}</p>
        <p><strong>Address:</strong> ${body.address}</p>
        
        <h3>Service Details</h3>
        <p><strong>Service Type:</strong> ${body.serviceType}</p>
        <p><strong>Preferred Date:</strong> ${body.preferredDate}</p>
        <p><strong>Additional Comments:</strong> ${body.comments || 'None'}</p>
      `,
    };

    const emailToCustomer = {
      from: process.env.SMTP_FROM || 'noreply@jifacilities.com',
      to: body.email,
      subject: 'Booking Request Confirmation - J & I Facilities Management',
      html: `
        <h2>Thank You for Your Booking Request!</h2>
        <p>Dear ${body.firstName},</p>
        <p>We have received your booking request and will contact you shortly via WhatsApp and email to confirm the details.</p>
        
        <h3>Booking Summary</h3>
        <p><strong>Service Type:</strong> ${body.serviceType}</p>
        <p><strong>Property Type:</strong> ${body.propertyType}</p>
        <p><strong>Preferred Date:</strong> ${body.preferredDate}</p>
        
        <h3>Contact Information</h3>
        <p>If you have any questions, please contact us:</p>
        <p>Phone: +65 1234 5678</p>
        <p>WhatsApp: +65 9876 5432</p>
        <p>Email: info@jifacilities.com</p>
        
        <p>Best regards,<br/>J & I Facilities Management Team</p>
      `,
    };

    await Promise.all([
      transporter.sendMail(emailToCompany),
      transporter.sendMail(emailToCustomer),
    ]);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Booking request submitted successfully' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Error processing booking request' },
      { status: 500 }
    );
  }
}
*/

// Alternative: Using WhatsApp Business API (Official)
/*
STEP 1: Register for WhatsApp Business API
- Go to https://www.whatsapp.com/business/
- Complete official registration

STEP 2: Get Credentials
- Business Account ID
- Access Token
- Phone Number ID

STEP 3: Update .env.local
WHATSAPP_BUSINESS_ACCOUNT_ID=your_account_id
WHATSAPP_ACCESS_TOKEN=your_access_token
WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id

STEP 4: Example implementation
import axios from 'axios';

async function sendWhatsAppMessage(customerPhone: string, customerName: string) {
  const url = `https://graph.instagram.com/v18.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`;
  
  const data = {
    messaging_product: 'whatsapp',
    to: customerPhone,
    type: 'template',
    template: {
      name: 'hello_world',
      language: {
        code: 'en_US',
      },
    },
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
      },
    });
    console.log('WhatsApp message sent:', response.data);
  } catch (error) {
    console.error('WhatsApp API error:', error);
  }
}
*/

export default function WhatsAppSetupGuide() {
  return (
    <div className="p-8 bg-blue-50 rounded-lg">
      <h2>WhatsApp Integration Guide</h2>
      <p>See comments in this file for complete setup instructions.</p>
    </div>
  );
}
