import React, { useEffect } from "react"


import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom"


import { useAuth } from "../contexts/Auth"


const Root = () => {
  
  const user = useAuth()
  console.log(user)
  
   useEffect(() =>{
      document.title = "VanLife"
  }, [])
  
  return (
    
   <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "80vh",
        
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
          component="h3" 
          sx={{ 
             mb: "0.7rem" 
             }}
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
        component={ Link }
        to="vans"
        variant="contained" 
        color="warning" fullWidth>
        Find Your Van
      </Button>           
    </Box>    
  )
}

export default Root