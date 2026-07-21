function Card({ title, children, className = '' }) {
  return (
    <div style={{ backgroundColor: '#141414', border: '1px solid rgba(212,212,212,0.1)', borderRadius: '0.5rem', padding: '1.25rem', transition: 'all 0.2s', cursor: 'pointer' }}>
      {title && <h3 style={{ color: '#4ec9b0', fontWeight: 'bold', marginBottom: '0.75rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</h3>}
      {children}
    </div>
  )
}

export default Card
