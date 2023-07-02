import React, { 
    useEffect, 
    useReducer 
    } from "react";
    
import { useOutletContext } from 'react-router-dom';

import Typography from '@mui/material/Typography';


const HostVanDescription = () => {
  
   const { van } = useOutletContext();
   const {type, description, name } = van
 
  return (     
       <section>
         <Typography
            variant="body2"
            sx={{
              pt: 1.5,
              pb: 1
              }}
          >
           {`Name: ${name}`}
          </Typography>
          <Typography
            variant="body2"
            
          >
           {`Catagory: ${type}`}
          </Typography>    
         <Typography
            variant="body2"
            sx={{
              py:1
              }}
          >
           {description}
          </Typography>
          <Typography
            variant="body2"
          >
           {`Visibility: ${"Public"}`}
          </Typography>
       </section>
  );
};

export default HostVanDescription;