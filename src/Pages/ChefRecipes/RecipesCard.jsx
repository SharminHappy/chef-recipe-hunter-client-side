import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecipesCard = ({ data }) => {
    const { recipe_name,image_url,about } = data;
    return (
        <Card style={{ width: '30rem'}}>
        <Card.Img variant="top" height={500} src={image_url} />
            <Card.Body>
                <Card.Title className='text-center fw-bold fs-3'>{recipe_name}</Card.Title>
                <Card.Text className='text-secondary  text-center fs-5'>
                    {about}
                </Card.Text>
                <div>
                <Button style={{ backgroundColor: 'greenyellow', border: 'none',width:'100' }} className='fw-semibold w-100'>
                            <Link to='/get' className='text-decoration-none text-white fs-5'>Get Recipes</Link>
                        </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default RecipesCard;