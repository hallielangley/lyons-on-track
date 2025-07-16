import { Typography, Card, CardContent, Box, Container, Grid, Paper, useTheme, useMediaQuery } from '@mui/material'
import ConcernsAndSolutions from './ConcernsAndSolutions'

function Solutions() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Container maxWidth="lg" sx={{ px: isMobile ? 2 : 3 }}>
      <ConcernsAndSolutions />
    </Container>
  )
}

export default Solutions 