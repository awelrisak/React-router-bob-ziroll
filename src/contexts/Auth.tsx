import { createContext, useContext, useState } from "react"

import { auth } from "../services/firebase/firebase-config"

const AuthContext = createContext(null)


export const AuthProvider = ({children}) => {
    
    (() => console.log(auth.currentUser))()
    
    const [user, setUser] = useState("hello")
    
    const login = (user) => {
        setUser(user)
    }
    
    const logout = () => {
        setUser(null)
    }
    

    return (
      
      <AuthContext.Provider value={{user, login, logout}}>
      
      {children}
      
      </AuthContext.Provider>  
    )
    
    } 
    
export const useAuth = () => {
    return useContext(AuthContext)
}
