import { Typography, Card, CardContent, Box, Container, Paper, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material'
import ElectionDayInfo from './ElectionDayInfo'

function HowToVote() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Container maxWidth="lg" sx={{ px: isMobile ? 2 : 3 }}>
      <ElectionDayInfo />
    </Container>
  )
}

export default HowToVote 