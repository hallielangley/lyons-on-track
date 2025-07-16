import { useState } from 'react'
import { Typography, Card, CardContent, Button, Box, Container } from '@mui/material'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to Lyons on Track
      </Typography>
      <Typography variant="body1" paragraph>
        This is the home page of our React Router demonstration.
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </Box>
      
      <Card>
        <CardContent>
          <Button 
            variant="contained" 
            onClick={() => setCount((count) => count + 1)}
            sx={{ mb: 2 }}
          >
            count is {count}
          </Button>
          <Typography variant="body2" color="text.secondary">
            Edit <code>src/App.jsx</code> and save to test HMR
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Home 