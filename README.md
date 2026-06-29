# 🎮 Pixel Researcher — Personal Academic Website

A minimalist personal website for academic researchers, built with a retro Minecraft-inspired pixel aesthetic. No frameworks, no build steps — pure HTML, CSS, and vanilla JS.

## ✨ Features

- **Press Start 2P** pixel font (Google Fonts) for headings & UI
- **Share Tech Mono** for body text — clean, terminal-like
- Animated scanline overlay for authentic CRT feel
- Typewriter role animation in the hero
- Procedural 8×8 pixel-art avatar
- Glitch effect on hero name hover
- Animated pixel progress bars (scroll-triggered)
- Responsive down to mobile
- Zero dependencies, zero build tools
- Respects `prefers-reduced-motion`

## 📁 Structure

```
pixel-researcher-site/
├── index.html          # Main page
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Interactions & animations
├── assets/
│   ├── favicon.svg     # Pixel "V" favicon
│   └── cv.pdf          # (add your own CV here)
└── _config.yml         # GitHub Pages config
```

## 🚀 Deploy to GitHub Pages

### Option A — New Repo (recommended)

1. Create a new repository on GitHub, e.g. `my-site`
2. Upload all files (drag & drop in the GitHub UI, or use git):

```bash
git init
git add .
git commit -m "initial commit: pixel researcher site"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
git push -u origin main
```

3. In your repo → **Settings → Pages**
4. Under **Source**, select **Deploy from a branch**
5. Choose `main` branch, `/ (root)` folder → **Save**
6. Your site will be live at:
   `https://<YOUR_USERNAME>.github.io/<REPO_NAME>/`

### Option B — Personal Site (`username.github.io`)

Name your repository exactly `<YOUR_USERNAME>.github.io`.  
GitHub will auto-publish from the `main` branch root.  
Your site will be live at `https://<YOUR_USERNAME>.github.io/`.

## ✏️ Customization

All content is in `index.html`. Search for and replace:

| Placeholder | Replace with |
|---|---|
| `Dr. Elena Voss` | Your name |
| `e.voss@newgeneva.edu` | Your email |
| `Computational Biology` | Your field |
| `University of New Geneva` | Your institution |
| Publications in `#publications` | Your actual papers |
| Research cards in `#research` | Your projects |
| Social links in `#contact` | Your profiles |

For the pixel avatar, edit the `art` array in `js/main.js`:
- `0` = transparent, `1-7` = colors defined in `palette`

## 🎨 Palette

| Token | Hex | Use |
|---|---|---|
| `--green` | `#39FF14` | Primary accent (neon lime) |
| `--amber` | `#FFB627` | Secondary accent / hover |
| `--blue`  | `#4FC3F7` | Tags, venues, links |
| `--text`  | `#cde0b4` | Body text |
| `--muted` | `#617a5e` | Subdued text |

## 📄 License

MIT — use freely, attribution appreciated but not required.
