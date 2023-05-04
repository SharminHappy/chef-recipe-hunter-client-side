import React from 'react';
import { Button, Card, Col,Container,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FcLike } from "react-icons/fc";

const ChefInfo = ({ cafeInfo }) => {
    const { img, id, name, experience, recipe, likes } = cafeInfo;
    return (
<Container className='mx-auto px-5'>
        <Row className='mt-5'>
            <Col>
                <Card style={{ width: '20rem'}} >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='fw-bold fs-3'>{name}</Card.Title>
                        <Card.Text>
                            <p  className='fs-5'>Experience:{experience}</p>
                            <p className='fs-5'>Recipe:{recipe}</p>
                        </Card.Text>
                        <Card.Text className='d-flex justify-content-between'>                      
                            <Link to={`/viewChefRecipes/${id}`} style={{ backgroundColor: 'greenyellow', border: 'none',width:'100' }} className='text-decoration-none text-center text-white fs-5 fw-semibold px-2 py-1 rounded'>View Recipes</Link>                      
                        <div className='fs-5 gap-3'>
                          <FcLike className='fs-5'/>
                          {likes}
                        </div>
        
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container>
       




    );
};

export default ChefInfo;