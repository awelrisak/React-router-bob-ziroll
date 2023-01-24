import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


const Home = () => {
  return (
   <Box
      sx={{
        
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "545px",
        
      backgroundImage: "url('https://source.unsplash.com/JgOeRuGD_Y4')",
        backgroundBlendMode: "multiply",
        backgroundPosition: "center",
        px: "1rem",
        position: "relative",
        overflow: "hidden",
        
      }}
    >
    
      
      <Box>
        <Typography 
          color="text.secondary"
          variant="h4" 
          component="div" 
          sx={{ mb: "0.7rem" }}
          >
          You got the travel plans, we got the travel vans.
        </Typography>
        <Typography 
          color="text.secondary"
          variant="subtitle2" 
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique lacus in augue vest
        </Typography>
      </Box>
      
      
      <Button 
        variant="contained" 
        color="warning" fullWidth>
        Find Your Van
      </Button>
      
      <Typography 
        componenent="small"
        color="lightgrey"
        variant="body2" 
        sx={{ 
         alignSelf: "center"
         }}>
        © 2023 vanLife
      </Typography>
     
      
    </Box>
  )
}

export default Home 