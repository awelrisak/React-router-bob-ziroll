import { createTheme } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      light: '#fcd39f60',
      main: '#fff7ed',
      dark: '#fcd39f',
      contrastText: '#fff',
    },
    secondary: {      
      main: deepOrange[400],      
      contrastText: '#FFF',
    },
    text: {
      light: "#000000",
      dark: "#000000",
      primary: "#000000", // black
      secondary: "#FFFFFF", // white
      contrastText: '#000',
    },
  },
  typography: {
   fontFamily: 'Inter, Roboto, Arial, sans-serif'
  }
});




export default theme;


