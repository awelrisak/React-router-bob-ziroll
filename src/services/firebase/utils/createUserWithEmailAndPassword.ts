import { auth } from "../firebase-config"
import { addUser } from "../api"

import { 
    createUserWithEmailAndPassword 
    } from "firebase/auth"
    
export const createUser = async (user) => {
 
  try{
        //create user authentication  
        try {
         
          var userCreds = await createUserWithEmailAndPassword (auth, user.email, user.password)
          
          return userCreds
        }
        catch(error){
          throw error
        }
      //store username, email, name in the firestore
     /*try{
      await addUser({
       name: user.name,
       username: user.username,
       email: user.email
      })
     }
     catch(error){
    throw error
  }*/
  
  }
  catch(error){
    throw error
  }
 
}