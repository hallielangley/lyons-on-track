import { Container, Grid, Typography } from '@mui/material';

import CandidateCard from '../components/CandidateCard';
import { aboutCandidates } from '../data/candidates';

function OurCandidates() {
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
        Our Candidates
      </Typography>

      <Grid container spacing={{ xs: 1, md: 2 }}>
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
