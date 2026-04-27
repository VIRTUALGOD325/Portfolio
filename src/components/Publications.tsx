import { BookOpen, Award } from 'lucide-react';

const PAPERS = [
  {
    id: 'PUB-001',
    title: 'DocInsight: AI-Powered Document Originality Detection Using SBERT and Stylometric Analysis',
    venue: 'Springer LNNS — SmartCom 2026',
    date: 'Mar 2026',
    status: 'Published',
    sc: 'green',
    award: 'Best Paper Award @ SSIC 2025',
    tags: ['SBERT', 'NLP', 'Plagiarism Detection', 'Stylometric Analysis', 'Citation Masking'],
    desc: 'Presents a dual-pipeline approach combining SBERT semantic similarity scoring and stylometric fingerprinting for AI-generated document originality detection, with a novel citation-masking technique to handle reference-heavy academic texts.',
  },
  {
    id: 'PUB-002',
    title: 'Automated Multi-Bank Credit Card Statement Parsing: A Modular Pipeline Approach',
    venue: 'SSIC 2025 Conference Proceedings',
    date: 'Dec 2025',
    status: 'Published',
    sc: 'green',
    award: null,
    tags: ['Data Engineering', 'PDF Parsing', 'Financial Technology', 'Python', 'Modular Architecture'],
    desc: 'A modular pipeline for automated extraction of structured financial data from heterogeneous credit card statement formats across multiple Indian banking institutions, with a GUI application for non-technical users.',
  },
];

export default function Publications() {
  return (
    <section id="publications">
      <div className="pf-container">
        <div style={{ marginBottom: 40 }}>
          <div className="sec-num">/05 · Research</div>
          <div className="sec-title">Publications</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {PAPERS.map(p => (
            <div key={p.id} className="cell">
              <div className="cell-head">
                <div className="lbl">
                  <BookOpen size={12} />
                  <span style={{ color: 'var(--dim)' }}>{p.id}</span>
                  <span>{p.venue}</span>
                </div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span style={{ fontSize: 11, color: 'var(--dim)' }}>{p.date}</span>
                  <span className={`chip ${p.sc}`}>{p.status}</span>
                </div>
              </div>
              <div className="cell-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 10 }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--text)', lineHeight: 1.3, fontStyle: 'italic' }}>
                    {p.title}
                  </div>
                  {p.award && (
                    <span className="chip amber" style={{ flexShrink: 0, alignSelf: 'flex-start' }}>
                      <Award size={9} /> {p.award}
                    </span>
                  )}
                </div>
                <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.75, marginBottom: 14 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tags.map(t => <span key={t} className="chip">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
