import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    type: 'light',   
    primary: {
      main: '#5CDB95',
    },
    secondary: {
      main: '#05386B',
      light: 'rgb(5, 56, 107, 0.15)'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F2F6EC',
    },
    text: {
      primary: '#05386B',
      disabled: '#05386B'
    },
  },
  spacing: 8
});

export default theme;
