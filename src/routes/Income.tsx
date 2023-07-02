import React from 'react';
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Container from "@mui/material/Container"


import TransactionsList from "../components/TransactionsList"
import Barchart from "../components/Barchart"

import { transactions } from "../constants"
import { monthlyRevenue } from "../constants"

import { useNumberFormat } from "../utils"


const Income = () => {
  
  return (
     <>       
     <Paper
       elevation={0}
       sx={{
         backgroundColor: theme=>theme.palette.primary.main,
         }}
 
     > 
            <Typography
             variant="h5"
             component="h2"
             sx={{
               mt: 3,
               fontWeight: "bolder",
               letterSpacing: "-1px",
             }}
          >
            Income
          </Typography>
          
       
            <Typography
              variant="body2"
              sx={{
                py: 1.5
              }}
            >
              Last 30 days
            </Typography>
                     
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bolder",
              letterSpacing: "-1px",
              mb: 6
            }}
            
          >
          {useNumberFormat(2260)}
          </Typography>
         </Paper>
         
         <Container 
           maxWidth="xs"
           disableGutters
           >
             <Barchart data={monthlyRevenue} />
         </Container>
         
         <TransactionsList transactions={transactions} />

     </>
  )
}


export default Income