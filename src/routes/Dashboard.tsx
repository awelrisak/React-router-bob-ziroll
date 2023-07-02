import React, { useEffect } from "react";
import { 
  Await, 
  defer,
  useLoaderData
  } from "react-router-dom"


import IncomeSummary from "../components/IncomeSummary"
import VansList from "../components/VansList"

import { getHostVans } from "../services/firebase/api"


export const loader = async () => {

  return defer({
      hostVans: getHostVans()
   })
};

const Dashboard = () => {
  const { hostVans }= useLoaderData()
 
  useEffect(() => {
   document.title = "Dashboard"
  }, []);
  
  return (
    <>
        <IncomeSummary />
       <React.Suspense
        fallback={<h3>Loading...</h3>}
       >
          <Await 
            resolve={hostVans}
            errorElement={ <h3>Error...</h3> }
          >
             <VansList edit viewAllButton/>       
          </Await>
          
        </React.Suspense>
    </>
  )
  
  
}

export default Dashboard