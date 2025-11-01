# Ramji's Portfolio - Next.js

A modern, performant portfolio website built with Next.js, showcasing projects, experience, and skills.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1
- **UI Components**: Radix UI
- **Animations**: Framer Motion, GSAP, AOS
- **3D Graphics**: Three.js, React Three Fiber
- **Authentication**: Supabase
- **Form Handling**: EmailJS
- **Database**: MongoDB, Supabase

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Development

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
Front/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── project/           # Project detail pages
│   ├── internship/        # Internship detail pages
│   ├── research/          # Research page
│   └── certifications/    # Certifications page
├── src/
│   ├── components/        # React components
│   ├── context/          # React context providers
│   ├── lib/              # Utility libraries
│   ├── styles/           # Global styles
│   └── utils/            # Utility functions
├── public/               # Static assets
└── next.config.mjs       # Next.js configuration
```

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_EMAIL_TO=your_email
```

## 🎨 Features

- ✅ Server-side rendering with Next.js App Router
- ✅ Responsive design with Tailwind CSS
- ✅ Smooth animations and transitions
- ✅ 3D graphics and interactive elements
- ✅ Dynamic project and internship pages
- ✅ Contact form with EmailJS integration
- ✅ Admin authentication system
- ✅ Optimized performance and SEO

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run Next.js linting
- `npm run type-check` - Run TypeScript type checking

## 🔄 Migration from Vite

This project was successfully migrated from Vite to Next.js, maintaining the same design and functionality while benefiting from Next.js features like SSR, optimized routing, and better performance.

## 📄 License

© 2023 Ramji. All rights reserved.
