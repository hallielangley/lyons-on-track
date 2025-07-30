import { Box } from '@mui/material';

const ImagePreview = ({ src, alt, maxWidth = 400 }) => (
  <Box
    textAlign="center"
    display="flex"
    flexDirection="column"
    alignItems="center"
  >
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: '100%',
        maxWidth,
        height: 'auto',
        borderRadius: 1,
        boxShadow: 2,
      }}
    />
  </Box>
);

export default ImagePreview; 