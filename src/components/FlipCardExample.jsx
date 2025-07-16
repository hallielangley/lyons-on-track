import { Typography, Grid, Box } from '@mui/material'
import { useResponsive } from '../hooks/useResponsive'
import FlipCard from './FlipCard'

function FlipCardExample() {
  const { isMobile, getTypographyVariant } = useResponsive()

  const flipCards = [
    {
      front: (
        <Typography variant={getTypographyVariant('h6', 'h5')} sx={{ color: 'white' }}>
          Click to Learn More
        </Typography>
      ),
      back: (
        <Typography variant="body2" sx={{ color: 'white' }}>
          This is the back of the card with additional information!
        </Typography>
      )
    },
    {
      front: (
        <Typography variant={getTypographyVariant('h6', 'h5')} sx={{ color: 'white' }}>
          Our Vision
        </Typography>
      ),
      back: (
        <Typography variant="body2" sx={{ color: 'white' }}>
          We're running to carry your agenda, not push our own.
        </Typography>
      )
    },
    {
      front: (
        <Typography variant={getTypographyVariant('h6', 'h5')} sx={{ color: 'white' }}>
          Top Priority
        </Typography>
      ),
      back: (
        <Typography variant="body2" sx={{ color: 'white' }}>
          Online sewer bill payments for your convenience.
        </Typography>
      )
    }
  ]

  return (
    <Box sx={{ p: 3, mb: 3 }}>
      <Typography variant={getTypographyVariant('h4', 'h3')} gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        Interactive Flip Cards
      </Typography>
      <Grid container spacing={3}>
        {flipCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FlipCard 
              front={card.front}
              back={card.back}
              height={isMobile ? 150 : 200}
              width={isMobile ? '280px' : '320px'}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default FlipCardExample 