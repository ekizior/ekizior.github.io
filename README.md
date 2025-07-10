# Erik Kizior - Personal Portfolio

A modern, elegant personal portfolio website showcasing my experience, projects, and skills. Built with Next.js 15, Framer Motion, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth scrolling, hover effects, and animated components
- **Performance Optimized**: Fast loading with Next.js Image optimization
- **Accessible**: Built with accessibility best practices
- **SEO Friendly**: Proper metadata and structured content

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **Build**: Static export for optimal performance

## 🚀 Live Site

Visit my portfolio at: **[https://ekizior.github.io](https://ekizior.github.io)**

## 📋 Sections

- **Hero**: Introduction with animated background
- **About**: Personal story and quick stats
- **Experience**: Professional work history
- **Education**: Academic background and awards
- **Projects**: Featured and comprehensive project showcase
- **Skills**: Technical expertise with interactive cards
- **Contact**: Professional contact information

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Experience.tsx    # Experience timeline
│   ├── Education.tsx     # Education & awards
│   ├── Projects.tsx      # Projects showcase
│   ├── Skills.tsx        # Skills & expertise
│   ├── Contact.tsx       # Contact information
│   ├── Navigation.tsx    # Navigation bar
│   ├── MouseTrail.tsx    # Mouse trail animation
│   ├── WaveBackground.tsx # Animated wave background
│   └── AnimatedGradient.tsx # Floating dots animation
└── lib/                  # Utility functions
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ekizior/ekizior.github.io.git
   cd ekizior.github.io
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions:

1. **Build Process**: The GitHub Actions workflow builds the Next.js app
2. **Static Export**: Generates static files in the `out/` directory
3. **Deployment**: Deploys to the `gh-pages` branch
4. **Live Site**: Available at https://ekizior.github.io

### Deployment Configuration

- **Framework**: Next.js with static export
- **Build Output**: `out/` directory
- **Deployment Branch**: `gh-pages`
- **GitHub Pages Source**: GitHub Actions

## 🎨 Customization

### Personal Information

- Update personal details in `src/components/Hero.tsx`
- Modify experience in `src/components/Experience.tsx`
- Edit education in `src/components/Education.tsx`
- Add projects in `src/components/Projects.tsx`

### Styling

- Modify colors in `tailwind.config.ts`
- Update global styles in `src/app/globals.css`
- Customize animations in individual components

### Content

- Replace images in `public/assets/`
- Update metadata in `src/app/layout.tsx`
- Modify project descriptions and links

## 📱 Responsive Design

The site is fully responsive with:

- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Optimized typography scaling

## ⚡ Performance

- **Static Generation**: Pre-built pages for fast loading
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting for optimal bundle sizes
- **Caching**: Efficient caching strategies for static assets

## 🔧 Configuration Files

- `next.config.js` - Next.js configuration for static export
- `tailwind.config.ts` - Tailwind CSS configuration
- `package.json` - Dependencies and scripts
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Feel free to open issues or submit pull requests.

---

**Built with ❤️ by Erik Kizior**
