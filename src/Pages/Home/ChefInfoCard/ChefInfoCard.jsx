import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChefInfo from './ChefInfo';
import Banner from '../Banner/Banner';
import { Spinner } from 'react-bootstrap';

const ChefInfoCard = () => {
    const [chefsInfo, setChefInfo] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/chefsInfo')
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
            
            <div className='mt-5 mb-5'>
                <h2 className='text-center'> Chef Information</h2>
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
        </div>

    );
};

export default ChefInfoCard;