import { Typography, Card, CardContent, Box, Container, Paper, List, ListItem, ListItemText } from '@mui/material'

function HowToVote() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        How to Vote
      </Typography>

      {/* Polling Place */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Polling Place
          </Typography>
          <Typography variant="h6" gutterBottom>
            Lyons Borough Hall (316 Kemp St, Lyon Station, PA 19536)
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Note: The image reference shows "Lyons Borough Office.jpg" which would be displayed here.
          </Typography>
        </CardContent>
      </Card>

      {/* Ballot Information */}
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          On the ballot:
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Alexander Darlington - Mayor
          </Typography>
          <Typography variant="h6" gutterBottom>
            Tracey Sutton - Borough Council
          </Typography>
        </Box>

        <Typography variant="h5" component="h2" gutterBottom>
          Write-In (Please spell exactly):
        </Typography>
        
        <Box>
          <Typography variant="h6" gutterBottom>
            Hallie Langley - Borough Council
          </Typography>
          <Typography variant="h6" gutterBottom>
            Janet Mossie-Lance - Borough Council
          </Typography>
        </Box>
      </Paper>

      {/* Election Day Info */}
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Election Day Information
          </Typography>
          <Typography variant="body1" paragraph>
            Polls are open from 7 a.m. to 8 p.m. on Election Day. Remember, if you are in line by 8 p.m., you can vote.
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
            ON NOVEMBER 4
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default HowToVote 