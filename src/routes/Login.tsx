import React, { useState } from "react"
import { auth } from "../services/firebase/firebase-config"

import { Link, Navigate, redirect, Form, useNavigation, useActionData, useSearchParams } from "react-router-dom"

//import { useDispatch, useSelector } from "react-redux"

import { loginUser } from "../redux/user/userActions"

import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Paper from "@mui/material/Paper"
import LoadingButton from "@mui/lab/LoadingButton"
import Stack from "@mui/material/Stack"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"
import Slide from "@mui/material/Slide"
import Fade from "@mui/material/Fade"



import { loginUser as postUserCred } from "../services/firebase/api"

import store from "../redux/store"

export const loader = async ({ request }) => {  
   const user = false //auth.currentUser
   const url = new URL(request.url)
   const searchParams = url.searchParams
   
   const returnTo = searchParams.get("return")
   
      
  if (user){    
  throw redirect(returnTo || "/host?fromPath=login", {
      status: 301,
      statusText: "User is already logged in"
    })    
    
    }
  
  return null
};

export const action = async ({ request }) => {
  const formData = await request.formData()
  
  const email = formData.get("email")
  const password = formData.get("password")
  
  try{
    console.log("logging in")
   }
   catch(error){
     return error
   }   
}


const Login = () => {
  const error = useActionData()
  const [ searchParams, setSearchParams ] = useSearchParams()  
  const returnPath = searchParams.get("return")
  
  const navigation = useNavigation();
  
  
  const submittingLoginForm = navigation.state === "submitting"
  const formSubmitError = error?.status == 401
  
  
  const title = returnPath
           ? "Sign in first to continue."
           : "Sign in to your account."
  
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
     const {currentTarget } = event
     const currentInput = currentTarget.getElementsByTagName("input")[0]
     
     if (!currentInput.validity.valid){
         currentInput.setCustomValidity("");
         currentInput.checkValidity();
         }
   }
   
   const handleInvalid = (event) => {
     
      const {currentTarget } = event
      
          
      const currentInput = currentTarget.getElementsByTagName("input")[0]
      
      
            
     const name = currentInput.name
     
   if (currentInput.validity.valueMissing) {
     currentInput.setCustomValidity(`Enter your ${name} here.`);
      
   } 
   if (currentInput.validity.typeMismatch) {
      currentInput.setCustomValidity(`Enter valid ${name} here`);
     
   } 
     
  }
  
  const arrowRight = (<Typography color="secondary" sx={{display: "inline"}} variant="body2">--></Typography>)
  
  
  return (
    <>
    
    <Slide 
      in={Boolean(formSubmitError)} 
      direction="down" 
      unmountOnExit
      >
      <Alert 
        variant="outlined"
        severity="error"
        sx={{
          maxWidth: "sm",
        }}
        >
        <AlertTitle>Oopsie, We Can't Find It!</AlertTitle>
       Double-check the email and password you typed to make sure they are right. If you're new, you can make a brand-<Typography color="secondary" variant="body2" component={Link} to="/signup" sx={{display: "inline", textDecoration: "underline"}}>new account </Typography>.{arrowRight}
      </Alert>
      </Slide>
      
      <Typography
        variant="h5"
        className="unselectable"
        component="h1"
        sx={{
          mt: 2,
          mb: 4,          
          textAlign: "center",          
        }}
      >{ title }
      </Typography>
    <Form 
      style={{marginBottom: "16px"}}
      method="post"
      replace
      >
    <Paper elevation={0}> 
       <TextField 
         required
         label="Email" 
         color="text"  
         fullWidth                   
         type="email"     
         name="email"
         onInput={handleInput}
         onKeyDown={handleNext}
         onInvalid={handleInvalid}
         inputProps={{
             enterKeyHint: "next",
             autoComplete: "email",
             inputMode: "email"
           }}
         InputLabelProps={{
             style: {
               color: "gray"
             }
           }}
         sx={{
           mb: 1,           
         }}
         />         
        <TextField 
           label="Password" 
           color="text"
           fullWidth
           type="password"
           id="password"
           name="password"
           
           inputProps={{
             enterKeyHint: "done",
             autoComplete: "current-password",
             inputMode: "password"
           }}
           InputLabelProps={{
             style: {
               color: "gray",
               
             }
           }}
         />   
          </Paper>
    <LoadingButton 
     className="unselectable"
      variant="contained" 
      color="secondary"
      fullWidth
      type="submit"
      loading={submittingLoginForm}
      sx={{
        mt: 5,
      }}
      >
      Sign in
      </LoadingButton>
      
      {
        (Boolean(formSubmitError) ) &&
      (<Typography 
       color="secondary" 
       variant="body2" 
       component={Link} 
       to="/vans" 
       sx={{
        my: 2,
        display: "flex",
        justifyContent: "center",
         textDecoration: "underline",         
         }}>
         Forget password?
         </Typography>
         )
         }
     </Form>
     
         
     <Fade
        in={!(Boolean(formSubmitError) || submittingLoginForm)}
        unmountOnExit
        >
      <Stack 
            direction="row" 
            justifyContent="center" 
            spacing={1}
            >
            <Typography
              variant="body2"
             className="unselectable"
            >
              New buddy? 
            </Typography>
            
            <Typography
              variant="body2"
              color="secondary"
              component={Link}
              className="unselectable"
              to="/signup"
              id="create-new-account"
             sx={{
               textDecoration: "underline"
             }}
            >
              Create your account
            </Typography>
            { arrowRight }
          </Stack>
          </Fade>
    </>
  )
}


export default Login