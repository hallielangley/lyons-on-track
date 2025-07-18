import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';

import { useResponsive } from '../hooks/useResponsive';
import {
  getResponsiveValue,
  responsiveStyles,
} from '../utils/responsiveStyles';

function CandidateCard({ candidate }) {
  const { isMobile, getAvatarSize } = useResponsive();

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
            sx={{
              width: getAvatarSize(60, 80),
              height: getAvatarSize(60, 80),
              mr: isMobile ? 0 : 2,
              mb: isMobile ? 1 : 0,
            }}
          >
            {candidate.initials}
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

        {candidate.imageNote && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              fontSize: getResponsiveValue(
                responsiveStyles.fontSize.small,
                isMobile
              ),
            }}
          >
            Note: {candidate.imageNote}
          </Typography>
        )}

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
