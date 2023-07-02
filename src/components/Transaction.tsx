import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"

import { useNumberFormat } from "../utils"

const Transaction = ({transaction}) => {
  const {date, amount} = transaction
  
  return (
    <Paper
       component="li" 
        elevation={0}
        sx={{
          p: 2,
          mb: 1,
          display:"flex",
          justifyContent: "space-between"
        }}
        >
        <Typography variant="title">
          {useNumberFormat(amount)}
        </Typography>
        <Typography>
        {date}
        </Typography>
     </Paper>
  )
}

export default Transaction