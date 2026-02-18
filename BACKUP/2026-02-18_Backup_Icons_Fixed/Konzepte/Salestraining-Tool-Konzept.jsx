import { useState } from "react";

const T = [
  "Übersicht", "Lerntypen", "Kategorien", "Levels",
  "Gamification", "Spaced Rep.", "Tech-Stack", "n8n", "Dashboard", "Roadmap"
];

const C = { b: "#1E40AF", g: "#10B981", r: "#EF4444", y: "#F59E0B", p: "#8B5CF6", pk: "#EC4899" };

function B({ c, children }) {
  return <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold text-white" style={{ background: c }}>{children}</span>;
}

export default function App() {
  const [t, sT] = useState(0);
  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: "system-ui" }}>
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-5 py-4">
        <h1 className="text-xl font-bold">Pöppel Sales Academy</h1>
        <p className="text-blue-200 text-xs mt-1">Adaptives Salestraining | Konzept v1.0 | Feb 2026</p>
      </div>
      <div className="flex flex-wrap gap-1 p-3 bg-white border-b">
        {T.map((l, i) => (
          <button key={i} onClick={() => sT(i)} className={`px-2.5 py-1.5 rounded text-xs font-medium ${t === i ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"}`}>{l}</button>
        ))}
      </div>
      <div className="max-w-5xl mx-auto p-4">
        <div className="bg-white rounded-xl border p-5 shadow-sm">
          {t === 0 && <P0 />}
          {t === 1 && <P1 />}
          {t === 2 && <P2 />}
          {t === 3 && <P3 />}
          {t === 4 && <P4 />}
          {t === 5 && <P5 />}
          {t === 6 && <P6 />}
          {t === 7 && <P7 />}
          {t === 8 && <P8 />}
          {t === 9 && <P9 />}
        </div>
      </div>
    </div>
  );
}

function P0() {
  return (<div>
    <div className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white rounded-xl p-5 mb-4">
      <h2 className="text-lg font-bold mb-2">Projektübersicht</h2>
      <p className="text-blue-100 text-sm mb-3">Adaptives, KI-gestütztes Sales-Trainingstool: Lerntyp-Erkennung + Gamification + Spaced Repetition – Pöppel-first, dann SaaS.</p>
      <div className="grid grid-cols-4 gap-2">
        {[["4","Kategorien"],["5","Level/Kat."],["4","Lerntypen"],["125+","Einwände"]].map(([v,l],i) => (
          <div key={i} className="bg-white/10 rounded-lg p-2 text-center"><div className="text-xl font-bold">{v}</div><div className="text-xs text-blue-200">{l}</div></div>
        ))}
      </div>
    </div>
    <h3 className="font-bold mb-2">5 Säulen</h3>
    <div className="grid grid-cols-5 gap-2">
      {[["🧠","Adaptiv","Lerntyp-Erkennung via VARK",C.b],["🎮","Gamification","XP, Badges, Streaks, Quests",C.y],["🔄","Spaced Rep.","SM-2 Algorithmus",C.g],["📊","Analytics","Stärken/Schwächen + KI-Tipps",C.p],["🔗","n8n","6 automatisierte Workflows",C.pk]].map(([ic,ti,de,co],i) => (
        <div key={i} className="border rounded-lg p-3 text-center">
          <div className="text-2xl">{ic}</div>
          <div className="text-xs font-bold mt-1" style={{color:co}}>{ti}</div>
          <div className="text-xs text-gray-500 mt-0.5">{de}</div>
        </div>
      ))}
    </div>
    <div className="mt-4 grid grid-cols-2 gap-3">
      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
        <h4 className="font-bold text-sm text-red-700 mb-1">Standard-LMS</h4>
        {["Statische Inhalte für alle","Keine Wiederholung","Langweilig, hohe Abbruchrate","Kein Sales-Kontext"].map((t,i) => <div key={i} className="text-xs text-gray-600">❌ {t}</div>)}
      </div>
      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
        <h4 className="font-bold text-sm text-green-700 mb-1">Pöppel Sales Academy</h4>
        {["Adaptiv je Lerntyp + DISG","SM-2 Spaced Repetition","Gamification + Streaks","125 Einwände + Workwear-Kontext"].map((t,i) => <div key={i} className="text-xs text-gray-600">✅ {t}</div>)}
      </div>
    </div>
  </div>);
}

