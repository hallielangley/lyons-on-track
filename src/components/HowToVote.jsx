import { Box, Grid, Paper, Typography } from '@mui/material';

import boroughHallImage from '../assets/borough-hall.jpg';
import { candidates, writeInCandidates } from '../data/candidates';
import { useResponsive } from '../hooks/useResponsive';
import CandidateItem from './CandidateItem';

function HowToVote() {
  const { getTypographyVariant, getPadding } = useResponsive();

  return (
    <Grid
      container
      height="100%"
      padding={{ xs: 2, md: 3 }}
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid
        item
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
              py: getPadding(2, 3),
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
                variant={getTypographyVariant('body1', 'h6')}
                sx={{ fontWeight: 'bold' }}
              >
                NOVEMBER 4
              </Typography>
              <Typography
                variant={getTypographyVariant('body1', 'h6')}
                sx={{ fontWeight: 'bold' }}
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
              <Typography variant="body2">Lyons Borough Hall</Typography>
              <Typography variant="body2">316 Kemp St</Typography>
            </Box>
          </Box>

          <Typography
            variant="body2"
            fontStyle="italic"
            sx={{ fontSize: '0.8rem' }}
          >
            If you are in line by 8PM, you can vote!
          </Typography>
        </Paper>
      </Grid>

      <Grid
        item
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
        item
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
