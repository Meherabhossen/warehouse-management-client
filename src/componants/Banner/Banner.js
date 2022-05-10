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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFQVsJ2BPkTikBgNePVtoV_jt5ePHJVwlVhQ&usqp=CAU"
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnPF4FOCWhsDN-fY2-bo1xuaN4zZpAKpu0qnGco5pcZmrNRbMbNCHwzZWev1w3ShKRXM&usqp=CAU"
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhN-8RKwGTPhH6Eutr65yrs3H-ZDXHi9aezQ&usqp=CAU"
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