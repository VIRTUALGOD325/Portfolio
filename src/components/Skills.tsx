const CATS = [
  {
    label: 'Languages & AI / ML',
    color: 'var(--green)',
    items: [
      { name: 'Python',               level: 90 },
      { name: 'OpenAI / Gemini API',  level: 80 },
      { name: 'LangChain / LangGraph',level: 75 },
      { name: 'Scikit-learn / SBERT', level: 78 },
      { name: 'TensorFlow / Keras',   level: 68 },
      { name: 'Pandas / NumPy',       level: 82 },
    ],
  },
  {
    label: 'Backend & Data',
    color: 'var(--blue)',
    items: [
      { name: 'FastAPI / Flask',  level: 80 },
      { name: 'REST APIs',        level: 85 },
      { name: 'PostgreSQL / SQL', level: 72 },
      { name: 'MongoDB',          level: 75 },
      { name: 'Docker / K8s',     level: 65 },
      { name: 'Node.js',          level: 70 },
    ],
  },
  {
    label: 'Frontend & Mobile',
    color: 'var(--purple)',
    items: [
      { name: 'Android (Java)',    level: 82 },
      { name: 'React / TypeScript',level: 78 },
      { name: 'Tailwind CSS',      level: 80 },
      { name: 'WebSockets',        level: 70 },
      { name: 'Firebase',          level: 65 },
      { name: 'Arduino / IoT',     level: 72 },
    ],
  },
];

const MORE = [
  'Git', 'Vector DBs', 'C / C++', 'Java', 'C#', 'Power BI',
  'Linux', 'CI/CD', 'Microservices', 'Bluetooth HC-05', 'Arduino', 'Embedded Systems',
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="pf-container">
        <div style={{ marginBottom: 40 }}>
          <div className="sec-num">/04 · Skills</div>
          <div className="sec-title">Technical Stack</div>
        </div>

        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 16 }}>
          {CATS.map(cat => (
            <div key={cat.label} className="cell">
              <div className="cell-head">
                <div className="lbl" style={{ color: cat.color }}>{cat.label}</div>
              </div>
              <div className="cell-body">
                {cat.items.map(s => (
                  <div key={s.name} className="skill-row">
                    <span className="skill-name">{s.name}</span>
                    <div className="skill-track">
                      <div className="skill-fill" style={{ width: `${s.level}%`, background: cat.color }} />
                    </div>
                    <span className="skill-pct">{s.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* More tech */}
        <div className="cell">
          <div className="cell-head"><div className="lbl">More Technologies</div></div>
          <div className="cell-body" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {MORE.map(t => <span key={t} className="chip">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
