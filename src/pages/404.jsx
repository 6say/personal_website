import { Link } from 'react-router-dom'
import TypingAnimation from '../components/TypingAnimation'

function NotFoundPage() {
  return (
    <section style={{ maxWidth: '48rem' }}>
      <p style={{ color: '#4ec9b0', fontSize: '0.875rem', fontWeight: 'bold', letterSpacing: '0.05em', marginBottom: '2rem' }}>
        <TypingAnimation text="X whoops" speed={60} />
      </p>
      <h1>404 — Not Found</h1>
      <p style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        The page you're looking for doesn't exist. Maybe it's lost somewhere in the homelab?
      </p>
      <Link to="/" className="btn-primary">
        Back to home
      </Link>
    </section>
  )
}

export default NotFoundPage
