import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { CssBaseline, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';

import { router } from './routes';

let theme = createTheme({
  typography: {
    fontFamily: [
      'Helvetica',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  palette: {
    type: 'light',
    primary: {
      main: '#5c2a83',
      contrastText: '#fefae8',
    },
    secondary: {
      main: '#51832A',
    },
    background: {
      default: '#fefae8',
      paper: '#ffffff',
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
