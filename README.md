# Caleb Howard - Professional Portfolio

A modern, responsive portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS. This is a professional React/JSX conversion of the original HTML portfolio, featuring advanced features like theme switching, responsive design, and optimized performance.

## Features

- **Modern Tech Stack**: Next.js 16 with App Router, React 19, TypeScript, and Tailwind CSS
- **Dark/Light Theme**: Built-in theme switching with `next-themes`
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Professional Components**: Reusable, well-structured React components
- **Image Optimization**: Next.js Image component for optimal performance
- **Smooth Animations**: Custom fade-in animations for engaging UX
- **Interactive Elements**: Expandable project cards with lightbox galleries
- **SEO Optimized**: Proper metadata and semantic HTML

## Project Structure

```
├── app/
│   ├── layout.tsx                 # Root layout with theme provider
│   ├── page.tsx                   # Home page
│   ├── globals.css                # Global styles and animations
│   ├── about/
│   │   └── page.tsx              # About me page
│   ├── skills/
│   │   └── page.tsx              # Skills showcase page
│   ├── contact/
│   │   └── page.tsx              # Contact information page
│   ├── achievements/
│   │   └── page.tsx              # Projects and achievements
│   ├── sova/
│   │   └── page.tsx              # Sova AI Assistant details
│   ├── chimera/
│   │   └── page.tsx              # Chimera Security Research
│   └── education/
│       └── page.tsx              # Educational background
├── components/
│   ├── Navigation.tsx             # Main navigation with mobile menu
│   ├── Footer.tsx                 # Footer component
│   ├── ProjectCard.tsx            # Expandable project card
│   └── Lightbox.tsx               # Image lightbox modal
├── public/                        # Static assets (images)
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
├── next.config.ts                 # Next.js configuration
└── package.json                   # Project dependencies
```

## Pages

- **Home** (`/`) - Hero section with introduction and CTA
- **About** (`/about`) - Personal background and mission
- **Skills** (`/skills`) - Technical skills with icons
- **Projects** (`/achievements`) - Web and AI projects showcase
- **Contact** (`/contact`) - Contact information and links
- **Sova** (`/sova`) - Autonomous AI Desktop Assistant details
- **Chimera** (`/chimera`) - AI Security Research Orchestrator
- **Education** (`/education`) - Academic journey and credentials

## Design System

### Colors
- **Primary**: `#6366F1` (Indigo)
- **Secondary**: `#4F46E5` (Indigo 600)
- **Dark BG**: `#0F172A` (Slate 900)
- **Dark Surface**: `#1E293B` (Slate 800)
- **Light Text**: `#F8FAFC` (Slate 50)
- **Muted Text**: `#94A3B8` (Slate 400)

### Typography
- **Headings**: Inter (400, 500, 600, 700)
- **Body**: Inter (300, 400, 500)
- **Code**: JetBrains Mono (400, 500, 600)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd caleb-howard-portfolio
```

2. Install dependencies
```bash
npm install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Key Components

### Navigation
- Sticky header with logo and navigation links
- Theme toggle button (dark/light mode)
- Mobile-friendly hamburger menu
- Responsive hiding on smaller screens

### ProjectCard
- Expandable/collapsible design
- Integrated image lightbox
- Technology tags
- External and internal links
- Hover effects and animations

### Lightbox
- Full-screen image viewer
- Keyboard support (ESC to close)
- Smooth fade animations
- Click-to-close functionality

## Technologies Used

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom React components
- **Fonts**: Google Fonts (Inter, JetBrains Mono)
- **Theme Management**: next-themes
- **Image Optimization**: Next.js Image component

## Customization

### Updating Colors
Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  primary: '#6366F1',
  secondary: '#4F46E5',
  // ...
}
```

### Adding New Projects
Add project objects to the relevant arrays in `/app/achievements/page.tsx`:

```typescript
const webProjects = [
  {
    title: 'Project Name',
    description: 'Short description',
    fullDescription: 'Detailed description',
    image: '/path/to/image.jpg',
    tags: ['Tag1', 'Tag2'],
    link: 'https://example.com',
    external: true,
  },
  // ...
]
```

### Theme Customization
Global styles are in `app/globals.css`. Modify animations, gradients, and utility classes here.

## Performance Optimizations

- **Image Optimization**: Uses Next.js Image component with proper sizing
- **Code Splitting**: Automatic with Next.js App Router
- **CSS Optimization**: Tailwind CSS with PurgeCSS
- **Font Optimization**: Google Fonts with next/font
- **TypeScript**: Full type safety for better DX

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

This project is ready to deploy on Vercel with zero configuration:

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## License

This project is personal and proprietary. All rights reserved.

## Contact

- **Email**: calebachongo@gmail.com
- **WhatsApp**: +254 702 643800
- **GitHub**: [Your GitHub profile]
- **LinkedIn**: [Your LinkedIn profile]

---

**Built with Next.js 16 and modern web technologies** ✨
