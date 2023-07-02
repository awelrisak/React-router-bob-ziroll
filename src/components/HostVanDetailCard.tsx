import React, { useEffect } from "react"

import { 
  useAsyncValue,
  Outlet
} from "react-router-dom"; 

import { 
  IconButton, 
  Card, 
  CardContent, 
  Typography, 
  Stack,
  Avatar
} from "@mui/material";

import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';

import { hostVanNav } from "../constants";
import { vanTypeBackgroundColor } from "../constants";
import NavLinks from "./NavLinks";



const HostVanDetailCard = () => {
  const van = useAsyncValue();
  const { imageUrl, name, type, price } = van;
  
  
  useEffect(() => {
        document.title = name 
    }, []);
    
  return (
    <Card 
      component="article" 
      elevation={0} 
      sx={{ 
         height: "auto" 
         }}
    >
      <CardContent 
        sx={{ 
          p: 2, 
          width: "100%", 
          height: "100%" 
        }}
      >
        <Stack 
          direction="row" 
          spacing={1} 
          sx={{ 
            width: "100%", 
            height: "40%" 
          }}
        >
          <Avatar
           variant="rounded"
            sx={{ 
              mb: 1, 
              height: 140, 
              width: 140,
              bgcolor: vanTypeBackgroundColor[type]
            }}
            src={imageUrl}
            title={name}
            alt={name}
          />
          <Stack 
             alignItems="flex-start" 
             sx={{ 
                 height: "80%", 
                 alignSelf: "center" 
                 }}>
            <Typography
              component="span"
              sx={{
                px: 1.5,
                py: "0.1rem",
                borderRadius: "0.3rem",
                backgroundColor: vanTypeBackgroundColor[type],
                color: "white"
              }}
              gutterBottom
            >
              {type}
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              sx={{ 
                  fontWeight: "bolder", 
                  letterSpacing: "-1px" 
                  }}
            >
              {name}
            </Typography>
            <Stack 
              direction="row" 
              alignItems="baseline">
              <Typography
                variant="title"
                component="strong"
                sx={{ 
                   fontWeight: "bold", 
                   display: "inline" 
                   }}
              >
                ${price}
              </Typography>
              <Typography
                variant="title"
                component="span"
                sx={{ 
                  fontWeight: "400", 
                  color: "#00000080" 
                }}
              >
                /day
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack 
          direction="row" 
          justifyContent="space-between"
        >
          <NavLinks
            navs={hostVanNav}
            activeColor="#00000090"
            fontSize="0.675rem"
          />
          <IconButton aria-label="Edit">
            <EditNoteRoundedIcon />
          </IconButton>
        </Stack>
        <Outlet context={{ van }}/>
      </CardContent>
    </Card>
  );
}

export default HostVanDetailCard;
