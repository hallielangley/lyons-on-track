import { Box, Grid, Paper, Typography } from '@mui/material';

import boroughHallImage from '../assets/borough-hall.jpg';
import CandidateItem from '../components/CandidateItem';
import { candidates, writeInCandidates } from '../data/candidates';
import { useResponsive } from '../hooks/useResponsive';

function HowToVote() {
  const { getTypographyVariant, getPadding } = useResponsive();

  return (
    <Grid
      container
      height="100%"
      padding={{ xs: 2, md: 3 }}
      spacing={{ xs: 1, md: 2 }}
    >
      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper
          sx={{
            p: getPadding(2, 3),
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Box
            component="img"
            src={boroughHallImage}
            alt="Lyons Borough Hall"
            sx={{
              width: '100%',
              maxWidth: 400,
              height: 'auto',
              objectFit: 'contain',
              borderRadius: 2,
              boxShadow: 2,
            }}
          />
          <Box
            sx={{
              py: getPadding(1, 2),
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: { xs: 'space-around', md: 'space-between' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', lineHeight: 1 }}
              >
                NOVEMBER 4
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', lineHeight: 1 }}
              >
                7AM - 8PM
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography sx={{ lineHeight: 1 }}>Lyons Borough Hall</Typography>
              <Typography sx={{ lineHeight: 1 }}>316 Kemp St</Typography>
            </Box>
          </Box>

          <Typography variant="body2" fontStyle="italic">
            If you are in line by 8PM, you can vote!
          </Typography>
        </Paper>
      </Grid>

      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Paper
          sx={{
            p: getPadding(2, 3),
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Typography
            variant={getTypographyVariant('h5', 'h4')}
            component="h2"
            sx={{ fontWeight: 'bold' }}
          >
            VOTE
          </Typography>
          {candidates.map((candidate, index) => (
            <CandidateItem
              key={index}
              name={candidate.name}
              position={candidate.position}
              variant="h6"
            />
          ))}
        </Paper>
      </Grid>

      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Paper
          sx={{
            p: getPadding(2, 3),
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Typography
            variant={getTypographyVariant('h5', 'h4')}
            component="h2"
            sx={{ fontWeight: 'bold' }}
          >
            WRITE IN
          </Typography>
          <Typography fontStyle="italic" color="text.secondary" sx={{ mb: 1 }}>
            Please spell exactly.
          </Typography>
          {writeInCandidates.map((candidate, index) => (
            <CandidateItem
              key={index}
              name={candidate.name}
              position={candidate.position}
              variant="h6"
            />
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default HowToVote;
