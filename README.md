# Chartered Accountant Website - David Miller

A modern, professional website for chartered accountant services built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional layout with orange accent colors
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling navigation and interactive FAQ section
- **Professional Sections**: 
  - Hero section with testimonials and service badges
  - Services showcase
  - About section with statistics
  - Pricing models (Hourly, Monthly, Quarterly)
  - Contact form
  - Client testimonials
  - FAQ section
  - Newsletter signup

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Setup

1. **Clone the repository**
   bash
   git clone <your-repo-url>
   cd chartered-accountant-website
   

2. **Install dependencies**
   bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   

3. **Install shadcn/ui components**
   bash
   npx shadcn@latest init
   npx shadcn@latest add button card badge
   

4. **Add images**
   - Place professional images in `public/images/` directory
   - Required images:
     - `david-miller-professional.jpg` (Main profile image)
     - `client-woman1.jpg` (Client testimonial)
     - `client-woman2.jpg` (Client testimonial)
     - `client-sarah.jpg` (Client testimonial)
     - `professional-accountant.jpg` (Additional professional image)
     - `professional-man.jpg` (Additional professional image)

5. **Start development server**
   bash
   npm run dev
   

6. **Open browser**
   Navigate to `http://localhost:3000`

## 🧪 Test Cases

### 1. Navigation Tests

#### Test Case 1.1: Smooth Scrolling Navigation
- **Description**: Test navigation menu smooth scrolling functionality
- **Steps**:
  1. Load the homepage
  2. Click on "Services" in navigation
  3. Verify smooth scroll to services section
  4. Repeat for all navigation items (Home, About, Pricing, Contact)
- **Expected Result**: Page smoothly scrolls to respective sections
- **Status**: ✅ Pass

#### Test Case 1.2: Mobile Navigation
- **Description**: Test navigation on mobile devices
- **Steps**:
  1. Resize browser to mobile width (< 768px)
  2. Check if navigation is responsive
  3. Test navigation functionality on mobile
- **Expected Result**: Navigation adapts to mobile layout
- **Status**: ⚠️ Needs mobile menu implementation

### 2. Hero Section Tests

#### Test Case 2.1: Hero Content Display
- **Description**: Verify hero section displays correctly
- **Steps**:
  1. Load homepage
  2. Check if "I'm David Miller" heading displays
  3. Verify testimonial card shows with ratings
  4. Check service badges display
  5. Verify social media icons are visible
- **Expected Result**: All hero elements display correctly
- **Status**: ✅ Pass

#### Test Case 2.2: Call-to-Action Buttons
- **Description**: Test hero section CTA buttons
- **Steps**:
  1. Click "Portfolio" button
  2. Verify it scrolls to services section
  3. Click "Hire Me" button
  4. Verify it scrolls to contact section
- **Expected Result**: Buttons navigate to correct sections
- **Status**: ✅ Pass

### 3. Services Section Tests

#### Test Case 3.1: Services Grid Display
- **Description**: Test services section layout and content
- **Steps**:
  1. Navigate to services section
  2. Verify 8 service cards display in grid
  3. Check each card has icon, title, and description
  4. Test hover effects on service cards
- **Expected Result**: All service cards display with proper styling
- **Status**: ✅ Pass

#### Test Case 3.2: Service Icons
- **Description**: Verify all service icons display correctly
- **Steps**:
  1. Check each service card has appropriate Lucide icon
  2. Verify icons are properly colored (orange background)
  3. Test icon visibility and sizing
- **Expected Result**: All icons display correctly
- **Status**: ✅ Pass

### 4. About Section Tests

#### Test Case 4.1: About Content and Statistics
- **Description**: Test about section content display
- **Steps**:
  1. Navigate to about section
  2. Verify profile image displays
  3. Check statistics (750+ Projects, 25+ Industries, 16+ Years)
  4. Verify contact information displays
- **Expected Result**: All about section content displays correctly
- **Status**: ✅ Pass

### 5. Pricing Section Tests

#### Test Case 5.1: Pricing Cards Display
- **Description**: Test pricing section layout
- **Steps**:
  1. Navigate to pricing section
  2. Verify 3 pricing cards (Hourly, Monthly, Quarterly)
  3. Check pricing information and features list
  4. Test "Get Started" button functionality
- **Expected Result**: All pricing cards display with correct information
- **Status**: ✅ Pass

#### Test Case 5.2: Feature Lists
- **Description**: Verify pricing feature lists
- **Steps**:
  1. Check each pricing card has feature list
  2. Verify checkmarks display correctly
  3. Check disabled features show as grayed out
- **Expected Result**: Feature lists display with proper styling
- **Status**: ✅ Pass

### 6. Contact Form Tests

