# Configuration Guide for J & I Facilities Management Website

## Quick Start

1. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

3. **Configure email and WhatsApp (see sections below)**

4. **Start development server**
   ```bash
   npm run dev
   ```

Visit `http://localhost:3000` to see your website.

---

## Email Configuration

### Option 1: Gmail (Recommended for Testing)

1. **Enable 2-Factor Authentication**
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Create App Password**
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer" (or other device)
   - Google will generate a 16-character password

3. **Update `.env.local`**
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=xxxx-xxxx-xxxx-xxxx
   SMTP_FROM=your-email@gmail.com
   COMPANY_EMAIL=info@jifacilities.com
   ```

### Option 2: Outlook / Microsoft 365

```
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
SMTP_FROM=your-email@outlook.com
COMPANY_EMAIL=info@jifacilities.com
```

### Option 3: SendGrid

1. **Create SendGrid Account**
   - Sign up at https://sendgrid.com

2. **Create API Key**
   - Go to Settings → API Keys
   - Create new API key with "Mail Send" permission

3. **Update `.env.local`**
   ```
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=apikey
   SMTP_PASSWORD=SG.your_api_key_here
   SMTP_FROM=noreply@jifacilities.com
   COMPANY_EMAIL=info@jifacilities.com
   ```

### Option 4: AWS SES (Amazon Simple Email Service)

1. **Set up AWS SES**
   - Create AWS account
   - Verify email addresses in SES console
   - Create SMTP credentials

2. **Update `.env.local`**
   ```
   SMTP_HOST=email-smtp.region.amazonaws.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-smtp-username
   SMTP_PASSWORD=your-smtp-password
   SMTP_FROM=noreply@jifacilities.com
   COMPANY_EMAIL=info@jifacilities.com
   ```

---

## WhatsApp Integration

### Option 1: Twilio (Recommended)

1. **Create Twilio Account**
   - Sign up at https://www.twilio.com
   - Verify your phone number

2. **Enable WhatsApp Sandbox**
   - Go to Messaging → WhatsApp → Sandbox
   - Follow setup instructions

3. **Get Credentials**
   - Account SID
   - Auth Token
   - WhatsApp Number

4. **Update `.env.local`**
   ```
   TWILIO_ACCOUNT_SID=your_account_sid
   TWILIO_AUTH_TOKEN=your_auth_token
   TWILIO_WHATSAPP_FROM=whatsapp:+1234567890
   ```

5. **Update API Route** (`src/app/api/booking/route.ts`)
   ```typescript
   import twilio from 'twilio';

   const client = twilio(
     process.env.TWILIO_ACCOUNT_SID,
     process.env.TWILIO_AUTH_TOKEN
   );

   // In your API route, add:
   await client.messages.create({
     from: process.env.TWILIO_WHATSAPP_FROM,
     to: `whatsapp:${body.phone}`,
     body: `Hi ${body.firstName}, Your booking has been confirmed...`,
   });
   ```

### Option 2: WhatsApp Business API (Official)

1. **Register for WhatsApp Business API**
   - Go to https://www.whatsapp.com/business/
   - Follow official registration process

2. **Get Credentials**
   - Business Account ID
   - Access Token
   - Phone Number ID

3. **Integrate with Your API**
   - Use official WhatsApp Cloud API
   - See: https://developers.facebook.com/docs/whatsapp/cloud-api/

### Option 3: Baileys (Free, Unofficial)

For development/testing only:

```bash
npm install baileys
```

**Warning**: Not recommended for production use.

---

## Testing the Booking Form

### Local Testing

1. Keep development server running
2. Fill out the booking form at `http://localhost:3000#booking`
3. Check console for any errors
4. Verify emails are sent to configured addresses

### Email Testing Service

Use **Mailtrap** for testing without sending real emails:

1. Sign up at https://mailtrap.io
2. Get SMTP credentials
3. Update `.env.local` with Mailtrap credentials
4. All test emails will be captured in Mailtrap inbox

```
SMTP_HOST=live.smtp.mailtrap.io
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_username@mailtrap.io
SMTP_PASSWORD=your_password
```

---

## Production Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/jnf-facilities.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com/import
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard

3. **Configure Environment Variables in Vercel**
   - Go to Settings → Environment Variables
   - Add all variables from `.env.local`
   - Deploy

### Environment Variables Setup in Vercel

Dashboard → Project Settings → Environment Variables

Add:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASSWORD`
- `SMTP_FROM`
- `COMPANY_EMAIL`
- `TWILIO_ACCOUNT_SID` (if using Twilio)
- `TWILIO_AUTH_TOKEN` (if using Twilio)
- `TWILIO_WHATSAPP_FROM` (if using Twilio)

---

## Troubleshooting

### Email Not Sending

1. **Check Error Logs**
   - Look at browser console (F12)
   - Check Vercel logs if deployed

2. **Verify SMTP Credentials**
   ```bash
   # Test with Node.js
   npm install -g smtp-check
   smtp-check smtp.gmail.com 587
   ```

3. **Check Firewall/Port**
   - Port 587 should be open
   - Some networks block SMTP ports

4. **Enable Less Secure Apps** (Gmail only)
   - Use App Password instead (recommended)

### WhatsApp Messages Not Sending

1. **Verify Phone Number Format**
   - Must include country code: +65xxxxxxxxxxx
   - No spaces or dashes

2. **Check Twilio Balance**
   - Free trial credits may have expired

3. **Verify Sandbox Numbers**
   - Both sender and recipient must be in sandbox

### Form Not Submitting

1. **Check Network Tab**
   - See if request is being sent
   - Check response status

2. **Browser Console Errors**
   - Open DevTools (F12)
   - Look for JavaScript errors

3. **Verify API Endpoint**
   - Endpoint should be `/api/booking`

---

## Customization

### Change Company Contact Information

**File**: `src/components/Footer.tsx`

```typescript
<li className="flex items-start gap-3 text-gray-400">
  <Phone size={20} className="text-primary mt-1 flex-shrink-0" />
  <div>
    <p className="font-semibold text-white">Phone</p>
    <p>+65 YOUR_PHONE</p>  {/* ← Change here */}
  </div>
</li>
```

### Change Email Recipients

**File**: `src/app/api/booking/route.ts`

```typescript
const emailToCompany = {
  from: process.env.SMTP_FROM || 'noreply@jifacilities.com',
  to: process.env.COMPANY_EMAIL || 'your-email@example.com',  {/* ← Change here */}
  // ...
};
```

### Customize Email Templates

**File**: `src/app/api/booking/route.ts`

Modify HTML in `emailToCompany` and `emailToCustomer` objects.

---

## Security Best Practices

1. **Never commit `.env.local`** to Git
   - It's already in `.gitignore`

2. **Use Environment Variables** for sensitive data
   - Never hardcode credentials in code

3. **Rate Limiting** (Optional)
   - Add rate limiting to booking API
   - Prevents spam bookings

4. **Input Validation**
   - Already implemented in form
   - Add server-side validation if needed

5. **HTTPS Only** in Production
   - Vercel automatically provides HTTPS

---

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Nodemailer**: https://nodemailer.com/
- **Twilio WhatsApp**: https://www.twilio.com/whatsapp
- **Vercel Deployment**: https://vercel.com/docs

---

## Checklist for Launch

- [ ] Email service configured and tested
- [ ] WhatsApp integration set up (optional)
- [ ] Company information updated
- [ ] Testimonials added/customized
- [ ] Services list reviewed
- [ ] Contact information updated
- [ ] Deployed to production
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Backup email notifications configured
- [ ] Analytics configured (if needed)

---

**Last Updated**: May 2024
