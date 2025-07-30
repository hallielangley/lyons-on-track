import { Download } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from '@mui/material';

const DownloadCard = ({ item, onDownload }) => (
  <Box sx={{ flex: '1 1 300px', maxWidth: '400px' }}>
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
          onClick={() => onDownload(item.downloadUrl, item.filename)}
          sx={{ alignSelf: 'center' }}
        >
          Download PDF
        </Button>
      </CardContent>
    </Card>
  </Box>
);

export default DownloadCard; 