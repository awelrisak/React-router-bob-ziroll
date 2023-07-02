import {
      useAsyncValue
} from "react-router-dom"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import  { vanTypeBackgroundColor } from "../constants"

import { useNumberFormat } from "../utils"

const VanDetailCard = () =>{
      const van = useAsyncValue()
      const { imageUrl, name, type, price, description } = van
      
      return (
            <Card
        elevation={0}
        sx={{
          maxWidth: '100%',
          p: '0.8rem'
        }}
      >
        <CardMedia
          sx={{
            height: 350,
            mb: '2rem',
          }}
          image={imageUrl}
          alt={name}
        />
        <CardContent
          sx={{
            p: 0
          }}
        >
          {type && (
            <Typography
              component="span"
              sx={{
                px: 1.5,
                py: '0.1rem',
                borderRadius: '0.3rem',
                backgroundColor: vanTypeBackgroundColor[type],
                color: 'white'
              }}
            >
              {type}
            </Typography>
          )}
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            sx={{
              mt: '0.6rem',
              mb: '0.3rem',
              fontWeight: 'bold'
            }}
          >
            {name}
          </Typography>

          <Stack
            direction="row"
            sx={{
              mb: '0.8rem'
            }}
          >
            <Typography
              variant="h6"
              component="strong"
              sx={{
                fontWeight: 'bold',
                display: 'inline'
              }}
            >
              {useNumberFormat(price)}
            </Typography>

            <Typography
              variant="h6"
              component="span"
              sx={{
                fontWeight: '400',
                color: '#00000080'
              }}
            >
              /day
            </Typography>
          </Stack>

          <Typography
            variant="body2"
            sx={{
              mb: '0.8rem'
            }}
          >
           {description}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            backgroundColor: 'brown',
            p: 0,
            mt: 5
          }}
        >
          <Button
            fullWidth
            sx={{
              backgroundColor: 'orange',
              color: 'white',              
            }}
          >
            Rent this car
          </Button>
        </CardActions>
      </Card>
      )
}

export default VanDetailCard 