import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

import { useSelector } from "react-redux"

import { useSearchParams } from "react-router-dom"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from "@mui/material/Paper"
import Rating from "@mui/material/Rating"
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

import { useNumberFormat } from "../utils"


const IncomeSummary = () => {
  const user = useSelector(state => state.user)
  
  const [ searchParams, setSearchParams ] = useSearchParams()  
  
  const fromPath = searchParams.get("fromPath")
  
  
  
  
  
  return (
    <>
      <Paper        
         sx={{
           backgroundColor: (theme) => theme.palette.primary.light,
           mt: 2,
           p: 2,
           borderBottomRightRadius: 0,
           borderBottomLeftRadius: 0
          
         }}
         
         >          
       
       { fromPath && 
            <Typography
             variant="title"
             component="h3"
             gutterBottom             
          >
            Welcome {user.name}!
          </Typography>
        }
          
          <Stack 
            direction="row" 
            justifyContent="space-between">
            <Typography
              variant="subtitle2"
              component="h6"
            >
              Income last 30 days
            </Typography>
            
            <Typography
              variant="subtitle2"
              component="a"
              href="#"
            >
             Details
            </Typography>
            
          </Stack>
          
          <Typography
            
            variant="h4"
            sx={{
              fontWeight: "bolder",
              mt: 1
            }}           
          >
          {useNumberFormat(2260)}
          </Typography>
                  
      </Paper>
      <Paper    
             sx={{
                 p: 2,
                 mb: 2,
                 background: (theme) => theme.palette.primary.dark,
                 display: "flex",
                 
                 borderTopRightRadius: 0,
                 borderTopLeftRadius: 0
                  }}              
          >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "bold"
                }}
              >
                Review Score
              </Typography>
              
              <Stack
                direction="row"
                alignItems="center"
                sx={{
                  flexGrow: 1, 
                  ml: 1            
                }}
              >              
                <Rating 
                   defaultValue={1} 
                   max={1}
                   icon={<StarRateRoundedIcon fontSize="inherit" style={{ color: 'orange' }} />}
                   readOnly
/>
                   
                   <Typography
                     variant="body2"
                     sx={{
                       fontWeight: "bold"
                     }}
                   >
                     5.0
                   </Typography>
                     <Typography
                     variant="body2"
                   >
                     /5
                   </Typography>
              </Stack>
              
              <Typography
              variant="body2"
              component="a"
              href="#"
            >
             Details
            </Typography>
            </Paper>
    </>
  )
  
  
}

export default IncomeSummary