function P1() {
  const [s, sS] = useState(0);
  const d = [
    { n:"Visuell", ic:"👁️", c:"#3B82F6", co:["Infografiken, DISG-Farbprofile","Video-Demos von Verkaufsgesprächen","Flowcharts für Gesprächsleitfäden","Farbcodierte Vergleichstabellen"] },
    { n:"Auditiv", ic:"👂", c:"#10B981", co:["Audio-Podcasts zu Verkaufstechniken","Aufgezeichnete Musterdialoge","Text-to-Speech für alle Textinhalte","Audio-Quizze mit Spracherkennung"] },
    { n:"Lesen/Schreiben", ic:"📝", c:"#F59E0B", co:["Detaillierte Textmodule","Checklisten und Leitfäden","Schriftliche Einwand-Formulierungen","Reflexionsaufgaben nach jedem Level"] },
    { n:"Kinästhetisch", ic:"🤲", c:"#EF4444", co:["Interaktive Rollenspiel-Simulationen","Drag-and-Drop Zuordnungen","Praxis-Challenges: echte Szenarien","Quiz-Battles gegen andere Nutzer"] },
  ];
  return (<div>
    <h2 className="text-lg font-bold mb-1">Lerntyp-Assessment (VARK)</h2>
    <p className="text-sm text-gray-600 mb-3">5-Min. Onboarding-Assessment bestimmt primären + sekundären Lerntyp. Alle Nutzer erhalten multimodale Inhalte – der Lerntyp gewichtet die Darstellung.</p>
    <div className="grid grid-cols-4 gap-2 mb-4">
      {d.map((x,i) => (
        <button key={i} onClick={() => sS(i)} className={`rounded-lg p-3 text-center ${s===i?"text-white shadow-lg":"bg-gray-50 border"}`} style={s===i?{background:x.c}:{}}>
          <div className="text-xl">{x.ic}</div>
          <div className="text-xs font-bold mt-1">{x.n}</div>
        </button>
      ))}
    </div>
    <div className="border rounded-lg p-4" style={{borderLeftWidth:4,borderLeftColor:d[s].c}}>
      <h3 className="font-bold">{d[s].ic} {d[s].n}</h3>
      <div className="mt-2 space-y-1">
        {d[s].co.map((c,i) => <div key={i} className="text-sm flex gap-2"><span className="text-green-500">●</span>{c}</div>)}
      </div>
    </div>
    <div className="mt-4 flex gap-2 items-center text-center text-xs">
      {["Login","Assessment\n(12 Fragen)","Lerntyp-\nProfil","Kursinhalte\nangepasst","Fortlaufende\nAnpassung"].map((s,i) => (
        <div key={i} className="flex items-center gap-1">
          <div className="bg-purple-100 text-purple-800 rounded-lg px-2 py-2 font-medium whitespace-pre-line"><span className="font-bold text-purple-600">{i+1}.</span> {s}</div>
          {i<4 && <span className="text-purple-300">→</span>}
        </div>
      ))}
    </div>
  </div>);
}

