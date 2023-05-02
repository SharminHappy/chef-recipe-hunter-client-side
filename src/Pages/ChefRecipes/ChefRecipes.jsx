import React from 'react';

import { useLoaderData } from 'react-router-dom';
import RecipesCard from './RecipesCard';
import BannerChefRecipes from '../Shared/BannerChefRecipes/BannerChefRecipes';

const ChefRecipes = () => {
   
    const viewChefRecipes = useLoaderData();
    const{id,name,img,experience,recipes}=viewChefRecipes;
    const data = viewChefRecipes['recipe_info'];



    return (
        <div>
            <div style={{width:'100',height:'500px'}} className='d-flex bg-primary'>
                <div><img className='rounded' src={img} alt=""  /></div>
                <div>
                    <h3>{name}</h3>
                    <p>{experience}of experience</p>
                    <p>{recipes}</p>
                </div>
            </div>
            {
                data.map(data =>
                    <RecipesCard
                        key={data.id}
                        data={data}

                    ></RecipesCard>
                )
            }
        </div>
    );
};

export default ChefRecipes;