import React, { useEffect } from "react";

import { 
    Await,
    defer,
    useLoaderData
    } from "react-router-dom"

import VansList from "../components/VansList"

import { getHostVans } from "../services/firebase/api"

export const loader = async () => {
  return defer({
      hostVans: getHostVans()
   })
};
const HostVans = () => {
  const { hostVans } = useLoaderData()
  
  useEffect(() => {
   document.title = "Host Vans"
  }, []);
  
  return (
      <React.Suspense
        fallback={<h3>Loading...</h3>}
       >
          <Await 
            resolve={hostVans}
            errorElement={ <h3>Error...</h3> }
          >
             <VansList link/>       
          </Await>
          
        </React.Suspense>
  )
}

export default HostVans