import React from 'react';

import { Link, useLoaderData } from 'react-router-dom';
import RecipesCard from './RecipesCard';
import { FcLike } from 'react-icons/fc';
import { Button } from 'react-bootstrap';


const ChefRecipes = () => {

    const viewChefRecipes = useLoaderData();
    const { id, name, img, experience, recipe, bio, likes } = viewChefRecipes;
    const data = viewChefRecipes['recipe_info'];



    return (
        <div>
            <div style={{ width: '100', height: '500px' }} className='d-flex mb-5'>
                <img className='rounded' src={img} alt="" />


                <div className='m-5 text-center fw-3'>
                    <h3>Hi!I Am {name}</h3>
                    <p>{bio}I have a <span className='text-danger'>{experience}</span> of experience and in this site <span className='text-danger'>{recipe} </span>number of recipes present. </p>

                    <p className='fs-5'><FcLike />{likes}</p>
                </div>
            </div>
            <div className='my-5'>
                <h1 className='text-center'>EASY & AUTHENTIC KOREAN RECIPES</h1>
                </div>
            <div>
                {
                    data.map(data =><RecipesCard
                            key={data.recipe_id}
                            data={data}
                            chef={id}

                        ></RecipesCard>
                    )
                }
            </div>
            <div className='text-center mb-3 '>
            <Button style={{ backgroundColor: 'greenyellow', border: 'none' }} className='fw-semibold'>
                            <Link to='/seeMore' className='text-decoration-none text-white fs-5 px-3'>See More</Link>
                        </Button>
            </div>
        </div>
    );
};

export default ChefRecipes;