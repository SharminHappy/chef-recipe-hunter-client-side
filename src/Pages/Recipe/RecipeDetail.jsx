import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const RecipeDetail = ({ recipeData }) => {
    const [disabled, setDisable] = useState(false);

    const onClick = () => {
        const notify = toast("Wow so easy & tasty!");
        setDisable(notify);
    }

    const { recipe_name, image_url, recipe_id, ingredients, cooking_method, rating } = recipeData;
    return (
        <Card className='m-5 bg-black text-white p-5'>
            <Card.Img variant="top" src={image_url} height={700} />
            <Card.Body>
                <Card.Title className='text-center fw-bold'><h1>{recipe_name}</h1></Card.Title>
                <Card.Text className='mt-3'>
                    <h4>INGREDIENT LIST</h4>
                    <ol className='fs-5'>
                        <li>{ingredients.ingredients_1}</li>
                        <li>{ingredients.ingredients_2}</li>
                        <li>{ingredients.ingredients_3}</li>
                        <li>{ingredients.ingredients_4}</li>
                        <li>{ingredients.ingredients_5}</li>

                    </ol>

                </Card.Text>
                <Card.Text className='mt-3'>

                    <h4>COOKING METHOD:</h4>
                    <ul >
                        <li><span className='fw-bold'>STEP-1:</span>{cooking_method.method_1}</li>
                        <li><span className='fw-bold'>STEP-1:</span>{cooking_method.method_2}</li>
                        <li><span className='fw-bold'>STEP-1:</span>{cooking_method.method_3}</li>
                    </ul>

                </Card.Text>
                <div className='d-flex justify-content-between mt-5'>
                    <div >
                        <Button onClick={onClick} disabled={disabled} style={{ backgroundColor: 'greenyellow', border: 'none' }} variant="primary" className='mx-auto px-5 fs-5'>
                            Favorite
                        </Button>
                        <ToastContainer />

                    </div>
                    <div>
                        <Rating
                            placeholderRating={rating.number}
                            readonly
                            emptySymbol={<FaRegStar className='text-warning fw-bold  fs-3'></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning fw-bold  fs-3'></FaStar>}
                            fullSymbol={<FaStar className='text-warning fw-bold  fs-3'></FaStar>}
                        />
                        <span>{rating.number}</span>
                    </div>
                </div>
            </Card.Body>
        </Card>

    );
};

export default RecipeDetail;