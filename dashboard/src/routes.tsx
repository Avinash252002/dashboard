import { createBrowserRouter } from "react-router-dom";
import App from "./App";


   export const router = createBrowserRouter([
   
      {
        path: "/",
        element: < ></>,
      },
      {
        path: "/analytics",
        element: < ></>,


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
