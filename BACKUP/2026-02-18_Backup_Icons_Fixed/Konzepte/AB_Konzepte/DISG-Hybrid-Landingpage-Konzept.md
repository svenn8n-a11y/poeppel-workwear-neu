# DISG-Hybrid-Landingpage-Konzept
## Pöppel Workwear Management – Typspezifische Conversion-Optimierung

**Version:** 1.0
**Datum:** 12.02.2026
**Status:** Konzeptphase
**Basis:** https://svenn8n-a11y.github.io/poeppel-workwear-neu/

---

## 1. Executive Summary

Die aktuelle Landingpage spricht primär den **blauen (gewissenhaften)** und teilweise den **grünen (stetigen)** DISG-Typ an. Rote (dominante) und gelbe (initiative) Typen werden unzureichend abgeholt, was zu vermeidbaren Bounce-Raten führt.

**Lösung:** Eine Hybrid-Strategie mit **einer Basis-Seite** und **4 typspezifischen Varianten** der konversionsrelevanten Elemente. Die Steuerung erfolgt über UTM-Parameter aus den Werbekanälen.

**Erwarteter Effekt:** +20–40% Conversion-Rate durch psychologisch präzisere Ansprache in den ersten 5 Sekunden (Hero) und an den Entscheidungspunkten (CTAs).

---

## 2. Ist-Analyse der aktuellen Seite

### 2.1 Seitenstruktur (17 Sektionen)

| # | Sektion | Funktion |
|---|---------|----------|
| 1 | Hero | Einstieg + Primär-CTA |
| 2 | Video | Elevator Pitch (90 Sek.) |
| 3 | Problem (Sticky Cards) | 12 Herausforderungen in 3 Karten |
| 4 | Potentiale (Horizontal Scroll) | 4 Potentiale + CTA-Card |
| 5 | Lösungsweg | 3 Schritte: Analyse → Standardisierung → Digitalisierung |
| 6 | Onboarding-Treppe | 4-Schritte-Prozess (Kickoff → Go-Live) |
| 7 | CTA: Beratungstermin | Zwischen-CTA |
| 8 | Partner (Warum Pöppel?) | 3 Karten: Erfahrung, Netzwerk, Service |
| 9 | Marken-Marquee | Herstellerlogos (18 Marken) |
| 10 | Testimonials | 3 Zitate (Slider) |
| 11 | Modularer Ansatz | Basis + 6 Zusatzmodule |
| 12 | USPs (Honeycomb) | 8 Vorteile |
| 13 | CTA: Whitepaper | PDF-Download |
| 14 | CTA: Potentialanalyse | Zwischen-CTA |
| 15 | Ihr Gewinn | 3 Ergebnis-Karten |
| 16 | Team | 6 Ansprechpartner |
| 17 | FAQ + Finale CTA | 5 Fragen + Kontakt |

### 2.2 DISG-Score der aktuellen Seite

| Typ | Score | Stärken | Schwächen |
|-----|-------|---------|-----------|
| **Blau** (Gewissenhaft) | 7/10 | Prozessfokus, FAQ, Whitepaper, Module | Fehlende harte KPIs, keine Case Studies mit Zahlen |
| **Grün** (Stetig) | 6/10 | Team-Sektion, persönlicher Ansprechpartner | Testimonials wirken generisch, kein Beziehungsaufbau im Hero |
| **Rot** (Dominant) | 4/10 | Lösungsweg ist strukturiert | Seite zu lang, Hero-CTA zu weich, kein sofortiger ROI sichtbar |
| **Gelb** (Initiativ) | 3/10 | Video vorhanden | Kein Storytelling, keine emotionalen Bilder, Seite fühlt sich kühl an |

---

## 3. Hybrid-Strategie: Architektur

### 3.1 Grundprinzip

```
Ad (typspezifisch) → poeppel-workwear.de/?typ=rot → Hero-Variante ROT + angepasste CTAs
Ad (typspezifisch) → poeppel-workwear.de/?typ=blau → Hero-Variante BLAU + angepasste CTAs
                      poeppel-workwear.de/ (ohne Parameter) → Standard-Version (Allrounder)
```

