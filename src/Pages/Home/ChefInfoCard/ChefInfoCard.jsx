import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChefInfo from './ChefInfo';

const ChefInfoCard = () => {
    const [chefsInfo,setChefInfo]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/chefsInfo')
        .then(res=>res.json())
        .then(data=>setChefInfo(data))
        .catch(error=>console.log(error.message))
    },[])

    return (
        <div className='mt-5 mb-5'>
            <h2  className='text-center'> Chef Information</h2>
            <div className='row  row-cols-sm-1 row-cols-lg-3 hover-overlay hover-zoom hover-shadow'>
            {
                chefsInfo.map(chefInfo=><ChefInfo
                key={chefInfo.id}
                cafeInfo={chefInfo}
                >

                </ChefInfo>
                )
            }
            </div>
        </div>
    );
};

export default ChefInfoCard;