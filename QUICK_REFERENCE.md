# 🚀 Quick Reference Card

## Essential Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Run linter
npm run lint

# Install dependencies
npm install --legacy-peer-deps
```

Visit: **http://localhost:3000**

---

## Project Files at a Glance

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Main landing page |
| `src/components/Header.tsx` | Navigation header |
| `src/components/Hero.tsx` | Hero section |
| `src/components/Services.tsx` | Services showcase |
| `src/components/BookingForm.tsx` | Booking form |
| `src/components/Testimonials.tsx` | Customer reviews |
| `src/components/Footer.tsx` | Footer |
| `src/app/api/booking/route.ts` | Booking API |
| `src/app/globals.css` | Global styles |
| `tailwind.config.js` | Tailwind configuration |
| `.env.local` | Environment variables |
| `.env.example` | Environment template |

---

## Customization Quick Guide

### 1. Update Company Info
- **Phone**: `src/components/BookingForm.tsx` (Contact section)
- **Email**: `.env.local` → `COMPANY_EMAIL`
- **WhatsApp**: `src/components/BookingForm.tsx` (Contact section)

### 2. Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: "#0066cc",      // Change this
  secondary: "#00b4d8",    // And this
  accent: "#ff6b6b",       // And this
}
```

### 3. Update Services
Edit `src/components/Services.tsx`:
- Find the `services` array
- Add/remove/edit service items

### 4. Update Testimonials
Edit `src/components/Testimonials.tsx`:
- Find the `testimonials` array
- Add/remove/edit testimonial items

### 5. Change Company Name
- Search for "J & I" in all files
- Replace with your company name

---

## Email Setup (Choose One)

### Gmail (Easiest for Testing)
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=xxxx-xxxx-xxxx-xxxx
SMTP_FROM=your-email@gmail.com
COMPANY_EMAIL=info@yourdomain.com
```

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASSWORD=SG.your_api_key
SMTP_FROM=noreply@yourdomain.com
COMPANY_EMAIL=info@yourdomain.com
```

### Outlook
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
SMTP_FROM=your-email@outlook.com
COMPANY_EMAIL=info@yourdomain.com
```

---

## WhatsApp Setup (Optional)

### Twilio (Recommended)
```env
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+1234567890
```

Then add this to `src/app/api/booking/route.ts`:
```typescript
import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// In the POST handler:
await client.messages.create({
  from: process.env.TWILIO_WHATSAPP_NUMBER,
  to: `whatsapp:${body.phone}`,
  body: `Hi ${body.firstName}! Thank you for booking...`,
});
```

---

## File Edit Locations

### To Change:
| Item | File | Line |
|------|------|------|
| Company name | `src/components/Header.tsx` | ~20 |
| Company phone | `src/components/Footer.tsx` | ~95 |
| Services list | `src/components/Services.tsx` | ~10-40 |
| Testimonials | `src/components/Testimonials.tsx` | ~10-65 |
| Colors | `tailwind.config.js` | ~7-12 |
| Email recipient | `.env.local` | `COMPANY_EMAIL` |

---

## Deployment Checklist

- [ ] Email configured in `.env.local`
- [ ] Company info updated
- [ ] Colors/branding customized
- [ ] Services and testimonials updated
- [ ] Website tested locally
- [ ] Build succeeds: `npm run build`
- [ ] Deploy to Vercel: `vercel deploy`
- [ ] Set env variables in Vercel dashboard
- [ ] Test booking form on production
- [ ] Domain configured

---

## Testing Checklist

- [ ] Navigate through all sections
- [ ] Click all buttons
- [ ] Test booking form submission
- [ ] Check mobile responsiveness (DevTools)
- [ ] Verify email notifications
- [ ] Test WhatsApp (if configured)
- [ ] Check animations/transitions
- [ ] Verify all links work

---

## Browser DevTools

```
Windows/Linux: F12 or Ctrl+Shift+I
Mac: Cmd+Option+I

Toggle mobile view: Ctrl+Shift+M (Windows/Linux)
                    Cmd+Shift+M (Mac)
```

---

## Useful URLs

- **Development**: http://localhost:3000
- **Booking Form**: http://localhost:3000#booking
- **Services**: http://localhost:3000#services
- **Testimonials**: http://localhost:3000#testimonials

---

## Common Issues & Fixes

### Website won't start
```bash
npm install --legacy-peer-deps
npm run dev
```

### Styles not loading
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Email not sending
- Check `.env.local` credentials
- Verify SMTP settings
- Test with Mailtrap.io

### Form not working
- Open DevTools (F12)
- Check Console tab for errors
- Check Network tab for API response

---

## Documentation Files

1. **README.md** - Project overview
2. **SETUP_GUIDE.md** - Detailed email/WhatsApp setup
3. **PROJECT_SUMMARY.md** - Complete feature list
4. **whatsapp-integration-guide.tsx** - Code examples

---

## Need Help?

1. Check the documentation files
2. Look at the code comments
3. Test with Mailtrap for email issues
4. Use browser DevTools for frontend issues
5. Check Next.js logs for backend issues

---

## Deploy to Vercel (Free)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel deploy

# In Vercel dashboard:
# - Add environment variables from .env.local
# - Link custom domain (optional)
# - Enable automatic deployments from GitHub
```

---

## Key Features Summary

✅ Responsive design
✅ Smooth animations
✅ Online booking form
✅ Email notifications
✅ WhatsApp ready
✅ Customer testimonials
✅ Service showcase
✅ Contact information
✅ Production-ready
✅ Easy customization

---

**Everything is set up and ready to go! 🎉**

For detailed instructions, refer to `SETUP_GUIDE.md`
