import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage = ({name="Page", goBackName="Home", goBackPath="/"}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <Typography 
        variant="h1" 
        gutterBottom>
        404
      </Typography>
      <Typography variant="h4" gutterBottom>
        Oops! {name} not found.
      </Typography>
      <Typography 
         variant="body1" 
         gutterBottom>
        The { name } you are looking for does not exist.
      </Typography>
      <Button 
          variant="contained" 
          
          sx={{backgroundColor: "black", color: "white"}}
          component={Link} 
          to={goBackPath }>
        Go to {goBackName }
      </Button>
    </div>
  );
};

export default NotFoundPage;
