import React from 'react';
import image1 from '../Images/images (1).jpg'
import image2 from '../Images/images (2).jpg'

import './ExtraSectionTwo.css'
const ExtraSectionTwo = () => {
    return (
        <div className='extrasection2-container'>
            <div className='image-container'></div>
            <h1 > wholesale shop of our PcHouse</h1>
            <div className='d-flex justify-content-center'>
            <div className='extra-image2 gap-4'>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                
            </div>
            <div><h1 className='discount'>If you purchase any product from our Showroom, you will receive at least 10% discount from our regular price. This offer is only valid till the Eid.</h1></div>
            </div>
            
            
        </div>
    );
};

export default ExtraSectionTwo;