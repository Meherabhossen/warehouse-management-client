import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='carosol-container '>
            <Carousel>
            <Carousel.Item>
                <img style={{height: '600px'}}
                    className="d-block w-100"
                    src="https://5.imimg.com/data5/PF/VJ/EN/SELLER-9295383/dell-desktop-computer-500x500.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>.</h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height: '600px'}}
                    className="d-block w-100"
                    src="https://blogs.windows.com/wp-content/uploads/2016/09/Dell-XPS-5.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3> </h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height: '600px'}}
                    className="d-block w-100"
                    src="https://www.techpowerup.com/img/E2hv27fCI6su1mHV.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3> </h3>
                    <p> </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Banner;