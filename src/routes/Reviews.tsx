import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import ReviewBarchart from "../components/ReviewBarchart"
import ReviewsList from "../components/ReviewsList"

import {vanReviews} from "../constants"
import  { ratingsSummaryData } from "../constants"


const Reviews= () => {
  
  return (
    
    <>
       <Stack 
       direction="row"
       alignItems="baseline"
       spacing={1}
       sx={{
         py: 1.5,
         }}
       >
         <Typography
          variant="h6"
          component="h2"
          fontWeight="bolder"
          sx={{
            letterSpacing: "-1px",
          }}
         >
          Your Reviews 
         </Typography>
         <Typography
           variant="body2"
           sx={{
             letterSpacing: "-1px",
             fontSize: "0.7rem",
             display: "inline"
           }}
         >
           Last 30 days
         </Typography>
       </Stack>
       <ReviewBarchart ratingsSummaryData={ratingsSummaryData}/>
       
    <ReviewsList reviews={vanReviews} />
       
    
    </>
    
  )
}

export  default Reviews