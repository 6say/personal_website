import Card from '../components/Card.jsx'
import TypingAnimation from '../components/TypingAnimation.jsx'

function Resume() {
  return (
    <section>
      <p style={{ color: '#4ec9b0', fontSize: '0.875rem', fontWeight: 'bold', letterSpacing: '0.05em', marginBottom: '2rem' }}>
        <TypingAnimation text="$ cat resume.md" speed={60} />
      </p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ margin: 0 }}>Resume</h2>
        <a
          href="/resume.md"
          className="btn-secondary"
          download
        >
          Download PDF
        </a>
      </div>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <Card title="Education">
          <div>
            <p style={{ margin: 0, marginBottom: '0.5rem' }}>
              B.Eng. Computer Engineering — Concordia University, Montréal, Québec
            </p>
            <p style={{ margin: 0, color: 'rgba(128,128,128,1)', fontSize: '0.875rem' }}>
              Expected graduation: 2030
            </p>
          </div>
        </Card>

        <Card title="Homelab Project">
          <p style={{ margin: 0 }}>
            Maintain a homelab: ZimaOS,
            Dockerized services, reverse proxy, DNS, and storage management. Ongoing
            documentation of configs. See my <a href="/troubleshooting.md">troubleshooting notes</a>.
          </p>
        </Card>

        <Card title="Experience">
          <p style={{ margin: 0, color: 'rgba(128,128,128,1)' }}>
            ...
          </p>
        </Card>
      </div>
    </section>
  )
}

export default Resume
