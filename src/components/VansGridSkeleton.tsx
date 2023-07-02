import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import VanOverviewCardSkeleton from "./VanOverviewCardSkeleton";

const VansGridSkeleton = () => {
  
   const cardSkeletonGridItems = [1,2,3,4].map( () => 
         ( <Grid 
             component="li"
             item 
             xs={6} 
             key={`${Math.random()}`}
             >
            <VanOverviewCardSkeleton />
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
        { cardSkeletonGridItems }
      </Grid>
    );
    }
  
  
  export default VansGridSkeleton