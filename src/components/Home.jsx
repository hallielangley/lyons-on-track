import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';

import { useResponsive } from '../hooks/useResponsive';
import {
  getResponsiveValue,
  responsiveStyles,
} from '../utils/responsiveStyles';
import ConcernsAndSolutions from './ConcernsAndSolutions';
import HomeNavigation from './HomeNavigation';

function Home() {
  const { isMobile, getTypographyVariant, getSpacing, getContainerPadding } =
    useResponsive();

  return (
    <Container sx={{ px: getContainerPadding() }}>
      {/* Navigation Buttons */}
      <HomeNavigation />

      {/* Our Vision */}
      <Card sx={{ mb: getSpacing(3, 4) }}>
        <CardContent
          sx={{
            p: getResponsiveValue(responsiveStyles.padding.card, isMobile),
          }}
        >
          <Typography
            variant={getTypographyVariant('h5', 'h4')}
            component="h2"
            gutterBottom
          >
            Our Vision
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: getResponsiveValue(
                responsiveStyles.fontSize.normal,
                isMobile
              ),
            }}
          >
            We are not running to push our own agenda – we're running to carry
            yours. We want to listen to what the citizens have to say and work
            to fix those concerns. A part of that is increasing transparency and
            communication of the borough with the residents. We believe Lyons
            has a lot of potential and we can tap into it together. Our town's
            history illustrates a place that used to be bustling and lively. We
            have the opportunity to revive it together!
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Home;
