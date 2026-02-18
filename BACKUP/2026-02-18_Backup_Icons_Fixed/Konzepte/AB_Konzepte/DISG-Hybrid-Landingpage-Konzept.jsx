import { useState } from "react";

const data = {
  scores: [
    { typ: "BLAU", label: "Gewissenhaft", score: "7/10", color: "#1E88E5", pro: "Prozessfokus, FAQ, Whitepaper, Module", con: "Fehlende harte KPIs, keine Case Studies" },
    { typ: "GRÜN", label: "Stetig", score: "6/10", color: "#43A047", pro: "Team-Sektion, persönlicher Ansprechpartner", con: "Testimonials generisch, kein Beziehungsaufbau" },
    { typ: "ROT", label: "Dominant", score: "4/10", color: "#E53935", pro: "Lösungsweg strukturiert", con: "Seite zu lang, Hero-CTA zu weich, kein ROI" },
    { typ: "GELB", label: "Initiativ", score: "3/10", color: "#FBC02D", pro: "Video vorhanden", con: "Kein Storytelling, keine emotionalen Bilder" },
  ],
  heros: [
    { typ: "ROT", color: "#E53935", param: "?typ=rot", badge: "ROI in 90 Tagen", headline: "Workwear-Verwaltung automatisiert. In 30 Tagen live.", subline: "Schluss mit Zeitverschwendung. Ein System, das funktioniert – ohne Ihr Zutun.", cta1: "Demo in 15 Minuten buchen", cta2: "ROI-Rechner starten", ton: "Direkt, ergebnisorientiert, schnell" },
    { typ: "GELB", color: "#FBC02D", param: "?typ=gelb", badge: "Von Unternehmen geliebt", headline: "Arbeitskleidung, auf die Ihr Team stolz ist.", subline: "Erleben Sie, wie innovative Unternehmen Workwear zum Team-Erlebnis machen.", cta1: "Erfolgsgeschichten entdecken", cta2: "Film ansehen", ton: "Begeisternd, persönlich, Story-driven" },
    { typ: "GRÜN", color: "#43A047", param: "?typ=gruen", badge: "Vertraut von 300+ Unternehmen", headline: "Arbeitskleidung ohne Stress – für Sie und Ihr Team.", subline: "Wir begleiten Sie persönlich bei jedem Schritt. Kein Risiko, kein Druck – nur Entlastung.", cta1: "Unverbindlich kennenlernen", cta2: "So funktioniert der Wechsel", ton: "Warmherzig, sicherheitgebend, teamorientiert" },
    { typ: "BLAU", color: "#1E88E5", param: "?typ=blau", badge: "87% weniger manuelle Prozesse", headline: "Workwear-Beschaffung systematisiert und messbar.", subline: "Standardisierte Prozesse. Vollständige Datentransparenz. Nachweisbare Kostensenkung.", cta1: "Whitepaper mit ROI-Daten laden", cta2: "Prozessanalyse anfordern", ton: "Sachlich, datengetrieben, präzise" },
  ],
  problems: [
    { typ: "ROT", color: "#E53935", title: "Das kostet Sie Zeit und Geld.", text: "Jede Stunde, die Ihr Team mit Excel-Listen, Rückfragen und Fehlbestellungen verbringt, fehlt für das Kerngeschäft." },
    { typ: "GELB", color: "#FBC02D", title: "Warum beschweren sich Ihre Mitarbeiter?", text: "Schlecht sitzende Kleidung, komplizierte Bestellprozesse und lange Wartezeiten frustrieren Ihr Team." },
    { typ: "GRÜN", color: "#43A047", title: "Die Herausforderungen, die Sie kennen.", text: "Viele unserer Kunden standen vor den gleichen Problemen. Kommt Ihnen etwas davon bekannt vor?" },
    { typ: "BLAU", color: "#1E88E5", title: "Warum der Artikelpreis die falsche Kennzahl ist.", text: "Während Unternehmen um Cent-Beträge feilschen, explodieren im Hintergrund die Prozesskosten." },
  ],
  ctas: [
    { pos: "CTA 1 (nach Potentiale)", rot: "Jetzt Demo buchen – 15 Min.", gelb: "Lassen Sie sich inspirieren", gruen: "Wir beraten Sie gerne – ganz in Ruhe", blau: "Potentialanalyse mit Daten starten" },
    { pos: "CTA 2 (Beratungstermin)", rot: "Direkt-Termin: 15 Min. Analyse", gelb: "Kostenlos: Ihre individuelle Story", gruen: "Persönliches Kennenlernen vereinbaren", blau: "Kostenfreie Prozessanalyse anfordern" },
    { pos: "CTA 3 (Whitepaper)", rot: "Quick-Check: Ihr Einsparpotential", gelb: "Best Practices: Was andere begeistert", gruen: "Schritt-für-Schritt-Guide downloaden", blau: "Whitepaper: Daten, KPIs, Fallstudien" },
    { pos: "CTA 4 (Finale)", rot: "Starten. Jetzt.", gelb: "Werden Sie Teil der Erfolgsgeschichte", gruen: "Gemeinsam den ersten Schritt gehen", blau: "Faktenbasierte Erstanalyse vereinbaren" },
  ],
  gewinn: {
    ROT: [
      { h: "Zeitgewinn ab Tag 1", t: "Automatisierte Bestellprozesse eliminieren manuellen Aufwand. Ihre Zeit gehört wieder dem Kerngeschäft." },
      { h: "Volle Kontrolle", t: "Ein Dashboard, alle Daten. Sie entscheiden – das System liefert." },
      { h: "Sofort skalierbar", t: "Neuer Standort? 50 neue Mitarbeiter? Das System wächst mit, ohne Mehraufwand." },
    ],
    GELB: [
      { h: "Ein Team, das strahlt", t: "Arbeitskleidung, die Ihre Mitarbeiter gerne tragen – professionell, modern und mit CI-Veredelung." },
      { h: "Innovation, die man sieht", t: "Zeigen Sie Bewerbern und Kunden, dass Sie ein moderner Arbeitgeber sind." },
      { h: "Null Stress", t: "Kein Papierkram, keine Rückfragen. Alles läuft – und Sie haben Zeit für die spannenden Projekte." },
    ],
    "GRÜN": [
      { h: "Entlastung für Ihr Team", t: "Weniger Verwaltung bedeutet weniger Stress – für Sie und für jeden einzelnen Mitarbeiter." },
      { h: "Sichere Umstellung", t: "Wir begleiten Sie persönlich. Kein Risiko, kein Big-Bang – sondern ein sanfter Übergang." },
      { h: "Bewährte Lösung", t: "Über 300 Unternehmen vertrauen bereits auf unser System. Sie sind in guter Gesellschaft." },
    ],
    BLAU: [
      { h: "Messbare Prozessoptimierung", t: "Reduktion manueller Eingaben um 87%. Fehlerquote unter 1%. Dokumentiert und auditierbar." },
      { h: "Bilanzwirksame Kostensenkung", t: "14,3 Stunden Zeitersparnis/Monat. ROI innerhalb von 4 Monaten." },
      { h: "Vollständige Datentransparenz", t: "Echtzeit-Reporting über Kostenstellen, Budgets und Verbräuche." },
    ],
  },
  roadmap: [
    { phase: 1, title: "Content-Erstellung", desc: "4 Hero-Varianten + CTA-Texte + Gewinn-Texte", time: "1 Woche", prio: "Hoch" },
    { phase: 2, title: "HTML/JS-Implementierung", desc: "UTM-Routing + Varianten-Logik", time: "2–3 Tage", prio: "Hoch" },
    { phase: 3, title: "Tracking-Setup", desc: "GA4-Events für Varianten", time: "1 Tag", prio: "Hoch" },
    { phase: 4, title: "Ad-Erstellung", desc: "4 typspezifische Ad-Sets (LinkedIn, Meta)", time: "1 Woche", prio: "Mittel" },
    { phase: 5, title: "Launch + A/B-Test", desc: "Datensammlung", time: "6 Wochen", prio: "—" },
    { phase: 6, title: "Auswertung + Iteration", desc: "Beste Variante je Kanal identifizieren", time: "Nach Phase 5", prio: "Hoch" },
  ],
  kpis: [
    { kpi: "Bounce Rate je Variante", method: "GA4", goal: "<40% (aktuell ~55%)" },
    { kpi: "Scroll Depth", method: "GA4 ScrollTrigger", goal: ">60% erreichen CTA-Zone" },
    { kpi: "CTA-Klickrate", method: "Event-Tracking", goal: ">5% der Besucher" },
    { kpi: "Whitepaper-Downloads", method: "Download-Event", goal: "+30% vs. aktuell" },
    { kpi: "Kontaktanfragen", method: "Formular/Mail-Event", goal: "+25% vs. aktuell" },
    { kpi: "Verweildauer", method: "GA4", goal: ">2:30 Min." },
  ],
  fixes: [
    { title: "Testimonials", text: "Aktuell generisch wirkend. Echte Kundenzitate mit Firmennamen und Fotos." },
    { title: "Team-Bilder", text: "Alle 6 Teammitglieder haben placeholder-team.svg – echte Fotos essenziell." },
    { title: "Video", text: "Kein Poster-Bild und keine Videodatei. Höchste Priorität (stärkster Conversion-Hebel)." },
    { title: "HTML-Fehler", text: "Zeile 947: ungeschlossener <span> → Darstellungsfehler." },
    { title: "Whitepaper", text: "Direkter Download ohne Lead-Capture. Formular-Gate wäre sinnvoll." },
    { title: "Mobile", text: "Viele GSAP-Animationen – Mobile Performance separat testen." },
  ],
  kanal: [
    { kanal: "LinkedIn (C-Level)", ziel: "GF, Geschäftsleitung", typ: "ROT", hook: "87% weniger Verwaltungsaufwand. In 30 Tagen." },
    { kanal: "LinkedIn (HR)", ziel: "Personalleiter", typ: "GRÜN", hook: "Wie zufrieden ist Ihr Team mit der Arbeitskleidung?" },
    { kanal: "LinkedIn (Einkauf)", ziel: "Einkaufsleiter, Controller", typ: "BLAU", hook: "Ihre Excel-Liste hat mehr als 20 Spalten?" },
    { kanal: "Facebook/Instagram", ziel: "Breit, emotional", typ: "GELB", hook: "So sieht modernes Workwear-Management aus." },
    { kanal: "Google Ads", ziel: "Intent-basiert", typ: "BLAU/ROT", hook: "Workwear digitalisieren" },
    { kanal: "E-Mail", ziel: "Kaltakquise", typ: "nach Rolle", hook: "Personalisiert nach Jobtitel" },
  ],
};

