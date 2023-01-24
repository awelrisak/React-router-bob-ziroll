import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[50], // white
    },
    secondary: {
      main: "#000000", // black
    },
    text: {
      primary: "#000000", // black
      secondary: "#FFFFFF", // white
    },
    
  },
});

/*const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#FFF',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#000000',
      dark: '#ba000d',
      contrastText: '#000',
    },
    text: {
      light: "#FFf",
      dark: "#000",
      primary: "#000000", // black
      secondary: "#FFFFFF", // white
      contrastText: '#000',
    },
  },
});*/


export default theme;


