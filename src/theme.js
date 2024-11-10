import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#32f071',
      main: '#0f9433',
      dark: '#155a33',
      contrastText: '#fff',
    },
    secondary: {
      light: '#7bd4f4',
      main: '#2163c0',
      dark: '#082584',
      contrastText: '#000',
    },
    common: {
      white: '#4cb375',
    },
  },
  shape: {
    borderRadius: 5,
  },
});
