import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"


import Transaction from "./Transaction"



const TransactionsList = ({transactions}) => {
  
  const transactionsElms = transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)
  
  return (
       <Box sx={{mt: 6}}>
       <Stack sx={{
              fontWeight: "bold",               
            }} 
            direction="row"
            justifyContent="space-between"
            >
            
           <Typography 
             variant="title"
             component="h4"
             >
             {`Your transaction${transactions.length > 0 ? "s" : ""} (${transactions.length})`}
           </Typography>
                    
             <Typography
               variant="subtitle2"
              >
             Last 30 days
            </Typography>
        </Stack>
        
        <ul
         style={{padding: "4px"}}
        >
        {transactionsElms}
        </ul>
        </Box>
  )
}

export default TransactionsList