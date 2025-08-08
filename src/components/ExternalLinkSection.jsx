import { useEffect, useState } from 'react';

import { Box, Card, CardActionArea, Skeleton, Typography } from '@mui/material';

import { getCachedLinkPreview } from '../utils/linkPreview';

const ExternalLinkSection = ({
  url,
  title,
  description,
  image,
}) => {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPreview = async () => {
      setLoading(true);
      try {
        const data = await getCachedLinkPreview(url);
        setPreview(data);
      } catch (error) {
        console.error('Failed to fetch preview:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPreview();
  }, [url]);

  // Use fetched preview data or fall back to props
  const displayTitle = preview?.title || title;
  const displayDescription = preview?.description || description;
  const displayImage = preview?.image || image;
  const displayFavicon = preview?.favicon;
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box sx={{ maxWidth: 400, width: '100%', p: 2 }}>
      <Card
        elevation={2}
        sx={{
          borderRadius: 2,
          overflow: 'hidden',
          transition: 'all 0.2s ease',
          '&:hover': {
            elevation: 4,
            transform: 'translateY(-1px)',
          },
        }}
      >
        <CardActionArea onClick={handleClick}>
          {/* URL Bar with Logo - like messaging app previews */}
          <Box
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              p: 1.5,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            {/* Site Logo/Favicon */}
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                bgcolor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                overflow: 'hidden',
              }}
            >
              {displayFavicon ? (
                <Box
                  component="img"
                  src={displayFavicon}
                  alt="Site logo"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                  onError={(e) => {
                    // Hide broken favicon and show fallback
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}

              {/* Fallback to initials */}
              <Typography
                sx={{
                  color: 'primary.main',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  display: displayFavicon ? 'none' : 'flex',
                }}
              >
                BW
              </Typography>
            </Box>

            {/* Site Name */}
            <Typography
              sx={{
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'underline',
                lineHeight: 1.2,
                flex: 1,
              }}
            >
              Berks Weekly
            </Typography>
          </Box>

          {/* Image - either fetched image, prop image, or placeholder */}
          <Box
            sx={{
              width: '100%',
              height: 200,
              bgcolor: 'grey.200',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {loading ? (
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
                animation="wave"
              />
            ) : displayImage ? (
              <Box
                component="img"
                src={displayImage}
                alt={displayTitle}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  // Hide broken images and show placeholder
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            ) : null}

            {/* Fallback placeholder */}
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold',
                display: displayImage ? 'none' : 'flex',
              }}
            >
              BW
            </Box>
          </Box>

          {/* Title and Read More */}
          <Box sx={{ p: 2 }}>
            {loading ? (
              <>
                <Skeleton
                  variant="text"
                  width="80%"
                  height={32}
                  sx={{ mb: 1 }}
                />
                <Skeleton variant="text" width="60%" height={20} />
              </>
            ) : (
              <>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    lineHeight: 1.3,
                    mb: 1,
                  }}
                >
                  {displayTitle}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.4 }}
                >
                  {displayDescription.length > 120
                    ? `${displayDescription.substring(0, 120)}... `
                    : displayDescription}
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 500,
                      textDecoration: 'underline',
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'primary.dark',
                      },
                    }}
                  >
                    Read More
                  </Typography>
                </Typography>
              </>
            )}
          </Box>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default ExternalLinkSection;
