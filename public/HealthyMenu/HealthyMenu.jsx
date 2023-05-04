import React from 'react';
import { FaClipboardCheck, FaLock, FaRegCalendarAlt, FaRegClock, FaServicestack } from 'react-icons/fa';

const HealthyMenu = () => {
    return (
        <div className='text-center mt-5 '>
            <h2><span className='fs-3'><FaClipboardCheck /></span>Try Our Healthy Menu</h2>
            <p className='mb-5'><small>We provide a variety of healthy recipes that have<br></br>been curated by our best nutritionists for you</small></p>
            <div className='d-flex text-center justify-content-center gap-5'>
                <div className='gap-3 border border-dark rounded p-5 bg-light border-2 '>
                    <p className='fs-5'><FaRegClock /></p>
                    <p>Breakfast Recipes</p>

                </div>
                <div className=' gap-3  border border-dark rounded p-5 bg-light border-2'>
                    <p className='fs-5'><FaServicestack /></p>
                    <p>Low-Calorie Recipes</p>

                </div>
                <div className=' gap-3  border border-dark rounded p-5 bg-light border-2'>
                    <p className='fs-5'><FaRegCalendarAlt /></p>
                    <p>Holiday Recipes</p>

                </div>
                <div className='gap-3  border border-dark rounded p-5 bg-light border-2'>
                    <p className='fs-5'><FaLock /></p>
                    <p>Restiction Recipes</p>

                </div>

            </div>

        </div>
    );
};

export default HealthyMenu;