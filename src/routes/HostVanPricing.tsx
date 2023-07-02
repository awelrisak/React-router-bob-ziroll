import React, { useEffect, useReducer } from "react";
import { useOutletContext } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const HostVanPricing = () => {
   const { van } = useOutletContext();
   const {price, name } = van
  
  return (         
          <Stack
            direction="row"      
            alignItems="baseline" 
            component="section"
          >
            <Typography
              variant="h6"
              component="strong"
              sx={{
                fontWeight: 'bold',
                display: 'inline'
              }}
            >
              ${price}
            </Typography>

            <Typography
              variant="h6"
              component="span"
              sx={{
                fontWeight: '400',
                color: '#00000080'
              }}
            >
              /day
            </Typography>
       </Stack>
  );
};

export default HostVanPricing;