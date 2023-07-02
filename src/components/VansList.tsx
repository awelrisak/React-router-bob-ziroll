import {
  useAsyncValue
} from "react-router-dom"

import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import VanHostOverviewCard from "./VanHostOverviewCard"

const VansList = ({
   titleVariant="title", 
   titleComponent="h3", 
   viewAllButton=false,
   fontWeight=null,
   mt=null,
   edit=false,
   link
   }) => {
  
  const  vans = useAsyncValue()
  
 
  
  const Vans = vans?.map?.(van => (
     <VanHostOverviewCard
        key={van.name+van.id} 
        van={van}  
        edit={edit}
        link={link}
        />
   ))
  
  return (
   
    <Box 
    component="section"
    sx={{mt}}
    >
       <Stack sx={{
               py: 1,                
            }} 
            direction="row"
            justifyContent="space-between"
            >
            
           <Typography 
             variant={titleVariant}
             component={titleComponent}
             sx={{
               fontWeight,
               letterSpacing: "-1px"
             }}
             >
             Your Listed Vans
           </Typography>
           
           {viewAllButton &&
             <Typography
               variant="subtitle2"
               component="a"
               href="#"
              >
             View all
            </Typography>}
        </Stack>
        
        {Vans?.length ? <ul>{Vans}</ul> : <h4>No Vans to show</h4>}
        </Box>
    
  )
}

export default VansList