import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecipesCard = ({ data,chef }) => {
    console.log(chef)
    
    const {  recipe_name, image_url, about ,recipe_id} = data;
    const happy=chef.toString()+'-'+recipe_id.toString()
    console.log(happy)
    return (
        <div>
            <Card style={{ width: '40rem' }} className='mx-auto my-5 '>
                <Card.Img variant="top" height={600} src={image_url} />
                <Card.Body>
                    <Card.Title className='text-center fw-bold fs-3'>{recipe_name}</Card.Title>
                    <Card.Text className='text-secondary  text-center fs-5'>
                        {about}
                    </Card.Text>
                    <div className='text-center'>
                        <Button style={{ backgroundColor: 'greenyellow', border: 'none' }} className='fw-semibold '>
                            <Link to={`/details/${happy}`} className='text-decoration-none text-white fs-5'>Get Recipes</Link>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
            
        </div>

    );
};

export default RecipesCard;