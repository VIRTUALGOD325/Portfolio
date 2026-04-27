const JOBS = [
  {
    id: 'EXP-001',
    company: 'Eduprime Technologies',
    role: 'Full Stack Developer Intern',
    period: 'Jan 2025 — Present',
    status: 'Active',
    sc: 'green',
    points: [
      'Building a browser-based Arduino IDE with syntax highlighting, serial terminal, and memory leak monitor',
      'Real-time WebSocket pipeline between browser client and connected Arduino boards',
      'Binary upload pipeline — compile → verify → flash — entirely in-browser',
    ],
  },
  {
    id: 'EXP-002',
    company: 'Moringa',
    role: 'Backend Developer Intern',
    period: 'Jun 2024 — Aug 2024',
    status: 'Completed',
    sc: '',
    points: [
      'Designed and implemented RESTful API endpoints using FastAPI and PostgreSQL',
      'Database schema design, query optimisation, and integration test coverage',
      'Wrote OpenAPI spec and internal API documentation for team onboarding',
    ],
  },
  {
    id: 'EXP-003',
    company: 'Skandha',
    role: 'Android Developer Intern',
    period: 'Dec 2023 — Feb 2024',
    status: 'Completed',
    sc: '',
    points: [
      'Developed native Android features in Java using Android SDK and Jetpack libraries',
      'Integrated third-party APIs with offline-first Room-based data sync',
      'Performance tuning — reduced cold-start time and fixed memory leaks in ListAdapters',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="pf-container">
        <div style={{ marginBottom: 40 }}>
          <div className="sec-num">/02 · Experience</div>
          <div className="sec-title">Work History</div>
        </div>

        {/* Summary table */}
        <div className="cell" style={{ marginBottom: 20 }}>
          <div className="cell-head">
            <div className="lbl">Employment Log</div>
            <span style={{ fontSize: 11, color: 'var(--dim)' }}>3 records</span>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Company</th>
                <th>Role</th>
                <th>Period</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {JOBS.map(j => (
                <tr key={j.id} style={{ cursor: 'default' }}>
                  <td style={{ color: 'var(--dim)' }}>{j.id}</td>
                  <td style={{ color: 'var(--text)', fontWeight: 500 }}>{j.company}</td>
                  <td>{j.role}</td>
                  <td style={{ color: 'var(--dim)', whiteSpace: 'nowrap' }}>{j.period}</td>
                  <td><span className={`chip ${j.sc}`}>{j.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detail cards */}
        <div className="exp-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {JOBS.map(j => (
            <div key={j.id} className="cell">
              <div className="cell-head">
                <div className="lbl">
                  <span style={{ color: 'var(--dim)' }}>{j.id}</span>
                  <span>{j.company}</span>
                </div>
                <span className={`chip ${j.sc}`}>{j.status}</span>
              </div>
              <div className="cell-body">
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: 'var(--text)', marginBottom: 4, lineHeight: 1.2, fontStyle: 'italic' }}>{j.role}</div>
                <div style={{ fontSize: 11, color: 'var(--dim)', letterSpacing: '0.06em', marginBottom: 16 }}>{j.period}</div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {j.points.map((pt, i) => (
                    <li key={i} style={{ display: 'flex', gap: 8, fontSize: 12, color: 'var(--muted)', lineHeight: 1.55 }}>
                      <span style={{ color: 'var(--green)', flexShrink: 0 }}>▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
