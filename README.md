# Adobe Account UI Clone

A pixel-perfect recreation of the Adobe Account page built with Next.js 14, TypeScript, and Tailwind CSS.

## 📸 Features

- ✅ Responsive header with navigation
- ✅ Beautiful gradient hero banner
- ✅ User profile card with social sign-ins
- ✅ Creative Cloud promotional offer card
- ✅ Free membership section with app cards
- ✅ Comprehensive help footer
- ✅ Fully responsive design
- ✅ Modern UI with Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Add your images and icons** (see Asset Requirements below)

3. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
UI_wrap_creative_resume/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Header.tsx          # Top navigation
│   │   ├── HeroBanner.tsx      # Gradient welcome banner
│   │   ├── ProfileCard.tsx     # User profile sidebar
│   │   ├── CreativeCloudOffer.tsx  # Promotional card
│   │   ├── FreeMembership.tsx  # Free apps section
│   │   └── Footer.tsx          # Help and links footer
│   └── data/
│       └── accountData.ts      # All content data
├── public/
│   ├── images/                 # Place images here
│   └── icons/                  # Place icons here
└── package.json
```

## 🖼️ Asset Requirements

### Required Images (add to `/public/images/`)

1. **adobe-logo.svg** - Adobe logo for header
2. **avatar.png** - User profile avatar (colorful icon from screenshot)
3. **creative-cloud-sale.png** - "SALE" creative image with colorful elements
4. **creative-cloud-card.png** - Creative Cloud gradient card image
5. **acrobat-card.png** - Adobe Acrobat marketing card image

### Required Icons (add to `/public/icons/`)

**Social Sign-ins:**
- google.svg
- facebook.svg
- apple.svg
- microsoft.svg
- icloud.svg
- message.svg

**Adobe Apps/Services:**
- premiere-rush.svg
- creative-cloud.svg
- lightroom.svg
- photoshop-express.svg
- fresco.svg
- behance.svg
- pdf.svg

## 📝 Data Customization

All content is extracted from the screenshots and stored in `/src/data/accountData.ts`. You can easily customize:

- User information
- Pricing and offers
- Navigation items
- Free apps and services
- Help section links
- Footer links

## 🎨 Color Scheme

The design uses:
- **Adobe Red**: `#FA0F00`
- **Gradient**: Purple → Pink → Red → Orange
- **Background**: Gray-50 (`#F9FAFB`)
- **Text**: Gray-900 (`#111827`) for headings, Gray-600 for body

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: System fonts (Apple, Segoe UI, Roboto)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎯 Extracted Data Summary

All data extracted from your screenshots:

### User Profile
- Name: dushyant goyal
- Email: dushyantgoyal001@gmail.com
- Password status: Not set

### Promotional Offer
- Title: Save 55% on Creative Cloud Pro
- Original Price: ₹2,714.00/mo incl. GST
- Discounted Price: ₹1,199.00/mo incl. GST
- Offer ends: Dec 7

### Navigation
- Overview (active)
- Account and security
- Plans and payment
- Communication preferences

### Free Services (7 shown + 18 more)
- Premiere Rush Starter Plan
- Creative Cloud Trials
- Adobe Photoshop Lightroom for mobile
- Adobe Photoshop Express
- Adobe Fresco Starter Plan
- Behance
- PDF Services

## 🔄 Next Steps

1. Add your images to `/public/images/`
2. Add your icons to `/public/icons/`
3. Run `npm run dev` to see the UI
4. Customize data in `/src/data/accountData.ts` as needed

## 📄 License

This is a UI clone for educational/portfolio purposes.

---

**Need help?** Check the code comments or modify the data file to customize content!

