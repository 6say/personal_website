import TypingAnimation from '../components/TypingAnimation'

function About() {
  return (
    <section style={{ maxWidth: '48rem' }}>
      <p style={{ color: '#4ec9b0', fontSize: '0.875rem', fontWeight: 'bold', letterSpacing: '0.05em', marginBottom: '2rem' }}>
        <TypingAnimation text="$ cat README.md" speed={60} />
      </p>
      <h2>About Me</h2>
      <div style={{ marginTop: '2rem' }}>
        <p style={{ marginBottom: '1.25rem' }}>
          I'm a Computer Engineering student in Montréal who spends more time in a terminal
          than most people spend on their phones. Outside of coursework, I'm usually
          ricing my Hyprland setup, tuning my homelab, or gaming on my Legion Go running SteamOS.
        </p>
        <p style={{ marginBottom: '1.25rem', color: 'rgba(212,212,212,0.8)' }}>
          I care about open source, owning my own infrastructure, and understanding systems
          from the ground up rather than just using them.
        </p>
      </div>
       <p style={{ color: '#4ec9b0', fontSize: '0.875rem', fontWeight: 'bold', letterSpacing: '0.05em', marginBottom: '2rem' }}>
        <TypingAnimation text="$ echo $CONTACT" speed={60} />
      </p>

           <h2>Contact</h2>
      <div style={{ marginTop: '2rem', display: 'grid', gap: '1.25rem' }}>
        <div className="card">
          <p style={{ margin: 0 }}>
            <span style={{ color: '#4ec9b0', fontWeight: 'bold' }}>Email:</span>{' '}
            <a href="mailto:cndiaga2002@gmail.com">
              cndiaga2002@gmail.com
            </a>
          </p>
        </div>
        <div className="card">
          <p style={{ margin: 0 }}>
            <span style={{ color: '#4ec9b0', fontWeight: 'bold' }}>GitHub:</span>{' '}
            <a href="https://github.com/6say" target="_blank" rel="noopener noreferrer">
              github.com/6say
            </a>
          </p>
        </div>
        <div className="card">
          <p style={{ margin: 0 }}>
            <span style={{ color: '#4ec9b0', fontWeight: 'bold' }}>LinkedIn:</span>{' '}
            <a href="https://linkedin.com/in/ndiaga-cissé-53b23b283" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/ndiaga-cissé-53b23b283
            </a>
          </p>
        </div>
      </div>
    </section>
 )
}

export default About
