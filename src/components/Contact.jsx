import { Typography, Card, CardContent, Container, Box, Paper, Link } from '@mui/material'
import { Email } from '@mui/icons-material'

function Contact() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        Contact
      </Typography>

      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Email sx={{ fontSize: 60, color: 'primary.main' }} />
          
          <Typography variant="h5" component="h2" gutterBottom>
            Have any comments, questions, or concerns?
          </Typography>
          
          <Typography variant="body1" paragraph>
            Reach out to us at:
          </Typography>
          
          <Link 
            href="mailto:adarlington44@gmail.com" 
            variant="h6" 
            color="primary"
            sx={{ 
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            adarlington44@gmail.com
          </Link>
        </Box>
      </Paper>

      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h6" component="h3" gutterBottom>
            Campaign Information
          </Typography>
          <Typography variant="body1" paragraph>
            We are committed to transparency and open communication with the residents of Lyons. 
            Your feedback and concerns are important to us as we work together to improve our community.
          </Typography>
          <Typography variant="body1">
            Please don't hesitate to reach out with any questions about our platform, 
            the election process, or how you can get involved in making Lyons a better place to live.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Contact 