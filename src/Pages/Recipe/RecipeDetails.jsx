import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeDetail from './RecipeDetail';

const RecipeDetails = () => {
    const details = useLoaderData();
    // console.log(details);
    
    return (
        <div>
            
                 <RecipeDetail
                   
                    recipeData={details}
                    
                >

                </RecipeDetail>
                
        </div>
    );
};

export default RecipeDetails;