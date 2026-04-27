import { useState } from 'react';
import { ExternalLink, Github, ChevronRight, X } from 'lucide-react';

const PROJECTS = [
  {
    id: 'PROJ-001', ticker: 'DCINS',
    title: 'DocInsight', domain: 'AI / ML',
    tagline: 'AI Document Originality Detection',
    status: 'Live', sc: 'green', pushed: 'Mar 2025',
    stack: ['Python', 'SBERT', 'FastAPI', 'PostgreSQL', 'Docker', 'Vercel'],
    desc: 'AI-powered plagiarism and originality detection using SBERT semantic similarity, stylometric analysis, and citation masking. Capstone project — Best Paper Award @ SSIC 2025.',
    highlights: [
      'Best Paper Award @ SSIC 2025',
      'Published in Springer LNNS (SmartCom 2026)',
      'SBERT + stylometric dual-pipeline',
      'Citation masking & paraphrase detection',
      'Deployed full-stack on Vercel',
    ],
    metrics: [{ l: 'Detection Models', v: '3' }, { l: 'Methods', v: '5+' }, { l: 'Award', v: '#1' }, { l: 'Published', v: '✓' }],
    live: 'https://frontend-mu-bice-99.vercel.app',
    repo: 'https://github.com/VIRTUALGOD325/capstoneverceldep_main',
  },
  {
    id: 'PROJ-002', ticker: 'CCPRS',
    title: 'CC Statement Parser', domain: 'Data Eng',
    tagline: 'Multi-bank PDF Extraction Pipeline',
    status: 'Stable', sc: 'blue', pushed: 'Nov 2024',
    stack: ['Python', 'PDF Parsing', 'GUI', 'Data Pipelines'],
    desc: 'Parses structured financial data from credit card PDFs across 5 major Indian banks. Features a GUI app, mock data generator, and modular per-bank parser architecture.',
    highlights: [
      'HDFC, SBI, IDBI, Saraswat, NKGSB support',
      'Modular per-bank parser architecture',
      'GUI app for non-technical users',
      'Mock data generator for testing',
      'Handles varied PDF layouts',
    ],
    metrics: [{ l: 'Banks', v: '5' }, { l: 'Parser Modules', v: '5' }, { l: 'Data Fields', v: '20+' }, { l: 'GUI', v: '✓' }],
    repo: 'https://github.com/VIRTUALGOD325/Credit-Card-Statement-Parser',
  },
  {
    id: 'PROJ-003', ticker: 'AITSK',
    title: 'AI Task Manager', domain: 'AI / Web',
    tagline: 'OpenAI-Powered Productivity App',
    status: 'Stable', sc: 'blue', pushed: 'Sep 2024',
    stack: ['React', 'Vite', 'OpenAI API', 'Tailwind CSS'],
    desc: 'Intelligent task manager that uses GPT to prioritize tasks, suggest schedules, and generate performance insights in real time.',
    highlights: [
      'GPT-powered task prioritization',
      'AI-generated schedule suggestions',
      'Performance analytics & insights',
      'Real-time OpenAI API integration',
    ],
    metrics: [{ l: 'AI Features', v: '3' }, { l: 'API', v: 'GPT' }, { l: 'Framework', v: 'React' }, { l: 'RT Updates', v: '✓' }],
    repo: 'https://github.com/VIRTUALGOD325/AI-TaskManager',
  },
  {
    id: 'PROJ-004', ticker: 'ABTCT',
    title: 'ArduinoBT Control', domain: 'Android / IoT',
    tagline: 'Bluetooth Android Hardware Controller',
    status: 'Stable', sc: 'blue', pushed: 'Jul 2024',
    stack: ['Java', 'Android', 'Bluetooth', 'HC-05', 'IoT'],
    desc: 'Native Android app for controlling Arduino hardware over HC-05 Bluetooth. Supports D-pad, joystick, voice commands, and tilt controls.',
    highlights: [
      'HC-05 Bluetooth connection manager',
      'D-pad, joystick, voice & tilt modes',
      'Modular Android architecture',
      'Real-time hardware response loop',
    ],
    metrics: [{ l: 'Control Modes', v: '4' }, { l: 'Protocol', v: 'BT' }, { l: 'Platform', v: 'Android' }, { l: 'Hardware', v: 'HC-05' }],
    repo: 'https://github.com/VIRTUALGOD325/ArduinoBTControlApp',
  },
  {
    id: 'PROJ-005', ticker: 'ARDLK',
    title: 'Arduino Code Link', domain: 'IoT / Web',
    tagline: 'Browser-Based Arduino IDE',
    status: 'WIP', sc: 'amber', pushed: 'Apr 2025',
    stack: ['JavaScript', 'Node.js', 'WebSockets', 'Arduino'],
    desc: 'Browser-based IDE for compiling and uploading code to Arduino boards. Features serial terminal, memory leak monitor, and syntax highlighting — built at Eduprime Technologies.',
    highlights: [
      'Browser compile & upload pipeline',
      'Real-time serial terminal via WebSockets',
      'Memory leak detection & monitoring',
      'Syntax highlighting for Arduino / C++',
    ],
    metrics: [{ l: 'Transport', v: 'WS' }, { l: 'Platform', v: 'Browser' }, { l: 'Language', v: 'JS' }, { l: 'Internship', v: '✓' }],
    repo: 'https://github.com/VIRTUALGOD325/Arduino_Code_Link',
  },
  {
    id: 'PROJ-006', ticker: 'CPHSR',
    title: 'CipherShare', domain: 'Backend',
    tagline: 'Secure Decentralised Cloud Storage',
    status: 'Archived', sc: '', pushed: 'May 2024',
    stack: ['Java', 'Docker', 'Kubernetes', 'MySQL', 'Microservices'],
    desc: 'Microservices-based secure file storage and sharing platform with audit logging, Docker/Kubernetes orchestration, and RESTful APIs.',
    highlights: [
      'Microservices architecture with Docker',
      'Kubernetes orchestration',
      'Secure file storage & sharing',
      'Full audit logging system',
    ],
    metrics: [{ l: 'Services', v: '5+' }, { l: 'Orchestration', v: 'K8s' }, { l: 'Storage', v: 'MySQL' }, { l: 'Audit Log', v: '✓' }],
    repo: 'https://github.com/VIRTUALGOD325/CipherShare',
  },
];

