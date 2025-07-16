import { Typography, Card, CardContent, List, ListItem, ListItemText, Container, Box } from '@mui/material'

function About() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        About Lyons on Track
      </Typography>
      
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Project Information
          </Typography>
          <Typography variant="body1" paragraph>
            This is a React application built with Vite that demonstrates routing capabilities
            using React Router DOM.
          </Typography>
          <Typography variant="body1" paragraph>
            The project showcases:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="React Router for navigation" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Component-based architecture" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Modern React patterns" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Responsive design" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent>
          <Typography variant="h5" component="h3" gutterBottom>
            Technologies Used
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="body1">
              <strong>Frontend:</strong> React, Vite, React Router DOM
            </Typography>
            <Typography variant="body1">
              <strong>Styling:</strong> Material-UI (MUI)
            </Typography>
            <Typography variant="body1">
              <strong>Deployment:</strong> GitHub Pages
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}

export default About 