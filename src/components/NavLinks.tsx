import { NavLink } from "react-router-dom";
import Stack from "@mui/material/Stack"

const NavLinks = ({
 navs, 
 spacing=2, 
 activeColor="#000", 
 fontSize="0.8rem", 
 }) => {
  
  const Navs = navs.map(nav => {
  return (
   <NavLink
      key={nav.id}
      to={nav.to}
      style={nav.style(activeColor, fontSize)}
      end={nav.end || false}
    >
    {nav.label}
   </NavLink>
  )
  
})

 return (
   <Stack
      component="nav"
      spacing={spacing}
      direction="row"
      sx={{
       py: 1,
       backgroundColor: "inherit"
       }}
      >
        {Navs}
     
      </Stack>
 )

}

export default NavLinks