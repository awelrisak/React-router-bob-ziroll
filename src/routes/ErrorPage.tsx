import React from 'react';

import { Typography, Button } from '@mui/material';
import { Link, useRouteError, Navigate } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError()
  
  console.log(error)
  //redirect if user is already login to host
  if ((error?.status === 301) && (error?.statusText === "User is already logged in")) {
  return (
    <Navigate 
       to={"/login"}
      replace={true}
    />
  );
}
  
  //user is not log in , redirect to login for require-auth errors
  if (error?.status == 401){
    return (
      <Navigate 
        to={"/login"}
        replace={true}
        />
    );
  }  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <Typography 
        variant="h1" 
        gutterBottom>
        { error.status || "Error" }
      </Typography>
      <Typography 
      variant="h4" 
      sx={{
        textAlign: "center"
      }}
      gutterBottom
      >
        {error.message || error.data || error.statusText}
      </Typography>
      <Typography 
         variant="body1" 
         gutterBottom>
       
      </Typography>
      <Button 
          variant="contained" 
          color="secondary" 
          component={Link} 
          to="/">
         Go Back To Home
      </Button>
    </div>
  );
};

export default ErrorPage;
