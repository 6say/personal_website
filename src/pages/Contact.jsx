import TypingAnimation from '../components/TypingAnimation'

function Contact() {
  return (
    <section style={{ maxWidth: '48rem' }}>
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

export default Contact
