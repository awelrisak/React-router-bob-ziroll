import React  from "react"

import Grid from '@mui/material/Grid';
import VanOverviewCard from "./VanOverviewCard";

import VanOverviewCardSkeleton from "./VanOverviewCardSkeleton";

import { 
     useSearchParams, 
     useAsyncValue } from "react-router-dom";


const VansGrid =  ( ) => {
   const [ searchParams ] = useSearchParams()
   const  vans = useAsyncValue()
 
 
   const filterType = searchParams.get("type")?.toLowerCase()
 
   const displayedVans = filterType
      ? vans.filter(van => van.type.toLowerCase() === filterType)
      : vans
           
  const  vansGridItems = displayedVans.map(van => (
     
          <Grid 
              item 
              xs={6} 
              md={4}
              key={van.id}
              component="li"
          >
            <VanOverviewCard 
              van={van} 
              />
          </Grid>
          ))
          
  return (
   
   <Grid 
        container 
        spacing={3} 
        component="ul"
        sx={{
         listStyleType: "none",
         p: 0
        }}
        >
        { vansGridItems }
      </Grid>
 
  )
}

export default  VansGrid