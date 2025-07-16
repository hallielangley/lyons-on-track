import { Typography, Card, CardContent, Box, Container, Paper, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material'

function HowToVote() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Container maxWidth="lg" sx={{ px: isMobile ? 2 : 3 }}>
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
        How to Vote
      </Typography>

      {/* Polling Place */}
      <Card sx={{ mb: isMobile ? 3 : 4 }}>
        <CardContent sx={{ p: isMobile ? 2 : 3 }}>
          <Typography variant={isMobile ? "h6" : "h5"} component="h2" gutterBottom>
            Polling Place
          </Typography>
          <Typography variant={isMobile ? "body1" : "h6"} gutterBottom>
            Lyons Borough Hall (316 Kemp St, Lyon Station, PA 19536)
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2, fontSize: isMobile ? '0.8rem' : '0.875rem' }}>
            Note: The image reference shows "Lyons Borough Office.jpg" which would be displayed here.
          </Typography>
        </CardContent>
      </Card>

      {/* Ballot Information */}
      <Paper elevation={3} sx={{ p: isMobile ? 3 : 4, mb: isMobile ? 3 : 4 }}>
        <Typography variant={isMobile ? "h6" : "h5"} component="h2" gutterBottom>
          On the ballot:
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <Typography variant={isMobile ? "body1" : "h6"} gutterBottom>
            Alexander Darlington - Mayor
          </Typography>
          <Typography variant={isMobile ? "body1" : "h6"} gutterBottom>
            Tracey Sutton - Borough Council
          </Typography>
        </Box>

        <Typography variant={isMobile ? "h6" : "h5"} component="h2" gutterBottom>
          Write-In (Please spell exactly):
        </Typography>
        
        <Box>
          <Typography variant={isMobile ? "body1" : "h6"} gutterBottom>
            Hallie Langley - Borough Council
          </Typography>
          <Typography variant={isMobile ? "body1" : "h6"} gutterBottom>
            Janet Mossie-Lance - Borough Council
          </Typography>
        </Box>
      </Paper>

      {/* Election Day Info */}
      <Card>
        <CardContent sx={{ p: isMobile ? 2 : 3 }}>
          <Typography variant={isMobile ? "h6" : "h5"} component="h2" gutterBottom>
            Election Day Information
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
            Polls are open from 7 a.m. to 8 p.m. on Election Day. Remember, if you are in line by 8 p.m., you can vote.
          </Typography>
          <Typography variant={isMobile ? "body1" : "h6"} sx={{ mt: 2, fontWeight: 'bold' }}>
            ON NOVEMBER 4
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default HowToVote 