import React, { useEffect } from "react";
import { 
  Link, 
  useLocation, 
  useLoaderData,
  Await,
  defer
  } from 'react-router-dom';


import BackToButton from "../components/BackToButton"
import VanDetailCard from "../components/VanDetailCard"
import VanDetailSkeleton from "../components/VanDetailSkeleton"



import { getVan } from "../services/firebase/api"

export const loader = async ({ params }) => {
    return defer({van: getVan(params.id)})
};


const VanDetail = () => {
     const location = useLocation()  
     const { van } = useLoaderData()
      
     useEffect(() => {
         document.title = "Loading Van Details"
     }, [name])

 
  return (
     <>
       <BackToButton name="vans" state={location.state}/>
       
       <React.Suspense fallback={<VanDetailSkeleton />} >
         <Await 
          resolve={van}
          errorElement={<h2>Error</h2>}
         >
            <VanDetailCard />
         </Await>
       </React.Suspense>
    </>
  );
};

export default VanDetail;