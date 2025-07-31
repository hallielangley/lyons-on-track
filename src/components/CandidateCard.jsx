import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';

// Import candidate images
import AlexImage from '../assets/Alex.jpg';
import JanetImage from '../assets/Janet.jpg';
import TraceyImage from '../assets/Tracey.jpg';
import { useResponsive } from '../hooks/useResponsive';

function CandidateCard({ candidate }) {
  const { isMobile } = useResponsive();

  // Map candidate names to their images
  const getCandidateImage = (name) => {
    switch (name) {
      case 'Alexander Darlington':
        return AlexImage;
      case 'Tracey Sutton':
        return TraceyImage;
      case 'Janet Mossie-Lance':
        return JanetImage;
      default:
        return null; // For Hallie Langley, we'll use initials for now
    }
  };

  const candidateImage = getCandidateImage(candidate.name);

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: { xs: 2, md: 3 } }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            flexDirection: { xs: 'column', md: 'row' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Avatar
            src={candidateImage}
            sx={{
              width: { xs: 60, md: 80 },
              height: { xs: 60, md: 80 },
              mr: { xs: 0, md: 2 },
              mb: { xs: 1, md: 0 },
            }}
          >
            {candidateImage ? null : candidate.initials}
          </Avatar>
          <Box>
            <Typography variant="h4" component="h2">
              {candidate.name}
            </Typography>
            <Typography variant="h5" component="h3">
              {candidate.position}
            </Typography>
          </Box>
        </Box>

        {candidate.bio.map((paragraph, index) => (
          <Typography
            key={index}
            variant="body1"
            paragraph={index < candidate.bio.length - 1}
            sx={{
              fontSize: { xs: '0.9rem', md: '1rem' },
            }}
          >
            {paragraph}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}

export default CandidateCard;
