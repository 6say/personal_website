import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#0f0f0f'
    }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '3rem 1.5rem',
          width: '100%'
        }}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
