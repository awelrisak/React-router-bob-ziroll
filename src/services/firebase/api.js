import { 
     collection, doc,
     query,where,
     getDocs,
     getDoc,addDoc
     } from "firebase/firestore/lite";
     
import { db } from "./firebase-config"

//collection ref
const vansCollectionRef = collection(db, "vans")
const usersCollectionRef = collection(db, "users")




export const getVans = async () => {
 
    const querySnapshot = await getDocs(vansCollectionRef)
    const documents = querySnapshot.docs
    
    const vans = documents
       .map(doc => ({
            ...doc.data(),
            id: doc.id
           }))    
    
   
    return vans
}

export const getVan = async (id) => {
    const docRef = doc(db, "vans", id)
    
    const querySnapshot = await getDoc(docRef)
    
    return {
     ...querySnapshot.data(),
     id: querySnapshot.id
    }
}

/*export const getVans = async (id) => {
    const url = id ? `/api/vans/${id}` : "/api/vans"
  
    const response = await fetch(url)
    
    if (!response.ok) {
     console.log(response)
        throw new Error(response.statusText)
      }
      
    const data = await response.json()
    
    if (!data) {
     throw new Error("No vans to display");
       }
       
    return data?.vans
 }
 */
 
 export const getHostVans = async () => {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    
    const querySnapshot = await getDocs(q)
    const documents = querySnapshot.docs
    
    const hostVans = documents.map(doc => ({
     ...doc.data(),
     id: doc.id
    }))    
    
    return hostVans
 }
 
 export const getHostVan = async (id) => {
    const docRef = doc(db, "vans", id)
    
    const querySnapshot = await getDoc(docRef)
    
    return {
     ...querySnapshot.data(),
     id: querySnapshot.id
    }
}

export const addUser = async (user) => {
    const data = await addDoc(usersCollectionRef, user)
    
    console.log(data)
}

export const getUser = async (user) => {
    const docRef = doc(db, "vans", id)
    
    const querySnapshot = await getDoc(docRef)
    
    return {
     ...querySnapshot.data(),
     id: querySnapshot.id
    }
}
 
 export const loginUser = async (userCreds) => {
  const endPoint = "/api/login"
  
  const fetchPostOptions = {
   method: "post",
   body: JSON.stringify(userCreds)
  }
  
  const response = await fetch(endPoint, fetchPostOptions)
  const data = await response.json()
  
  
   if (!response.ok) {
        throw {
         message: data.message,
         status: response.status,
         statusText: response.statusText
        }
      }
      
      
      
      return data
      
 }