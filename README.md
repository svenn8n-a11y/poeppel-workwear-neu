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

| Nr. | ID | Titel | H1/H2 |
|-----|----|-------|-------|
| 1 | `#hero` | Digitales Workwear Management für Bau & Handwerk | H1 |
| 2 | `#video` | Digitale Beschaffung von Arbeitskleidung: Schluss mit dem Zettel-Chaos. | H2 |
| 3 | `#problem` | Die Kaskade der Ineffizienz | H2 |
| 4 | `#potentiale` | Vom Chaos zum System. | H2 |
| 5 | `#loesung` | In 3 Schritten zum Ziel | H2 |
| 6 | `#onboarding` | Der Pöppel Onboarding-Prozess | H2 |
| 7 | `#cta-beratung` | CTA – Bereit für den nächsten Schritt? | H2 |
| 8 | `#partner` | Partner statt Plattform | H2 |
| 9 | `#marken` | Qualität, der wir vertrauen | H2 |
| 10 | `#testimonials` | Was unsere Partner sagen | H2 |
| 11 | `#modular` | Für jeden die passende Lösung | H2 |
| 12 | `#cta-potential` | CTA – Ungenutzte Potentiale sichtbar machen | H2 |
| 13 | `#cta-whitepaper` | Digitalisierung von Workwear-Management | H2 |
| 14 | `#usps` | 8 Gründe für Pöppel *(verschoben: nach Whitepaper)* | H2 |
| 15 | `#gewinn` | Ihr Gewinn mit System | H2 |
| 16 | `#team` | Wir sind für Sie da | H2 |
| 17 | `#cta-beratung-2` | CTA – Lassen Sie uns sprechen | H2 |
| 18 | `#faq` | Häufig gestellte Fragen | H2 |
| 19 | `#kontakt` | Bereit für Workwear Management mit System? | H2 |

> SEO-Mapping vollständig: siehe [`Konzepte/SEO_Heading_Mapping.md`](Konzepte/SEO_Heading_Mapping.md)

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

## Recent Updates (03.02.2026)
- **Calculator Redesign**: Helles Karten-Design auf dunkelblauem Hintergrund, animierter "Kostenreduktion"-Balken (80%), neuer "Schließen"-Button.
- **Iceberg Section**: Neues Layout (Text links, Bild `Eisberg Bild.jpg` rechts), verbesserte Typografie und Abstände.
- **Problem Section**: Header optimiert mit Bild (`Kaskade_trichter.jpg`) neben der Überschrift.
