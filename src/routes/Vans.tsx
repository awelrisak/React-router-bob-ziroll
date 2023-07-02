
import React, { useEffect } from "react";

import { 
 useLoaderData, 
 defer,
 Await,
 } from "react-router-dom"

import Typography from '@mui/material/Typography';

import VansChips from "../components/VansChips"
import VansGrid from "../components/VansGrid";
import VansGridSkeleton from "../components/VansGridSkeleton";
import VansErrorElement from "../components/VansErrorElement"


import { getVans } from "../services/firebase/api"


export const loader = async () => {
 
 const storedVans = localStorage.getItem("vans")

  return defer({
   vans: storedVans ? JSON.parse(storedVans).vans : getVans()
   })
};

const Vans = () => {
  const { vans } = useLoaderData()
        
   useEffect(() => {
     document.title = "Vans"
     
     return () => {
        localStorage.clear()
     }
  }, []);
  
    
  return (
    <>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ 
        fontWeight: "bold" 
        }}
      >
        Explore our van options
      </Typography>
      
<React.Suspense
        fallback={<VansGridSkeleton />}
      >
   <Await 
     resolve={vans}
     errorElement={ <VansErrorElement />}
    >
      <VansChips />
       <VansGrid />
   </Await>
   </React.Suspense>
   </>
  );
}

export default Vans;

/*

*/
