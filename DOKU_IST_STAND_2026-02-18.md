# Ist-Stand Dokumentation

Stand: 18.02.2026
Pfad: `/Users/sven/Documents/03 KI/Workwear Landingpage/Workwear NEW`
Repository: `https://github.com/svenn8n-a11y/poeppel-workwear-neu`

## 1. Projektzweck
Landingpage für Pöppel Workwear Management als modulare, animierte One-Page-Experience mit Conversion-Elementen (CTAs, Kontaktmodal, Whitepaper-Download).

## 2. Technischer Stack
- HTML5 (`index.html`)
- CSS (`css/style.css`, `css/fonts.css`, `css/google-fonts.css`)
- Vanilla JavaScript (`js/main.js`)
- Lokale JS-Libraries in `js/libs/`:
  - `gsap.min.js`
  - `ScrollTrigger.min.js`
  - `ScrollToPlugin.min.js`
  - `lucide.min.js`

## 3. Live-/Repo-Status
- Git-Branch: `main`
- Remote: `origin -> https://github.com/svenn8n-a11y/poeppel-workwear-neu.git`
- Es existieren lokale, nicht commitete Änderungen (u.a. `index.html`, `css/style.css`, Fonts und 2 Screenshots in `images/`).

## 4. Seitenstruktur (index.html)
Aktiv vorhandene Hauptsektionen:
1. Hero (`#hero`)
2. Video (`#video`)
3. Problem (`#problem`)
4. Potenziale (`#potentiale`)
5. Lösungsweg (`#loesung`)
6. Onboarding (`#onboarding`)
7. CTA Beratung (`#cta-beratung`)
8. Partner (`#partner`)
9. Testimonials (`#testimonials`)
10. Modular (`#modular`)
11. USPs (`#usps`)
12. CTA Potential (`#cta-potential`)
13. CTA Whitepaper (`#cta-whitepaper`)
14. Gewinn (`#gewinn`)
15. Team (`#team`)
16. CTA Beratung 2 (`#cta-beratung-2`)
17. FAQ (`#faq`)
18. Kontakt/Final CTA (`#kontakt`)

## 5. JavaScript-Module (js/main.js)
Zentrale Initialisierer/Funktionen:
- Navigation, Smooth Scroll, Scroll-to-Top
- Hero Animationen
- Sticky Problem Cards
- Horizontal Scroll (Potenziale)
- Step-/Section Animationen
- Partner/Testimonial Animationen
- Modular Cards + Kontaktmodal (mehrstufig)
- USP Honeycomb Scroll-Interaktion
- Onboarding Treppen-Animation mit SVG-Pfad
- FAQ Accordion

## 6. Hinweise zu Legacy/Restlogik
In `js/main.js` ist zusätzlich Logik für Bereiche enthalten, die in der aktuellen `index.html` nicht als aktive Sektionen vorhanden sind (z.B. `calculator`, `eisberg`, `time-efficiency-section`).
Diese Logik ist derzeit technisch vorhanden, aber teilweise ungenutzt.

## 7. Inhalts- und Asset-Struktur
- `images/` nach Inhaltskapiteln strukturiert (`00_allgemein` bis `19_Mitarbeiter`)
- `downloads/` + `Whitepaper download/` für PDF-Assets
- `Code_schnipsel/` und `ad-ons/` enthalten wiederverwendbare Standalone-Module (z.B. Potential-Schieberegler, Eisberg, 75-Minuten-Jacke)
- `Konzepte/` enthält konzeptionelle Dokumente und Prototypen
- `BACKUP/2026-02-18_Backup_Icons_Fixed/` enthält einen Snapshot des Projektstands

## 8. Risiko-/Qualitätshinweise
- Aktuell kein Build-Prozess; reine statische Auslieferung
- Lokale Änderungen sind noch nicht dokumentiert/commitet
- Legacy-Codepfade erhöhen mittelfristig Wartungsaufwand
- Asset-Ordner enthält produktive und explorative Artefakte parallel

## 9. Empfehlung für nächste Dokumentationsschritte
1. `CHANGELOG.md` für nachvollziehbare Änderungsstände einführen
2. `docs/ARCHITEKTUR.md` mit Seitenaufbau + Modulverantwortung ergänzen
3. Backup-Konvention standardisieren (Namensschema + Auslöser je „wesentliche Änderung“)
4. Ungenutzte JS-Pfade markieren (`@legacy`) oder in separate Datei auslagern

