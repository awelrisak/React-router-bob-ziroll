import { 
    createBrowserRouter,
    Navigate
    } from "react-router-dom";


//Layouts
import NavFooterLayout from "../components/NavFooterLayout"

//pages
import ErrorPage from "./ErrorPage"
import Root from "./Root";
import About from "./About"
import Host, { loader as hostLoader } from "./Host";
import Dashboard, { loader as dashboardLoader } from "./Dashboard";
import Income from "./Income"
import HostVans, { loader as hostVansLoader } from "./HostVans"
import HostVanDetail, { loader as hostVanDetailLoader } from "./HostVanDetail"
import HostVanDescription from "./HostVanDescription";
import HostVanPricing from "./HostVanPricing"
import HostVanImage from "./HostVanImage"

import Reviews from "./Reviews"

import Vans, { loader as vansLoader }from "./Vans"
import VanDetail, { loader as vanDetailLoader } from "./vanDetail"

import Login, { 
   loader as loginLoader,
   action as loginAction
   } from "./Login"
   
import Signup, { action as signupAction }from "./Signup"
   
import NotFoundPage from "./NotFoundPage"

export const router = createBrowserRouter([
   { 
    Component: NavFooterLayout,
    
    children: [
       { 
        path: "/", 
        Component: Root,
        errorElement: <ErrorPage />, 
      },      
      { 
        path: "host", 
        id: "host",
        Component: Host,
        errorElement: <ErrorPage />,
        loader: hostLoader,
        children: [
          {
          index: true,
          Component: Dashboard,
          loader: dashboardLoader,
          },
           { 
           path: "income", 
           Component: Income
          },
          { 
           path: "vans", 
           Component: HostVans,
           loader: hostVansLoader
          },
          { 
           path: "vans/:id", 
           Component: HostVanDetail,
           loader: hostVanDetailLoader,
           children: [
              { 
                index: true, 
                Component: HostVanDescription
              },
              { 
                path: "pricing", 
                Component: HostVanPricing
              },
              { 
                path: "photos", 
                Component: HostVanImage
              },
           ]
          },
          { 
           path: "reviews", 
          Component: Reviews
          },
        ],
      },            
        
       { 
        path: "about", 
        Component: About,
      },
      { 
        path: "vans", 
        Component: Vans,
       errorElement: <ErrorPage />, 
        loader: vansLoader
      }, 
      { 
        path: "vans/:id", 
        Component: VanDetail,
        loader: vanDetailLoader
      },
      { 
        path: "login", 
        Component: Login,
        loader: loginLoader,
        errorElement: <ErrorPage />,
        action: loginAction
      },
      { 
        path: "signin", 
        element: <Navigate to="/login" replace />,
      },
       { 
        path: "signup", 
        Component:  Signup,
        action: signupAction
      },
       { 
        path: "*", 
        Component: NotFoundPage
      },
    ]
   },
]);
      