import { Box, Typography } from '@mui/material';

function CandidateItem({ name, position }) {
  return (
    <Box sx={{ mb: 0.5 }}>
      <Typography
        variant='h4'
      >
        {name}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontStyle: 'italic',
          mb: 0.5,
        }}
      >
        {position}
      </Typography>
    </Box>
  );
}

export default CandidateItem;
