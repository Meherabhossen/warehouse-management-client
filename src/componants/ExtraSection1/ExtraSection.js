import React from 'react';
import image1 from '../Images/image-1.jpg'
import image2 from '../Images/image-2.jpg'


import './ExtrxSection.css'
const ExtraSection = () => {
    return (
        <div className='extrasection-container'>
            <div className='image-container'>
                <h1> Our warehouse</h1>
                <div className='d-flex justify-content-center'>
                <div className='extra-image gap-4'>
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    
                </div>
                <div><h1 className='discount'>If you purchase any product from our warehouse, you will receive a 15% discount off our regular price. This offer will expire on May 20, 2022..</h1></div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;