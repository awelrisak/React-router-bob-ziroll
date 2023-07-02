import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import React, { useEffect } from "react"

import { Link } from "react-router-dom"

const About = () => {
  useEffect(() =>{
    
    document.title = "about"
  }, [])
  
  return (
    <>
    
     <img 
      src="https://source.unsplash.com/seX13AzLqls"  
      width="100%" 
      height="300px"
      alt="image"
      style={{
        aspectRatio: "1/1",
        
      }}
      />
      
    
    <Typography
    variant="h5"
    component="h2"
    sx={{
      fontWeight: "bold",
      mb:"1.7rem"
    }}
    
    >
    
    Don't squeeze in a sedan when you could relax in a van.
    </Typography>
    
    <Typography 
     variant="body1" 
     sx={{
      mb:"1rem"
    }}
    >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium aliquet neque vel molestie. Vivamus sodales justo non libero viverra lacinia. 
      </Typography>
      <Typography 
       sx={{
         mb: "1rem"
       }}
       variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium aliquet neques        
      </Typography>
      
     <Box
      bgcolor="primary.dark"
      p={2}
      borderRadius={1}
      sx={{
        mb: "1.8rem"
      }}
    >
      <Typography 
       variant="h5" 
       component="h3" 
       sx={{
         mb: "1.7rem",
         fontWight: "bold"
         }}>
        Your destination is waiting.
        <br />
        Your van is ready.
      </Typography>
      <Button 
       component={ Link }
       to="/vans"
        variant="contained" 
        color="secondary">
        Explore Our Vans
      </Button>
    </Box>
    </>
  )
}

export default About 