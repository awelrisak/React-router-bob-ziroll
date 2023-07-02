import React, { useState } from 'react';
import { createUser } from "../services/firebase/utils/createUserWithEmailAndPassword"


import { 
    useNavigation,
    Form
    } from "react-router-dom"

import { Paper, Typography, TextField } from '@mui/material';    
import LoadingButton from '@mui/lab/LoadingButton';



export const action = async ({ request }) => {
  const formData = await request.formData()
  
  const user = {
      name: formData.get("name"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password")
  }
  
  
  try{
      const userCred = await createUser(user)
      //console.log(userCred)   
  }
  catch(error){
   console.log(error.message)
  }
  
  
 return null
}

const Signup = () => {
  const navigation = useNavigation()
  
  //console.log(navigation)
  
  const handleNext = (event) => {
    const { currentTarget,  keyCode } = event
    if (keyCode === 13) {
        event.preventDefault();
        const nextTextField = currentTarget.nextSibling        
        const nextInputbase = nextTextField.getElementsByTagName("input")[0]
        
       nextInputbase.focus() 
      }
   }
   
  const handleInput = (event) => {
    const { currentTarget } = event;
    const currentInput = currentTarget.getElementsByTagName('input')[0];

    if (!currentInput.validity.valid) {
      currentInput.setCustomValidity('');
      currentInput.checkValidity();
    }
  };

  const handleInvalid = (event) => {
    const { currentTarget } = event;
    const currentInput = currentTarget.getElementsByTagName('input')[0];
    const name = currentInput.name;

    if (currentInput.validity.valueMissing) {
      currentInput.setCustomValidity(`Enter your ${name} here.`);
    }
    if (currentInput.validity.typeMismatch) {
      currentInput.setCustomValidity(`Enter valid ${name} here`);
    }
  };

  return (
    <>
    <Typography 
      variant="h5" 
      className="unselectable" 
      component="h1" 
      sx={{ 
          mt: 2,
          textAlign: "center"
      }}
      gutterBottom
      >
        Register your new account
      </Typography>
      <Form
         style={{ 
              marginBottom: '16px' 
              }} 
         method="post" 
         replace         
         >
        <Paper elevation={0} sx={{p: 1}}>
          <TextField
            
            label="Username"
            color="text"
            fullWidth
            type="text"
            name="username"
            onInput={handleInput}
            onKeyDown={handleNext}
            onInvalid={handleInvalid}
            inputProps={{
              enterKeyHint: 'next',
              autoComplete: 'username',
              inputMode: 'text',
            }}
            InputLabelProps={{
              style: {
                color: 'gray',
              },
            }}
            sx={{
              mb: 1,
            }}
          />
          <TextField
            
            label="Your name"
            color="text"
            fullWidth
            type="text"
            name="name"
            onInput={handleInput}
            onKeyDown={handleNext}
            onInvalid={handleInvalid}
            inputProps={{
              enterKeyHint: 'next',
              autoComplete: 'name',
              inputMode: 'text',
            }}
            InputLabelProps={{
              style: {
                color: 'gray',
              },
            }}
            sx={{
              mb: 1,
            }}
          />
          <TextField
            value="abdurazak.awil1@gmail.com"
            label="Email"
            color="text"
            fullWidth
            type="email"
            name="email"
            onInput={handleInput}
            onKeyDown={handleNext}
            onInvalid={handleInvalid}
            inputProps={{
              enterKeyHint: 'next',
              autoComplete: 'email',
              inputMode: 'email',
            }}
            InputLabelProps={{
              style: {
                color: 'gray',
              },
            }}
            sx={{
              mb: 1,
            }}
          />
          <TextField
          value="password123"
            label="Password"
            color="text"
            fullWidth
            type="password"
            id="password"
            name="password"
            onKeyDown={handleNext}
            inputProps={{
              enterKeyHint: 'next',
              autoComplete: 'current-password',
              inputMode: 'password',
            }}
            InputLabelProps={{
              style: {
                color: 'gray',
              },
            }}
             sx={{
              mb: 1,
            }}
          />
          <TextField
            label="Confirm password"
            color="text"
            fullWidth
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            inputProps={{
              enterKeyHint: 'done',
              autoComplete: 'current-password',
              inputMode: 'password',
            }}
            InputLabelProps={{
              style: {
                color: 'gray',
              },
            }}
          />
        </Paper>
        <LoadingButton
          className="unselectable"
          variant="contained"
          color="secondary"
          fullWidth
          type="submit"
          loading={navigation.state === "submitting"}
          sx={{
            mt: 4,
          }}
        >
          Sign up
        </LoadingButton>
      </Form>
    
    </>
  );
};

export default Signup;

