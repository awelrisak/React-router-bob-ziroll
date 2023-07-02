import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { mainNav } from "../constants" 

import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Toolbar from "@mui/material/Toolbar"

import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NavLinks from "./NavLinks"



const Navbar = () => {
 
  return (
    
    <AppBar 
      color="primary"
      sx={{ 
       mb: 1,
       backgroundColor: "#FFF7ED90",
       webkitBackdropFilter: "blur(10px)",
       backdropFilter:"blur(10px)"
      }} 
      elevation={0}
      component="header"
      position="sticky">
      
    <Toolbar disableGutters>
    
      <Button 
      component={Link}
      to="/"
      variant="text"
      size="size"
      sx={{
        flexGrow: 1,
        justifyContent: "flex-start",
        letterSpacing: "lg",
        pl: 0,
        color: "black"
      }}
      disableRipple
      >
       #VanLife
      </Button>
          
      <NavLinks navs={mainNav} />
      
      <Link to="signin">
         <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="account"
          aria-haspopup="true"
          
           >
             <AccountCircle />
          </IconButton>
        </Link>
        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