const typColors = { ROT: "#E53935", GELB: "#FBC02D", "GRÜN": "#43A047", BLAU: "#1E88E5", "BLAU/ROT": "#9C27B0", "nach Rolle": "#757575" };

function Badge({ typ }) {
  const bg = typColors[typ] || "#757575";
  const textColor = typ === "GELB" ? "#333" : "#fff";
  return <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: 4, background: bg, color: textColor, fontSize: 12, fontWeight: 600, marginRight: 4 }}>{typ}</span>;
}

const tabs = ["Summary", "Ist-Analyse", "Hero-Varianten", "Problem-Header", "CTA-Texte", "Ihr Gewinn", "Testimonials", "Technik", "Kanäle", "Roadmap", "KPIs", "Quick-Fixes"];

export default function App() {
  const [tab, setTab] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900" style={{ fontFamily: "system-ui, sans-serif" }}>
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-2xl font-bold">DISG-Hybrid-Landingpage-Konzept</h1>
        <p className="text-gray-500 text-sm mb-1">Pöppel Workwear Management – Typspezifische Conversion-Optimierung</p>
        <p className="text-gray-400 text-xs mb-4">Version 1.0 | 12.02.2026 | Konzeptphase</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {tabs.map((t, i) => (
            <button key={i} onClick={() => setTab(i)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${tab === i ? "bg-blue-600 text-white shadow" : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"}`}>
              {t}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          {tab === 0 && <SummaryTab />}
          {tab === 1 && <AnalyseTab />}
          {tab === 2 && <HeroTab />}
          {tab === 3 && <ProblemTab />}
          {tab === 4 && <CTATab />}
          {tab === 5 && <GewinnTab />}
          {tab === 6 && <TestimonialTab />}
          {tab === 7 && <TechnikTab />}
          {tab === 8 && <KanalTab />}
          {tab === 9 && <RoadmapTab />}
          {tab === 10 && <KPITab />}
          {tab === 11 && <FixesTab />}
        </div>
      </div>
    </div>
  );
}

function SummaryTab() {
  return (
    <div>
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-6 mb-4">
        <h2 className="text-xl font-bold mb-3">Executive Summary</h2>
        <p className="mb-2">Die aktuelle Landingpage spricht primär den <strong className="text-blue-200">blauen (gewissenhaften)</strong> und teilweise den <strong className="text-green-200">grünen (stetigen)</strong> Typ an. Rote und gelbe Typen werden unzureichend abgeholt.</p>
        <p className="mb-2"><strong className="text-blue-200">Lösung:</strong> Hybrid-Strategie mit 1 Basis-Seite und 4 typspezifischen Varianten, gesteuert über UTM-Parameter.</p>
        <p><strong className="text-blue-200">Erwarteter Effekt:</strong> +20–40% Conversion-Rate durch psychologisch präzisere Ansprache.</p>
      </div>
      <h3 className="font-bold mb-2">5 Touchpoints, die sich ändern:</h3>
      <div className="space-y-2">
        {["Hero-Sektion (Headline, Subline, Badge, CTAs)", "Problem-Header (Einleitungstext)", "Alle CTA-Sektionen (4 Stück)", "Testimonial-Reihenfolge", "\"Ihr Gewinn\"-Sektion (3 Karten)"].map((t, i) => (
          <div key={i} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">{i + 1}</span>
            <span className="text-sm">{t}</span>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-4">Pflegeaufwand vs. 4 separate Seiten: ~30%</p>
    </div>
  );
}

function AnalyseTab() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-3">DISG-Score der aktuellen Seite</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
        {data.scores.map((s, i) => (
          <div key={i} className="border rounded-xl p-4" style={{ borderLeftWidth: 4, borderLeftColor: s.color }}>
            <div className="flex items-center justify-between mb-1">
              <span><Badge typ={s.typ} /> {s.label}</span>
              <span className="text-2xl font-bold" style={{ color: s.color }}>{s.score}</span>
            </div>
            <p className="text-xs text-green-700 mb-1">+ {s.pro}</p>
            <p className="text-xs text-red-600">- {s.con}</p>
          </div>
        ))}
      </div>
      <h3 className="font-bold mb-2">17 Sektionen der aktuellen Seite</h3>
      <div className="text-sm space-y-1">
        {["Hero", "Video (90s)", "Problem Sticky Cards (12)", "Potentiale Horizontal Scroll", "Lösungsweg (3 Schritte)", "Onboarding-Treppe", "CTA: Beratungstermin", "Partner (3 Karten)", "Marken-Marquee (18)", "Testimonials (3)", "Modularer Ansatz", "USPs Honeycomb (8)", "CTA: Whitepaper", "CTA: Potentialanalyse", "Ihr Gewinn (3 Karten)", "Team (6 Personen)", "FAQ + Finale CTA"].map((s, i) => (
          <div key={i} className="flex gap-2 p-1.5 bg-gray-50 rounded">
            <span className="text-gray-400 w-6 text-right">{i + 1}.</span>
            <span>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroTab() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-3">Hero-Varianten</h2>
      <div className="space-y-4">
        {data.heros.map((h, i) => (
          <div key={i} className="border rounded-xl p-4" style={{ borderLeftWidth: 4, borderLeftColor: h.color }}>
            <div className="flex items-center gap-2 mb-2">
              <Badge typ={h.typ} />
              <code className="text-xs bg-gray-100 px-2 py-0.5 rounded">{h.param}</code>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div><span className="text-gray-400 text-xs uppercase">Badge</span><p className="font-medium">{h.badge}</p></div>
              <div><span className="text-gray-400 text-xs uppercase">Tonalität</span><p>{h.ton}</p></div>
              <div className="sm:col-span-2"><span className="text-gray-400 text-xs uppercase">Headline</span><p className="font-bold text-base">{h.headline}</p></div>
              <div className="sm:col-span-2"><span className="text-gray-400 text-xs uppercase">Subline</span><p className="text-gray-600">{h.subline}</p></div>
              <div><span className="text-gray-400 text-xs uppercase">CTA primär</span><p className="font-medium" style={{ color: h.color }}>{h.cta1}</p></div>
              <div><span className="text-gray-400 text-xs uppercase">CTA sekundär</span><p>{h.cta2}</p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProblemTab() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-3">Problem-Header je Typ</h2>
      <div className="space-y-3">
        {data.problems.map((p, i) => (
          <div key={i} className="border-l-4 rounded-r-xl bg-gray-50 p-4" style={{ borderColor: p.color }}>
            <Badge typ={p.typ} />
            <p className="font-bold mt-2">{p.title}</p>
            <p className="text-sm text-gray-600">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CTATab() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-3">CTA-Texte (4 Positionen x 4 Typen)</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 border-b">Position</th>
              <th className="p-2 border-b"><Badge typ="ROT" /></th>
              <th className="p-2 border-b"><Badge typ="GELB" /></th>
              <th className="p-2 border-b"><Badge typ="GRÜN" /></th>
              <th className="p-2 border-b"><Badge typ="BLAU" /></th>
            </tr>
          </thead>
          <tbody>
            {data.ctas.map((c, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-2 font-medium text-xs">{c.pos}</td>
                <td className="p-2 text-xs">{c.rot}</td>
                <td className="p-2 text-xs">{c.gelb}</td>
                <td className="p-2 text-xs">{c.gruen}</td>
                <td className="p-2 text-xs">{c.blau}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function GewinnTab() {
  const [sel, setSel] = useState("ROT");
  const typs = ["ROT", "GELB", "GRÜN", "BLAU"];
  return (
    <div>
      <h2 className="text-lg font-bold mb-3">"Ihr Gewinn"-Sektion</h2>
      <div className="flex gap-2 mb-4">
        {typs.map(t => (
          <button key={t} onClick={() => setSel(t)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium ${sel === t ? "text-white shadow" : "bg-gray-100 text-gray-600"}`}
            style={sel === t ? { background: typColors[t], color: t === "GELB" ? "#333" : "#fff" } : {}}>
            {t}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {(data.gewinn[sel] || []).map((g, i) => (
          <div key={i} className="border rounded-xl p-4 text-center" style={{ borderTopWidth: 3, borderTopColor: typColors[sel] }}>
            <div className="text-2xl font-bold mb-1" style={{ color: typColors[sel] }}>{i + 1}</div>
            <h4 className="font-bold mb-1">{g.h}</h4>
            <p className="text-sm text-gray-600">{g.t}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TestimonialTab() {
  const items = [
    { typ: "ROT", color: "#E53935", person: "Thomas Müller, GF", quote: "revolutioniert", reason: "GF-Ebene, Ergebnis-Sprache" },
    { typ: "GELB", color: "#FBC02D", person: "Julia Schmidt, HR", quote: "Gamechanger, begeistert", reason: "Emotionale Sprache, Team-Fokus" },
    { typ: "GRÜN", color: "#43A047", person: "Michael Weber, Einkauf", quote: "Mitarbeiter begeistert", reason: "Team-Zufriedenheit, Entlastung" },
    { typ: "BLAU", color: "#1E88E5", person: "Thomas Müller, GF", quote: "transparent, nachvollziehbar", reason: "Prozess-Sprache, Kontrolle" },
  ];
  return (
    <div>
      <h2 className="text-lg font-bold mb-3">Testimonial-Priorisierung</h2>
      <p className="text-sm text-gray-600 mb-4">Für jeden Typ das passendste Zitat als erstes im Slider anzeigen.</p>
      <div className="space-y-3">
        {items.map((t, i) => (
          <div key={i} className="flex items-start gap-3 p-3 border rounded-xl" style={{ borderLeftWidth: 4, borderLeftColor: t.color }}>
            <Badge typ={t.typ} />
            <div>
              <p className="font-medium text-sm">{t.person}</p>
              <p className="text-sm text-gray-500 italic">Keyword: "{t.quote}"</p>
              <p className="text-xs text-gray-400">{t.reason}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-blue-50 rounded-xl text-sm">
        <strong>Empfehlung langfristig:</strong> Echte typ-spezifische Testimonials einsammeln: Rot = GF mit ROI, Gelb = HR mit Team-Story (Video), Grün = Langjähriger Kunde, Blau = Controller mit Vorher/Nachher-Zahlen.
      </div>
    </div>
  );
}

function TechnikTab() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-3">Technische Umsetzung</h2>
      <div className="bg-gray-900 text-green-400 rounded-xl p-4 text-sm font-mono mb-4 overflow-x-auto">
        <div>poeppel-workwear.de/?typ=rot   → Hero ROT + CTAs ROT</div>
        <div>poeppel-workwear.de/?typ=gelb  → Hero GELB + CTAs GELB</div>
        <div>poeppel-workwear.de/?typ=gruen → Hero GRÜN + CTAs GRÜN</div>
        <div>poeppel-workwear.de/?typ=blau  → Hero BLAU + CTAs BLAU</div>
        <div className="text-gray-500">poeppel-workwear.de/           → Standard (Allrounder)</div>
      </div>
      <h3 className="font-bold mb-2">JS-Logik (6 Schritte)</h3>
      <div className="space-y-2 text-sm mb-4">
        {[
          "JS liest typ-Parameter aus der URL",
          "Blendet entsprechende Hero-Variante ein (display: block)",
          "Ersetzt CTA-Texte über data-typ Attribute",
          "Setzt Testimonial-Reihenfolge",
          "Tauscht \"Ihr Gewinn\"-Karten",
          "Speichert Typ in sessionStorage für Konsistenz"
        ].map((s, i) => (
          <div key={i} className="flex gap-2 items-start">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">{i + 1}</span>
            <span>{s}</span>
          </div>
        ))}
      </div>
      <h3 className="font-bold mb-2">HTML-Struktur</h3>
      <div className="bg-gray-900 text-gray-300 rounded-xl p-4 text-xs font-mono overflow-x-auto">
        <div className="text-gray-500">{"<!-- Hero: 4 Varianten + Default -->"}</div>
        <div>{'<div class="hero-variant" data-typ="rot" style="display:none">...</div>'}</div>
        <div>{'<div class="hero-variant" data-typ="gelb" style="display:none">...</div>'}</div>
        <div>{'<div class="hero-variant hero-default">...</div>'}</div>
        <div className="mt-2 text-gray-500">{"<!-- CTA: data-Attribute -->"}</div>
        <div>{'<a class="btn" data-cta-rot="Demo in 15 Min." data-cta-default="Beratung starten">'}</div>
      </div>
      <h3 className="font-bold mt-4 mb-2">GA4 Tracking</h3>
      <div className="text-sm space-y-1">
        <div className="p-2 bg-gray-50 rounded"><code>page_variant</code>: rot | gelb | gruen | blau | default</div>
        <div className="p-2 bg-gray-50 rounded"><code>cta_click</code>: {"{position, variant, text}"}</div>
        <div className="p-2 bg-gray-50 rounded"><code>scroll_depth</code>: {"{variant, percentage}"}</div>
      </div>
    </div>
  );
}

function KanalTab() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-3">Kanal-Zuordnung</h2>
      <div className="space-y-3">
        {data.kanal.map((k, i) => (
          <div key={i} className="flex items-start gap-3 p-3 border rounded-xl hover:bg-gray-50">
            <Badge typ={k.typ} />
            <div className="flex-1">
              <p className="font-medium text-sm">{k.kanal}</p>
              <p className="text-xs text-gray-500">Zielgruppe: {k.ziel}</p>
              <p className="text-sm text-gray-700 mt-1 italic">"{k.hook}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RoadmapTab() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-3">Umsetzungs-Roadmap</h2>
      <div className="space-y-3">
        {data.roadmap.map((r, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">{r.phase}</div>
            <div className="flex-1 border rounded-xl p-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold">{r.title}</h4>
                {r.prio !== "—" && <span className={`text-xs px-2 py-0.5 rounded ${r.prio === "Hoch" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}>{r.prio}</span>}
              </div>
              <p className="text-sm text-gray-600">{r.desc}</p>
              <p className="text-xs text-gray-400 mt-1">{r.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function KPITab() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-3">Erfolgsmessung (KPIs)</h2>
      <div className="space-y-2">
        {data.kpis.map((k, i) => (
          <div key={i} className="flex items-center gap-3 p-3 border rounded-xl">
            <div className="flex-1">
              <p className="font-medium text-sm">{k.kpi}</p>
              <p className="text-xs text-gray-500">{k.method}</p>
            </div>
            <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">{k.goal}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FixesTab() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-1">Zusätzliche Optimierungen</h2>
      <p className="text-sm text-gray-500 mb-4">Unabhängig von DISG – allgemeine Verbesserungen</p>
      <div className="space-y-3">
        {data.fixes.map((f, i) => (
          <div key={i} className="flex items-start gap-3 p-3 border rounded-xl">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">{i + 1}</span>
            <div>
              <p className="font-bold text-sm">{f.title}</p>
              <p className="text-sm text-gray-600">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
