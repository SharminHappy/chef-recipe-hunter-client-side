import React from 'react';
import { Carousel, Figure } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 h-"
                        src="https://img.freepik.com/free-photo/korean-food-jajangmyeon-noodle-with-fermented-black-beans-sauce_1150-42829.jpg?w=740&t=st=1682995838~exp=1682996438~hmac=d2eaa5f0b5899d4d4d6b9160ba453905ca224015b443c9b9a499aea4e67aad4e"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h4>“Cooking is not difficult. Everyone has taste, even if they don’t realize it. Even if you’re not a great chef, there’s nothing to stop you understanding the difference between what tastes good and what doesn’t.”
                          <br></br><small>- Gerard Depardieu</small></h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/kimchi-ready-eat-bowl_1150-42857.jpg?w=740&t=st=1682997082~exp=1682997682~hmac=f9e986d700663ef6b1cbc29277ea0cb68142ed093bfd38be2facb0327758d511"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h4>“A recipe has no soul. You as the cook must bring soul to the recipe.”
                          <br></br><small>-Thomas Keller</small></h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        lg:height={600}
                        sm:height={320}
                        src="https://img.freepik.com/free-photo/korean-food-bulgogi-marinated-beef-barbecue-ready-serve_1150-42884.jpg?w=740&t=st=1683001668~exp=1683002268~hmac=0a7a0dc62ccb584e00b07f56225d33c6495e4b16dedd055a279b61493ce61c7f"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h4>“If you learn a recipe, you can cook the recipe. If you learn the technique, you can cook anything.”
                          <br></br><small>-Michael Symon</small></h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;