const seed = (s: number, n: number) => {
  const out: number[] = []; let v = s;
  for (let i = 0; i < n; i++) { v = (v * 1664525 + 1013904223) >>> 0; out.push((v % 60) + 20); }
  return out;
};

function Sparkline({ data, color }: { data: number[]; color: string }) {
  const W = 56, H = 18;
  const min = Math.min(...data), range = (Math.max(...data) - min) || 1;
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * W},${H - ((v - min) / range) * H}`).join(' ');
  return <svg width={W} height={H}><polyline points={pts} fill="none" stroke={color} strokeWidth="1.2" strokeLinejoin="round" /></svg>;
}

const scColor = (sc: string) => ({ green: 'var(--green)', blue: 'var(--blue)', amber: 'var(--amber)' }[sc] ?? 'var(--dim)');

const DOMAINS = ['All', 'AI / ML', 'AI / Web', 'Data Eng', 'Backend', 'Android / IoT', 'IoT / Web'];

type Project = typeof PROJECTS[0];

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');

  const list = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.domain === filter);

  const toggle = (p: Project) => setActive(prev => prev?.id === p.id ? null : p);

  return (
    <section id="projects">
      <div className="pf-container">
        <div style={{ marginBottom: 40 }}>
          <div className="sec-num">/03 · Projects</div>
          <div className="sec-title">Featured Repositories</div>
        </div>

        {/* Domain filters */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
          {DOMAINS.map(d => (
            <button
              key={d} onClick={() => { setFilter(d); setActive(null); }}
              className="pf-btn"
              style={{
                padding: '4px 12px', fontSize: 11,
                borderColor: filter === d ? 'var(--green)' : 'var(--line)',
                color: filter === d ? 'var(--green)' : 'var(--muted)',
              }}
            >{d}</button>
          ))}
        </div>

        {/* Grid: table + optional detail */}
        <div className="proj-split" style={{ display: 'grid', gridTemplateColumns: active ? '1fr 1fr' : '1fr', gap: 16, alignItems: 'start' }}>

          {/* Watchlist table */}
          <div className="cell">
            <div className="cell-head">
              <div className="lbl">Repository Watchlist</div>
              <span style={{ fontSize: 11, color: 'var(--dim)' }}>{list.length} repos</span>
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ width: 68 }}>Ticker</th>
                  <th>Name</th>
                  <th>Domain</th>
                  <th>Status</th>
                  <th style={{ width: 66 }}>Activity</th>
                  <th style={{ width: 28 }}></th>
                </tr>
              </thead>
              <tbody>
                {list.map((p, i) => (
                  <tr key={p.id} className={`clickable ${active?.id === p.id ? 'row-active' : ''}`} onClick={() => toggle(p)}>
                    <td style={{ color: 'var(--dim)', fontSize: 11, fontFamily: 'var(--font-mono)' }}>{p.ticker}</td>
                    <td style={{ color: 'var(--text)', fontWeight: 500 }}>{p.title}</td>
                    <td><span className="chip">{p.domain}</span></td>
                    <td>
                      <span style={{ color: scColor(p.sc), fontSize: 11 }}>● {p.status}</span>
                    </td>
                    <td><Sparkline data={seed(i * 13 + 7, 10)} color={scColor(p.sc)} /></td>
                    <td>
                      <ChevronRight size={13} style={{ color: active?.id === p.id ? 'var(--green)' : 'var(--dim)', transform: active?.id === p.id ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Detail panel */}
          {active && (
            <div className="cell">
              <div className="cell-head">
                <div className="lbl">
                  <span style={{ color: 'var(--dim)' }}>{active.ticker}</span>
                  <span>{active.title}</span>
                  <span className={`chip ${active.sc}`}>{active.status}</span>
                </div>
                <button onClick={() => setActive(null)} style={{ background: 'none', border: 'none', color: 'var(--dim)', cursor: 'pointer', padding: 2, display: 'flex' }}>
                  <X size={13} />
                </button>
              </div>
              <div className="cell-body">
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, color: 'var(--text)', marginBottom: 6, fontStyle: 'italic', lineHeight: 1.2 }}>{active.tagline}</div>
                <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16 }}>{active.desc}</p>

                {/* Stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                  {active.stack.map(t => <span key={t} className="chip blue">{t}</span>)}
                </div>

                {/* Highlights */}
                <div style={{ marginBottom: 18 }}>
                  <div style={{ fontSize: 10, color: 'var(--dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Highlights</div>
                  {active.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, fontSize: 12, color: 'var(--muted)', marginBottom: 6 }}>
                      <span style={{ color: 'var(--green)', flexShrink: 0 }}>▸</span> {h}
                    </div>
                  ))}
                </div>

                {/* Metrics 2×2 */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 18 }}>
                  {active.metrics.map(m => (
                    <div key={m.l} style={{ background: 'var(--bg-2)', border: '1px solid var(--line)', padding: '10px 12px' }}>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: 'var(--text)' }}>{m.v}</div>
                      <div style={{ fontSize: 10, color: 'var(--dim)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 2 }}>{m.l}</div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div style={{ display: 'flex', gap: 8 }}>
                  <a href={active.repo} target="_blank" rel="noreferrer" className="pf-btn" style={{ fontSize: 11 }}>
                    <Github size={12} /> Repo
                  </a>
                  {active.live && (
                    <a href={active.live} target="_blank" rel="noreferrer" className="pf-btn pf-btn-primary" style={{ fontSize: 11 }}>
                      <ExternalLink size={12} /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
