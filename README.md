# AI Engineer Portfolio 🤖

A modern, responsive portfolio website template for showcasing AI engineering expertise, projects, certifications, and blog posts. Built with React, TypeScript, and Tailwind CSS.


## 🚀 Live Demo

Visit the live demo: https://krishna-portfolio-iota.vercel.app/

## ✨ Features

### 🎨 Modern Design
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Automatic theme switching with system preference
- **Smooth Animations**: Fade-in effects, hover animations, and transitions
- **Glass Morphism**: Modern glassmorphism effects for cards and navigation

### 📱 Navigation
- **Desktop Navigation**: Horizontal navigation bar with underline hover effects
- **Mobile Navigation**: Collapsible hamburger menu
- **Floating Navigation**: Side navigation dots with tooltips (desktop)
- **Smooth Routing**: Client-side routing with React Router

### 🧑‍💼 Portfolio Sections
- **Home**: Professional introduction with call-to-action buttons
- **About**: Personal background and skills overview
- **Experience**: Professional work experience and education history
- **Projects**: Showcase of AI/ML projects with GitHub links
- **Certifications**: Google Cloud certifications with Credly badges
- **Blogs**: Medium articles with rich previews and tags
- **Contact**: Professional contact information, social links, and working contact form with email notifications

### Frontend
- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework

### UI Components
- **Radix UI**: Accessible, unstyled UI components
- **Lucide React**: Beautiful icon library
- **React Router Dom**: Client-side routing
- **Sonner**: Toast notifications

### Development Tools
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/Krishnapopat/Krishna_Portfolio.git
   cd Krishna_Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🗂️ Project Structure

```
Krishna_Portfolio/
├── public/                 # Static assets
│   ├── favicon.svg        # Custom AI-themed favicon
│   ├── site.webmanifest   # Web app manifest
│   └── images/            # Portfolio images
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Radix UI components
│   │   └── portfolio/    # Portfolio-specific components
│   ├── pages/            # Page components
│   │   ├── Home.tsx      # Landing page
│   │   ├── About.tsx     # About section
│   │   ├── Experience.tsx # Work experience
│   │   ├── Projects.tsx  # Project showcase
│   │   ├── Certifications.tsx # Professional certifications
│   │   ├── Blogs.tsx     # Blog articles
│   │   └── Contact.tsx   # Contact information
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── main.tsx          # App entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

### Images
- Add your images to the `public/` directory
- Update image paths in components
- Replace favicon with your custom icon


### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy!

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Environment Variables
Create a `.env` file for environment-specific variables:
```env
RESEND_API_KEY=your_resend_api_key_here
```

### Email Setup (Resend)
The contact form uses [Resend](https://resend.com) for email functionality:

1. **Create Resend Account**: Sign up at [resend.com](https://resend.com)
2. **Get API Key**: Create an API key in your Resend dashboard
3. **Set Environment Variable**: Add `RESEND_API_KEY` to your environment
4. **Deploy**: The email function will work automatically on Netlify

## 🔧 Configuration

### TypeScript
- Main config: `tsconfig.json`
- App config: `tsconfig.app.json`
- Node config: `tsconfig.node.json`

### Tailwind CSS
- Config: `tailwind.config.ts`
- Custom components in `src/index.css`

### Vite
- Config: `vite.config.ts`
- Path aliases configured for `@/` imports

## 📱 PWA Features

The portfolio includes Progressive Web App features:
- **Web App Manifest**: Installable on mobile devices
- **Custom Icons**: AI-themed favicon and app icons
- **Responsive Design**: Mobile-first approach
- **Fast Loading**: Optimized with Vite

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

⭐ **Star this repository if you found it helpful!**

📧 **Questions?** Feel free to reach out via email or LinkedIn.

🚀 **Want to use this template?** Feel free to fork, customize, and make it your own! 