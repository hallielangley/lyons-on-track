import { Typography, Grid, Box, Container } from '@mui/material'
import { useResponsive } from '../hooks/useResponsive'
import FlipCard from './FlipCard'

function ConcernsAndSolutions() {
  const { isMobile, getTypographyVariant, getSpacing } = useResponsive()

  const concernsAndSolutions = [
    {
      concern: (
        <Typography variant={getTypographyVariant('h6', 'h5')} sx={{ color: 'white', textAlign: 'center' }}>
          Sewer Bill Online Payment
        </Typography>
      ),
      solution: (
        <Typography variant="body2" sx={{ color: 'white', textAlign: 'center' }}>
          We'll build a new, modern website where residents can pay their sewer bills online. In-person payments will still be available.
        </Typography>
      )
    },
    {
      concern: (
        <Typography variant={getTypographyVariant('h6', 'h5')} sx={{ color: 'white', textAlign: 'center' }}>
          Speeding Issues
        </Typography>
      ),
      solution: (
        <Typography variant="body2" sx={{ color: 'white', textAlign: 'center' }}>
          We plan to add tree-lined sidewalks that naturally slow down traffic and make our town more walkable and beautiful.
        </Typography>
      )
    },
    {
      concern: (
        <Typography variant={getTypographyVariant('h6', 'h5')} sx={{ color: 'white', textAlign: 'center' }}>
          Stray Cat Issue
        </Typography>
      ),
      solution: (
        <Typography variant="body2" sx={{ color: 'white', textAlign: 'center' }}>
          We want to partner with local nonprofits to start a humane catch-and-release program for stray cats.
        </Typography>
      )
    },
    {
      concern: (
        <Typography variant={getTypographyVariant('h6', 'h5')} sx={{ color: 'white', textAlign: 'center' }}>
          Stormwater & Snow
        </Typography>
      ),
      solution: (
        <Typography variant="body2" sx={{ color: 'white', textAlign: 'center' }}>
          We'll work with nearby boroughs and townships to share costs and improve snow removal and salting. We will also invest in better stormwater systems to reduce flooding.
        </Typography>
      )
    },
    {
      concern: (
        <Typography variant={getTypographyVariant('h6', 'h5')} sx={{ color: 'white', textAlign: 'center' }}>
          Blighted Properties
        </Typography>
      ),
      solution: (
        <Typography variant="body2" sx={{ color: 'white', textAlign: 'center' }}>
          We support a new ordinance to address neglected properties. We also want to shift from a property tax to a land value tax, which rewards productive use and could lower taxes on average for most residents.
        </Typography>
      )
    }
  ]

  return (
    <Container maxWidth="lg" sx={{ px: isMobile ? 2 : 3 }}>
      <Typography 
        variant={getTypographyVariant('h4', 'h3')} 
        component="h1" 
        gutterBottom 
        sx={{ 
          textAlign: 'center', 
          mb: getSpacing(3, 4),
          fontSize: isMobile ? '2rem' : '3rem'
        }}
      >
        Top Concerns & Solutions
      </Typography>

      <Typography 
        variant="body1" 
        sx={{ 
          textAlign: 'center', 
          mb: getSpacing(3, 4),
          fontSize: isMobile ? '0.9rem' : '1rem'
        }}
      >
        Click on each concern to see our proposed solution
      </Typography>

      <Grid container spacing={3}>
        {concernsAndSolutions.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FlipCard 
              front={item.concern}
              back={item.solution}
              height={isMobile ? 180 : 220}
              width={isMobile ? '280px' : '320px'}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default ConcernsAndSolutions 