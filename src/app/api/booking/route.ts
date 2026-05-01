import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    // Send email notification
    const transporter = nodemailer.createTransport({
      // Configure your email provider here
      // Example for Gmail:
      // service: 'gmail',
      // auth: {
      //   user: process.env.EMAIL_USER,
      //   pass: process.env.EMAIL_PASSWORD,
      // },
      // For production, use environment variables
      host: process.env.SMTP_HOST || 'localhost',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to company
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

    // Email to customer
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

    // Send emails
    await Promise.all([
      transporter.sendMail(emailToCompany),
      transporter.sendMail(emailToCustomer),
    ]);

    // TODO: Send WhatsApp notification
    // You would integrate with a WhatsApp API service here (e.g., Twilio, WhatsApp Business API)
    // Example:
    // await sendWhatsAppMessage({
    //   to: body.phone,
    //   message: `Hi ${body.firstName}, Thank you for booking with J & I Facilities Management...`
    // });

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
