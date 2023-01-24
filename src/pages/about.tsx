import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


const About = () => {
  return (
    <>
     <img 
      src="https://source.unsplash.com/seX13AzLqls"  
      width="100%" 
      alt="image"
      style={{
        marginBottom: "2rem"
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
      bgcolor="rgba(255, 165, 0, 0.8)"
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
        variant="contained" 
        color="secondary">
        Explore Our Vans
      </Button>
    </Box>
    
    <Typography 
       variant="body2" 
       component="footer" 
       color="grey"
       sx={{
         textAlign: "center",
         p: 2,
         backgroundColor: "black"
         }}>
        © 2022 VANLIFE
      </Typography>
    </>
  )
}

export default About 