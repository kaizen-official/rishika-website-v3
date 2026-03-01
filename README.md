# Rishika Builders - Next.js Website

<div align="center">

![Rishika Builders](https://img.shields.io/badge/Rishika-Builders-E85002?style=for-the-badge&logo=react)
![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Google Sheets](https://img.shields.io/badge/Google-Sheets-34A853?style=for-the-badge&logo=google-sheets)

**A modern, high-performance real estate website built with Next.js, featuring dynamic project catalogs, amenity showcases, Google Sheets lead integration, and smooth animations.**

[🌐 Live Demo](https://rishikabuilders.com) | [📖 Documentation](#table-of-contents) | [🐛 Report Bug](mailto:kaizen.official.hub@gmail.com)

</div>

---

## 📑 Table of Contents

- [🎯 Features](#-features)
- [🏗️ Tech Stack](#-tech-stack)
- [📂 Project Structure](#-project-structure)
- [⚙️ Installation & Setup](#-installation--setup)
- [🔧 Configuration](#-configuration)
- [📝 Content Management](#-content-management)
- [🎨 Customization Guide](#-customization-guide)
- [🤖 AI Prompt for Editing](#-ai-prompt-for-editing)
- [📊 Google Sheets Integration](#-google-sheets-integration)
- [🚀 Deployment](#-deployment)
- [📧 Support](#-support)

---

## 🎯 Features

### ✨ Core Features
- 🎨 **Modern UI/UX** — Warm terracotta & cream brand theme with smooth animations
- 📱 **Fully Responsive** — Mobile-first design approach
- ⚡ **Lightning Fast** — Next.js 15+ with Turbopack (App Router)
- 🎭 **Smooth Animations** — Framer Motion throughout
- 📊 **Google Sheets Backend** — No database needed for form leads
- 🔍 **SEO Optimized** — Dynamic metadata per page & route
- 🖼️ **Unsplash Images** — High-quality real estate photography via Unsplash CDN

### 🏠 Project Categories
- **Luxury Apartments** — 2, 3 & 4 BHK premium residences
- **Premium Villas** — Independent villas with private gardens
- **Gated Townships** — Integrated township communities
- **Commercial Spaces** — Office & retail developments
- **Plotted Developments** — Individual plot schemes
- **Affordable Housing** — Smart, value-for-money homes

### 🏊 Amenity Showcase
- **6 Amenity Categories** — Clubhouse, Pool & Spa, Fitness, Security, Green Spaces, Smart Home
- **Detailed Listings** — Features & images per amenity
- **Same Architecture** — Mirrors the project listing system

### 📮 Form Management
- **4 Form Types** — CTA, Contact, Project Enquiry, Amenity Enquiry
- **Google Sheets Storage** — Automatic lead logging
- **Real-time Validation** — User-friendly error handling

### 🏗️ Construction Excellence
- Expertise grid showcasing 12 construction standards (RCC, Vastu, RERA, Green Building, etc.)
- Rotating 3D real estate tag cloud with amenity & lifestyle keywords
- Animated stat counters — homes delivered, happy families, years of experience

---

## 🏗️ Tech Stack

### Frontend
```
Next.js 15+            - React Framework (App Router, Turbopack)
React 19               - UI Library
Tailwind CSS v4        - Utility-first CSS with @theme inline
Framer Motion          - Animation Library (motion/react)
Tabler Icons React     - Icon Library
react-icon-cloud       - 3D rotating tag cloud
```

### Backend & APIs
```
Google Sheets API      - Lead / Form Data Storage
googleapis             - Google API Client
Next.js API Routes     - Server-side form handler (/api/submit-form)
```

### External Services
```
Unsplash CDN           - High-quality real estate photography
next-themes            - Theme management
```

### Development Tools
```
ESLint                 - Code Linting
PostCSS                - CSS Processing
Turbopack              - Fast bundler (dev & build)
```

---

## 📂 Project Structure

```
rishika-v3/
│
├── 📁 app/                          # Next.js App Router
│   ├── 📄 layout.js                 # Root layout with metadata & fonts
│   ├── 📄 page.js                   # Homepage (assembles all sections)
│   ├── 📄 globals.css               # Global styles & Tailwind @theme
│   ├── 📄 design.json               # Brand guidelines & colour palette
│   ├── 📄 not-found.js              # 404 page
│   │
│   ├── 📁 products/                 # Projects Section
│   │   ├── 📄 categories.json       # ✏️ EDIT: Project category data
│   │   ├── 📄 products.json         # ✏️ EDIT: All projects / units data
│   │   ├── 📄 page.js               # Projects listing page (metadata)
│   │   ├── 📄 productsClient.js     # Projects listing UI
│   │   └── 📁 [slug]/               # Dynamic project category routes
│   │       ├── 📄 page.js           # Category metadata (SSR)
│   │       └── 📄 productCategoryClient.js
│   │
│   ├── 📁 accessories/              # Amenities Section
│   │   ├── 📄 categories.json       # ✏️ EDIT: Amenity category data
│   │   ├── 📄 accessories.json      # ✏️ EDIT: All amenities data
│   │   ├── 📄 page.js               # Amenities listing page (metadata)
│   │   ├── 📄 accessoriesClient.js  # Amenities listing UI
│   │   └── 📁 [slug]/               # Dynamic amenity routes
│   │       ├── 📄 page.js           # Amenity category metadata
│   │       └── 📄 accessoryCategoryClient.js
│   │
│   ├── 📁 about/                    # About Page
│   │   ├── 📄 page.js               # About metadata
│   │   └── 📄 aboutClient.js        # ✏️ EDIT: Story, team, timeline
│   │
│   ├── 📁 contact/                  # Contact Page
│   │   ├── 📄 page.js               # Contact metadata
│   │   └── 📄 contactClient.js      # ✏️ EDIT: Contact form & office info
│   │
│   ├── 📁 careers/                  # Careers Page
│   │   ├── 📄 page.js               # Careers metadata
│   │   ├── 📄 careersClient.js      # ✏️ EDIT: Job listings & culture
│   │   └── 📄 content.json          # ✏️ EDIT: Job roles & descriptions
│   │
│   ├── 📁 privacy-policy/           # Privacy Policy Page
│   │   ├── 📄 page.js               # Privacy metadata
│   │   └── 📄 privacyClient.js      # Privacy policy content
│   │
│   └── 📁 api/                      # API Routes
│       └── 📁 submit-form/
│           └── 📄 route.js          # ✏️ Google Sheets form handler
│
├── 📁 components/
│   ├── 📁 layout/                   # Layout Components
│   │   ├── 📄 header.js             # ✏️ EDIT: Navigation, logo, CTA
│   │   ├── 📄 footer.js             # ✏️ EDIT: Footer links & contact info
│   │   └── 📄 bgLayout.js           # Background wrapper
│   │
│   └── 📁 sections/                 # Homepage Section Components
│       ├── 📄 services.js           # ✏️ EDIT: Featured project types showcase
│       ├── 📄 offering.js           # ✏️ EDIT: Key amenities highlight
│       ├── 📄 excellence.js         # ✏️ EDIT: Construction expertise & tag cloud
│       ├── 📄 why-us.js             # ✏️ EDIT: Differentiators / USPs
│       ├── 📄 mission-vision.js     # ✏️ EDIT: Mission, vision, values
│       ├── 📄 safety.js             # ✏️ EDIT: Certifications & compliance
│       ├── 📄 testimonials.js       # ✏️ EDIT: Buyer testimonials
│       ├── 📄 clients.js            # ✏️ EDIT: Partner / institution logos
│       ├── 📄 certification.js      # Certification badges section
│       ├── 📄 faqs.js               # ✏️ EDIT: Frequently asked questions
│       ├── 📄 form.js               # Homepage lead capture form
│       └── 📄 floatCta.js           # Floating CTA button
│
│   └── 📁 ui/                       # UI Primitives
│       ├── 📄 interactive-icon-cloud.js  # 3D rotating tag/icon cloud
│       ├── 📄 hover-expand.js            # Expanding card slider
│       └── 📄 resizable-navbar.js        # Animated navbar
│
├── 📁 lib/
│   └── 📄 utils.js                  # Utility functions (cn, etc.)
│
├── 📁 public/                       # Static Assets
│   ├── 📄 full-logo-black.png       # Brand logo (dark)
│   └── 📄 icon.png                  # Favicon
│
├── 📄 .env                          # ✏️ Environment variables (Google Sheets)
├── 📄 next.config.mjs               # Next.js config (Unsplash image domain)
├── 📄 jsconfig.json                 # Path aliases (@/)
├── 📄 package.json                  # Dependencies
└── 📄 README.md                     # This file!
```

### 🎯 Key Files to Edit

| File | Purpose | What to Edit |
|------|---------|--------------|
| `app/products/products.json` | Project listings | Add/edit property units |
| `app/products/categories.json` | Project categories | Add/edit project types |
| `app/accessories/accessories.json` | Amenity listings | Add/edit amenities |
| `app/accessories/categories.json` | Amenity categories | Add/edit amenity types |
| `components/sections/testimonials.js` | Reviews | Add buyer testimonials |
| `components/sections/clients.js` | Partners | Update partner/institution logos |
| `components/layout/footer.js` | Footer | Update contact info & links |
| `app/careers/content.json` | Jobs | Update job openings |
| `.env` | Secrets | Google Sheets credentials |

---

## ⚙️ Installation & Setup

### Prerequisites
```bash
Node.js 18+
npm or yarn
Git
```

### Step 1: Clone Repository
```bash
git clone <repository-url>
cd rishika-v3
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment Variables
Create `.env` in the root directory:

```env
# Google Sheets API Configuration
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_CLIENT_EMAIL="your-service-account@project-id.iam.gserviceaccount.com"
GOOGLE_SHEETS_SPREADSHEET_ID="your-spreadsheet-id-here"
```

### Step 4: Start Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` 🎉

### Step 5: Build for Production
```bash
npm run build
npm start
```

---

## 🔧 Configuration

### Google Sheets Setup (Lead Backend)

#### 1. Create Google Cloud Project
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Create new project: "Rishika Builders"
- Enable **Google Sheets API** and **Google Drive API**

#### 2. Create Service Account
- Navigate to: IAM & Admin → Service Accounts
- Click "Create Service Account"
- Name: `sheets-form-handler`
- Role: **Editor**
- Create & download the JSON key

#### 3. Create Google Sheet
Create a new Google Sheet with 4 tabs:
- `CTA Form`
- `Contact Page`
- `Product Page`
- `Accessories Page`

#### 4. Share Sheet with Service Account
- Open your sheet → Share
- Add the service account email
- Grant **Editor** permissions

#### 5. Get Sheet ID
From URL: `https://docs.google.com/spreadsheets/d/`**`SHEET_ID`**`/edit`

#### 6. Update `.env`
- `GOOGLE_SHEETS_PRIVATE_KEY` — from downloaded JSON key
- `GOOGLE_SHEETS_CLIENT_EMAIL` — from downloaded JSON key
- `GOOGLE_SHEETS_SPREADSHEET_ID` — from sheet URL

---

## 📝 Content Management

### Adding a New Project Category

**File:** `app/products/categories.json`

```json
{
  "id": "plotted-developments",
  "title": "Plotted Developments",
  "slug": "plotted-developments",
  "description": "Freehold residential plots in gated communities with all infrastructure in place.",
  "image": "https://images.unsplash.com/photo-XXXXXXXXXX?w=800&q=80",
  "icon": "IconMap",
  "features": [
    "Clear title & RERA registered",
    "Gated community with security",
    "Ready infrastructure",
    "Flexible construction timeline"
  ],
  "products": ["rishika-plots-phase1"]
}
```

### Adding a New Project Unit

**File:** `app/products/products.json`

```json
{
  "slug": "rishika-plots-phase1",
  "model": "Rishika Plots Phase 1",
  "category": "plotted-developments",
  "type": "Residential Plot",
  "tagline": "Own Your Land, Build Your Dream",
  "description": "Premium freehold plots in a fully gated community...",
  "longDescription": "Detailed project description here...",
  "images": [
    "https://images.unsplash.com/photo-XXXXXXXXXX?w=800&q=80"
  ],
  "specifications": {
    "plotSizes": "200 - 500 sq.yd",
    "totalPlots": "120 Units",
    "location": "Hyderabad, Telangana"
  },
  "advantages": [
    "RERA approved & clear title",
    "24/7 gated security"
  ]
}
```

### Adding a New Amenity

**File:** `app/accessories/accessories.json`

```json
{
  "slug": "rooftop-terrace",
  "model": "Sky Lounge & Terrace",
  "category": "clubhouse-recreation",
  "type": "Rooftop Amenity",
  "tagline": "Unwind Above the City",
  "description": "Panoramic rooftop terrace with seating, barbeque zone, and sky bar.",
  "images": [
    "https://images.unsplash.com/photo-XXXXXXXXXX?w=800&q=80"
  ],
  "specifications": {
    "area": "5,000 sq.ft",
    "capacity": "100 residents",
    "access": "Residents only"
  },
  "advantages": [
    "360° city view",
    "Barbeque & party zone"
  ]
}
```

### Updating Testimonials

**File:** `components/sections/testimonials.js`

```javascript
const testimonials = [
  {
    name: "Priya Sharma",
    company: "Homeowner, Rishika Heights",
    role: "Resident since 2023",
    image: "https://images.unsplash.com/photo-XXXXXXXXXX?w=200&q=80",
    rating: 5,
    text: "The quality of construction and the amenities are truly world-class..."
  }
]
```

---

## 🎨 Customization Guide

### Brand Colour Palette

```
Primary:    #E85002   /* Terracotta Orange  — CTAs, headings, accents  */
Gray:       #A07558   /* Warm Brown         — Secondary accents         */
Dark:       #333333   /* Charcoal           — Body text                 */
Cream:      #D9C3AB   /* Warm Beige         — Borders, dividers         */
Light:      #FBF8F5   /* Off-white          — Page background           */
Black:      #1a1a1a   /* Deep Black         — Header, footer            */
```

To change the primary accent, search and replace `#E85002` across all component files.

### Fonts

**File:** `app/layout.js`

The site uses the system font stack via Tailwind. To add a Google Font:

```javascript
import { Playfair_Display, Inter } from 'next/font/google'
```

### Logo

- `public/full-logo-black.png` — Main brand logo (used in header & footer)
- `public/icon.png` — Favicon / browser tab icon

Replace files in `public/` keeping the same filenames, or update the `src` paths in `components/layout/header.js` and `components/layout/footer.js`.

### Unsplash Images

All images are served from Unsplash CDN, configured in `next.config.mjs`. Use URLs in the format:

```
https://images.unsplash.com/photo-XXXXXXXXXX?w=800&q=80
```

---

## 🤖 AI Prompt for Editing

Copy and paste this when asking AI to make changes:

```
I'm working on the Rishika Builders Next.js real estate website. Here's the context:

TECH STACK:
- Next.js 15+ with App Router & Turbopack
- React 19, Tailwind CSS v4 (@theme inline), Framer Motion (motion/react)
- Google Sheets API for form/lead storage
- JSON-based content management
- Unsplash CDN for images (configured in next.config.mjs)
- Tabler Icons React, react-icon-cloud

PROJECT STRUCTURE:
- Projects: app/products/products.json & app/products/categories.json
- Amenities: app/accessories/accessories.json & app/accessories/categories.json
- Homepage sections: components/sections/
- Form API: app/api/submit-form/route.js
- Layout: components/layout/

BRAND COLOURS:
- Primary:  #E85002  (Terracotta Orange)
- Gray:     #A07558  (Warm Brown)
- Dark:     #333333  (Charcoal)
- Cream:    #D9C3AB  (Warm Beige)
- Light:    #FBF8F5  (Off-white background)
- Black:    #1a1a1a  (Header/Footer)

FORMS INTEGRATION:
- All forms POST to /api/submit-form
- Data saved to Google Sheets (4 sheets: CTA Form, Contact Page, Product Page, Accessories Page)
- Environment variables in .env

TASK:
[Describe your specific task here]

Please:
1. Maintain the existing brand colour palette
2. Follow the current component structure
3. Use Framer Motion (motion/react) for animations
4. Keep mobile responsiveness
5. Use Unsplash URLs for any new images
6. Update JSON files for content changes
```

---

## 📊 Google Sheets Integration

### Form Data Structure

#### Product Page / Accessories Page
| Timestamp | Name | Email | Phone | Project/Amenity Name | Message |
|-----------|------|-------|-------|----------------------|---------|

#### Contact Page
| Timestamp | Name | Email | Phone | Subject | Message |
|-----------|------|-------|-------|---------|---------|

#### CTA Form
| Timestamp | Name | Email | Phone | Interest | Message |
|-----------|------|-------|-------|----------|---------|

### Form Submission Flow

```
User fills form → Frontend validates → POST /api/submit-form
→ Google Sheets API → Data saved to appropriate sheet
→ Success response → Thank you modal
```

### Troubleshooting Forms

**Forms not submitting:**
```bash
# Check .env is present and has all three variables
cat .env

# Confirm the Google Sheet is shared with the service account (Editor access)
```

**Wrong sheet name:**
- Update `SHEET_NAMES` in `app/api/submit-form/route.js`
- Sheet tab names are case-sensitive

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel login
vercel --prod
```

Add environment variables in Vercel dashboard:
> Project Settings → Environment Variables

- `GOOGLE_SHEETS_PRIVATE_KEY`
- `GOOGLE_SHEETS_CLIENT_EMAIL`
- `GOOGLE_SHEETS_SPREADSHEET_ID`

### Other Platforms

```bash
npm run build
# Serve the .next output with a Node.js server or compatible adapter
```

---

## 📧 Support

### Common Issues

**Q: Forms not working?**
- Check Google Sheets API credentials in `.env`
- Verify service account has Editor access to the sheet
- Confirm sheet tab names match exactly

**Q: Images not loading?**
- Check `next.config.mjs` has `images.unsplash.com` in `remotePatterns`
- Use format: `https://images.unsplash.com/photo-XXXXX?w=800&q=80`

**Q: Build errors?**
- Delete `.next` and rebuild: `rm -rf .next && npm run build`
- Ensure Node.js 18+

**Q: Tailwind styles not applying?**
- Tailwind CSS v4 uses `@theme inline` in `globals.css` — no `tailwind.config.js` required
- Ensure custom CSS variables are defined inside `@theme {}`

---

<div align="center">

### 🎉 You're All Set!

**Start developing with:**
```bash
npm run dev
```

**Need help?** Reach out anytime.

---

**Created with ❤️ by [Kaizen](mailto:kaizen.official.hub@gmail.com)**

*Building digital experiences that elevate your business*

[![Email](https://img.shields.io/badge/Email-kaizen.official.hub%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:kaizen.official.hub@gmail.com)

</div>
