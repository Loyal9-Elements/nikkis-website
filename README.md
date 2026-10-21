# Unattaimable — Fashion & Art Portfolio

A clean, responsive multi-page portfolio for Nikki, a custom clothing designer and oil painter based in the Inland Empire, CA.

## 🌟 Features

- **No dependencies** — pure vanilla HTML, CSS, and JavaScript. Zero CDN calls.
- **Multi-page structure** — landing page, fashion gallery, and art gallery
- **Responsive** — mobile and desktop optimized
- **Portfolio filtering** — filter fashion pieces by Dresses, Costumes, and Bags
- **Fade-in animations** — IntersectionObserver, no library needed
- **SEO & Local Business** — JSON-LD schema, OG tags, geo meta
- **Accessibility** — semantic HTML, ARIA labels, focus styles, reduced motion support
- **Privacy focused** — no cookies, no tracking, no user input

## 🛠️ Technologies

- HTML5
- CSS3 (custom properties, CSS Grid, Flexbox)
- Vanilla JavaScript (IntersectionObserver, filter, back-to-top)

## 🚀 Live Site

[www.unattaimable.fashion](https://www.unattaimable.fashion)

## 📁 Project Structure

```
nikkis-website/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   │   ├── designs/        # Fashion portfolio images
│   │   ├── paintings/      # Oil painting images
│   │   ├── nikki.jpg       # Bio photo (800x800px)
│   │   ├── og-image.jpg    # Social share image (1200x630px)
│   │   ├── unattaimable-logo.png
│   │   └── favicon.png
│   └── js/
│       └── main.js
├── index.html              # Landing page — bio + portal nav
├── fashion.html            # Fashion gallery — dresses, costumes, bags
├── art.html                # Art gallery — oil paintings
├── CNAME
└── README.md
```

## 🎨 Pages

- **Landing** (`index.html`) — dark theme, bio photo, two portal cards linking to each gallery, Instagram link
- **Fashion** (`fashion.html`) — light theme, filterable 3-column grid of custom clothing
- **Art** (`art.html`) — dark theme, 3-column landscape grid of oil paintings

## 📐 Image Specs

| Image | Size | Format |
|---|---|---|
| Fashion designs | original | PNG |
| Oil paintings | 1200 × 900px | JPG @ 80–85% |
| Bio photo | 800 × 800px | JPG |
| OG share image | 1200 × 630px | JPG |

## 🔧 Local Development

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then open `http://localhost:8000`

## 📱 Local Business SEO

- JSON-LD `LocalBusiness` + `ClothingStore` schema
- Price range, appointment hours, Instagram as contact point
- Geo coordinates for San Bernardino, CA
- Absolute URL OG/Twitter meta tags

---

*Showcasing the artistry of custom clothing design and oil painting, one stitch and one brushstroke at a time.*
