import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from '@mui/material/styles';

import theme from "./theme.ts"

import CssBaseline from '@mui/material/CssBaseline';

import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/*<CssBaseline />*/}
      
      <ThemeProvider theme={theme} >
        <App />
      </ThemeProvider>
        
    </BrowserRouter>   
  </React.StrictMode>
);
