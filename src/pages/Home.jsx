import { Link } from 'react-router-dom'
import TypingAnimation from '../components/TypingAnimation'

function Home() {
  return (
    <section style={{ maxWidth: '48rem' }}>
      <p style={{ color: '#4ec9b0', fontSize: '0.875rem', fontWeight: 'bold', letterSpacing: '0.05em', marginBottom: '2rem' }}>
        <TypingAnimation text="$ whoami" speed={60} />
      </p>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '0.5rem',
          border: '2px solid #7dd3fc',
          overflow: 'hidden',
          flexShrink: 0,
          backgroundColor: '#141414',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img
            src="https://ui-avatars.com/api/?name=Ndiaga+Cissé&background=7dd3fc&color=0f0f0f&bold=true&size=120"
            alt="Ndiaga Cissé"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div style={{ flex: 1, minWidth: '200px' }}>
          <h1 style={{ margin: '0 0 0.5rem 0' }}>Ndiaga Cissé</h1>
          <p style={{ color: '#4ec9b0', margin: '0 0 0.75rem 0', fontSize: '0.95rem' }}>
            Computer Engineering Student @Concordia
          </p>
          <p style={{ color: 'rgba(212,212,212,0.7)', margin: '0', fontSize: '0.875rem' }}>
            Tinkerer at heart • Self learner • Linux enthusiast
          </p>
        </div>
      </div>

      <div style={{ marginTop: '2rem', marginBottom: '2.5rem' }}>
        <p style={{ marginBottom: '1.25rem' }}>
          Computer Engineering student, Linux tinkerer, and homelab builder.
          I like turning bare metal into something useful and breaking it
          along the way so I can learn how to fix it.
        </p>
        <p style={{ marginBottom: '1.25rem', color: 'rgba(212,212,212,0.8)' }}>
          Currently learning DevOps basics.<br/>
          This site is proof I can occasionally leave the terminal.
        </p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', paddingTop: '1rem' }}>
        <Link to="/resume" className="btn-primary">
          View resume
        </Link>
        <Link to="/contact" className="btn-secondary">
          Get in touch
        </Link>
      </div>
    </section>
  )
}

export default Home
