import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

import React from "react";
import ReactDOM from "react-dom/client";
import {  RouterProvider, } from "react-router-dom"

//import { Provider } from "react-redux";
//import store from "./redux/store"

import "./index.css";
//import "./server"

import { router } from "./routes/router"
import { AuthProvider } from  "./contexts/Auth"

import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme.ts"

import CssBaseline from '@mui/material/CssBaseline';


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>   
      <ThemeProvider theme={theme} > 
      <AuthProvider>   
           <RouterProvider router={router} />  
      </AuthProvider>  
      </ThemeProvider>  </React.StrictMode>
);
