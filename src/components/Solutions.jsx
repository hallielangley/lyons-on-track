import { Typography, Card, CardContent, Box, Container, Grid, Paper, useTheme, useMediaQuery } from '@mui/material'
import ConcernsAndSolutions from './ConcernsAndSolutions'

function Solutions() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Container maxWidth="lg" sx={{ px: isMobile ? 2 : 3 }}>
      <ConcernsAndSolutions />
      <Typography 
        variant={isMobile ? "h4" : "h3"} 
        component="h1" 
        gutterBottom 
        sx={{ 
          textAlign: 'center', 
          mb: isMobile ? 3 : 4,
          fontSize: isMobile ? '2rem' : '3rem'
        }}
      >
        Our Solutions
      </Typography>

      <Grid container spacing={isMobile ? 2 : 4}>
        {/* Sewer Bill Online Payment */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: isMobile ? 2 : 3 }}>
              <Typography variant={isMobile ? "h6" : "h5"} component="h2" gutterBottom>
                Sewer Bill Being Paid Online
              </Typography>
              <Typography variant="body1" sx={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
                We'll build a new, modern website where residents can pay their sewer bills online. In-person payments will still be available.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Speeding Issues */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: isMobile ? 2 : 3 }}>
              <Typography variant={isMobile ? "h6" : "h5"} component="h2" gutterBottom>
                Speeding Issues
              </Typography>
              <Typography variant="body1" sx={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
                We plan to add tree-lined sidewalks that naturally slow down traffic and make our town more walkable and beautiful.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Stray Cat Issue */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: isMobile ? 2 : 3 }}>
              <Typography variant={isMobile ? "h6" : "h5"} component="h2" gutterBottom>
                Stray Cat Issue
              </Typography>
              <Typography variant="body1" sx={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
                We want to partner with local nonprofits to start a humane catch-and-release program for stray cats.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Stormwater & Snow Concerns */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: isMobile ? 2 : 3 }}>
              <Typography variant={isMobile ? "h6" : "h5"} component="h2" gutterBottom>
                Stormwater & Snow Concerns
              </Typography>
              <Typography variant="body1" sx={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
                We'll work with nearby boroughs and townships to share costs and improve snow removal and salting. We will also invest in better stormwater systems to reduce flooding.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Blighted Properties */}
        <Grid item xs={12}>
          <Card>
            <CardContent sx={{ p: isMobile ? 2 : 3 }}>
              <Typography variant={isMobile ? "h6" : "h5"} component="h2" gutterBottom>
                Blighted Properties
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
                We support a new ordinance to address neglected properties.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
                We also want to shift from a property tax to a land value tax, which rewards productive use and could lower taxes on average for most residents.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
                We're committed to restoring historic sites such as with the old fire company building.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2, fontSize: isMobile ? '0.8rem' : '0.875rem' }}>
                Note: The image reference shows "Old Firehouse Building.jpg" which would be displayed here.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Solutions 