### 3.2 Was sich ändert (5 Touchpoints)

| # | Element | Beschreibung | Aufwand |
|---|---------|-------------|---------|
| 1 | **Hero-Sektion** | Headline, Subline, Badge, CTA-Buttons | Hoch |
| 2 | **Problem-Header** | Einleitungstext der Sticky-Cards-Sektion | Niedrig |
| 3 | **Alle CTA-Sektionen** (4×) | Button-Texte, Überschriften, Micro-Copy | Mittel |
| 4 | **Testimonial-Reihenfolge** | Priorisierung des typ-relevantesten Zitats | Niedrig |
| 5 | **"Ihr Gewinn"-Sektion** | 3 Karten: Texte + Überschrift | Mittel |

### 3.3 Was identisch bleibt

- Video-Sektion
- Sticky Cards (12 Probleme)
- Lösungsweg (3 Schritte)
- Onboarding-Treppe
- Modularer Ansatz
- Marken-Marquee
- Team-Sektion
- FAQ
- Footer

**Geschätzter Pflegeaufwand vs. 4 separate Seiten: ~30%**

---

## 4. Content-Matrix: Die 4 Varianten

### 4.1 Hero-Sektion

#### ROT (Dominant) – `?typ=rot`

| Element | Inhalt |
|---------|--------|
| **Badge** | ROI in 90 Tagen |
| **Headline** | Workwear-Verwaltung automatisiert.<br>**In 30 Tagen live.** |
| **Subline** | Schluss mit Zeitverschwendung. Ein System, das funktioniert – ohne Ihr Zutun. |
| **CTA primär** | Demo in 15 Minuten buchen |
| **CTA sekundär** | ROI-Rechner starten |
| **Tonalität** | Direkt, ergebnisorientiert, schnell, keine Floskeln |

#### GELB (Initiativ) – `?typ=gelb`

| Element | Inhalt |
|---------|--------|
| **Badge** | Von Unternehmen geliebt |
| **Headline** | Arbeitskleidung, auf die<br>**Ihr Team stolz ist.** |
| **Subline** | Erleben Sie, wie innovative Unternehmen Workwear zum Team-Erlebnis machen. |
| **CTA primär** | Erfolgsgeschichten entdecken |
| **CTA sekundär** | Film ansehen |
| **Tonalität** | Begeisternd, persönlich, Story-driven, emotional |

#### GRÜN (Stetig) – `?typ=gruen`

| Element | Inhalt |
|---------|--------|
| **Badge** | Vertraut von 300+ Unternehmen |
| **Headline** | Arbeitskleidung ohne Stress –<br>**für Sie und Ihr Team.** |
| **Subline** | Wir begleiten Sie persönlich bei jedem Schritt. Kein Risiko, kein Druck – nur Entlastung. |
| **CTA primär** | Unverbindlich kennenlernen |
| **CTA sekundär** | So funktioniert der Wechsel |
| **Tonalität** | Warmherzig, sicherheitgebend, teamorientiert, kein Druck |

#### BLAU (Gewissenhaft) – `?typ=blau`

| Element | Inhalt |
|---------|--------|
| **Badge** | 87% weniger manuelle Prozesse |
| **Headline** | Workwear-Beschaffung<br>**systematisiert und messbar.** |
| **Subline** | Standardisierte Prozesse. Vollständige Datentransparenz. Nachweisbare Kostensenkung. |
| **CTA primär** | Whitepaper mit ROI-Daten laden |
| **CTA sekundär** | Prozessanalyse anfordern |
| **Tonalität** | Sachlich, datengetrieben, präzise, fachsprachlich |

---

### 4.2 Problem-Sektion: Header-Texte

#### ROT
> **Das kostet Sie Zeit und Geld.**
> Jede Stunde, die Ihr Team mit Excel-Listen, Rückfragen und Fehlbestellungen verbringt, fehlt für das Kerngeschäft. Hier die drei größten Kostentreiber.

#### GELB
> **Warum beschweren sich Ihre Mitarbeiter?**
> Schlecht sitzende Kleidung, komplizierte Bestellprozesse und lange Wartezeiten frustrieren Ihr Team. Das geht besser.

