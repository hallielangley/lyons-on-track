import { Download } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';

import BoroughCouncilPalmCardPdf from '../assets/BoroughCouncilPalmCard.pdf';
import BoroughCouncilPalmCardBack from '../assets/BoroughCouncilPalmCardBack.jpg';
import BoroughCouncilPalmCardFront from '../assets/BoroughCouncilPalmCardFront.jpg';
import BoroughCouncilYardSign from '../assets/BoroughCouncilYardSign.jpg';
import BoroughCouncilYardSignPdf from '../assets/BoroughCouncilYardSign.pdf';

const CampaignMedia = () => {
  const downloadItems = [
    {
      title: 'Palm Card',
      description:
        'Campaign palm card featuring our key message and candidate information. Download includes both front and back sides.',
      downloadUrl: BoroughCouncilPalmCardPdf,
      filename: 'BoroughCouncilPalmCard.pdf',
    },
    {
      title: 'Yard Sign',
      description:
        'Campaign yard sign design for supporters to display in their yards.',
      downloadUrl: BoroughCouncilYardSignPdf,
      filename: 'BoroughCouncilYardSign.pdf',
    },
  ];

  const handleDownload = (downloadUrl, filename) => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container>
      <Box textAlign="center" mb={2} maxWidth={800} mx="auto">
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
            href="/contact"
            style={{ color: 'primary.main', textDecoration: 'underline' }}
          >
            Contact us
          </a>{' '}
          to arrange pickup or delivery.
        </Typography>
      </Box>

      {/* Image Preview Section */}
      <Box mb={6}>
        <Paper sx={{ p: 2 }}>
          <Box textAlign="center">
            <Typography variant="h4" gutterBottom color="primary">
              Borough Council Materials
            </Typography>
            <Typography variant="h5" color="primary">
              Palm Card
            </Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Box
                textAlign="center"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Box
                  component="img"
                  src={BoroughCouncilPalmCardFront}
                  alt="Palm Card Front"
                  sx={{
                    width: '100%',
                    maxWidth: 400,
                    height: 'auto',
                    borderRadius: 1,
                    boxShadow: 2,
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                textAlign="center"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Box
                  component="img"
                  src={BoroughCouncilPalmCardBack}
                  alt="Palm Card Back"
                  sx={{
                    width: '100%',
                    maxWidth: 400,
                    height: 'auto',
                    borderRadius: 1,
                    boxShadow: 2,
                  }}
                />
              </Box>
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
                <Box
                  component="img"
                  src={BoroughCouncilYardSign}
                  alt="Yard Sign"
                  sx={{
                    width: '100%',
                    maxWidth: 600,
                    height: 'auto',
                    borderRadius: 1,
                    boxShadow: 2,
                  }}
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
                <Box key={index} sx={{ flex: '1 1 300px', maxWidth: '400px' }}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 4,
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="h2"
                        color="primary"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2, flexGrow: 1 }}
                      >
                        {item.description}
                      </Typography>
                      <Button
                        variant="contained"
                        startIcon={<Download />}
                        onClick={() =>
                          handleDownload(item.downloadUrl, item.filename)
                        }
                        sx={{ alignSelf: 'center' }}
                      >
                        Download PDF
                      </Button>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default CampaignMedia;
