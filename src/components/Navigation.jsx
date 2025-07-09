import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav style={{
      backgroundColor: '#f8f9fa',
      padding: '1rem 0',
      marginBottom: '2rem',
      borderBottom: '1px solid #e9ecef'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#646cff' }}>
          Lyons on Track
        </div>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link 
            to="/" 
            style={{
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              color: isActive('/') ? 'white' : '#646cff',
              backgroundColor: isActive('/') ? '#646cff' : 'transparent',
              transition: 'all 0.3s ease'
            }}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            style={{
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              color: isActive('/about') ? 'white' : '#646cff',
              backgroundColor: isActive('/about') ? '#646cff' : 'transparent',
              transition: 'all 0.3s ease'
            }}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            style={{
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              color: isActive('/contact') ? 'white' : '#646cff',
              backgroundColor: isActive('/contact') ? '#646cff' : 'transparent',
              transition: 'all 0.3s ease'
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 