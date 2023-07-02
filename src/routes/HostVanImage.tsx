import React, { useEffect, useReducer } from "react";
import { useOutletContext } from 'react-router-dom';


import Typography from '@mui/material/Typography';


const HostVanImage = () => {
    const { van } = useOutletContext();  
    const {imageUrl, name } = van
  
  
  
  return (     
      <section>       
         <img
          alt={name}
          src={imageUrl}
          height="30%"
          width="30%"
          />
      </section>
  );
};

export default HostVanImage;