#### GRÜN
> **Die Herausforderungen, die Sie kennen.**
> Viele unserer Kunden standen vor den gleichen Problemen, bevor sie zu uns kamen. Hier die häufigsten – kommt Ihnen etwas davon bekannt vor?

#### BLAU
> **Warum der Artikelpreis die falsche Kennzahl ist.**
> Studien zeigen ein gefährliches Missverhältnis in der C-Teile-Beschaffung. Während Unternehmen um Cent-Beträge feilschen, explodieren im Hintergrund die Prozesskosten.

*(Blau = aktuelle Version, kann bleiben)*

---

### 4.3 CTA-Texte (alle 4 Stellen auf der Seite)

| Position | ROT | GELB | GRÜN | BLAU |
|----------|-----|------|------|------|
| **CTA 1** (nach Potentiale) | Jetzt Demo buchen – 15 Min. | Lassen Sie sich inspirieren | Wir beraten Sie gerne – ganz in Ruhe | Potentialanalyse mit Daten starten |
| **CTA 2** (Beratungstermin) | Direkt-Termin: 15 Min. Analyse | Kostenlos: Ihre individuelle Story | Persönliches Kennenlernen vereinbaren | Kostenfreie Prozessanalyse anfordern |
| **CTA 3** (Whitepaper) | Quick-Check: Ihr Einsparpotential | Best Practices: Was andere begeistert | Schritt-für-Schritt-Guide downloaden | Whitepaper: Daten, KPIs, Fallstudien |
| **CTA 4** (Finale) | Starten. Jetzt. | Werden Sie Teil der Erfolgsgeschichte | Lassen Sie uns gemeinsam den ersten Schritt gehen | Vereinbaren Sie eine faktenbasierte Erstanalyse |

---

### 4.4 "Ihr Gewinn"-Sektion

#### ROT

| Karte | Headline | Text |
|-------|----------|------|
| 1 | Zeitgewinn ab Tag 1 | Automatisierte Bestellprozesse eliminieren manuellen Aufwand. Ihre Zeit gehört wieder dem Kerngeschäft. |
| 2 | Volle Kontrolle | Ein Dashboard, alle Daten. Sie entscheiden – das System liefert. |
| 3 | Sofort skalierbar | Neuer Standort? 50 neue Mitarbeiter? Das System wächst mit, ohne Mehraufwand. |

#### GELB

| Karte | Headline | Text |
|-------|----------|------|
| 1 | Ein Team, das strahlt | Arbeitskleidung, die Ihre Mitarbeiter gerne tragen – professionell, modern und mit CI-Veredelung. |
| 2 | Innovation, die man sieht | Zeigen Sie Bewerbern und Kunden, dass Sie ein moderner Arbeitgeber sind. |
| 3 | Null Stress | Kein Papierkram, keine Rückfragen. Alles läuft – und Sie haben Zeit für die spannenden Projekte. |

#### GRÜN

| Karte | Headline | Text |
|-------|----------|------|
| 1 | Entlastung für Ihr Team | Weniger Verwaltung bedeutet weniger Stress – für Sie und für jeden einzelnen Mitarbeiter. |
| 2 | Sichere Umstellung | Wir begleiten Sie persönlich. Kein Risiko, kein Big-Bang – sondern ein sanfter, begleiteter Übergang. |
| 3 | Bewährte Lösung | Über 300 Unternehmen vertrauen bereits auf unser System. Sie sind in guter Gesellschaft. |

#### BLAU

| Karte | Headline | Text |
|-------|----------|------|
| 1 | Messbare Prozessoptimierung | Reduktion manueller Eingaben um 87%. Fehlerquote nachweislich unter 1%. Dokumentiert und auditierbar. |
| 2 | Bilanzwirksame Kostensenkung | Durchschnittlich 14,3 Stunden Zeitersparnis pro Monat. ROI typischerweise innerhalb von 4 Monaten erreicht. |
| 3 | Vollständige Datentransparenz | Echtzeit-Reporting über Kostenstellen, Budgets und Verbräuche. Lückenlose Nachvollziehbarkeit aller Transaktionen. |

