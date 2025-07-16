import { Typography, Card, CardContent, Box, Container, Paper, List, ListItem, ListItemText, Chip } from '@mui/material'

function Home() {
  return (
    <Container maxWidth="lg">
      {/* Main Heading */}
      <Typography variant="h2" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        No Agenda. Here to Listen.
      </Typography>

      {/* Vote Section */}
      <Paper elevation={3} sx={{ p: 4, mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          VOTE
        </Typography>
        <Typography variant="h5" gutterBottom>
          Alexander Darlington for Mayor
        </Typography>
        <Typography variant="h5" gutterBottom>
          Tracey Sutton for Borough Council
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
          WRITE IN
        </Typography>
        <Typography variant="h6" gutterBottom>
          Hallie Langley
        </Typography>
        <Typography variant="h6" gutterBottom>
          Janet Mossie-Lance
        </Typography>
        <Typography variant="h6" gutterBottom>
          For Borough Council
        </Typography>
        
        <Typography variant="h5" sx={{ mt: 3, fontWeight: 'bold' }}>
          ON NOVEMBER 4
        </Typography>
        <Typography variant="body1">
          Polls are open from 7 a.m. to 8 p.m. on Election Day. Remember, if you are in line by 8 p.m., you can vote.
        </Typography>
      </Paper>

      {/* Our Vision */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            Our Vision
          </Typography>
          <Typography variant="body1" paragraph>
            We are not running to push our own agenda – we're running to carry yours. We want to listen to what the citizens have to say and work to fix those concerns. A part of that is increasing transparency and communication of the borough with the residents. We believe Lyons has a lot of potential and we can tap into it together. Our town's history illustrates a place that used to be bustling and lively. We have the opportunity to revive it together!
          </Typography>
        </CardContent>
      </Card>

      {/* Top Concerns */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            Top Concerns
          </Typography>
          <Typography variant="body1" paragraph>
            From listening to the residents of Lyons, here is what we found to be the top 5 issues:
          </Typography>
          <List>
            <ListItem>
              <ListItemText 
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip label="1" color="primary" size="small" />
                    <Typography variant="body1">Having it so the sewer bill can be paid online</Typography>
                  </Box>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip label="2" color="primary" size="small" />
                    <Typography variant="body1">Speeding issues</Typography>
                  </Box>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip label="3" color="primary" size="small" />
                    <Typography variant="body1">Stray cat issue</Typography>
                  </Box>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip label="4" color="primary" size="small" />
                    <Typography variant="body1">Stormwater & Snow concerns</Typography>
                  </Box>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip label="5" color="primary" size="small" />
                    <Typography variant="body1">Blighted properties</Typography>
                  </Box>
                }
              />
            </ListItem>
          </List>
          <Typography variant="body1" sx={{ mt: 2 }}>
            We are dedicated as a slate to tackling these concerns. Learn more about our proposed solutions in our solutions section.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Home 