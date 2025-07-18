import { Container, Grid, Typography } from '@mui/material';

import { useResponsive } from '../hooks/useResponsive';
import {
  getResponsiveValue,
  responsiveStyles,
} from '../utils/responsiveStyles';
import CandidateCard from '../components/CandidateCard';
import { aboutCandidates } from '../data/candidates';

function OurCandidates() {
  const {
    isMobile,
    getTypographyVariant,
    getSpacing,
    getGridSpacing,
    getContainerPadding,
  } = useResponsive();

  return (
    <Container sx={{ px: getContainerPadding() }}>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{
          textAlign: 'center',
          mb: getSpacing(3, 4),
          fontSize: getResponsiveValue(
            responsiveStyles.fontSize.heading,
            isMobile
          ),
        }}
      >
        About Our Candidates
      </Typography>

      <Grid container spacing={getGridSpacing(2, 4)}>
        {aboutCandidates.map((candidate, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <CandidateCard candidate={candidate} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default OurCandidates;