---

## 5. Testimonial-Priorisierung

Die aktuelle Seite hat 3 Testimonials. Empfehlung: **Für jeden Typ das passendste Zitat als erstes anzeigen.**

| Typ | Priorisiertes Testimonial | Begründung |
|-----|--------------------------|------------|
| **Rot** | Thomas Müller, Geschäftsführer → "revolutioniert" | GF-Ebene, Ergebnis-Sprache |
| **Gelb** | Julia Schmidt, HR → "Gamechanger, begeistert" | Emotionale Sprache, Team-Fokus |
| **Grün** | Michael Weber, Einkauf → "Mitarbeiter begeistert" | Team-Zufriedenheit, Entlastung |
| **Blau** | Thomas Müller → "transparent, nachvollziehbar" | Prozess-Sprache, Kontrolle |

**Empfehlung:** Mittel- bis langfristig **echte, typ-spezifische Testimonials** einsammeln:
- Rot: GF/Vorstand mit konkretem ROI
- Gelb: HR-Leiter mit Team-Story (idealerweise Video)
- Grün: Langjähriger Kunde über den Wechsel-Prozess
- Blau: Controller/CFO mit Vorher/Nachher-Zahlen

---

## 6. Technische Umsetzung

### 6.1 UTM-Routing (JavaScript)

```
URL-Aufbau:
poeppel-workwear.de/?typ=rot
poeppel-workwear.de/?typ=gelb
poeppel-workwear.de/?typ=gruen
poeppel-workwear.de/?typ=blau
poeppel-workwear.de/ → Standard/Allrounder
```

**Logik:**
1. JS liest den `typ`-Parameter aus der URL
2. Blendet die entsprechende Hero-Variante ein (`display: block`)
3. Ersetzt CTA-Texte über `data-typ`-Attribute
4. Setzt die Testimonial-Reihenfolge
5. Tauscht die "Ihr Gewinn"-Karten
6. Speichert den Typ in `sessionStorage` für Konsistenz beim Scrollen

**Fallback:** Ohne Parameter → Standard-Version (aktuelle Seite, leicht optimiert als Allrounder)

### 6.2 HTML-Struktur (Prinzip)

```html
<!-- Hero: 4 Varianten + 1 Default -->
<div class="hero-variant" data-typ="rot" style="display:none">...</div>
<div class="hero-variant" data-typ="gelb" style="display:none">...</div>
<div class="hero-variant" data-typ="gruen" style="display:none">...</div>
<div class="hero-variant" data-typ="blau" style="display:none">...</div>
<div class="hero-variant hero-default">...</div>

<!-- CTA-Texte: data-Attribute -->
<a class="btn" data-cta-rot="Demo in 15 Min." data-cta-default="Beratung starten">
    Beratung starten
</a>
```

### 6.3 Tracking

Jede Variante wird als **separates Event** in Google Analytics / Tag Manager getrackt:

- `page_variant: rot | gelb | gruen | blau | default`
- `cta_click: {position, variant, text}`
- `scroll_depth: {variant, percentage}`

So kann nach 4–6 Wochen ausgewertet werden, welche Variante je Kanal am besten konvertiert.

---

## 7. Kanal-Zuordnung: Welche Ad → Welcher Typ?

| Kanal | Zielgruppe | Empfohlener Typ | Beispiel-Ad-Hook |
|-------|-----------|-----------------|------------------|
| **LinkedIn Ads** (C-Level) | GF, Geschäftsleitung | ROT | "87% weniger Verwaltungsaufwand. In 30 Tagen." |
| **LinkedIn Ads** (HR) | Personalleiter, HR | GRÜN | "Wie zufrieden ist Ihr Team mit der Arbeitskleidung?" |
| **LinkedIn Ads** (Einkauf) | Einkaufsleiter, Controller | BLAU | "Ihre Excel-Liste hat mehr als 20 Spalten? Es geht besser." |
| **Facebook/Instagram** | Breit, emotional | GELB | "So sieht modernes Workwear-Management aus." |
| **Google Ads** (Intent) | Suchende mit Problem | BLAU/ROT | Keywords: "Workwear digitalisieren", "Arbeitskleidung Verwaltung" |
| **E-Mail (Kaltakquise)** | Direkte Ansprache | Je nach Empfänger-Rolle | Personalisiert nach Jobtitel |

