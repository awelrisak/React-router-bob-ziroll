import { Link, useSearchParams} from "react-router-dom"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

import { useNumberFormat } from "../utils"
import {vanTypeBackgroundColor} from "../constants"

const imgSkeleton = (
    <Skeleton 
           variant="rectangular" 
           width={180} 
           height={180} 
           sx={{
            color:"#BBB",
            fontWeight: "bold",
            fontSize: "1.5rem",
             display: "flex",
             justifyContent: "center",
             alignItems: "center"
           }}
           />
           )
           
const VanOverviewCard = ( { van } ) => {
 const [ searchParams ] = useSearchParams()
 
  const { imageUrl, name, price, type} = van
  
  const state = {
         search: `?${searchParams.toString()}`, 
         type: searchParams.get("type")
               }
  return (
    <Card 
     component={ Link }
     state={state}
     to={`${van.id}`}
      elevation={0} 
      sx={{ 
      
      backgroundColor: "primary",
      }}>
      
      <CardMedia
        sx={{ 
           p: 0, 
           aspectRatio: "1/1" 
           }}
        title={name}
        image={imageUrl}
        alt={"Image of " + name}
      />
      
      <CardContent 
          sx={{ 
             p: 0,
             borderBottomLeftRadius: "15px",
             borderBottomRightRadius: "15px"
             }}>
          
       <Stack 
            direction="row" 
            >
          
        <Typography
      gutterBottom
      sx={{
        flexGrow: 1,
      }}
      variant="h6"
      component="h3"
    >
      {name}
    </Typography>
        <Stack direction="column" alignItems="flex-end"> 
          <Typography 
            variant="body1" 
            component="h3">
            {useNumberFormat(price)}
          </Typography>
          <Typography 
            sx={{ mt: -1 }} 
            variant="body2" 
            color="grey" 
            component="h5">
            /day
          </Typography>
          </Stack>
        </Stack>
        
       {type &&  <Typography 
         component="span"
         variant="body1"
        sx={{
          px: 1.5,
          py: "0.1rem",
          borderRadius: "0.3rem",
          backgroundColor: vanTypeBackgroundColor[type],
          color: "white",
          textTransform: "capitalize"
        }}
       >
          {type}
        </Typography> }        
        
      </CardContent>
  
    </Card>
  );
}

export default VanOverviewCard;