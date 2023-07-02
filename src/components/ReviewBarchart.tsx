import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import Rating from "@mui/material/Rating"

import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded"

import ReviewProgressBar from "./ReviewProgressBar"


function calculateAverageStar(ratingsSummaryData) {
  const weightedSum = ratingsSummaryData.reduce((accumulator, rating) => {
    return accumulator + (rating.starType * rating.percentage);
  }, 0);

  const totalPeople = ratingsSummaryData.reduce((accumulator, rating) => {
    return accumulator + rating.percentage;
  }, 0);

  const averageStar = weightedSum / totalPeople;

  return averageStar;
}



const ReviewBarchart = ({ratingsSummaryData}) => {
 
  const bars = ratingsSummaryData.map(rating => <ReviewProgressBar key={rating.id} data={rating}/>)
  
  return (
   
   <Paper
   className="unselectable"
     elevation={0}
     sx={{
      background: (theme) => theme.palette.primary.main,
     }}
   >
   <Stack 
   direction="row"
   alignItems="center"
   className="unselectable"
   sx={{
    pb: 0.5
   }}
   >
   <Typography 
   className="unselectable"
    variant="h5"
    component="h3"
    fontWeight="bolder"
   >
    {calculateAverageStar(ratingsSummaryData)}
   </Typography>
   <Rating 
      className="unselectable"
       defaultValue={1} 
       max={1}
       icon={<StarRateRoundedIcon fontSize="small" style={{ color: 'orange' }} />}
       readOnly
/>
  <Typography 
  className="unselectable"
    variant="body2"
    component="small"
   >
    overall rating
   </Typography>
   </Stack>
    {bars}
   </Paper>
 )
}

export  default ReviewBarchart