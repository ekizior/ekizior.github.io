# Erik Kizior - Personal Website

A modern, elegant personal website built with Next.js 14, Framer Motion, and Tailwind CSS.

## Features

- ⚡ **Next.js 14** - React framework with App Router
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- ✨ **Framer Motion** - Smooth animations and interactions
- 📱 **Responsive Design** - Mobile-first approach
- 🌙 **Dark Mode** - Built-in dark/light theme support
- 🚀 **GitHub Pages** - Free hosting and deployment

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ekizior/ekizior.github.io.git
cd ekizior.github.io
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This site is configured for GitHub Pages deployment:

1. Build the project:

```bash
npm run build
```

2. The static files will be generated in the `out/` directory
3. Push to GitHub and enable GitHub Pages in your repository settings

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── Hero.tsx       # Hero section
│   └── MouseTrail.tsx # Mouse trail animation
└── lib/               # Utility functions
```

## Customization

- Update personal information in `src/components/Hero.tsx`
- Modify colors in `tailwind.config.ts`
- Add new components in `src/components/`
- Update metadata in `src/app/layout.tsx`

## License

MIT License - feel free to use this template for your own portfolio!
