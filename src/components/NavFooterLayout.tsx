import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"
import Footer from "./Footer"


const NavFooterLayout = () => {
  return (
    <>
       <Navbar />              
         <main>
          <Outlet />     
         </main>      
       <Footer />       
    </>
  )
}

export default NavFooterLayout