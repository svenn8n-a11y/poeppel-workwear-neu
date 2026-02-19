# Logoband & Marquee – Abmessungen

## 1. Partner-Logoband (`.logo-band`) – Sektion `#partner`

Orangefarbenes Scrollband mit Partnerlogos, sitzt unterhalb der Partner-Cards.

| Eigenschaft | Desktop | Tablet (≤768px) | Mobil (≤768px) |
|---|---|---|---|
| Hintergrund | Orange (`--color-primary`) | – | – |
| Padding oben/unten | `32px` | – | – |
| Border-radius | `16px` | – | `0` (randlos) |
| Margin-top | `96px` | – | `48px` |
| Overflow | `hidden` | – | – |
| Randüberstand mobil | – | – | `calc(100% + 48px)` (bricht aus Container aus) |
| Fade-Masken (::before / ::after) | je `100px` breit | – | – |

### Logos im Band (`.logo-track img`)

| Eigenschaft | Desktop | Mobil |
|---|---|---|
| Höhe | `40px` | `32px` |
| Breite | `auto` | `auto` |
| Abstand zwischen Logos | `60px` (gap) | `60px` |
| Farbe | Weiß (brightness 0 + invert) | – |
| Opacity | `0.9` (hover: `1`) | – |
| Animation | `logo-scroll 40s linear infinite` | – |
| Hover | `animation-play-state: paused` | – |

---

## 2. Hersteller-Marquee (`.partners-marquee-section`) – Sektion `#marken`

Hellgrauer Hintergrund, zeigt Herstellerlogos in Originalfarbe.

| Eigenschaft | Wert |
|---|---|
| Hintergrund | `--color-light` (hellgrau) |
| Section-Padding | `80px 0` |
| Container-Breite | `100%` (overflow hidden) |

### Logos im Marquee (`.marquee-logo`)

| Eigenschaft | Wert |
|---|---|
| Höhe | `60px` |
| Breite | `auto` |
| Abstand zwischen Logos | `60px` (gap) |
| Filter | `grayscale(80%) opacity(0.7)` |
| Hover | `grayscale(0%) opacity(1)` + `scale(1.1)` |
| Animation | `marquee-scroll 60s linear infinite` |
| Hover | `animation-play-state: paused` |

---

*Stand: Februar 2026*
