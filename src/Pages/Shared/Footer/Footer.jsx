import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-100 bg-black d-flex p-5'>
            <div className='m-auto'>
                <h3 className='text-white'>More About Projects</h3>
                <div className='text-secondary'>
                    <p><small>In This projects we can see recipes of korean foods and also can see about chef.</small></p>
                    <p>
                        <small>“A recipe has no soul. You as the cook must bring soul to the recipe.”
                            <br></br>
                            <span>-Thomas Keller</span></small>
                    </p>
                </div>
            </div>
            <div className='m-auto'>
                <h3 className='text-white'>Explore</h3>
                <div className='text-secondary'>
                    <p><small>Recipes</small></p>
                    <p><small>Fitness</small></p>
                    <p><small>Healthy Living</small></p>
                    <p><small>Blog</small></p>
                </div>
            </div>
            <div className='mx-auto'>
                <h3 className='text-white'>Connect</h3>
                <div className='text-white d-flex gap-4'>
                    <FaFacebookF/>
                    <FaInstagram />
                    <FaTwitter />

                </div>
            </div>
        </div>
    );
};

export default Footer;