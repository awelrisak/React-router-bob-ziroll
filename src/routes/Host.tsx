
import React, { useEffect } from "react"
import { 
    Outlet, 
    } from "react-router-dom";

import NavLinks from "../components/NavLinks"

import { hostNav } from "../constants";
import { requireAuth } from "../utils";
import { getHostVans } from "../services/firebase/api"

export const loader = async ({ request }) => {
  
  await requireAuth(request)

  return null
};

const Host = () => {
    
    
  useEffect(() => {
    document.title = "Host"
  }, [])
  
  return (
    <>    
    <NavLinks 
       navs={hostNav} 
       activeColor="#00000090"
       fontSize="0.675rem"
       />
    <Outlet />
    </>
  );
}

export default Host