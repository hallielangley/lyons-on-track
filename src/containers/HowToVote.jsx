import { Box, Grid, Paper, Typography } from '@mui/material';

import boroughHallImage from '../assets/borough-hall.jpg';
import CandidateItem from '../components/CandidateItem';
import { candidates } from '../data/candidates';

function HowToVote() {

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
            px: { xs: 2, md: 3 },
            py: { xs: 3, md: 4 },
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
              py: { xs: 1, md: 2 },
              display: { xs: 'flex', md: 'block' },
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
                variant="h5"
                sx={{ fontWeight: 'bold', lineHeight: 1 }}
              >
                NOVEMBER 4
              </Typography>
              <Typography
                variant="h5"
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
        container
        size={{ xs: 12, md: 8 }}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {candidates.map((candidate, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <CandidateItem
              firstName={candidate.firstName}
              lastName={candidate.lastName}
              position={candidate.position}
              writeIn={candidate.writeIn}
              variant="h6"
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default HowToVote;
