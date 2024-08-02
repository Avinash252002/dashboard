import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import DashBoard from "./Dashboard";


   export const router = createBrowserRouter([
   
      {
        path: "/",
        element:  <DashBoard/>
      },
      {
        path: "/analytics",
        element: <></>,


      },
      {
        path: "/tasks",
        element: < ></>,


      },
      {
         path: "/transactions",
         element: < ></>,

 
       },
       {
         path: "/orders",
         element: <App />,
 
       },
      {
        path: "*", // This catches any undefined routes (404)
        element: <>Page not found</>,

      },
    ]);
