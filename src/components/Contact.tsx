import { Mail, Github, Linkedin, Phone, MapPin, Send } from 'lucide-react';

const LINKS = [
  { icon: <Mail size={13}/>,    key: 'Email',    val: 'tanishqnabar10@gmail.com',              href: 'mailto:tanishqnabar10@gmail.com' },
  { icon: <Github size={13}/>,  key: 'GitHub',   val: 'github.com/VIRTUALGOD325',               href: 'https://github.com/VIRTUALGOD325' },
  { icon: <Linkedin size={13}/>,key: 'LinkedIn', val: 'linkedin.com/in/tanishq-nabar-4768ab315',href: 'https://linkedin.com/in/tanishq-nabar-4768ab315' },
  { icon: <Phone size={13}/>,   key: 'Phone',    val: '+91 7977927224',                         href: 'tel:+917977927224' },
  { icon: <MapPin size={13}/>,  key: 'Location', val: 'Mumbai, Maharashtra, India',             href: null },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="pf-container">
        <div style={{ marginBottom: 40 }}>
          <div className="sec-num">/06 · Contact</div>
          <div className="sec-title">Get in Touch</div>
        </div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, alignItems: 'start' }}>

          {/* Contact table */}
          <div className="cell">
            <div className="cell-head">
              <div className="lbl"><Send size={12}/> Contact Info</div>
              <span className="chip green"><span className="dot" style={{ width: 5, height: 5 }} /> Responds &lt; 24h</span>
            </div>
            <table className="data-table">
              <tbody>
                {LINKS.map(l => (
                  <tr key={l.key} style={{ cursor: 'default' }}>
                    <td style={{ width: 96, color: 'var(--dim)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>{l.icon}{l.key}</div>
                    </td>
                    <td>
                      {l.href
                        ? <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{ color: 'var(--blue)', fontSize: 12 }}>{l.val}</a>
                        : <span style={{ color: 'var(--muted)', fontSize: 12 }}>{l.val}</span>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="cell">
            <div className="cell-head"><div className="lbl">// Note</div></div>
            <div className="cell-body">
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: 'var(--text)', marginBottom: 14, lineHeight: 1.3, fontStyle: 'italic' }}>
                Open to AI/ML, Backend &amp; Android roles
              </div>
              <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.85, marginBottom: 24 }}>
                Final-year BTech student graduating July 2026. Actively seeking full-time opportunities in Mumbai, Pune, or remote.
                <br /><br />
                I'm particularly interested in roles involving AI/ML pipelines, backend systems, or Android development.
                Response time is typically within 24 hours.
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <a href="mailto:tanishqnabar10@gmail.com" className="pf-btn pf-btn-primary" style={{ fontSize: 11 }}>
                  <Mail size={12} /> Send Email
                </a>
                <a href="/resume.pdf" download="Tanishq_Nabar_Resume.pdf" className="pf-btn" style={{ fontSize: 11 }}>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
