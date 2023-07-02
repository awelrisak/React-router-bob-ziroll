import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const VanOverviewCardSkeleton = () => (
    <Box>
      <Skeleton 
           variant="rectangular" 
           width={180} 
           height={180} />
      <Skeleton 
           sx={{fontSize:"2rem"}} 
           variant="text" 
           width="60%" />
      <Skeleton 
           variant="text" 
           width="30%" />
    </Box>
  );
  
  export default VanOverviewCardSkeleton