---

## 8. Umsetzungs-Roadmap

| Phase | Maßnahme | Zeitrahmen | Priorität |
|-------|----------|-----------|-----------|
| **Phase 1** | Content-Erstellung: 4 Hero-Varianten + CTA-Texte + Gewinn-Texte | 1 Woche | Hoch |
| **Phase 2** | HTML/JS-Implementierung: UTM-Routing + Varianten-Logik | 2–3 Tage | Hoch |
| **Phase 3** | Tracking-Setup: GA4-Events für Varianten | 1 Tag | Hoch |
| **Phase 4** | Ad-Erstellung: 4 typspezifische Ad-Sets (LinkedIn, Meta) | 1 Woche | Mittel |
| **Phase 5** | Launch + A/B-Test: 4–6 Wochen Datensammlung | 6 Wochen | — |
| **Phase 6** | Auswertung + Iteration: Welche Variante konvertiert wo am besten? | Nach Phase 5 | Hoch |

---

## 9. Erfolgsmessung (KPIs)

| KPI | Messmethode | Ziel |
|-----|------------|------|
| **Bounce Rate je Variante** | GA4 | <40% (aktuell geschätzt: ~55%) |
| **Scroll Depth** | GA4 ScrollTrigger | >60% erreichen CTA-Zone |
| **CTA-Klickrate** | Event-Tracking | >5% der Besucher klicken einen CTA |
| **Whitepaper-Downloads** | Download-Event | +30% vs. aktuell |
| **Kontaktanfragen** | Formular/Mail-Event | +25% vs. aktuell |
| **Verweildauer** | GA4 | >2:30 Min. (Rot kann kürzer sein bei Conversion) |

---

## 10. Zusätzliche Optimierungen (unabhängig von DISG)

Während der Analyse sind mir folgende Punkte aufgefallen, die **unabhängig von der Typ-Strategie** verbessert werden sollten:

1. **Testimonials**: Aktuell generisch wirkend (Michael Weber, Julia Schmidt, Thomas Müller). Echte Kundenzitate mit Firmennamen und idealerweise Fotos würden die Glaubwürdigkeit massiv steigern
2. **Team-Bilder**: Alle 6 Teammitglieder haben `placeholder-team.svg` – echte Fotos sind essenziell für Vertrauen (besonders Grün)
3. **Video**: Der Elevator Pitch hat kein funktionierendes Poster-Bild und keine Videodatei → höchste Priorität, da Video der stärkste Conversion-Hebel ist (besonders Gelb)
4. **HTML-Fehler**: Zeile 947 hat einen ungeschlossenen `<span>`: `<span class="highlight-italic"></span>8 Gründe</span>` → Darstellungsfehler
5. **Whitepaper-Download**: Aktuell direkter Download-Link ohne Lead-Capture (E-Mail-Feld). Für Lead-Gen wäre ein Formular-Gate sinnvoll (besonders für Blau: "Whitepaper mit ROI-Daten" als Lead-Magnet)
6. **Mobile**: Die Seite nutzt viele Scroll-Animationen (GSAP). Mobile Performance und UX sollten separat getestet werden

---

## Quellen & Referenzen

- **DISG-Modell**: William Moulton Marston – *Emotions of Normal People* (1928)
- **Mikro-Mimik**: Paul Ekman – *Facial Action Coding System* (FACS)
- **NLP-Metaprogramme**: Richard Bandler & John Grinder – *The Structure of Magic* (1975)
- **Verhaltensökonomie**: Daniel Kahneman – *Thinking, Fast and Slow* (2011)
- **Persuasion**: Robert Cialdini – *Influence: The Psychology of Persuasion* (2006)

---

*Erstellt als Teil des Powersales-Tool-Projekts. DISG-Profiling-Dashboard verfügbar als interaktives HTML-Artifact.*
