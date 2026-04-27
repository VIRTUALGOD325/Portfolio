const TERMINAL_LINES = [
  { text: '$ whoami',                                  cls: 'cmd' },
  { text: '> tanishq_nabar',                           cls: 'out' },
  { text: '',                                          cls: '' },
  { text: '$ cat profile.txt',                         cls: 'cmd' },
  { text: '> Final-year BTech Computer Engineering',   cls: 'out' },
  { text: '> student @ NMIMS, Mumbai.',                cls: 'out' },
  { text: '>',                                         cls: 'out' },
  { text: '> Work spans AI/ML pipelines, backend',     cls: 'out' },
  { text: '> systems & Android apps — focused on',     cls: 'out' },
  { text: '> practical, end-to-end software.',         cls: 'out' },
  { text: '',                                          cls: '' },
  { text: '$ git log --oneline capstone',              cls: 'cmd' },
  { text: '> a3f9b12  DocInsight — SBERT + stylometric', cls: 'out' },
  { text: '>         dual-pipeline originality system', cls: 'out' },
  { text: '>',                                         cls: 'out' },
  { text: '> → Best Paper Award @ SSIC 2025',          cls: 'award' },
  { text: '> → Published in Springer LNNS 2026',       cls: 'award' },
  { text: '',                                          cls: '' },
  { text: '$ echo $CURRENT_ROLE',                      cls: 'cmd' },
  { text: '> Full Stack Dev Intern @ Eduprime Tech',   cls: 'out' },
  { text: '> Building browser-based Arduino IDE',      cls: 'out' },
];

const IDENTITY = [
  { key: 'Name',       val: 'Tanishq Nabar',                    color: 'var(--text)' },
  { key: 'Degree',     val: 'BTech Computer Engineering',        color: 'var(--text)' },
  { key: 'College',    val: 'NMIMS, Mumbai',                     color: 'var(--text)' },
  { key: 'Graduation', val: 'July 2026',                         color: 'var(--amber)' },
  { key: 'Location',   val: 'Mumbai, MH, India',                 color: 'var(--text)' },
  { key: 'Status',     val: '● Available (Jun 2026)',            color: 'var(--green)' },
  { key: 'Seeking',    val: 'AI/ML · Backend · Android roles',   color: 'var(--blue)' },
  { key: 'GitHub',     val: 'github.com/VIRTUALGOD325',          color: 'var(--blue)', href: 'https://github.com/VIRTUALGOD325' },
];

export default function About() {
  return (
    <section id="about">
      <div className="pf-container">
        <div style={{ marginBottom: 40 }}>
          <div className="sec-num">/01 · About</div>
          <div className="sec-title">Background & Identity</div>
        </div>

        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, alignItems: 'start' }}>

          {/* Terminal block */}
          <div className="cell">
            <div className="cell-head">
              <div className="lbl">
                <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
                </div>
              </div>
              <span>bash — tanishq@portfolio:~</span>
            </div>
            <div style={{
              background: '#05080c', padding: '16px 20px',
              fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1.85,
            }}>
              {TERMINAL_LINES.map((l, i) => (
                <div key={i} style={{
                  color: l.cls === 'cmd' ? 'var(--green)' : l.cls === 'award' ? 'var(--amber)' : l.cls === 'out' ? 'var(--muted)' : 'transparent',
                  minHeight: l.cls === '' ? '1.85em' : undefined,
                  whiteSpace: 'pre',
                }}>
                  {l.text || ' '}
                </div>
              ))}
              <div style={{ color: 'var(--green)', display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
                <span>$</span> <span className="cursor" />
              </div>
            </div>
          </div>

          {/* Identity table */}
          <div className="cell">
            <div className="cell-head">
              <div className="lbl">Identity</div>
              <span className="chip green"><span className="dot" style={{ width: 5, height: 5 }} /> Live</span>
            </div>
            <table className="data-table">
              <tbody>
                {IDENTITY.map(row => (
                  <tr key={row.key} style={{ cursor: 'default' }}>
                    <td style={{ width: 110, color: 'var(--dim)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      {row.key}
                    </td>
                    <td>
                      {row.href
                        ? <a href={row.href} target="_blank" rel="noreferrer" style={{ color: row.color, fontSize: 12 }}>{row.val}</a>
                        : <span style={{ color: row.color, fontSize: 12 }}>{row.val}</span>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
