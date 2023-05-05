import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChefInfo from './ChefInfo';
import Banner from '../Banner/Banner';
import { Spinner } from 'react-bootstrap';
import HealthyMenu from '../../../../public/HealthyMenu/HealthyMenu';
import MostFavouriteRecipes from '../../Recipe/MostFavouriteRecipes/MostFavouriteRecipes';

const ChefInfoCard = () => {
    const [chefsInfo, setChefInfo] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch('https://chef-recipe-hunter-server-sharminhappy.vercel.app/chefsInfo')
            .then(res => res.json())
            .then(data => setChefInfo(data))
            .catch(error => console.log(error.message))
            .finally(() => {
                setLoading(false);
            })

    }, [])
    if (loading) {
        return <Spinner></Spinner>;


    }


    return (
        <div>
            <Banner></Banner>
            <HealthyMenu></HealthyMenu>

            <div className='mt-5 mb-5'>
                <h2 className='text-center'>Meet Our  Chefs </h2>
                <div className='row  row-cols-sm-1 row-cols-lg-3'>
                    {
                        chefsInfo.map(chefInfo => <ChefInfo
                            key={chefInfo.id}
                            cafeInfo={chefInfo}
                        >

                        </ChefInfo>
                        )
                    }
                </div>
            </div>
            <MostFavouriteRecipes></MostFavouriteRecipes>
        </div>

    );
};

export default ChefInfoCard;