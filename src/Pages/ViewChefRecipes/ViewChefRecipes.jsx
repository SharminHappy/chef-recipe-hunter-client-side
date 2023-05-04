import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const ViewChefRecipes = () => {
    return (
        <div>
            <Header></Header>
            <div style={{minHeight:100}}>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ViewChefRecipes;