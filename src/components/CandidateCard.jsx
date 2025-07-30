import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';

import { useResponsive } from '../hooks/useResponsive';
import {
  getResponsiveValue,
  responsiveStyles,
} from '../utils/responsiveStyles';

// Import candidate images
import AlexImage from '../assets/Alex.jpg';
import TraceyImage from '../assets/Tracey.jpg';
import JanetImage from '../assets/Janet.jpg';

function CandidateCard({ candidate }) {
  const { isMobile, getAvatarSize } = useResponsive();

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
      <CardContent
        sx={{ p: getResponsiveValue(responsiveStyles.padding.card, isMobile) }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            flexDirection: isMobile ? 'column' : 'row',
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          <Avatar
            src={candidateImage}
            sx={{
              width: getAvatarSize(60, 80),
              height: getAvatarSize(60, 80),
              mr: isMobile ? 0 : 2,
              mb: isMobile ? 1 : 0,
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
              fontSize: getResponsiveValue(
                responsiveStyles.fontSize.normal,
                isMobile
              ),
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
