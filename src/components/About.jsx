import { Typography, Card, CardContent, Box, Container, Grid, Avatar, Paper } from '@mui/material'

function About() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        About Our Candidates
      </Typography>

      <Grid container spacing={4}>
        {/* Alexander Darlington */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ width: 80, height: 80, mr: 2 }}>AD</Avatar>
                <Typography variant="h5" component="h2">
                  Alexander Darlington - Mayoral Candidate
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Note: The image reference shows "Alex.jpg" which would be displayed here.
              </Typography>
              <Typography variant="body1" paragraph>
                Alexander Darlington is a student from Kutztown University currently obtaining their Master's in Public Administration and plans to have a lifelong career in public service. His community involvement has been diverse, being an active citizen in university as well as local Kutztown, Mataxawny, and Lyons politics. In Alex's free time, he likes to read, go hiking, or hit up the thrift store to see if he can find anything good.
              </Typography>
              <Typography variant="body1">
                Darlington sees the pathway to helping the citizens through cooperation with other municipalities and tapping into available funding such as grants.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Tracey Sutton */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ width: 80, height: 80, mr: 2 }}>TS</Avatar>
                <Typography variant="h5" component="h2">
                  Tracey Sutton - Borough Council Candidate
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Note: The image reference shows "Photo of Tracey" which would be displayed here.
              </Typography>
              <Typography variant="body1" paragraph>
                Tracey (Hagerman) Sutton is a longtime educator and proud Lyons resident since 2014. A graduate of Kutztown Area High School and Juniata College, Tracey has spent her career in service, working first as a Brethren Volunteer working with immigrant communities and then as a public school teacher in Los Angeles and Phoenix.
              </Typography>
              <Typography variant="body1" paragraph>
                She later taught adult education and worked as a Program Coordinator in behavioral health, gaining experience in teamwork, grant writing, and needs assessment. Since 2011, she has been a high school teacher in the Perkiomen Valley School District and has led multiple student trips abroad.
              </Typography>
              <Typography variant="body1">
                Tracey is passionate about the Lyons community and believes its people, location, and charm make it a special place to live. She is eager to listen, collaborate, and help Lyons reach its full potential as a member of Borough Council.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Hallie Langley */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ width: 80, height: 80, mr: 2 }}>HL</Avatar>
                <Typography variant="h5" component="h2">
                  Hallie Langley - Borough Council Candidate
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Note: The image reference shows "Photo of Hallie" which would be displayed here.
              </Typography>
              <Typography variant="body1">
                Enter text here
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Janet Mossie-Lance */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ width: 80, height: 80, mr: 2 }}>JM</Avatar>
                <Typography variant="h5" component="h2">
                  Janet Mossie-Lance - Borough Council Candidate
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Note: The image reference shows "Photo of Janet" which would be displayed here.
              </Typography>
              <Typography variant="body1" paragraph>
                Janet Mossie-Lance is an Associate Broker for Tosco Real Estate Services, LLC and has been licensed for over 30 years with a diverse background in the industry. In addition, Janet also works part time at St. Luke's Care Now in Kutztown where she takes pride in playing a part in helping the surrounding area residents receive top medical care. She also holds degrees in both Communication and Criminal Justice. When Janet is not at work, she can be found teaching Sunday school, bible school, and spending time with her family.
              </Typography>
              <Typography variant="body1">
                Janet is eager for the opportunity to work with each and every resident to revitalize the charming borough of Lyons. She is dedicated to benefiting the community through action items such as increasing home values.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About 