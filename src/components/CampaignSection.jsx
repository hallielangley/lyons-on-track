import { Box, Grid, Paper, Typography } from '@mui/material';

import DownloadCard from './DownloadCard';
import ImagePreview from './ImagePreview';
import { ENABLE_DOWNLOADS } from '../data/campaignMedia';

const CampaignSection = ({
  title,
  palmCardFront,
  palmCardBack,
  yardSign,
  downloadItems,
  onDownload,
}) => (
  <Box sx={{ maxWidth: 1200, width: '100%', p: 2 }}>
    <Paper
      elevation={2}
      sx={{
        p: 2,
        borderRadius: 2,
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" color="primary" gutterBottom>
        Palm Card
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <ImagePreview src={palmCardFront} alt={`${title} Palm Card Front`} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ImagePreview src={palmCardBack} alt={`${title} Palm Card Back`} />
        </Grid>
        <Grid item xs={12}>
          <Box
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="h5" color="primary">
              Yard Sign
            </Typography>
            <ImagePreview
              src={yardSign}
              alt={`${title} Yard Sign`}
              maxWidth={600}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Download Buttons Section - Only shown when ENABLE_DOWNLOADS is true */}
      {ENABLE_DOWNLOADS && downloadItems && downloadItems.length > 0 && (
        <Box textAlign="center" mt={6}>
          <Typography variant="h5" color="primary" gutterBottom>
            Download Materials
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {downloadItems.map((item, index) => (
              <DownloadCard 
                key={index} 
                item={item} 
                onDownload={onDownload} 
              />
            ))}
          </Box>
        </Box>
      )}
    </Paper>
  </Box>
);

export default CampaignSection;
