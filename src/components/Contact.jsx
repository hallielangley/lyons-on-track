import { Typography, Card, CardContent, Container, Box, Paper, Link, useTheme, useMediaQuery } from '@mui/material'
import { Email } from '@mui/icons-material'

function Contact() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Container maxWidth="md" sx={{ px: isMobile ? 2 : 3 }}>
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
        Contact
      </Typography>

      <Paper elevation={3} sx={{ p: isMobile ? 3 : 4, textAlign: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Email sx={{ fontSize: isMobile ? 40 : 60, color: 'primary.main' }} />
          
          <Typography variant={isMobile ? "h6" : "h5"} component="h2" gutterBottom>
            Have any comments, questions, or concerns?
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
            Reach out to us at:
          </Typography>
          
          <Link 
            href="mailto:adarlington44@gmail.com" 
            variant={isMobile ? "body1" : "h6"} 
            color="primary"
            sx={{ 
              textDecoration: 'none',
              fontSize: isMobile ? '1rem' : '1.25rem',
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            adarlington44@gmail.com
          </Link>
        </Box>
      </Paper>

      <Card sx={{ mt: isMobile ? 3 : 4 }}>
        <CardContent sx={{ p: isMobile ? 2 : 3 }}>
          <Typography variant={isMobile ? "h6" : "h6"} component="h3" gutterBottom>
            Campaign Information
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
            We are committed to transparency and open communication with the residents of Lyons. 
            Your feedback and concerns are important to us as we work together to improve our community.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
            Please don't hesitate to reach out with any questions about our platform, 
            the election process, or how you can get involved in making Lyons a better place to live.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Contact 