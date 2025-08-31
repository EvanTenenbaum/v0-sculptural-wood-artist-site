# Evan Tenenbaum - Sculptural Wood Artist Website

A refined, gallery-quality website showcasing sculptural wood pieces with an art-first approach and Northern California aesthetic.

## Features

- **Art Gallery**: Responsive grid layout with detailed artwork pages
- **Inquiry System**: Modal-based inquiry form with email integration
- **Available Works**: Integration with Shopify for utilitarian pieces
- **Responsive Design**: Mobile-first approach with subtle animations
- **Email Integration**: Resend API with webhook fallback

## Setup Instructions

### 1. Environment Variables

Copy `.env.example` to `.env.local` and configure:

\`\`\`bash
# Email configuration for inquiry system
RESEND_API_KEY=your_resend_api_key_here
INQUIRE_TO_EMAIL=studio@evantenenbaum.com

# Fallback webhook for inquiries (optional)
INQUIRE_WEBHOOK=https://formspree.io/f/your-form-id

# Shopify integration
SHOP_ALL_URL=https://your-shopify-store.com/collections/all
\`\`\`

### 2. Adding Artworks

Edit `data/artworks.json` to add new pieces:

\`\`\`json
{
  "slug": "unique-artwork-slug",
  "title": "Artwork Title",
  "year": 2024,
  "species": "Wood Species",
  "location": "Source Location",
  "dimensions": "H × W × D",
  "finish": "Finish Description",
  "status": "Available|Reserved|Sold",
  "images": ["/path/to/image1.jpg", "/path/to/image2.jpg"],
  "alt": "Descriptive alt text for accessibility"
}
\`\`\`

### 3. Adding Available Works

Edit `data/available.json` for utilitarian pieces:

\`\`\`json
{
  "title": "Product Title",
  "species": "Wood Species",
  "location": "Source Location", 
  "dimensions": "Dimensions",
  "image": "/path/to/image.jpg",
  "externalLink": "https://shop.example.com/product"
}
\`\`\`

### 4. Image Management

- Place images in the `public/` directory
- Use descriptive filenames
- Optimize images for web (WebP recommended)
- Include alt text for accessibility

### 5. Email Setup Options

#### Option A: Resend (Recommended)
1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Set `RESEND_API_KEY` and `INQUIRE_TO_EMAIL`

#### Option B: Webhook Fallback
1. Use services like Formspree, Getform, or Netlify Forms
2. Set `INQUIRE_WEBHOOK` to your endpoint URL

### 6. Shopify Integration

1. Set up your Shopify store
2. Configure `SHOP_ALL_URL` to point to your collection
3. Update external links in `available.json`

## Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
\`\`\`

## Design System

- **Colors**: Warm ivory backgrounds, deep charcoal text, copper accents
- **Typography**: Serif headings (Playfair Display), sans-serif body (Geist)
- **Layout**: Generous whitespace, subtle animations, mobile-first
- **Accessibility**: WCAG AA compliant, keyboard navigation, screen reader support

## Rate Limiting

The inquiry API includes built-in rate limiting:
- 5 requests per 10 minutes per IP address
- Honeypot spam protection
- Input validation and sanitization

## Deployment

Deploy to Vercel for optimal performance:

\`\`\`bash
# Deploy to Vercel
vercel --prod
\`\`\`

Remember to set environment variables in your Vercel dashboard.
