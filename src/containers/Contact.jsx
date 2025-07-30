import { Email } from '@mui/icons-material';
import {
  Box,
  Container,
  Link,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container sx={{ textAlign: 'center' }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 'bold',
          mb: 1,
        }}
      >
        Contact Us
      </Typography>

      <Paper elevation={3} sx={{ p: isMobile ? 3 : 4, textAlign: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Email sx={{ fontSize: isMobile ? 40 : 60, color: 'primary.main' }} />

          <Typography component="h2" variant="h6" >
            Have any comments, questions, or concerns?
          </Typography>
          <Typography component="h2" variant="h6" gutterBottom>
            Want paper copies of our campaign materials?
          </Typography>

          <Typography
          >
            Reach out to us at:
          </Typography>

          <Link
            href="mailto:adarlington44@gmail.com"
            variant={isMobile ? 'body1' : 'h6'}
            color="primary"
            sx={{
              textDecoration: 'none',
              fontSize: isMobile ? '1rem' : '1.25rem',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            adarlington44@gmail.com
          </Link>
        </Box>
      </Paper>
    </Container>
  );
}

export default Contact;
