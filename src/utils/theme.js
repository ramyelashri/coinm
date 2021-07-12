import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#1f6eeb',
    },
    secondary: {
      main: '#c4ccd5',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#0e0e0e',
    },
  },
});

export default theme;