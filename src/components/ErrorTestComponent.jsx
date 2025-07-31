import { useState } from 'react';

import { Button, Typography } from '@mui/material';

const ErrorTestComponent = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error('This is a test error to verify the ErrorBoundary works!');
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom>
        Error Boundary Test
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Click the button below to trigger an error and test the ErrorBoundary component.
      </Typography>
      <Button 
        variant="contained" 
        color="error"
        onClick={() => setShouldThrow(true)}
      >
        Trigger Error
      </Button>
    </div>
  );
};

export default ErrorTestComponent; 