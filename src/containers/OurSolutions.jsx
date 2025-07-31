import { Box, Container, Typography } from '@mui/material';

import FlipCard from '../components/FlipCard';
import { concernsAndSolutions } from '../data/concernsAndSolutions';
import { useResponsive } from '../hooks/useResponsive';

function OurSolutions() {
  const { isMobile } = useResponsive();

  return (
    <Container
      sx={{
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ flexShrink: 0 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 'bold',
            mb: 1,
          }}
        >
          Your Concerns,{isMobile ? <br /> : ' '}Our Solutions
        </Typography>

        <Typography sx={{ mb: 1 }}>
          After listening to Lyons residents, we've identified the top
          priorities and developed practical solutions for each.
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mb: 1,
            fontStyle: 'italic',
          }}
        >
          Tap each concern to see our proposed solution
        </Typography>
      </Box>

      {/* Scrollable Cards Section */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: isMobile ? 1 : 3,
        }}
      >
        {/* First row - 3 cards */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? 1 : 3,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {concernsAndSolutions.slice(0, 3).map((item, index) => (
            <Box
              key={index}
              sx={{
                width: isMobile ? '100%' : '280px',
                flexShrink: 0,
              }}
            >
              <FlipCard
                front={<Typography variant="h5">{item.concern}</Typography>}
                back={<Typography variant="body1">{item.solution}</Typography>}
                height={isMobile ? 100 : 160}
                width={isMobile ? '100%' : '280px'}
              />
            </Box>
          ))}
        </Box>

        {/* Second row - 2 cards */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? 1 : 3,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {concernsAndSolutions.slice(3, 5).map((item, index) => (
            <Box
              key={index + 3}
              sx={{
                width: isMobile ? '100%' : '280px',
                flexShrink: 0,
              }}
            >
              <FlipCard
                front={<Typography variant="h5">{item.concern}</Typography>}
                back={<Typography variant="body2">{item.solution}</Typography>}
                height={isMobile ? 100 : 160}
                width={isMobile ? '100%' : '280px'}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Fixed Footer Section */}
      <Box sx={{ flexShrink: 0, py: 1 }}>
        <Typography sx={{ fontWeight: 500 }}>
          We're committed to working together to make Lyons an even better place
          to live.
        </Typography>
      </Box>
    </Container>
  );
}

export default OurSolutions;
