import StarIcon from '@mui/icons-material/Star';
import { Box, Typography } from '@mui/material';

function CandidateItem({ firstName, lastName, position, writeIn }) {
  const color = writeIn ? 'primary.light' : 'primary.main';

  return (
      <Box
        sx={{
          width: '100%',
          height: { xs: 'auto', md: '300px' },
          borderRadius: 1,
          overflow: 'hidden',
          border: '1px solid',
          borderColor: color,
          textAlign: 'center',
          textTransform: 'uppercase',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            backgroundColor: color,
            color: 'white',
            p: 1,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '60px',
                height: '1px',
                backgroundColor: 'white',
              }}
            />
            <Typography
              variant="h4"
              sx={{
              }}
            >
              {firstName}
            </Typography>
            <Box
              sx={{
                width: '60px',
                height: '1px',
                backgroundColor: 'white',
              }}
            />
          </Box>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
            }}
          >
            {lastName}
          </Typography>
          {writeIn && (
            <Typography
              variant="body2"
              sx={{
                fontStyle: 'italic',
              }}
            >
              WRITE IN CANDIDATE
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            backgroundColor: 'white',
            p: 1,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <StarIcon sx={{ color: color, fontSize: 'small' }} />
            <Typography
              variant="h5"
              sx={{
                color: color,
                fontWeight: 'bold',
              }}
            >
              FOR
            </Typography>
            <StarIcon sx={{ color: color, fontSize: 'small' }} />
          </Box>
          <Typography
            variant="h3"
            sx={{
              color: color,
              fontWeight: 'bold',
            }}
          >
            {position}
          </Typography>
        </Box>
      </Box>
  );
}

export default CandidateItem;
