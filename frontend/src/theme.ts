import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: '#282424',
      default: '#282424',
    },
    primary: {
      main: '#700505',
      light: '#d4b4b4',
      dark: '#530303',
      '200': '#700505',
      contrastText: '#dcd6d6',
    },
    secondary: {
      main: '#e08106',
      light: '#f6d9b4',
      dark: '#d36403',
      '200': '#e08106',
      contrastText: '#000000',
    },
    text: {
      primary: '#dcd6d6',
      secondary: '#dcd6d6b2',
      disabled: '#dcd6d680',
    },
    divider: '#dcd6d61f',
  },
});
