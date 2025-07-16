import { Link, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { useResponsive } from '../hooks/useResponsive'
import { responsiveStyles, getResponsiveValue } from '../utils/responsiveStyles'

function Navigation() {
  const location = useLocation()
  const { isMobile, getButtonSize, getNavText } = useResponsive()

  const isActive = (path) => {
    return location.pathname === path
  }

  const navItems = [
    { path: '/', text: 'Home' },
    { path: '/how-to-vote', text: getNavText('Vote', 'How to Vote') },
    { path: '/solutions', text: 'Solutions' },
    { path: '/about', text: 'About' },
    { path: '/contact', text: 'Contact' },
  ]

  return (
    <AppBar position="static" sx={{ mb: 3 }}>
      <Toolbar sx={{ 
        flexWrap: 'wrap', 
        minHeight: isMobile ? '64px' : 'auto' 
      }}>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1, 
            color: 'white',
            fontSize: getResponsiveValue(responsiveStyles.fontSize.large, isMobile)
          }}
        >
          Lyons on Track
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          gap: getResponsiveValue({ mobile: 0.5, desktop: 1 }, isMobile), 
          flexWrap: 'wrap',
          width: isMobile ? '100%' : 'auto',
          justifyContent: isMobile ? 'center' : 'flex-end',
          mt: isMobile ? 1 : 0
        }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              color="inherit"
              size={getButtonSize()}
              variant={isActive(item.path) ? 'contained' : 'text'}
              sx={{
                backgroundColor: isActive(item.path) ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                fontSize: getResponsiveValue(responsiveStyles.fontSize.small, isMobile),
                minWidth: isMobile ? 'auto' : '64px',
                px: getResponsiveValue({ mobile: 1, desktop: 2 }, isMobile)
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation 