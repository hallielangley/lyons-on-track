import { Link, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'

function Navigation() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <AppBar position="static" sx={{ mb: 3 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
          Lyons on Track
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Button
            component={Link}
            to="/"
            color="inherit"
            variant={isActive('/') ? 'contained' : 'text'}
            sx={{
              backgroundColor: isActive('/') ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/how-to-vote"
            color="inherit"
            variant={isActive('/how-to-vote') ? 'contained' : 'text'}
            sx={{
              backgroundColor: isActive('/how-to-vote') ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
            }}
          >
            How to Vote
          </Button>
          <Button
            component={Link}
            to="/solutions"
            color="inherit"
            variant={isActive('/solutions') ? 'contained' : 'text'}
            sx={{
              backgroundColor: isActive('/solutions') ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
            }}
          >
            Solutions
          </Button>
          <Button
            component={Link}
            to="/about"
            color="inherit"
            variant={isActive('/about') ? 'contained' : 'text'}
            sx={{
              backgroundColor: isActive('/about') ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
            }}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/contact"
            color="inherit"
            variant={isActive('/contact') ? 'contained' : 'text'}
            sx={{
              backgroundColor: isActive('/contact') ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation 