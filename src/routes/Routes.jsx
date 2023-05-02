import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";

import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";

const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/login',
                element:<Login></Login>,
            }
        ]
    }
])

export default router;