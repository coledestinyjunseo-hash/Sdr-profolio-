# SDR — Shukurat Damilola Rasak Portfolio

An ultra-premium portfolio for a luxury digital brand strategist, built with **Next.js 15**, **React 19**, **GSAP**, **Lenis**, and **Three.js**.

![SDR Portfolio Preview](https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&h=400&fit=crop)

## ✨ Features

- 🎬 **Cinematic loader** with progress simulation and orchestrated exit
- 🌊 **Lenis smooth scrolling** synced perfectly with GSAP ScrollTrigger
- 🎯 **Apple-style horizontal scroll storytelling** in the portfolio section
- ✨ **WebGL particle field** (Three.js) with mouse + scroll parallax
- 💫 **Floating ambient light system** that tracks the cursor
- 🧲 **Magnetic buttons everywhere** with quickTo() for performance
- 🎨 **Luxury custom cursor** with dot, ring, and glow trail
- 📊 **Live animated dashboard** with counters and chart reveal
- 🤖 **AI insights chatbot** with simulated typing and streaming messages
- 🔔 **Live notification feed** with rolling brand updates
- 🎭 **3D parallax sections** with subtle tilt on cards
- 🏔️ **Pinned hero section** with depth fade and phone mockup parallax
- 📱 **TikTok & Instagram embeds** with lazy loading
- 🎨 **Premium typography** (Fraunces + Inter + JetBrains Mono)
- ⚡️ **Optimized for Vercel** — Edge runtime ready
- ♿️ **Reduced motion support** throughout
- 🌑 **Dark luxury aesthetic** with gold accent system

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000
```

## 📦 Deployment to Vercel

```bash
# Option 1 — CLI
npm install -g vercel
vercel

# Option 2 — Git
# 1. Push to GitHub
# 2. Import the repo at vercel.com/new
# 3. Deploy (zero config needed)
```

The project is fully optimized for Vercel:
- ✅ Image optimization configured for Unsplash & Pexels
- ✅ Font subsets pre-configured (next/font)
- ✅ `optimizePackageImports` for gsap, three, lucide-react
- ✅ Compression and `poweredByHeader: false`
- ✅ AVIF/WebP image formats

## 🗂 Architecture

```
sdr-portfolio/
├── app/
│   ├── layout.tsx              # Root layout + metadata
│   ├── page.tsx                # Main page orchestrator
│   ├── fonts.ts                # next/font configuration
│   └── globals.css             # Tailwind + design system
│
├── components/
│   ├── layout/
│   │   ├── Loader.tsx          # Cinematic intro
│   │   ├── Navigation.tsx      # Top nav (frosted on scroll)
│   │   ├── SectionIndicator.tsx# Right-side dot indicator
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx            # Pinned with parallax mockups
│   │   ├── About.tsx           # 3D portrait + stat counters
│   │   ├── Portfolio.tsx       # Horizontal scroll storytelling
│   │   ├── Analytics.tsx       # Live dashboard
│   │   ├── Services.tsx        # Tilt cards with tinted glows
│   │   └── Contact.tsx         # Form + contact methods
│   │
│   ├── effects/
│   │   ├── CustomCursor.tsx    # Dot + ring + glow trail
│   │   ├── ParticleField.tsx   # Three.js stars (gold/cyan/purple)
│   │   ├── AmbientLights.tsx   # Floating mouse-aware orbs
│   │   ├── ScrollProgress.tsx  # Top gradient progress bar
│   │   └── SmoothScrollProvider.tsx # Lenis wrapper
│   │
│   ├── ui/
│   │   ├── MagneticButton.tsx
│   │   ├── GlassCard.tsx       # With optional 3D tilt
│   │   ├── AnimatedCounter.tsx
│   │   ├── TextReveal.tsx
│   │   └── Toast.tsx           # Provider + hook
│   │
│   └── widgets/
│       ├── AIAssistant.tsx     # Floating chat panel
│       ├── NotificationFeed.tsx# Live brand updates
│       └── SocialEmbeds.tsx    # TikTok + Instagram
│
├── hooks/
│   ├── useLenis.ts             # Smooth scroll setup
│   ├── useMagnetic.ts          # Magnetic hover effect
│   ├── useScrollVelocity.ts    # Lenis velocity tracking
│   └── useIsomorphicLayoutEffect.ts
│
└── lib/
    ├── gsap.ts                 # Plugin registration
    ├── utils.ts                # cn(), prefersReducedMotion, etc.
    └── constants.ts            # All site content
```

## 🎨 Customization

All site content lives in `lib/constants.ts`:

- `SITE` — name, role, contact info
- `STATS` — animated counter stats
- `PORTFOLIO` — case studies
- `SERVICES` — service packages
- `ANALYTICS` — dashboard data
- `AI_INSIGHTS` — chatbot messages
- `LIVE_NOTIFICATIONS` — feed items

Design tokens live in `tailwind.config.ts` and CSS variables in `globals.css`.

## 🛠 Tech Stack

| Layer            | Tech                                          |
|------------------|-----------------------------------------------|
| Framework        | Next.js 15 (App Router) + React 19            |
| Language         | TypeScript 5.6                                |
| Styling          | Tailwind CSS 3.4 + custom design tokens       |
| Animation        | GSAP 3.12 + ScrollTrigger + @gsap/react       |
| Smooth Scroll    | Lenis 1.1                                     |
| 3D / WebGL       | Three.js 0.170                                |
| Icons            | Lucide React                                  |
| Fonts            | Fraunces (display) · Inter (body) · JetBrains Mono |

## ⚡️ Performance Notes

- All heavy components are `next/dynamic` lazy-loaded
- ParticleField scales count to 200 on mobile, 500 on desktop
- Pixel ratio capped at 1.5 for WebGL
- `prefers-reduced-motion` disables Lenis, particles, and intense animations
- Touch devices skip custom cursor and magnetic interactions
- Images served with AVIF/WebP via Next/Image
- Tailwind purges unused styles automatically

## 📝 License

Private — all rights reserved.

---

**Crafted with intention.** © Shukurat Damilola Rasak
