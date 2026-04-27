import { useState, useEffect } from 'react';
import { Code2, Terminal } from 'lucide-react';
import CommandPalette from './CommandPalette';

const NAV = [
  { id: 'about',        label: 'About',    num: '01' },
  { id: 'experience',   label: 'Work',     num: '02' },
  { id: 'projects',     label: 'Projects', num: '03' },
  { id: 'skills',       label: 'Skills',   num: '04' },
  { id: 'publications', label: 'Research', num: '05' },
  { id: 'contact',      label: 'Contact',  num: '06' },
];

export default function Navbar() {
  const [time, setTime] = useState('');
  const [cmdOpen, setCmdOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString('en-IN', { hour12: false, timeZone: 'Asia/Kolkata' });
      setTime(t + ' IST');
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setCmdOpen(p => !p); }
      if (e.key === 'Escape') setCmdOpen(false);
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 100,
        background: scrolled ? 'rgba(13,17,23,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
        transition: 'all 0.2s',
      }}>
        <div className="pf-container" style={{ display: 'flex', alignItems: 'center', height: 52, gap: 16 }}>

          {/* Logo */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'var(--text)', flexShrink: 0 }}>
            <Code2 size={16} style={{ color: 'var(--green)' }} />
            <span style={{ fontWeight: 600, fontSize: 13, letterSpacing: '0.03em' }}>tanishq.dev</span>
          </a>

          {/* Centre links */}
          <div className="nav-center" style={{ display: 'flex', gap: 2, flex: 1 }}>
            {NAV.map(l => (
              <a
                key={l.id}
                href={`#${l.id}`}
                style={{ padding: '4px 9px', fontSize: 12, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 4, transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >
                <span style={{ color: 'var(--dim)', fontSize: 10 }}>{l.num} ·</span> {l.label}
              </a>
            ))}
          </div>

          {/* Right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginLeft: 'auto', flexShrink: 0 }}>
            <span style={{ fontSize: 11, color: 'var(--dim)', fontVariantNumeric: 'tabular-nums' }}>{time}</span>
            <button onClick={() => setCmdOpen(true)} className="pf-btn" style={{ padding: '4px 10px' }} title="⌘K">
              ⌘K
            </button>
            <a href="/" className="pf-btn" style={{ padding: '4px 10px', gap: 5 }}>
              <Terminal size={11} /> Terminal
            </a>
          </div>
        </div>
      </nav>

      {cmdOpen && <CommandPalette onClose={() => setCmdOpen(false)} />}
    </>
  );
}
