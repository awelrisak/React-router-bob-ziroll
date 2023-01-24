import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';

import InfoIcon from '@mui/icons-material/Info';
import Home from '@mui/icons-material/Home';

const Navbar = () => {
  const [navTabValue, setNavTabValue] = useState(0);

  const handleNavTabChange = (event, newValue) => {
    setNavTabValue(newValue);
  };


  return (
    
    <AppBar 
      color="primary"
      sx={{ 
      p: 1
      }} 
      elevation={0}
      position="sticky">
    <Toolbar disableGutters>
    
      <Button 
      component={Link}
      to="/"
      variant="text"
      color="secondary"
      sx={{
        flexGrow: 1,
        justifyContent: "flex-start",
        fontSize: "1.25rem",
        lineSpacing: "md",
        pl: 0
      }}
      disableRipple
      >
       #VanLife
      </Button>
          
      <Tabs
        value={navTabValue}
        onChange={handleNavTabChange}
        indicatorColor="secondary"
        textColor="inherit"
        aria-label="secondary tabs example"
      >
        <Tab
          label="Home"
          to="/"
          component={NavLink}        
        />
        <Tab
          label="About"
          to="/about"
          component={NavLink}
        />
      </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
