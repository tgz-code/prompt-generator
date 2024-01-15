import { createTheme } from '@mui/material/styles';

// Define a custom theme object
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4ed4ca',
    },
    secondary: {
      main: '#ec8a1c',
    },
    error: {
      main: '#f13628',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

// Export the theme object
export default darkTheme;