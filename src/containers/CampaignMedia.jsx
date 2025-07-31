import {
  Box,
  Container,
  Typography,
} from '@mui/material';

import CampaignSection from '../components/CampaignSection';
import SwipeableTabs from '../components/SwipeableTabs';
import { campaignSections } from '../data/campaignMedia';
import { useAppNavigation } from '../routes/utils';
import { PATHS } from '../routes/paths';

const CampaignMedia = () => {
  const { goTo } = useAppNavigation();

  const handleDownload = (downloadUrl, filename) => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderSection = (section) => (
    <CampaignSection
      title={section.title}
      palmCardFront={section.images.palmCardFront}
      palmCardBack={section.images.palmCardBack}
      yardSign={section.images.yardSign}
      downloadItems={section.downloadItems}
      onDownload={handleDownload}
    />
  );

  return (
    <Container>
      <Box textAlign="center" maxWidth={800} mx="auto">
        <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold' }}>
          Campaign Materials
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Download and share our campaign materials with friends, family, and
          neighbors to help spread awareness about our campaign for positive
          change in Lyons.
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Want physical materials?{' '}
          <a
            onClick={() => goTo(PATHS.CONTACT)}
            style={{ 
              color: 'primary.main', 
              textDecoration: 'underline',
              cursor: 'pointer' 
            }}
          >
            Contact us
          </a>{' '}
          to arrange pickup or delivery.
        </Typography>
      </Box>

      <SwipeableTabs 
        sections={campaignSections}
        renderSection={renderSection}
      />
    </Container>
  );
};

export default CampaignMedia;
