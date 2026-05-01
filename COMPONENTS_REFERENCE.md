# 🧩 COMPONENTS REFERENCE GUIDE

## Complete Component Documentation

---

## 1. HEADER COMPONENT
**File**: `src/components/Header.tsx`

### Features:
- ✅ Fixed header with shadow
- ✅ Company branding with logo
- ✅ 5 navigation links
- ✅ Mobile hamburger menu
- ✅ Smooth scroll to sections
- ✅ Book Now CTA button
- ✅ Animations on load
- ✅ Responsive design

### Customization:
```typescript
// Company name (line ~20)
<span className="font-bold text-lg text-gray-800">J & I</span>

// Logo text (line ~21)
<span className="text-xs text-gray-600">Facilities Management</span>

// Navigation links (line ~29-50)
// Update the onClick handlers to target different sections
```

### Sections it Links To:
- Services (#services)
- Booking (#booking)
- Testimonials (#testimonials)

---

## 2. HERO COMPONENT
**File**: `src/components/Hero.tsx`

### Features:
- ✅ Animated background blobs
- ✅ Gradient text headline
- ✅ Play button (animated)
- ✅ CTA buttons
- ✅ Statistics display
- ✅ Responsive grid layout
- ✅ Mock video section
- ✅ Smooth animations

### Customization:
```typescript
// Main headline (line ~22)
<h1 className="text-5xl md:text-6xl font-bold...">
  Professional <span>Cleaning Solutions</span>
</h1>

// Description (line ~26)
<p className="text-xl text-gray-600...">
  Your custom description here
</p>

// Statistics (line ~46-57)
Change numbers: 500+, 1000+, 24/7
```

### Components Used:
- Play button from Lucide React
- Gradient text class
- Animated background elements

---

## 3. SERVICES COMPONENT
**File**: `src/components/Services.tsx`

### Features:
- ✅ 5 service cards
- ✅ Service descriptions
- ✅ Icons from Lucide React
- ✅ Hover animations
- ✅ "Learn More" links
- ✅ Gradient backgrounds
- ✅ Card hover scale effects
- ✅ Animated background overlay

### Services Included:
1. **House Cleaning** - Home cleaning services
2. **Office Cleaning** - Workspace cleaning
3. **Deep Cleaning** - Intensive cleaning
4. **Renovation Cleaning** - Post-renovation cleanup
5. **Tenancy Moving Cleaning** - End-of-tenancy cleanup

### Customization:
```typescript
// Edit services array (line ~13-42)
const services: ServiceCard[] = [
  {
    id: 1,
    title: 'Your Service',
    description: 'Your description',
    icon: <YourIcon size={32} className="text-primary" />,
  },
  // Add more services...
];
```

### Customizable Elements:
- Service titles
- Descriptions
- Icons (from lucide-react)
- Icon colors (primary/secondary/accent)

---

## 4. BOOKING FORM COMPONENT
**File**: `src/components/BookingForm.tsx`

### Features:
- ✅ Form state management
- ✅ Form validation
- ✅ Success/error messages
- ✅ Loading state
- ✅ API integration
- ✅ Multiple input types
- ✅ Dropdowns for selection
- ✅ Date picker
- ✅ Contact info cards
- ✅ Responsive layout

### Form Fields:
1. **Customer Information**
   - First Name (required)
   - Last Name (required)
   - Email (required)
   - Phone (required)

2. **Property Details**
   - Property Type (Condo/HDB/Office)
   - Service Type (5 options)
   - Address (required)

3. **Booking Details**
   - Preferred Date (required)
   - Additional Comments (optional)

### Customization:
```typescript
// Add form field (line ~15-30)
const [formData, setFormData] = useState<FormData>({
  newField: '',  // Add here
  // ...existing fields
});

// Add new input in JSX
<input
  type="text"
  name="newField"
  placeholder="Your Field"
  value={formData.newField}
  onChange={handleChange}
/>
```

### API Endpoint:
- **URL**: `/api/booking`
- **Method**: POST
- **Success**: Email sent to company & customer
- **Error**: User-friendly error message

### Contact Cards:
- Phone (call)
- Email (inquiries)
- WhatsApp (quick chat)

---

## 5. TESTIMONIALS COMPONENT
**File**: `src/components/Testimonials.tsx`

### Features:
- ✅ 6 testimonial cards
- ✅ Star ratings (5 stars)
- ✅ Customer names
- ✅ Customer roles
- ✅ Avatar emojis
- ✅ Hover scale effects
- ✅ Quote formatting
- ✅ Animated on scroll
- ✅ CTA button

### Customization:
```typescript
// Edit testimonials array (line ~13-65)
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Customer Name',
    role: 'Customer Type',
    content: 'Their testimonial text...',
    rating: 5,
    avatar: '👩‍💼', // Any emoji
  },
  // Add more testimonials...
];
```

### Customizable Elements:
- Customer names
- Customer roles
- Testimonial text
- Avatar emojis
- Star ratings (1-5)

---

## 6. FOOTER COMPONENT
**File**: `src/components/Footer.tsx`

### Features:
- ✅ Company information
- ✅ Logo & branding
- ✅ Social media links
- ✅ Service links section
- ✅ Quick links section
- ✅ Contact information
- ✅ 4-column layout
- ✅ Copyright notice
- ✅ Terms/Privacy links
- ✅ Animated on scroll

### Sections:
1. **Company Info**
   - Logo & name
   - Description
   - Social media (Facebook, Twitter, Instagram)

2. **Services**
   - House Cleaning link
   - Office Cleaning link
   - Deep Cleaning link
   - Renovation Cleaning link
   - Tenancy Cleaning link

3. **Quick Links**
   - About Us
   - Book Now
   - Testimonials
   - Privacy Policy
   - Contact Us

4. **Contact Info**
   - Phone number
   - Email address
   - WhatsApp number

### Customization:
```typescript
// Update phone (line ~95)
<p>+65 YOUR_PHONE_NUMBER</p>

// Update email (line ~105)
<p>your-email@example.com</p>

// Update WhatsApp (line ~115)
<p>+65 YOUR_WHATSAPP_NUMBER</p>

// Social media links (line ~32-40)
<a href="your-facebook-url">...</a>
```

### Icons Used:
- Phone (contact)
- Mail (email)
- MapPin (location)
- Facebook, Twitter, Instagram (social)

---

## 7. API ROUTE (Booking)
**File**: `src/app/api/booking/route.ts`

### Functionality:
- ✅ Receives booking form data
- ✅ Validates required fields
- ✅ Sends email to company
- ✅ Sends confirmation email to customer
- ✅ Error handling
- ✅ Returns JSON response

### Request Format:
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

### Response Format:
```json
{
  "success": true,
  "message": "Booking request submitted successfully"
}
```

### Customization:
```typescript
// Change email template (line ~51-85)
const emailToCompany = {
  from: 'your-sender@example.com',
  to: 'your-company@example.com',
  subject: 'Your custom subject',
  html: `Your custom HTML template`,
};

// Add WhatsApp integration (line ~105+)
// See src/lib/whatsapp-integration-guide.tsx for examples
```

---

## COMPONENT RELATIONSHIPS

```
App (page.tsx)
  ├── Header
  │   └── Navigation Links
  │
  ├── Hero
  │   ├── Play Button
  │   └── Statistics
  │
  ├── Services
  │   └── Service Cards (5)
  │       └── Icons & Links
  │
  ├── BookingForm
  │   ├── Form Fields
  │   ├── Validation
  │   ├── API Call
  │   └── Contact Cards
  │
  ├── Testimonials
  │   ├── Testimonial Cards (6)
  │   ├── Star Ratings
  │   ├── Avatars
  │   └── CTA Button
  │
  └── Footer
      ├── Company Info
      ├── Service Links
      ├── Quick Links
      └── Contact Info
```

---

## STYLING & ANIMATIONS

### CSS Classes Used:
- `container-custom` - Custom container width
- `btn-primary` - Primary button style
- `btn-secondary` - Secondary button style
- `btn-outline` - Outline button style
- `card-hover` - Card hover effects
- `gradient-text` - Gradient text effect
- `play-button` - Play button style
- `glowing-border` - Glowing border effect

### Animations Used:
- `animate-fadeIn` - Fade in effect
- `animate-slideInUp` - Slide up effect
- `animate-slideInDown` - Slide down effect
- `animate-pulse` - Pulse effect
- `animate-bounce` - Bounce effect

### Tailwind Utilities:
- `hover:scale-105` - Scale on hover
- `hover:shadow-xl` - Shadow on hover
- `transition-all` - Smooth transitions
- `duration-300` - Animation duration

---

## ICONS USED (Lucide React)

| Icon | Used In | Purpose |
|------|---------|---------|
| Menu | Header | Mobile menu button |
| X | Header | Close mobile menu |
| Play | Hero, Services | Play button |
| Sparkles | Services | Deep cleaning |
| Home | Services | House cleaning |
| Building2 | Services | Office cleaning |
| RefreshCw | Services | Renovation cleaning |
| Trash2 | Services | Tenancy cleaning |
| Calendar | BookingForm | Date picker |
| MapPin | BookingForm, Footer | Location/address |
| Phone | BookingForm, Footer | Phone contact |
| Mail | BookingForm, Footer | Email contact |
| Star | Testimonials | Rating |
| Facebook | Footer | Social media |
| Twitter | Footer | Social media |
| Instagram | Footer | Social media |

---

## RESPONSIVE DESIGN BREAKPOINTS

### Mobile First Approach:
- **Base** (< 640px) - Mobile
- **sm** (640px) - Small devices
- **md** (768px) - Tablets
- **lg** (1024px) - Desktops
- **xl** (1280px) - Large desktops

### Responsive Classes Used:
- `hidden md:flex` - Hide on mobile, show on tablet+
- `md:grid-cols-2` - 1 column on mobile, 2 on tablet+
- `text-2xl md:text-4xl` - Small text on mobile, larger on desktop

---

## FORM VALIDATION

### Validation Rules:
```javascript
// Required fields
✓ firstName - Not empty
✓ lastName - Not empty
✓ email - Valid email format
✓ phone - Not empty
✓ propertyType - Selected
✓ address - Not empty
✓ serviceType - Selected
✓ preferredDate - Selected

// Optional fields
○ comments - Any text allowed
```

---

## COLOR CUSTOMIZATION

### Primary Colors:
- **Primary**: #0066cc (Blue)
- **Secondary**: #00b4d8 (Cyan)
- **Accent**: #ff6b6b (Red)

### How to Change:
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: "#YOUR_COLOR",
  secondary: "#YOUR_COLOR",
  accent: "#YOUR_COLOR",
}
```

---

## PERFORMANCE TIPS

1. **Images**: Lazy load with Next.js Image component
2. **Animations**: Use CSS animations instead of JS
3. **Fonts**: System fonts used (no custom fonts)
4. **Bundle**: Code splitting by component
5. **Icons**: Lucide icons are lightweight SVGs

---

**All components are production-ready and fully functional!**

For more details, see the code comments in each component file.
