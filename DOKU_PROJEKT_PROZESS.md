# Prozess-Dokumentation

Stand: 18.02.2026

## 1. Ziel des Prozesses
Sicherstellen, dass Design-, Content- und Code-Änderungen an der Workwear-Landingpage nachvollziehbar, rücksicherbar und releasefähig bleiben.

## 2. Arbeitsmodus
- Entwicklung direkt im Projektpfad `Workwear NEW`
- Änderungen zuerst lokal prüfen (Layout, Interaktionen, Responsiveness)
- Danach strukturierte Dokumentation aktualisieren
- Erst dann Commit/Push auf `main` (oder Feature-Branch bei größeren Umbauten)

## 3. Änderungsroutine (Soll-Ablauf)
1. **Kontext klären**: Bereich/Section und Ziel der Änderung festlegen
2. **Umsetzung**: HTML/CSS/JS nur in betroffenen Modulen anpassen
3. **Schnelltest**: Browsercheck Desktop + Mobile
4. **Doku-Update**: Ist-Stand / Changelog ergänzen
5. **Backup**: Snapshot in Backup-Ordner bei wesentlichen Änderungen
6. **Git**: `status` prüfen, committen, pushen

## 4. Backup-Regel
Für wesentliche Änderungen (z.B. neue Section, Rework von Animationen, CTA/Modal-Flow):
- Backup-Ordner unter `BACKUP/`
- Namensschema: `YYYY-MM-DD_Backup_<Kurzbeschreibung>`
- Inhalt: mindestens `index.html`, `css/`, `js/` und betroffene Assets

## 5. Release-Regel
- Live-Auslieferung über GitHub (`poeppel-workwear-neu`)
- Vor Push: keine offensichtlichen Konsolenfehler, kein defekter Flow bei Navigation/Modal
- Nach Push: Live-Seite kurz prüfen (Start, Scroll, CTA, Kontaktmodal)

## 6. Offene Strukturverbesserungen
- Changelog einführen (`CHANGELOG.md`)
- Legacy-Code in `js/main.js` markieren oder auslagern
- Explorative Assets von produktiven Assets trennen
- Optional: einfache QA-Checkliste als `docs/QA_CHECKLIST.md`

