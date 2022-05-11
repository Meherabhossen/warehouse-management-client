import React from 'react';
import image1 from '../Images/images (1).jfif'
import image2 from '../Images/images (2).jfif'

import './ExtraSectionTwo.css'
const ExtraSectionTwo = () => {
    return (
        <div className='extrasection2-container'>
            <div className='image-container'></div>
            <h1 > Our Upcoming Toys</h1>
            <div className='d-flex justify-content-center'>
            <div className='extra-image2 gap-4'>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                
            </div>
            <div><h1 className='discount'>This our Upcoming Toys. First one is the Rc super fast car and second one is the Rc Plane both are new in market and the toys is not only for kids anyone can paly and enjoy by this toys . So prebook now for getting 20% off on this product.</h1></div>
            </div>
            
            
        </div>
    );
};

export default ExtraSectionTwo;