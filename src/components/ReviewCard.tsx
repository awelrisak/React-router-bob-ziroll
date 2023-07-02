import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"

import Rating from "@mui/material/Rating"
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const ReviewCard = ({review}) => {
   const {starValue, date, name, comment} = review
   
  return (
    <Paper
        component="li"  
        elevation={0}
        sx={{
          my: 1,
          pt: 1,
         backgroundColor: "primary.main"
        }}
        >
        <Rating 
            defaultValue={starValue} 
            max={5}
            icon={<StarRateRoundedIcon fontSize="small" style={{ color: 'orange' }} />}
            readOnly
/>
       <Stack
        direction="row"
        alignItems="baseline"
        spacing={1}
       >
        <Typography
          variant="title"
          
          fontWeight="bold"
          sx={{
            letterSpacing: "-1px",            
          }}
        >
        {name}
        </Typography>
       <Typography
          variant="body2"
          component="span"
        >
        &#8226;
        </Typography> 
        
        <Typography
          variant="subtitle1"
          component="span"
          fontSize="small"
          fontWeight="450"
        >
        {date}
        </Typography>
        </Stack>
        <Typography
          variant="body2" 
           fontSize="small"
           color="grey.800"        
        >
        {comment}
        </Typography> 
     </Paper>
  )
}

export default ReviewCard