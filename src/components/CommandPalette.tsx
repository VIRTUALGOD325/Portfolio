import { useState, useEffect, useRef } from 'react';
import { Search, Hash, ExternalLink, Mail, Github, Linkedin, FileText, Terminal } from 'lucide-react';

interface CmdItem {
  id: string;
  label: string;
  group: string;
  icon: React.ReactNode;
  action: () => void;
}

export default function CommandPalette({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  const allItems: CmdItem[] = [
    { id: 'about',   group: 'Navigate', label: 'About',             icon: <Hash size={13}/>,     action: () => scroll('about') },
    { id: 'exp',     group: 'Navigate', label: 'Work / Experience',  icon: <Hash size={13}/>,     action: () => scroll('experience') },
    { id: 'proj',    group: 'Navigate', label: 'Projects',           icon: <Hash size={13}/>,     action: () => scroll('projects') },
    { id: 'skills',  group: 'Navigate', label: 'Skills',             icon: <Hash size={13}/>,     action: () => scroll('skills') },
    { id: 'pubs',    group: 'Navigate', label: 'Research Papers',    icon: <Hash size={13}/>,     action: () => scroll('publications') },
    { id: 'contact', group: 'Navigate', label: 'Contact',            icon: <Hash size={13}/>,     action: () => scroll('contact') },
    { id: 'gh',      group: 'Links',    label: 'GitHub — VIRTUALGOD325',           icon: <Github size={13}/>,    action: () => { window.open('https://github.com/VIRTUALGOD325', '_blank'); onClose(); } },
    { id: 'li',      group: 'Links',    label: 'LinkedIn — tanishq-nabar',         icon: <Linkedin size={13}/>,  action: () => { window.open('https://linkedin.com/in/tanishq-nabar-4768ab315', '_blank'); onClose(); } },
    { id: 'em',      group: 'Links',    label: 'Email — tanishqnabar10@gmail.com', icon: <Mail size={13}/>,      action: () => { window.location.href = 'mailto:tanishqnabar10@gmail.com'; onClose(); } },
    { id: 'cv',      group: 'Links',    label: 'Download Resume',                  icon: <FileText size={13}/>,  action: () => { window.open('/resume.pdf', '_blank'); onClose(); } },
    { id: 'term',    group: 'Mode',     label: 'Switch to Terminal Mode',           icon: <Terminal size={13}/>,  action: () => { window.location.href = '/'; } },
    { id: 'ext',     group: 'Mode',     label: 'Open Terminal in new tab',          icon: <ExternalLink size={13}/>, action: () => { window.open('/', '_blank'); onClose(); } },
  ];

  const filtered = query
    ? allItems.filter(i => i.label.toLowerCase().includes(query.toLowerCase()))
    : allItems;

  useEffect(() => { inputRef.current?.focus(); }, []);
  useEffect(() => { setFocused(0); }, [query]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setFocused(f => Math.min(f + 1, filtered.length - 1)); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setFocused(f => Math.max(f - 1, 0)); }
    if (e.key === 'Enter')     { filtered[focused]?.action(); }
    if (e.key === 'Escape')    { onClose(); }
  };

  const groups = filtered.reduce((acc, item) => {
    if (!acc[item.group]) acc[item.group] = [];
    acc[item.group].push(item);
    return acc;
  }, {} as Record<string, CmdItem[]>);

  let gi = 0;

  return (
    <div className="cmd-backdrop" onClick={onClose}>
      <div className="cmd-modal" onClick={e => e.stopPropagation()}>
        <div className="cmd-input-row">
          <Search size={13} style={{ color: 'var(--dim)', flexShrink: 0 }} />
          <input
            ref={inputRef}
            className="cmd-input"
            placeholder="Search commands..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKey}
          />
          <span style={{ fontSize: 10, color: 'var(--dim)', border: '1px solid var(--line)', padding: '2px 6px' }}>ESC</span>
        </div>
        <div className="cmd-list">
          {Object.entries(groups).map(([group, items]) => (
            <div key={group}>
              <div className="cmd-section">{group}</div>
              {items.map(item => {
                const idx = gi++;
                return (
                  <div
                    key={item.id}
                    className={`cmd-item ${focused === idx ? 'cmd-focused' : ''}`}
                    onClick={item.action}
                    onMouseEnter={() => setFocused(idx)}
                  >
                    <div className="cmd-icon">{item.icon}</div>
                    {item.label}
                  </div>
                );
              })}
            </div>
          ))}
          {filtered.length === 0 && (
            <div style={{ padding: '24px 16px', color: 'var(--dim)', fontSize: 12, textAlign: 'center' }}>No results</div>
          )}
        </div>
      </div>
    </div>
  );
}
