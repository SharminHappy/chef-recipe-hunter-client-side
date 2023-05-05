import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";



import ViewChefRecipes from "../Pages/ViewChefRecipes/ViewChefRecipes";
import ChefRecipes from "../Pages/ChefRecipes/ChefRecipes";
import Recipe from "../Pages/Recipe/Recipe";
import RecipeDetails from "../Pages/Recipe/RecipeDetails";

import ChefInfoCard from "../Pages/Home/ChefInfoCard/ChefInfoCard";
import Error from "../Pages/ErrorPage/Error";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Pages/Shared/Terms/Terms";
import Blog from "../Pages/Blog/Blog";



const router = createBrowserRouter([
    {
        path: '/login',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>,
               
            
            }
           
          
        ]

    },
   
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <ChefInfoCard></ChefInfoCard>,
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
            


        ]
    },
    {
        path: 'viewChefRecipes',
        element: <ViewChefRecipes></ViewChefRecipes>,
        children: [
            {
                path: '/viewChefRecipes/:id',
                element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                loader: ({ params }) => fetch(`https://chef-recipe-hunter-server-sharminhappy.vercel.app/viewChefRecipes/${params.id}`)
            }
        ]
    },
    {
        path: 'details',
        element: <Recipe></Recipe>,
        children: [
            {
                path: ':id',
                element: <RecipeDetails></RecipeDetails>,
                loader: ({ params }) => fetch(`https://chef-recipe-hunter-server-sharminhappy.vercel.app/details/${params.id}`)
            }
        ]

    },
    {
        path: '*',
        element: <Error></Error>
    }


])

export default router;