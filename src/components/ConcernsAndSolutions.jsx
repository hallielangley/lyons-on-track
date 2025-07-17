import { Box, Container, Typography } from '@mui/material';

import { concernsAndSolutions } from '../data/concernsAndSolutions';
import { useResponsive } from '../hooks/useResponsive';
import FlipCard from './FlipCard';

function ConcernsAndSolutions() {
  const { isMobile, getTypographyVariant, getSpacing } = useResponsive();

  return (
    <Container
      sx={{
        px: isMobile ? 2 : 3,
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Fixed Header Section */}
      <Box sx={{ flexShrink: 0 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: isMobile ? '1.3rem' : '1.8rem',
            fontWeight: 'bold',
            mb: 1,
          }}
        >
          Your Concerns, Our Solutions
        </Typography>

        <Typography sx={{ mb: 1, fontSize: isMobile ? '0.8rem' : '0.9rem' }}>
          After listening to Lyons residents, we've identified the top
          priorities and developed practical solutions for each.
        </Typography>

        <Typography
          sx={{
            mb: 1,
            fontSize: isMobile ? '0.7rem' : '0.8rem',
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
          py: 1,
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
                maxWidth: isMobile ? '300px' : '280px',
                flexShrink: 0,
              }}
            >
              <FlipCard
                front={
                  <Typography
                    variant={getTypographyVariant('h6', 'h5')}
                    sx={{ color: 'white', textAlign: 'center' }}
                  >
                    {item.concern}
                  </Typography>
                }
                back={
                  <Typography
                    variant="body2"
                    sx={{ color: 'white', textAlign: 'center' }}
                  >
                    {item.solution}
                  </Typography>
                }
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
                maxWidth: isMobile ? '300px' : '280px',
                flexShrink: 0,
              }}
            >
              <FlipCard
                front={
                  <Typography
                    variant={getTypographyVariant('h6', 'h5')}
                    sx={{ color: 'white', textAlign: 'center' }}
                  >
                    {item.concern}
                  </Typography>
                }
                back={
                  <Typography
                    variant="body2"
                    sx={{ color: 'white', textAlign: 'center' }}
                  >
                    {item.solution}
                  </Typography>
                }
                height={isMobile ? 100 : 160}
                width={isMobile ? '100%' : '280px'}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Fixed Footer Section */}
      <Box sx={{ flexShrink: 0, py: 1 }}>
        <Typography
          sx={{ fontSize: isMobile ? '0.8rem' : '0.9rem', fontWeight: 500 }}
        >
          We're committed to working together to make Lyons an even better place
          to live.
        </Typography>
      </Box>
    </Container>
  );
}

export default ConcernsAndSolutions;
