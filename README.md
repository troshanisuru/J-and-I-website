# J & I Facilities Management - Landing Page

A modern, responsive landing page for J & I Facilities Management PTE Ltd, featuring online booking, customer testimonials, and service information.

## Features

✨ **Key Features:**
- 🎨 Modern, attractive design with animations
- 📱 Fully responsive for all devices
- 🎬 High-quality play buttons and interactive animations
- 📝 Online booking form with property type selection (Condo, HDB, Office)
- ✉️ Email notification system
- 📱 WhatsApp integration (ready for configuration)
- ⭐ Customer testimonials section
- 🎯 Service showcase (House cleaning, Office cleaning, Deep cleaning, Renovation cleaning, Tenancy moving cleaning)
- 🔄 Smooth scroll navigation
- 📊 Statistics display

## Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Email**: Nodemailer
- **Deployment**: Vercel

## Installation

### Prerequisites
- Node.js 18+ and npm/yarn installed

### Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   - Copy `.env.example` to `.env.local`
   ```bash
   cp .env.example .env.local
   ```
   - Edit `.env.local` and add your configuration:
     - SMTP settings for email notifications
     - Company contact information
     - Optional WhatsApp API credentials

3. **Run development server**
   ```bash
   npm run dev
   ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Configuration

### Email Setup (Gmail Example)
1. Enable 2-Factor Authentication on your Google account
2. Create an App Password: https://myaccount.google.com/apppasswords
3. Add to `.env.local`:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   ```

### WhatsApp Integration (Optional)
To enable WhatsApp notifications, integrate with:
- **Twilio**: https://www.twilio.com/whatsapp
- **WhatsApp Business API**: https://www.whatsapp.com/business/api

Update the booking API route with your chosen service.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── booking/
│   │       └── route.ts          # Booking API endpoint
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Main page
│   └── globals.css                # Global styles
├── components/
│   ├── Header.tsx                 # Navigation header
│   ├── Hero.tsx                   # Hero section
│   ├── Services.tsx               # Services showcase
│   ├── BookingForm.tsx            # Booking form component
│   ├── Testimonials.tsx           # Customer testimonials
│   └── Footer.tsx                 # Footer component
└── lib/                           # Utility functions

public/                            # Static assets
```

## Customization

### Update Company Information
Edit the company details in these files:
- `src/components/Header.tsx` - Company name and logo
- `src/components/Footer.tsx` - Contact information
- `src/app/layout.tsx` - Site metadata

### Colors and Branding
Modify Tailwind colors in `tailwind.config.js`:
```javascript
colors: {
  primary: "#0066cc",      // Main blue
  secondary: "#00b4d8",    // Cyan
  accent: "#ff6b6b",       // Red accent
}
```

### Services
Update the services list in `src/components/Services.tsx`

### Testimonials
Add/edit customer testimonials in `src/components/Testimonials.tsx`

## Building for Production

```bash
npm run build
npm start
```

Or deploy directly to Vercel:
```bash
vercel deploy
```

## Booking Form Features

The booking form collects:
- **Customer Info**: Name, email, phone
- **Property Details**: Type (Condo/HDB/Office), address
- **Service Details**: Service type, preferred date, comments
- **Automatic Notifications**: Confirmation sent to customer email and company

## API Integration

### Booking Endpoint: `POST /api/booking`

Request body:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+65 1234 5678",
  "propertyType": "condo",
  "address": "123 Main St",
  "serviceType": "house-cleaning",
  "preferredDate": "2024-05-15",
  "comments": "Additional notes"
}
```

Response:
```json
{
  "success": true,
  "message": "Booking request submitted successfully"
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- ⚡ Fast page load with Next.js optimization
- 📦 Optimized bundle size
- 🖼️ Image lazy loading ready
- 📊 SEO-friendly

## License

© 2024 J & I Facilities Management PTE Ltd. All rights reserved.

## Contact

- **Email**: info@jifacilities.com
- **Phone**: +65 1234 5678
- **WhatsApp**: +65 9876 5432

## Support

For technical support or feature requests, please contact the development team.

---

**Last Updated**: May 2024
