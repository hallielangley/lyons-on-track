import { useRouteError } from 'react-router-dom'
import { Box, Typography, Button, Container } from '@mui/material'

function ErrorBoundary() {
  const error = useRouteError()

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        textAlign="center"
      >
        <Typography variant="h1" component="h1" gutterBottom>
          Oops!
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Sorry, an unexpected error has occurred.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {error?.statusText || error?.message || 'Something went wrong'}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.location.href = '/'}
        >
          Go Home
        </Button>
      </Box>
    </Container>
  )
}

export default ErrorBoundary 