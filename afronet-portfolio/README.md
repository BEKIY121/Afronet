# Afronet Business Solution PLC - Professional Website

![Afronet Logo](https://img.shields.io/badge/Afronet-Business%20Solution-blue)
![React](https://img.shields.io/badge/React-18.0.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.0.0-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.0-cyan)

A modern, professional business consultancy website built with React, Vite, and Tailwind CSS. Features advanced glassmorphism design, comprehensive business content, and production-ready functionality.

## 🚀 Live Demo

**Website**: [https://afronetconsult.com](https://afronetconsult.com)

## ✨ Features

### 🎨 **Modern Design**
- **Glassmorphism Effects**: Beautiful frosted glass design with backdrop blur
- **Professional Color Scheme**: Clean white background with blue accents
- **Responsive Layout**: Perfect experience on all devices
- **Smooth Animations**: Framer Motion powered micro-interactions
- **Modern Typography**: Inter and Poppins fonts with gradient effects

### 🏢 **Business-Focused Content**
- **8 Comprehensive Services**: Detailed service offerings with pricing
- **Professional Team**: 6 team members with detailed profiles
- **Client Testimonials**: Authentic client feedback and reviews
- **Company Statistics**: Impressive metrics and achievements
- **Awards & Certifications**: Professional recognition and standards

### ⚡ **Performance & SEO**
- **Lightning Fast**: Optimized with Vite for instant loading
- **SEO Ready**: Meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Mobile First**: Responsive design optimized for all screen sizes

## 🛠️ Tech Stack

- **React 18** - Latest React with hooks and functional components
- **Vite** - Ultra-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS with custom design system
- **Framer Motion** - Advanced animations and micro-interactions
- **React Router** - Client-side routing with smooth transitions
- **Lucide React** - Beautiful, customizable SVG icons

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/afronet/portfolio-website.git

# Navigate to project directory
cd afronet-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:5173`

4. **Build for Production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
afronet-portfolio/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── LoadingScreen.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Footer.jsx
│   │   ├── Statistics.jsx
│   │   ├── AboutPreview.jsx
│   │   ├── ServicesPreview.jsx
│   │   ├── TestimonialsPreview.jsx
│   │   └── CTASection.jsx
│   ├── pages/              # Page components
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── PortfolioPage.jsx
│   │   └── ContactPage.jsx
│   ├── layouts/            # Layout components
│   │   └── Layout.jsx
│   ├── data/              # Business data
│   │   └── companyData.js
│   ├── styles/            # Global styles
│   │   └── index.css
│   ├── assets/            # Static assets
│   │   ├── images/
│   │   └── icons/
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── public/                # Public assets
├── index.html             # HTML template
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

## 🎨 Design System

### **Color Palette**
- **Primary**: `#2563eb` (Blue)
- **Accent**: `#0ea5e9` (Light Blue)
- **Success**: `#10b981` (Green)
- **Warning**: `#f59e0b` (Yellow)
- **Error**: `#ef4444` (Red)

### **Typography**
- **Headings**: Poppins (Display font)
- **Body**: Inter (Sans-serif)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### **Spacing System**
- **Container**: `max-w-7xl` (1280px)
- **Sections**: `py-16 md:py-24`
- **Components**: `p-6 md:p-8`

## 🔧 Customization

### **Updating Company Information**
Edit `src/data/companyData.js` to update:
- Company details and contact information
- Services and pricing
- Team member profiles
- Testimonials and statistics

### **Changing Colors**
Update `tailwind.config.js` to modify:
- Primary colors
- Accent colors
- Glassmorphism effects

### **Adding New Pages**
1. Create new page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel
```

### **Netlify**
```bash
# Build the project
npm run build

# Deploy the dist folder to Netlify
```

### **Traditional Hosting**
```bash
# Build the project
npm run build

# Upload dist folder contents to your web server
```

## 📈 Analytics Integration

Add Google Analytics or other tracking:
```javascript
// Add to index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 Security Features

- **HTTPS Ready**: Configured for secure connections
- **Content Security Policy**: CSP headers for XSS protection
- **Input Validation**: Form validation and sanitization
- **Modern Dependencies**: Latest versions with security patches

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Afronet Business Solution PLC**
- **Email**: info@afronetconsult.com
- **Phone**: +251 911 234 567
- **Website**: https://afronetconsult.com
- **Address**: Bole Road, Addis Ababa, Ethiopia

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Vite Team** - For the lightning-fast build tool
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For the smooth animations
- **Lucide** - For the beautiful icons

---

**Made with ❤️ by Afronet Business Solution PLC**

Empowering businesses through strategic consulting and investment solutions.
