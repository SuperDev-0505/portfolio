# Portfolio Website

A modern, responsive portfolio website inspired by [brittanychiang.com](https://brittanychiang.com/), built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with dark theme
- 📱 Fully responsive layout
- ⚡ Fast and optimized with Next.js
- 🎭 Smooth animations with Framer Motion
- ♿ Accessible and semantic HTML
- 🎯 Smooth scrolling navigation

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Hero Section**: Edit `components/Hero.tsx` to update your name and tagline
2. **About Section**: Edit `components/About.tsx` to add your bio and skills
3. **Experience**: Edit the `experiences` array in `components/Experience.tsx`
4. **Projects**: Edit the `projects` array in `components/Projects.tsx`
5. **Writing**: Edit the `articles` array in `components/Writing.tsx`
6. **Social Links**: Update links in `components/Nav.tsx` and `components/Footer.tsx`

### Styling

The color scheme and styling can be customized in:
- `tailwind.config.js` - Color palette and theme configuration
- `app/globals.css` - Global styles and utilities

## Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

You can also deploy to other platforms that support Next.js:
- Netlify
- AWS Amplify
- Railway
- Or any Node.js hosting service

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: Inter (Google Fonts)

## License

MIT License - feel free to use this template for your own portfolio!

