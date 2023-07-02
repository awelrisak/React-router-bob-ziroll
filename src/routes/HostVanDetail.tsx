import React, { useEffect } from "react";
import { 
    useLoaderData,
    defer,
    Await
    } from "react-router-dom";



import BackToButton from "../components/BackToButton";

import HostVanDetailCard from "../components/HostVanDetailCard"
import VanDetailSkeleton from "../components/VanDetailSkeleton"

import { getHostVan } from "../services/firebase/api"
import { requireAuth } from "../utils";

export const loader = async ({ params }) => {
    return defer({van: getHostVan(params.id)})
};


const HostVanDetail = () => {   
    const { van } = useLoaderData()
    
      
    useEffect(() => {
        document.title = "Loading Van Details";
    }, []);


  return (
    <>
        <BackToButton name="vans" />
    
        <React.Suspense fallback={<VanDetailSkeleton />} >
         <Await 
          resolve={van}
          errorElement={<h2>Error</h2>}
         >
            <HostVanDetailCard />
         </Await>
       </React.Suspense>
          
    </>
  );
};

export default HostVanDetail