function P2() {
  const [s, sS] = useState(0);
  const cats = [
    { n:"DISG-Profiling", ic:"🎯", c:"#3B82F6", lvls:[
      "Grundlagen: 4 Typen verstehen, eigenes Profil",
      "Erkennung: Sprachmuster, Körpersprache, NLP",
      "Anpassung: Typgerechte Gesprächsführung, VAKOG",
      "Meisterklasse: Mischtypen, Mikro-Mimik (Ekman)",
      "Praxis-Profi: Live-Simulationen, Echtzeit-Analyse"]},
    { n:"Einwandbehandlung", ic:"🛡️", c:"#EF4444", lvls:[
      "Basics: Top 20 Einwände, 3 Basis-Techniken",
      "Fortgeschritten: 40 weitere, Preis- und Zeitdruck",
      "Experte: Branchenspezifisch (Workwear), Wettbewerb",
      "Spezialist: DISG-typgerecht, emotional vs. rational",
      "Meister: Alle 125 Einwände, Improvisation unter Druck"]},
    { n:"Produktwissen", ic:"🔍", c:"#10B981", lvls:[
      "Basis: Pöppel 3-Säulen-Modell, 18 Hersteller",
      "Bedarfsermittlung: Fragetechniken, Pain Points",
      "Lösungsdesign: TCO-Argumentation, Digitalisierung",
      "Veredelung & CI: Corporate Design, Stick/Druck, ROI",
      "Berater-Level: Komplettlösungen, Business Cases"]},
    { n:"Verhandlung", ic:"🤝", c:"#F59E0B", lvls:[
      "Grundlagen: Phasen, Buying Signals, Basis-Abschluss",
      "Verhandlung: Anker-Technik, Paket, Zugeständnisse",
      "Fortgeschritten: BATNA, Mehrwert, Entscheider-ID",
      "Psychologie: Cialdini, kognitive Verzerrungen",
      "Deal Closer: Komplexe B2B, Multi-Stakeholder"]},
  ];
  return (<div>
    <div className="grid grid-cols-4 gap-2 mb-4">
      {cats.map((c,i) => (
        <button key={i} onClick={() => sS(i)} className={`rounded-lg p-3 text-center ${s===i?"text-white shadow":"bg-gray-50 border"}`} style={s===i?{background:c.c}:{}}>
          <div className="text-xl">{c.ic}</div>
          <div className="text-xs font-bold mt-1">{c.n}</div>
        </button>
      ))}
    </div>
    <div className="border rounded-lg p-4" style={{borderLeftWidth:4,borderLeftColor:cats[s].c}}>
      <h3 className="font-bold mb-3">{cats[s].ic} {cats[s].n}</h3>
      {cats[s].lvls.map((l,i) => (
        <div key={i} className="flex items-start gap-2 mb-2">
          <span className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{background:cats[s].c}}>{i+1}</span>
          <span className="text-sm">{l}</span>
        </div>
      ))}
    </div>
  </div>);
}

function P3() {
  return (<div>
    <h2 className="text-lg font-bold mb-3">Level-System: 5 Stufen pro Kategorie</h2>
    {[
      {l:1,n:"Rookie",xp:"0–500 XP",c:"#10B981",ic:"🌱",d:"Grundlagen + erste Quizze",test:"20 MC-Fragen (80%)"},
      {l:2,n:"Aufsteiger",xp:"500–1.500",c:"#3B82F6",ic:"📈",d:"Situationsanalysen + Zuordnung",test:"15 MC + 5 Situationen"},
      {l:3,n:"Spezialist",xp:"1.500–3.000",c:"#F59E0B",ic:"⭐",d:"Rollenspiele + Fallstudien",test:"10 MC + 5 Cases + 1 Rollenspiel"},
      {l:4,n:"Experte",xp:"3.000–5.000",c:"#8B5CF6",ic:"🏆",d:"Cross-Kategorie-Challenges",test:"Komplexe Szenarien + Peer-Review"},
      {l:5,n:"Meister",xp:"5.000+",c:"#EF4444",ic:"👑",d:"Perfektion & Trainer-Fähigkeit",test:"Praxis-Assessment + Zertifizierung"},
    ].map(l => (
      <div key={l.l} className="border rounded-lg p-3 mb-2" style={{borderLeftWidth:4,borderLeftColor:l.c}}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl">{l.ic}</span>
          <span className="font-bold text-sm">Level {l.l}: {l.n}</span>
          <span className="text-xs text-gray-400">{l.xp}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-gray-50 rounded p-1.5"><strong>Inhalt:</strong> {l.d}</div>
          <div className="bg-gray-50 rounded p-1.5"><strong>Test:</strong> {l.test}</div>
        </div>
      </div>
    ))}
    <div className="mt-3 bg-red-50 rounded-lg p-3 text-sm">
      <strong className="text-red-700">Bestehensgrenze: 80%</strong> – Bei Nichtbestehen: 24h Wartezeit + gezielte Wiederholungsvorschläge. Zertifikat bei allen Level 5.
    </div>
  </div>);
}

