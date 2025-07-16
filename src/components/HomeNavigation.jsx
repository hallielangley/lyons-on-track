import { Link } from 'react-router-dom'
import { Button, Box, Grid } from '@mui/material'
import { useResponsive } from '../hooks/useResponsive'
import { responsiveStyles, getResponsiveValue } from '../utils/responsiveStyles'

function HomeNavigation() {
  const { isMobile, getButtonSize, getNavText } = useResponsive()

  const navItems = [
    { path: '/how-to-vote', text: getNavText('Vote', 'How to Vote'), color: 'primary' },
    { path: '/solutions', text: 'Solutions', color: 'secondary' },
    { path: '/about', text: 'About Our Candidates', color: 'success' },
    { path: '/contact', text: 'Contact Us', color: 'info' },
  ]

  return (
    <Box sx={{ my: getResponsiveValue({ mobile: 4, desktop: 6 }, isMobile) }}>
      <Grid container spacing={getResponsiveValue({ mobile: 2, desktop: 3 }, isMobile)} justifyContent="center">
        {navItems.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.path}>
            <Button
              component={Link}
              to={item.path}
              variant="contained"
              color={item.color}
              size="large"
              fullWidth
              sx={{
                py: getResponsiveValue({ mobile: 2, desktop: 3 }, isMobile),
                px: getResponsiveValue({ mobile: 2, desktop: 4 }, isMobile),
                fontSize: getResponsiveValue(responsiveStyles.fontSize.large, isMobile),
                fontWeight: 'bold',
                textTransform: 'none',
                borderRadius: 2,
                boxShadow: 3,
                '&:hover': {
                  boxShadow: 6,
                  transform: 'translateY(-2px)',
                  transition: 'all 0.2s ease-in-out'
                }
              }}
            >
              {item.text}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default HomeNavigation 