import {
  Box,
  Grid,
  Paper,
  Typography,
} from '@mui/material';

import DownloadCard from './DownloadCard';
import ImagePreview from './ImagePreview';

const CampaignSection = ({ 
  title, 
  palmCardFront, 
  palmCardBack, 
  yardSign, 
  downloadItems, 
  onDownload 
}) => (
  <Box mb={6}>
    <Paper sx={{ p: 2 }}>
      <Box textAlign="center">
        <Typography variant="h4" gutterBottom color="primary">
          {title}
        </Typography>
        <Typography variant="h5" color="primary">
          Palm Card
        </Typography>
      </Box>
      
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <ImagePreview 
            src={palmCardFront} 
            alt={`${title} Palm Card Front`} 
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ImagePreview 
            src={palmCardBack} 
            alt={`${title} Palm Card Back`} 
          />
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

      {/* Download Buttons Section */}
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
    </Paper>
  </Box>
);

export default CampaignSection; 