import { Box, Grid } from '@mui/material';

import ExternalLinkSection from './ExternalLinkSection';

const ExternalLinksSection = ({ links }) => {
  return (
    <Box sx={{ maxWidth: 1200, width: '100%' }}>
      {/* Links Grid */}
      <Grid container justifyContent="center">
        {links.map((link, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <ExternalLinkSection url={link.url} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExternalLinksSection;