#### Test Case 6.1: Form Fields
- **Description**: Test contact form functionality
- **Steps**:
  1. Navigate to contact section
  2. Fill out all form fields
  3. Test form validation
  4. Submit form
- **Expected Result**: Form accepts input and validates correctly
- **Status**: ⚠️ Needs backend implementation

#### Test Case 6.2: Contact Information
- **Description**: Verify contact information display
- **Steps**:
  1. Check contact card displays address, phone, email
  2. Verify business hours display
  3. Test contact information formatting
- **Expected Result**: Contact information displays correctly
- **Status**: ✅ Pass

### 7. Testimonials Tests

#### Test Case 7.1: Testimonial Cards
- **Description**: Test testimonials section
- **Steps**:
  1. Navigate to testimonials section
  2. Verify client images display
  3. Check testimonial text and ratings
  4. Verify client information (name, company)
- **Expected Result**: Testimonials display with proper formatting
- **Status**: ✅ Pass

### 8. FAQ Section Tests

#### Test Case 8.1: FAQ Accordion
- **Description**: Test FAQ accordion functionality
- **Steps**:
  1. Navigate to FAQ section
  2. Click on FAQ questions
  3. Verify accordion opens/closes
  4. Test multiple FAQ interactions
- **Expected Result**: FAQ accordion works smoothly
- **Status**: ✅ Pass

#### Test Case 8.2: Ask Away Section
- **Description**: Test "Ask Away" call-to-action
- **Steps**:
  1. Locate "Ask Away" card in FAQ section
  2. Click "Contact Us" button
  3. Verify it navigates to contact section
- **Expected Result**: Button navigates to contact form
- **Status**: ✅ Pass

### 9. Footer Tests

#### Test Case 9.1: Footer Content
- **Description**: Test footer section content
- **Steps**:
  1. Scroll to footer
  2. Verify company information displays
  3. Check navigation links work
  4. Test contact information
- **Expected Result**: Footer displays all information correctly
- **Status**: ✅ Pass

#### Test Case 9.2: Social Media Icons
- **Description**: Test footer social media icons
- **Steps**:
  1. Check social media icons display (Facebook, Twitter, LinkedIn, Instagram, YouTube)
  2. Verify icons are properly styled
  3. Test hover effects
- **Expected Result**: All social icons display with hover effects
- **Status**: ✅ Pass

#### Test Case 9.3: Newsletter Signup
- **Description**: Test newsletter signup form
- **Steps**:
  1. Locate newsletter signup in footer
  2. Enter email address
  3. Click submit button
- **Expected Result**: Newsletter form accepts email input
- **Status**: ⚠️ Needs backend implementation

### 10. Responsive Design Tests

#### Test Case 10.1: Mobile Responsiveness
- **Description**: Test website on mobile devices
- **Steps**:
  1. Test on screen sizes: 320px, 375px, 414px
  2. Verify all sections adapt to mobile
  3. Check text readability and button sizes
- **Expected Result**: Website is fully responsive
- **Status**: ✅ Pass

#### Test Case 10.2: Tablet Responsiveness
- **Description**: Test website on tablet devices
- **Steps**:
  1. Test on screen sizes: 768px, 1024px
  2. Verify grid layouts adapt properly
  3. Check navigation and content spacing
- **Expected Result**: Website displays correctly on tablets
- **Status**: ✅ Pass

#### Test Case 10.3: Desktop Responsiveness
- **Description**: Test website on desktop screens
- **Steps**:
  1. Test on screen sizes: 1280px, 1440px, 1920px
  2. Verify content doesn't stretch too wide
  3. Check proper spacing and alignment
- **Expected Result**: Website displays optimally on desktop
- **Status**: ✅ Pass

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically deploy on every push

### Other Platforms

- **Netlify**: Connect GitHub repo and deploy
- **AWS Amplify**: Use AWS console to deploy
- **Railway**: Connect GitHub and deploy

## 📁 Project Structure


chartered-accountant-website/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       └── badge.tsx
├── lib/
│   └── utils.ts
├── public/
│   └── images/
│       ├── david-miller-professional.jpg
│       ├── client-woman1.jpg
│       ├── client-woman2.jpg
│       └── client-sarah.jpg
├── README.md
├── package.json
├── tailwind.config.js
└── tsconfig.json


## 🎨 Customization

### Colors
- Primary: Orange (#f97316)
- Secondary: Black (#000000)
- Background: White (#ffffff)
- Text: Gray shades

### Fonts
- Primary: Inter (Google Fonts)

### Components
All UI components are built with shadcn/ui and can be customized in the `components/ui/` directory.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🔄 Version History

- **v1.0.0** - Initial release with all core features
- **v1.1.0** - Added proper social media icons and improved newsletter signup
- **v1.2.0** - Enhanced mobile responsiveness

---

**Built with ❤️**
