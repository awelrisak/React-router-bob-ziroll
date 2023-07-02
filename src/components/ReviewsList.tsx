import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"

import ReviewCard from "./ReviewCard"

const ReviewsList = ({reviews}) => {
  
  
  const reviewsElms = reviews.map((review, index) => {
    const key = review.starValue+review.name + review.date
    return (
      <>
        <ReviewCard  key={key} review={review} />
        <Divider sx={{
          backgroundColor: "grey.300",
          }}
          
          />
      </>
    )
  })
  return (
    <Box
    
    sx={{
      py: 2,
      mt: 2
    }}
    >
    
      <Typography
        className="unselectable"
        variant="body1"
        component="h3"
        fontWeight="bolder"
        sx={{
          letterSpacing: "-1px"
        }}
      >
       {`Reviews (${reviews.length})`}
      </Typography>
      
      <ul>
         {reviewsElms}
       </ul>
       
    </Box>
  )
}

export default ReviewsList