function P4() {
  return (<div>
    <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-xl p-5 mb-4">
      <h2 className="text-lg font-bold">🎮 Gamification Framework</h2>
      <p className="text-amber-100 text-sm">HBS/KPMG-Studie: +25% Fee Collection, +22% Opportunities. 89% fühlen sich motivierter.</p>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h3 className="font-bold text-sm mb-2">XP-System</h3>
        {[["Lektion abschließen","+50"],["Quiz bestanden","+100"],["Level-Test bestanden","+250"],["Perfekter Score","+500"],["Täglicher Login","+25"],["Spaced-Rep-Review","+75"],["Badge freigeschaltet","+150"]].map(([a,x],i) => (
          <div key={i} className="flex justify-between text-xs py-1 border-b"><span>{a}</span><span className="font-bold text-amber-600">{x} XP</span></div>
        ))}
      </div>
      <div>
        <h3 className="font-bold text-sm mb-2">Badges (Auswahl)</h3>
        {[["🌱 Erster Schritt","Common","#6B7280"],["🔥 7-Tage-Streak","Uncommon","#10B981"],["🎯 DISG-Detektiv","Rare","#3B82F6"],["🛡️ Einwand-Killer","Epic","#8B5CF6"],["👑 Sales Master","Legendary","#F59E0B"]].map(([n,r,c],i) => (
          <div key={i} className="flex items-center justify-between text-xs py-1 border-b"><span>{n}</span><B c={c}>{r}</B></div>
        ))}
        <div className="mt-3 space-y-1 text-xs text-gray-600">
          <div><strong>🔥 Streaks:</strong> 7 Tage = 1.5x XP, 30 Tage = 2x</div>
          <div><strong>⚔️ Quests:</strong> Wöchentliche Team + Daily Challenges</div>
          <div><strong>🏆 Leaderboard:</strong> Weekly + All-Time, Team + Solo</div>
        </div>
      </div>
    </div>
  </div>);
}

