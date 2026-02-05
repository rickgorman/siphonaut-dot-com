# Siphonaut.com Project State

## Reference Repo
Cloned to: `/tmp/jeffrey_emanuel_personal_site`
Source: https://github.com/Dicklesworthstone/jeffrey_emanuel_personal_site

**Note:** `/tmp` is cleared on machine reboot. Re-clone if needed:
```bash
git clone https://github.com/Dicklesworthstone/jeffrey_emanuel_personal_site.git /tmp/jeffrey_emanuel_personal_site
```

## Tech Stack
- Next.js 16 + React 19 + TypeScript
- Tailwind CSS 4.1
- Framer Motion (animations)
- Lucide React (icons)
- Bun package manager

## Current Status: ✅ Ready for GitHub

### Completed
- [x] Fresh Next.js 16 project created
- [x] Configured for static export (`output: 'export'`)
- [x] GitHub Actions workflow created (`.github/workflows/deploy.yml`)
- [x] CNAME file for custom domain (`public/CNAME`)
- [x] Dark theme aesthetic matching reference site
- [x] Glassmorphism components and CSS utilities
- [x] Responsive "Coming Soon" landing page with animations
- [x] Build verified working (`bun run build`)

### To Deploy
1. Create GitHub repo named `siphonaut-dot-com` (or any name)
2. Push code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: siphonaut.com landing page"
   git branch -M main
   git remote add origin git@github.com:YOUR_USERNAME/siphonaut-dot-com.git
   git push -u origin main
   ```
3. GitHub repo settings:
   - Settings → Pages → Source: "GitHub Actions"
   - Settings → Pages → Custom domain: `siphonaut.com`
   - Enable "Enforce HTTPS"

### DNS Configuration (at your registrar)
```
Type  Name  Value
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   YOUR_USERNAME.github.io
```

## Project Structure
```
siphonaut-dot-com/
├── .github/workflows/deploy.yml  # GitHub Pages deployment
├── public/CNAME                   # Custom domain
├── src/
│   ├── app/
│   │   ├── globals.css           # Styles: dark theme, glass, animations
│   │   ├── layout.tsx            # Root layout with Inter font
│   │   └── page.tsx              # Landing page component
│   └── lib/
│       └── utils.ts              # cn() utility for class merging
├── next.config.ts                 # Static export config
└── package.json                   # Dependencies
```

## Customization
- **Content**: Edit `src/app/page.tsx` to change text, links, and layout
- **Colors**: Violet/fuchsia gradient theme defined in `globals.css`
- **Social links**: Update GitHub/Twitter URLs in page.tsx
- **Email**: Change `hello@siphonaut.com` to your contact email

## Commands
```bash
bun dev          # Start development server
bun run build    # Build for production
bun run lint     # Run linter
```
