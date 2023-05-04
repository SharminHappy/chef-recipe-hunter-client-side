import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";


import Home from "../Pages/Home/Home/Home";
import ViewChefRecipes from "../Pages/ViewChefRecipes/ViewChefRecipes";
import ChefRecipes from "../Pages/ChefRecipes/ChefRecipes";
import Recipe from "../Pages/Recipe/Recipe";
import RecipeDetails from "../Pages/Recipe/RecipeDetails";
import ChefInfo from "../Pages/Home/ChefInfoCard/ChefInfo";
import ChefInfoCard from "../Pages/Home/ChefInfoCard/ChefInfoCard";
import Error from "../Pages/ErrorPage/Error";


const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<ChefInfoCard></ChefInfoCard>,
            },
            
        ]
    },
    {
        path:'viewChefRecipes',
        element:<ViewChefRecipes></ViewChefRecipes>,
        children:[
            {
                path:'/viewChefRecipes/:id',
                element:<ChefRecipes></ChefRecipes>,
                loader:({params})=>fetch(`http://localhost:5000/viewChefRecipes/${params.id}`)
            }
        ]
    },
    {
        path:'details',
        element:<Recipe></Recipe>,
        children:[
            {
                path:':id',
                element:<RecipeDetails></RecipeDetails>,
                loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`)
            }
        ]

    },
    {
        path:'*',
        element:<Error></Error>
    }

   
])

export default router;