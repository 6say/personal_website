import TypingAnimation from '../components/TypingAnimation'

function About() {
  return (
    <section style={{ maxWidth: '48rem' }}>
      <p style={{ color: '#4ec9b0', fontSize: '0.875rem', fontWeight: 'bold', letterSpacing: '0.05em', marginBottom: '2rem' }}>
        <TypingAnimation text="$ man ndiaga" speed={60} />
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
    </section>
  )
}

export default About
