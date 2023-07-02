import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const VanDetailSkeleton = () => (
    <Box>
      <Skeleton 
           variant="rectangular" 
           width="100%"
           height={350} />
      <Skeleton 
           sx={{fontSize:"2rem"}} 
           variant="text" 
           width="60%" />
      <Skeleton 
           variant="text" 
           width="30%" />
    </Box>
  );
  
  export default VanDetailSkeleton