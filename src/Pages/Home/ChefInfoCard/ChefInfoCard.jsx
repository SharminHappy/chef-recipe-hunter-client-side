import React, { useEffect, useState } from 'react';
import ChefInfo from './ChefInfo';
import Banner from '../Banner/Banner';
import { Spinner } from 'react-bootstrap';
import HealthyMenu from '../../../../public/HealthyMenu/HealthyMenu';
import MostFavouriteRecipes from '../../Recipe/MostFavouriteRecipes/MostFavouriteRecipes';

const ChefInfoCard = () => {
    const [chefsInfo, setChefInfo] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://chef-recipe-hunter-server-ruddy.vercel.app/chefsInfo');
                const data = await response.json();
                setChefInfo(data);
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    
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
                        chefsInfo.map(chefInfo =><ChefInfo
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