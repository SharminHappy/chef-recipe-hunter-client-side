import React from 'react';

import { Button, Card } from 'react-bootstrap';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

const MostFavouriteRecipes = () => {


    return (
        <div className='m-5'>

            <h2 className='text-center mb-5 '>Most Favorites Recipes </h2>
            <div>

                <div className='text-center d-flex justify-content-center gap-2'>
                    <FaAngleDoubleLeft className='my-auto fs-5' />
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://www.beyondkimchee.com/wp-content/uploads/2021/03/Korean-fried-chicken-nuggets1-800x1130.jpg" />
                        <Card.Body>
                            <Card.Title className='fs-5'>CHICKEN BULGOGI (KOREAN BBQ CHICKEN)</Card.Title>

                            <Button style={{ backgroundColor: 'greenyellow', border: 'none' }} className='fw-bold'>Get Recipe</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://www.beyondkimchee.com/wp-content/uploads/2021/12/Korean-chicken-stir-fry-2-800x1130.jpg" />
                        <Card.Body>
                            <Card.Title className='fs-5'>HOMEMADE DAKGALBI (SPICY KOREAN CHICKEN STIR-FRY)</Card.Title>

                            <Button style={{ backgroundColor: 'greenyellow', border: 'none' }} className='fw-bold'>Get Recipe</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://www.beyondkimchee.com/wp-content/uploads/2021/02/kimbap-4.jpg" />
                        <Card.Body>
                            <Card.Title className='fs-5'>KIMBAP (KOREAN SEAWEED RICE ROLL)</Card.Title>

                            <Button style={{ backgroundColor: 'greenyellow', border: 'none' }} className='fw-bold'>Get Recipe</Button>
                        </Card.Body>
                    </Card>
                    <FaAngleDoubleRight className='my-auto fs-3' />
                </div>

            </div>

        </div>
    );
};

export default MostFavouriteRecipes;