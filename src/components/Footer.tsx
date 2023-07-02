import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Typography 
       variant="body2" 
       component="footer" 
       color="grey"
       className="unselectable"
       sx={{
         width: "100%",
         textAlign: "center",
         
         py: 2,
         mt: 3,
         }}>
        &#169;  2022 VANLIFE
      </Typography>
  )
}

export default Footer