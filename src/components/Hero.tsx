import { useEffect, useState } from 'react';
import { BookOpen, Briefcase, FolderGit2, GraduationCap } from 'lucide-react';

const ROLES = ['AI / ML Engineer', 'Backend Developer', 'Android Developer', 'Full Stack Developer'];

const STACK = [
  'Python', 'FastAPI', 'LangChain', 'React', 'TypeScript', 'Android Java', 'Docker',
  'PostgreSQL', 'MongoDB', 'OpenAI API', 'SBERT', 'TensorFlow', 'Node.js', 'Git',
  'REST APIs', 'Firebase', 'WebSockets', 'Kubernetes', 'Scikit-learn', 'Pandas',
  'NumPy', 'Vite', 'Tailwind CSS', 'Linux', 'Power BI', 'Vector DBs', 'C / C++',
];

const seed = (s: number, n: number) => {
  const out: number[] = [];
  let v = s;
  for (let i = 0; i < n; i++) {
    v = (v * 1664525 + 1013904223) >>> 0;
    out.push((v % 70) + 15);
  }
  return out;
};

function Sparkline({ data, color }: { data: number[]; color: string }) {
  const W = 72, H = 22;
  const min = Math.min(...data), range = (Math.max(...data) - min) || 1;
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * W},${H - ((v - min) / range) * H}`).join(' ');
  return (
    <svg width={W} height={H} style={{ display: 'block' }}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function MetricTile({ icon, value, label, color, s }: {
  icon: React.ReactNode; value: string; label: string; color: string; s: number;
}) {
  return (
    <div className="cell" style={{ flex: '1 1 130px', minWidth: 120 }}>
      <div className="cell-head">
        <div className="lbl">{icon}{label}</div>
      </div>
      <div style={{ padding: '12px 14px' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 30, color: 'var(--text)', lineHeight: 1 }}>{value}</div>
        <div style={{ marginTop: 10 }}>
          <Sparkline data={seed(s, 16)} color={color} />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [ri, setRi] = useState(0);
  const doubled = [...STACK, ...STACK];

  useEffect(() => {
    const id = setInterval(() => setRi(i => (i + 1) % ROLES.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 80 }}>
      <div className="pf-container">

        {/* Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 22 }}>
          <span className="dot" />
          Available for opportunities · Graduating Jul 2026
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(52px, 9vw, 110px)',
          lineHeight: 0.92,
          color: 'var(--text)',
          fontWeight: 400,
          marginBottom: 22,
          letterSpacing: '-0.02em',
        }}>
          Tanishq<br />
          <span style={{ fontStyle: 'italic', color: 'var(--muted)' }}>Nabar</span>
        </h1>

        {/* Role cycling */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, height: 24 }}>
          <span style={{ fontSize: 13, color: 'var(--green)', userSelect: 'none', flexShrink: 0 }}>&gt;_</span>
          <span style={{ fontSize: 14, color: 'var(--muted)' }}>{ROLES[ri]}</span>
          <span className="cursor" />
        </div>

        {/* Chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 36 }}>
          {['AI / ML', 'Backend', 'Android', 'Full Stack'].map(r => (
            <span key={r} className="chip">{r}</span>
          ))}
          <span className="chip green">Open to work</span>
          <span className="chip" style={{ borderColor: 'var(--dim)', color: 'var(--dim)' }}>Mumbai · Remote</span>
        </div>

        {/* Metrics */}
        <div className="hero-metrics" style={{ display: 'flex', gap: 12, marginBottom: 32, flexWrap: 'wrap' }}>
          <MetricTile icon={<BookOpen size={11}/>}     value="02"   label="Research Papers" color="var(--blue)"   s={42} />
          <MetricTile icon={<Briefcase size={11}/>}    value="03+"  label="Internships"      color="var(--green)"  s={77} />
          <MetricTile icon={<FolderGit2 size={11}/>}   value="10+"  label="Projects"         color="var(--purple)" s={11} />
          <MetricTile icon={<GraduationCap size={11}/>} value="2026" label="Graduation"       color="var(--amber)"  s={33} />
        </div>

        {/* Ticker */}
        <div className="ticker-wrap">
          <div className="ticker-inner">
            {doubled.map((t, i) => (
              <span key={i} className="ticker-item">
                <span className="ticker-dot" /> {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
