import { Typography, Card, CardContent, Box, Container, Paper, List, ListItem, ListItemText, Chip } from '@mui/material'
import { useResponsive } from '../hooks/useResponsive'
import { responsiveStyles, getResponsiveValue } from '../utils/responsiveStyles'
import HomeNavigation from './HomeNavigation'
import ElectionDayInfo from './ElectionDayInfo'

function Home() {
  const {
    isMobile,
    getTypographyVariant,
    getSpacing,
    getFontSize,
    getPadding,
    getContainerPadding
  } = useResponsive()

  const topConcerns = [
    'Having it so the sewer bill can be paid online',
    'Speeding issues',
    'Stray cat issue',
    'Stormwater & Snow concerns',
    'Blighted properties'
  ]

  return (
    <Container maxWidth="lg" sx={{ px: getContainerPadding() }}>
      {/* Navigation Buttons */}
      <HomeNavigation />

      {/* Our Vision */}
      <Card sx={{ mb: getSpacing(3, 4) }}>
        <CardContent sx={{ p: getResponsiveValue(responsiveStyles.padding.card, isMobile) }}>
          <Typography variant={getTypographyVariant('h5', 'h4')} component="h2" gutterBottom>
            Our Vision
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: getResponsiveValue(responsiveStyles.fontSize.normal, isMobile) }}>
            We are not running to push our own agenda – we're running to carry yours. We want to listen to what the citizens have to say and work to fix those concerns. A part of that is increasing transparency and communication of the borough with the residents. We believe Lyons has a lot of potential and we can tap into it together. Our town's history illustrates a place that used to be bustling and lively. We have the opportunity to revive it together!
          </Typography>
        </CardContent>
      </Card>

      {/* Top Concerns */}
      <Card sx={{ mb: getSpacing(3, 4) }}>
        <CardContent sx={{ p: getResponsiveValue(responsiveStyles.padding.card, isMobile) }}>
          <Typography variant={getTypographyVariant('h5', 'h4')} component="h2" gutterBottom>
            Top Concerns
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: getResponsiveValue(responsiveStyles.fontSize.normal, isMobile) }}>
            From listening to the residents of Lyons, here is what we found to be the top 5 issues:
          </Typography>
          <List sx={{ py: 0 }}>
            {topConcerns.map((concern, index) => (
              <ListItem key={index} sx={{ px: 0, py: isMobile ? 0.5 : 1 }}>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                      <Chip label={index + 1} color="primary" size="small" />
                      <Typography variant="body1" sx={{ fontSize: getResponsiveValue(responsiveStyles.fontSize.normal, isMobile) }}>
                        {concern}
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
          <Typography variant="body1" sx={{ mt: 2, fontSize: getResponsiveValue(responsiveStyles.fontSize.normal, isMobile) }}>
            We are dedicated as a slate to tackling these concerns. Learn more about our proposed solutions in our solutions section.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Home 