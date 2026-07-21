import { NavLink } from 'react-router-dom'
import InteractivePrompt from './InteractivePrompt'

const links = [
  { to: '/', label: 'home' },
  { to: '/skills', label: 'skills' },
  { to: '/resume', label: 'resume' },
  { to: '/about', label: 'about' },
  { to: '/contact', label: 'contact' },
]

function Navbar() {
  return (
    <header style={{
      backgroundColor: '#0f0f0f',
      borderBottom: '1px solid rgba(78,201,176,0.2)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backdropFilter: 'blur(10px)',
      backgroundImage: 'linear-gradient(180deg, rgba(125,211,252,0.05) 0%, rgba(78,201,176,0.02) 100%)'
    }}>
      <nav style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2rem'
      }}>
        <InteractivePrompt />
        <ul style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
          gap: '0.5rem',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                style={({ isActive }) => ({
                  display: 'block',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  fontFamily: "'JetBrains Mono', 'Fira Code', 'Source Code Pro', monospace",
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                  backgroundColor: isActive ? '#7dd3fc' : 'transparent',
                  color: isActive ? '#0f0f0f' : '#d4d4d4',
                  border: isActive ? '2px solid #7dd3fc' : '2px solid transparent',
                })}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
