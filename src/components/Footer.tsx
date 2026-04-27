import { Code2, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', padding: '22px 0', background: 'var(--bg-1)' }}>
      <div className="pf-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--dim)' }}>
          <Code2 size={13} style={{ color: 'var(--green)' }} />
          <span>tanishq.dev</span>
          <span style={{ color: 'var(--line-2)' }}>·</span>
          <span>React · Vite · TypeScript</span>
        </div>
        <div style={{ display: 'flex', gap: 16, fontSize: 11, color: 'var(--dim)', alignItems: 'center' }}>
          <a href="https://github.com/VIRTUALGOD325" target="_blank" rel="noreferrer" style={{ color: 'var(--dim)', transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--dim)')}>GitHub</a>
          <a href="https://linkedin.com/in/tanishq-nabar-4768ab315" target="_blank" rel="noreferrer" style={{ color: 'var(--dim)', transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--dim)')}>LinkedIn</a>
          <a href="/" style={{ color: 'var(--dim)', transition: 'color 0.15s', display: 'flex', alignItems: 'center', gap: 4 }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--green)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--dim)')}>
            <Terminal size={11} /> Terminal Mode
          </a>
        </div>
      </div>
    </footer>
  );
}