function P5() {
  return (<div>
    <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white rounded-xl p-5 mb-4">
      <h2 className="text-lg font-bold">🔄 Spaced Repetition (SM-2)</h2>
      <p className="text-green-100 text-sm">Algorithmus von Wozniak (1987), genutzt in Anki (40M+ Nutzer). Stoppt die Vergessenskurve.</p>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h3 className="font-bold text-sm mb-2">Bewertung (0–5)</h3>
        {[[5,"Perfekt","#10B981"],[4,"Gut","#3B82F6"],[3,"Okay","#F59E0B"],[2,"Schwer","#F97316"],[1,"Falsch","#EF4444"],[0,"Keine Ahnung","#991B1B"]].map(([q,l,c]) => (
          <div key={q} className="flex items-center gap-2 text-xs mb-1">
            <span className="w-5 h-5 rounded flex items-center justify-center text-white font-bold" style={{background:c}}>{q}</span>
            <span>{l}</span>
          </div>
        ))}
      </div>
      <div>
        <h3 className="font-bold text-sm mb-2">Intervall-Beispiele</h3>
        <table className="w-full text-xs">
          <thead><tr className="bg-gray-50"><th className="p-1">Review</th><th className="p-1 text-green-600">Score 5</th><th className="p-1 text-amber-600">Score 3</th><th className="p-1 text-red-600">Score 1</th></tr></thead>
          <tbody>
            {[["1.",["1 Tag","1 Tag","sofort"]],["2.",["6 Tage","3 Tage","1 Tag"]],["3.",["15 Tage","6 Tage","3 Tage"]],["4.",["38 Tage","10 Tage","6 Tage"]],["5.",["90 Tage","18 Tage","10 Tage"]]].map(([r,v],i) => (
              <tr key={i} className="border-t"><td className="p-1 font-medium">{r}</td>{v.map((x,j) => <td key={j} className="p-1">{x}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="mt-4 flex gap-2 items-end justify-center">
      {[[1,"Täglich",12,"#EF4444","h-16"],[2,"3 Tage",24,"#F97316","h-20"],[3,"Wöchentl.",45,"#F59E0B","h-24"],[4,"2 Wochen",67,"#3B82F6","h-28"],[5,"Monatl.",89,"#10B981","h-32"]].map(([b,l,n,c,h]) => (
        <div key={b} className="text-center flex-1">
          <div className={`${h} rounded-t-lg flex items-end justify-center pb-1`} style={{background:c}}><span className="text-white font-bold">{n}</span></div>
          <div className="text-xs font-medium mt-1">Box {b}</div>
          <div className="text-xs text-gray-400">{l}</div>
        </div>
      ))}
    </div>
  </div>);
}

function P6() {
  return (<div>
    <h2 className="text-lg font-bold mb-3">Tech-Stack</h2>
    <div className="grid grid-cols-2 gap-3">
      {[
        {t:"Frontend",c:"#3B82F6",items:["Next.js 15 (App Router)","React 19 + Tailwind + shadcn/ui","Framer Motion (Animationen)","Recharts (Dashboard-Charts)"]},
        {t:"Backend",c:"#10B981",items:["Supabase (PostgreSQL + RLS)","Supabase Auth (JWT, MFA)","Supabase Storage (Videos, PDFs)","Supabase Realtime (Leaderboard)"]},
        {t:"Automation",c:"#F59E0B",items:["n8n (self-hosted/Cloud)","Webhook + Cron Trigger","AI-Nodes (Claude/OpenAI)","Supabase-Node für DB-Ops"]},
        {t:"Hosting",c:"#8B5CF6",items:["Vercel (Frontend, Edge)","Supabase Cloud (DB, Auth)","n8n Cloud oder Docker","Sentry + GA4 (Monitoring)"]},
      ].map(s => (
        <div key={s.t} className="border rounded-lg p-3" style={{borderTopWidth:3,borderTopColor:s.c}}>
          <h3 className="font-bold text-sm mb-2" style={{color:s.c}}>{s.t}</h3>
          {s.items.map((it,i) => <div key={i} className="text-xs text-gray-600 mb-0.5">• {it}</div>)}
        </div>
      ))}
    </div>
    <div className="mt-3 bg-blue-50 rounded-lg p-3 text-xs">
      <strong>Multi-Tenant (SaaS):</strong> Row-Level Security isoliert Daten pro Organisation. Rollen: Super-Admin, Org-Admin, Manager, User. Abrechnung per Seat via Stripe.
    </div>
  </div>);
}

function P7() {
  return (<div>
    <h2 className="text-lg font-bold mb-3">🔗 6 n8n Kern-Workflows</h2>
    {[
      {n:"Zielgruppen-Recherche",tr:"Admin erstellt Zielgruppe",c:"#3B82F6",steps:["Webhook → Branche + Rolle","AI: Recherchiert Anforderungen","AI: Generiert Einwände aus 125er-Pool","Supabase: Speichert Inhalte"]},
      {n:"Content-Pipeline",tr:"Neuer Content hochgeladen",c:"#10B981",steps:["Prüft Content-Typ","AI: Generiert 4 Lerntyp-Varianten","Visuell/Auditiv/Text/Interaktiv","Supabase: Speichert alle Varianten"]},
      {n:"Spaced Rep. Scheduler",tr:"Cron: Täglich 07:00",c:"#F59E0B",steps:["Liest fällige Review-Items","Gruppiert nach User","Generiert personalisierte Session","Push-Notification senden"]},
      {n:"Test-Auswertung",tr:"Level-Test abgeschlossen",c:"#8B5CF6",steps:["Analysiert Schwachstellen","AI: Generiert Lernempfehlung","Aktualisiert XP + Badges","Level freischalten oder Wiederholung"]},
      {n:"Weekly Admin Report",tr:"Cron: Montag 08:00",c:"#EC4899",steps:["Aggregiert Statistiken","Identifiziert inaktive User","AI: Handlungsempfehlungen","E-Mail an Master-Admin"]},
      {n:"Onboarding",tr:"Neuer User registriert",c:"#EF4444",steps:["Erstellt User-Profil","Wartet auf Assessment","Generiert Lernpfad","Welcome-E-Mail senden"]},
    ].map(w => (
      <div key={w.n} className="border rounded-lg p-3 mb-2" style={{borderLeftWidth:4,borderLeftColor:w.c}}>
        <div className="flex items-center justify-between mb-1">
          <span className="font-bold text-sm">{w.n}</span>
          <span className="text-xs text-gray-400">Trigger: {w.tr}</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {w.steps.map((s,i) => (
            <span key={i} className="text-xs bg-gray-100 rounded px-2 py-0.5">{i+1}. {s}</span>
          ))}
        </div>
      </div>
    ))}
  </div>);
}

function P8() {
  return (<div>
    <h2 className="text-lg font-bold mb-3">📊 User-Dashboard (Wireframe)</h2>
    <div className="border rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-4 py-3 flex justify-between">
        <div><div className="text-xs text-blue-200">Willkommen,</div><div className="font-bold">Max Mustermann</div></div>
        <div className="text-right"><div className="text-xl font-bold">2.450 XP</div><div className="text-xs text-blue-200">🔥 12 Tage Streak</div></div>
      </div>
      <div className="p-4 space-y-3">
        <div className="grid grid-cols-4 gap-2">
          {[["Lvl 3","DISG","#3B82F6","#DBEAFE"],["Lvl 2","Einwände","#EF4444","#FEE2E2"],["Lvl 4","Produkt","#10B981","#D1FAE5"],["Lvl 1","Verhandlung","#F59E0B","#FEF3C7"]].map(([v,l,c,bg],i) => (
            <div key={i} className="rounded-lg p-2 text-center" style={{background:bg}}><div className="text-lg font-bold" style={{color:c}}>{v}</div><div className="text-xs text-gray-500">{l}</div></div>
          ))}
        </div>
        <div>
          <h4 className="font-bold text-xs mb-1">📋 Heute anstehend</h4>
          {[["🔄","Spaced Review: 8 Karten fällig"],["📖","Einwandbehandlung Lvl 2: Lektion 4"],["⚡","Daily Challenge: 3 DISG-Typen erkennen"]].map(([ic,t],i) => (
            <div key={i} className="flex items-center gap-2 p-1.5 bg-gray-50 rounded mb-1 text-xs"><span>{ic}</span><span className="flex-1">{t}</span><span className="px-2 py-0.5 bg-blue-600 text-white rounded text-xs">Start</span></div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-green-50 rounded-lg p-2">
            <h4 className="font-bold text-xs text-green-700">💪 Stärken</h4>
            <div className="text-xs text-gray-600">• DISG-Erkennung (92%)<br/>• Produktwissen (88%)<br/>• Fragetechniken (85%)</div>
          </div>
          <div className="bg-red-50 rounded-lg p-2">
            <h4 className="font-bold text-xs text-red-700">🎯 Entwicklungsfelder</h4>
            <div className="text-xs text-gray-600">• Preis-Einwände (54%)<br/>• Closing (61%)<br/>• BATNA-Analyse (45%)</div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-4 border rounded-lg p-3">
      <h3 className="font-bold text-sm mb-2">👑 Master-Admin enthält:</h3>
      <div className="grid grid-cols-2 gap-1 text-xs text-gray-600">
        {["Alle Nutzer + Status","Profile einsehen","Rollen verwalten","Content-Management","Einwand-Datenbank (125+)","Zielgruppen anlegen (→ n8n)","Analytics-Dashboard","Weekly Auto-Report"].map((t,i) => <div key={i}>✓ {t}</div>)}
      </div>
    </div>
  </div>);
}

function P9() {
  return (<div>
    <h2 className="text-lg font-bold mb-3">🗺️ Roadmap: 20 Wochen</h2>
    {[
      {p:1,n:"Foundation",t:"Wo 1–3",c:"#3B82F6",tasks:"Supabase, Next.js, Auth, Lerntyp-Assessment, n8n"},
      {p:2,n:"Core Training",t:"Wo 4–7",c:"#10B981",tasks:"4 Kategorien, Lektionen, Test-Engine, SM-2"},
      {p:3,n:"Gamification",t:"Wo 8–10",c:"#F59E0B",tasks:"XP, Badges, Leaderboard, Streaks, Challenges"},
      {p:4,n:"Analytics & n8n",t:"Wo 11–13",c:"#8B5CF6",tasks:"Dashboards, Master-Admin, alle 6 Workflows"},
      {p:5,n:"Content & Polish",t:"Wo 14–16",c:"#EC4899",tasks:"Alle Level befüllen, 125 Einwände, PWA, QA"},
      {p:6,n:"Launch & Scale",t:"Wo 17–20",c:"#EF4444",tasks:"Beta-Test, Feedback, Launch, SaaS-Vorbereitung"},
    ].map(r => (
      <div key={r.p} className="flex items-start gap-3 mb-2">
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style={{background:r.c}}>{r.p}</div>
        <div className="flex-1 border rounded-lg p-2">
          <div className="flex justify-between"><span className="font-bold text-sm">{r.n}</span><span className="text-xs text-gray-400">{r.t}</span></div>
          <div className="text-xs text-gray-600">{r.tasks}</div>
        </div>
      </div>
    ))}
    <div className="mt-4 border rounded-lg p-3">
      <h3 className="font-bold text-sm mb-2">💰 Monatliche Kosten (nach Launch)</h3>
      {[["Supabase Pro","~25€"],["Vercel Pro","~20€"],["n8n Cloud","~20€"],["AI-APIs (Claude/OpenAI)","~30–50€"],["Gesamt","~100–120€/Monat"]].map(([p,c],i) => (
        <div key={i} className={`flex justify-between text-xs py-1 ${i===4?"font-bold border-t pt-2":""}`}><span>{p}</span><span>{c}</span></div>
      ))}
    </div>
  </div>);
}
