import { Box, Container, Paper, Typography } from '@mui/material';

import { useResponsive } from '../hooks/useResponsive';

function ScrollableSectionTest() {
  const { isMobile } = useResponsive();

  // Generate some test content
  const testItems = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Test Item ${i + 1}`,
    content: `This is the content for test item ${i + 1}. It contains some sample text to demonstrate how the scrollable section works. This content will be scrollable while keeping the header and footer fixed.`,
  }));

  return (
    <Container
      maxWidth="lg"
      sx={{
        px: isMobile ? 2 : 3,
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Fixed Header */}
      <Box
        sx={{
          flexShrink: 0,
          py: 2,
          backgroundColor: 'primary.main',
          color: 'white',
          borderRadius: 1,
          mb: 2,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Fixed Header
        </Typography>
        <Typography variant="body1">
          This header stays at the top and never moves
        </Typography>
      </Box>

      {/* Scrollable Content Section */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          border: '2px solid #ccc',
          borderRadius: 1,
          p: 2,
          backgroundColor: '#f5f5f5',
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
          Scrollable Section (This content scrolls independently)
        </Typography>

        {testItems.map((item) => (
          <Paper
            key={item.id}
            sx={{
              p: 2,
              mb: 2,
              backgroundColor: 'white',
              '&:hover': { backgroundColor: '#f0f0f0' },
            }}
          >
            <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
              {item.title}
            </Typography>
            <Typography variant="body2">{item.content}</Typography>
          </Paper>
        ))}
      </Box>

      {/* Fixed Footer */}
      <Box
        sx={{
          flexShrink: 0,
          py: 2,
          backgroundColor: 'secondary.main',
          color: 'white',
          borderRadius: 1,
          mt: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Fixed Footer
        </Typography>
        <Typography variant="body2">
          This footer stays at the bottom and never moves
        </Typography>
      </Box>
    </Container>
  );
}

export default ScrollableSectionTest;
