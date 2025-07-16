import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { useResponsive } from '../hooks/useResponsive'
import { responsiveStyles, getResponsiveValue } from '../utils/responsiveStyles'

function Navigation() {
  const { isMobile } = useResponsive()

  return (
    <AppBar position="static" sx={{ mb: 3 }}>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Typography 
          component={Link}
          to="/"
          variant="h6" 
          sx={{ 
            color: 'white',
            textDecoration: 'none',
            fontSize: getResponsiveValue(responsiveStyles.fontSize.large, isMobile),
            fontWeight: 'bold',
            textAlign: 'center',
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'underline'
            }
          }}
        >
          No Agenda. Here to Listen.
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation 