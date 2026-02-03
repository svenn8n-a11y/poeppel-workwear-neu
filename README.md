# Poeppel Workwear Management Landingpage

Eine moderne, animierte Landingpage fuer das Workwear Management System von Poeppel - entwickelt als reine HTML/CSS/JS-Loesung ohne Frameworks.

## Project Overview

Diese Landingpage praesentiert das Workwear Management System von Poeppel mit:
- **Pure HTML/CSS/JS** - Keine Frameworks, maximale Performance
- **GSAP + ScrollTrigger** - Professionelle Scroll-Animationen
- **GitHub Pages Deployment** - Einfaches Hosting direkt aus dem Repository

## Tech Stack

| Technologie | Version / Details |
|-------------|-------------------|
| HTML5 | Semantische Struktur |
| CSS3 | Custom Properties/Variables fuer Theming |
| Vanilla JavaScript | ES6+ ohne Dependencies |
| GSAP | 3.x mit ScrollTrigger Plugin |
| Lucide Icons | SVG Icon Library |

## Live Demo

Die Landingpage ist live unter:

**[https://svenn8n-a11y.github.io/poeppel-workwear-neu/](https://svenn8n-a11y.github.io/poeppel-workwear-neu/)**

## Features / Sections

Die Landingpage besteht aus **19 Sektionen**, die den Besucher durch die Customer Journey fuehren:

| Nr. | Sektion | Beschreibung |
|-----|---------|--------------|
| 1 | **Hero** | "Workwear Management mit System" - Erste visuelle Ansprache |
| 2 | **Videoplayer** | Elevator Pitch Video |
| 3 | **Problem** | 12 Herausforderungen dargestellt als 3 Sticky Stacking Cards |
| 4 | **Potentiale** | Horizontal Scroll Animation (GSAP pinned) |
| 5 | **CTA Whitepaper** | Download Call-to-Action |
| 6 | **Loesungsweg** | 3 Steps mit verbindender Linie |
| 7 | **Partner** | "Partner statt Plattform" - 3 Cards mit Eye-Catcher-Zahlen |
| 8 | **Unsere Marken** | Marquee-Carousel mit Markenlogos |
| 9 | **Testimonials** | Auto-scrolling Carousel (Dark Theme) |
| 10 | **CTA Beratungstermin** | Terminvereinbarung |
| 11 | **Modularer Ansatz** | 3 expandierbare Cards (Professional, Expert, Enterprise) |
| 12 | **USPs** | 8 Benefits Carousel mit Auto-Scroll beim Scrollen |
| 13 | **CTA Potentialanalyse** | Analyse-Anfrage |
| 14 | **Onboarding** | Diagonale Treppen-Animation |
| 15 | **Gewinn** | 3 Benefit Cards |
| 16 | **Team** | "Ihr Expertenteam" - Ansprechpartner mit Kontakt |
| 17 | **CTA Beratungsgespraech** | Finale Beratungs-CTA |
| 18 | **FAQ** | Accordion mit haeufigen Fragen |
| 19 | **Finale CTA** | Abschliessender Call-to-Action mit Kontaktdaten |

## Project Structure

```
Workwear NEW/
├── index.html              # Haupt-HTML-Datei
├── css/
│   └── style.css           # Alle Styles mit CSS Custom Properties
├── js/
│   └── main.js             # JavaScript mit GSAP Animationen
├── images/
│   └── (image folders)     # Bilder und Assets
├── CHAT-PROTOKOLL.md       # Entwicklungs-Protokoll
└── README.md               # Diese Datei
```

## Installation

### Lokale Entwicklung

1. Repository klonen:
   ```bash
   git clone https://github.com/svenn8n-a11y/poeppel-workwear-neu.git
   ```

2. `index.html` im Browser oeffnen - fertig!

### Deployment

Die Seite kann auf jedem statischen Hosting deployed werden:
- **GitHub Pages** (aktuell genutzt)
- Netlify
- Vercel
- Beliebiger Webserver

## Development

### Animationen

Alle Animationen nutzen **GSAP ScrollTrigger**:
- Sticky Stacking Cards fuer Problem-Sektion
- Horizontal Scroll fuer Potentiale
- Pinned Sections fuer immersive Erlebnisse
- Smooth Scroll-basierte Transitions

### Styling

CSS verwendet **Custom Properties** fuer konsistentes Theming:
```css
:root {
  --primary-color: ...;
  --secondary-color: ...;
  --text-color: ...;
}
```

### Responsive Design

- Mobile-First Approach
- Breakpoints fuer Tablet und Desktop
- Touch-optimierte Interaktionen

## Browser Support

- Chrome (empfohlen)
- Firefox
- Safari
- Edge

## Credits

- **Entwicklung**: Built with [Claude Code](https://claude.ai)
- **Animationen**: [GSAP](https://greensock.com/gsap/) by GreenSock
- **Icons**: [Lucide Icons](https://lucide.dev/)

---

*Poeppel Workwear Management - Arbeitskleidung mit System*
