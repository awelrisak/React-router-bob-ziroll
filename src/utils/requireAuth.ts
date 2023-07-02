import { redirect } from "react-router-dom"

import { auth } from "../services/firebase/firebase-config"



export const requireAuth = async (request) => {  
  
    const  url = new URL(request.url)  
    const returnPath = url.pathname
    const user = false //auth.currentUser
        
    
  const redirectOptions={   
    status: 401,
    statusText: "require authentication",    
  }

  const returnSearchParam = returnPath 
          ? `?return=${returnPath}` 
          : ""  
          
  if (!user){
    
     throw redirect("/login" + returnSearchParam, redirectOptions)
  }
  
  return user
}