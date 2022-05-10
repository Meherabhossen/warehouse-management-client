import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { ChatAltIcon, LocationMarkerIcon, MailIcon, PhoneIcon, PhotographIcon, PlayIcon } from '@heroicons/react/solid'
const Footer = () => {
    return (
        <div className='footer'>
            <a href=""><LocationMarkerIcon className='Icon'></LocationMarkerIcon></a>
            <b>22/6 hallishahar , Chittagong , Bangladesh</b><br />
            <a href=""><PhoneIcon className='Icon'></PhoneIcon></a><b> Helpline:   +8801723512, +88015152343</b>
            <br />
            <a href="http://"><MailIcon className='Icon'></MailIcon></a><b> Personal: Pchouse@gmail.com</b>
            <br />
            <a href="https://www.daraz.com.bd/toys-games/">
                <ChatAltIcon className='Icon'></ChatAltIcon></a>
            <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbqk1EDPefLg8zbHKoT9ag7gGtHeqUHcPOA&usqp=CAU"><PhotographIcon className='Icon'></PhotographIcon></a>
            <a href="https://youtu.be/UBICz01PcNM"><PlayIcon className='Icon'></PlayIcon></a>

            <h1>Copyrite <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> 2022 ToyLand Website</h1>
        </div>
    );
};

export default Footer;