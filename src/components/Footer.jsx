function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(78,201,176,0.2)',
      backgroundColor: '#0f0f0f',
      textAlign: 'center',
      fontSize: '0.875rem',
      color: 'rgba(212,212,212,0.5)',
      padding: '2rem 1.5rem',
      marginTop: 'auto',
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Source Code Pro', monospace"
    }}>
      <p style={{ margin: 0, lineHeight: 1.6 }}>
        &copy; {new Date().getFullYear()} Ndiaga Cissé — built with
        <span style={{ color: '#7dd3fc' }}> React</span> +
        <span style={{ color: '#7dd3fc' }}> Vite</span> +
        <span style={{ color: '#7dd3fc' }}> Tailwind CSS</span>, and self-hosted on my homelab.
      </p>
    </footer>
  )
}

export default Footer
