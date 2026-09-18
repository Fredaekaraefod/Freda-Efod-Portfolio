# Freda — Video Editing Portfolio (Next.js & React)

A minimalist, high-impact video editing portfolio site built for **Freda** with **Next.js 14**, **React**, **TypeScript**, and **Tailwind CSS**.

Designed following the visual direction of [koyejo.design](https://www.koyejo.design/), [swamii.me](https://swamii.me/), [ana.sh](https://ana.sh/), and [alextudun.com](https://www.alextudun.com/):
- **Work is the hero**: Clean 9:16 and 16:9 responsive embed containers supporting native Instagram reels (`embed.js`).
- **Plain, one-color backgrounds**: No gradients or distracting textures.
- **Curated Dual Palettes**: Purpose-built Light (editorial warm paper) and Dark (matte obsidian) modes, persisted in `localStorage`.
- **Mobile Sticky CTA**: Scroll-triggered "Get in touch" bar on mobile devices.
- **Dedicated Routes**: Full-featured `/thanks` submission confirmation page and on-brand custom `404` (`/not-found`).
- **Full SEO & Open Graph**: Auto-generated `robots.ts`, `sitemap.ts`, and social share cards.

---

## Quick Start

### 1. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
npm run start
```

---

## How Freda Can Customize the Content

### 1. Swap Your Portrait Photo
Place your real portrait image in `public/assets/` (e.g. `public/assets/freda.jpg`) and update the `src` attribute in [components/Hero.tsx](components/Hero.tsx):
```tsx
<Image
  src="/assets/freda.jpg"
  alt="Portrait photo of Freda, video editor"
  width={176}
  height={176}
  className="w-full h-full object-cover"
  priority
/>
```

### 2. Add Your Real Instagram Reels & Context
Open [components/WorkGrid.tsx](components/WorkGrid.tsx) and update the `projects` array with your reel permalinks and one-line context descriptions:
```tsx
{
  id: "project-1",
  title: "Client / Campaign Name",
  context: "One short line on what it was for or the editing technique.",
  permalink: "https://www.instagram.com/reel/YOUR_REEL_ID/",
  tag: "Short-Form",
  ratio: "9/16",
}
```

### 3. Update Contact Email & Socials
In [components/Contact.tsx](components/Contact.tsx):
- Update `const email = "your.real.email@domain.com";`
- Update the Instagram and LinkedIn profile links.

### 4. Deploying to Vercel / Netlify
1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) &rarr; **Add New Project** &rarr; select this repository.
3. Click **Deploy**. Next.js will automatically build and deploy with full edge optimization and SSL.
