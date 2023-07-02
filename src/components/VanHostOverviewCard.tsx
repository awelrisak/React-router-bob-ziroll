import { Link } from "react-router-dom"

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import { useNumberFormat } from "../utils"
import {vanTypeBackgroundColor} from "../constants"

const VanHostOverviewCard  = ( {
  van,
  link,
  edit
}) => {
  
  const { id, imageUrl, name, price, type } = van  
  return (
    <li>
    <Card    
     sx={{
       mb: 1
     }}
    >
      <CardHeader
        component={link ? Link : "div"}
        to={`${id}`}
        avatar={
          <Avatar 
            variant="rounded"
            sx={{ 
              bgcolor: vanTypeBackgroundColor[type]
              }} 
           aria-label="Hosted Van"
           src={imageUrl}
           alt={`${name} Image`}
           />
            
        }
        action={ edit &&
          (<IconButton 
            aria-label="edit"
            sx={{
              fontSize: "0.8rem"
            }}
            >
            <span>Edit</span>
          </IconButton>
          )
        }
        title={name}
        subheader={`${useNumberFormat(price)} / day`}
      />
    </Card>
    </li>
  )
}

export default VanHostOverviewCard