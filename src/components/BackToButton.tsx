import Button from '@mui/material/Button';
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';

import { Link } from "react-router-dom"

const BackToButton = ( { name, state } ) => {
   
    const search = state?.search || ""
    const filterType = state?.type || "all"
           
   return (
     <Button
        component={Link}
        to={`..${search}`}
        relative="path"
        sx={{
          textDecoration: "underline",
          textTransform: "uppercase",
          color: "black"
        }}
        
        startIcon={<KeyboardBackspaceSharpIcon />}
      >
        {`Back to ${filterType} Vans`}
      </Button>
  )
}

export default  BackToButton