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
            <a href="https://www.startech.com.bd/">
                <ChatAltIcon className='Icon'></ChatAltIcon></a>
            <a href="https://o.aolcdn.com/images/dar/5845cadfecd996e0372f/00903991c0317ca54a58a4c25779ac69a4d57787/aHR0cDovL28uYW9sY2RuLmNvbS9oc3Mvc3RvcmFnZS9taWRhcy9mZjRlZTI1M2M1ZGU0YTJhN2QyOGM3MWMwOGRkYmFkOS8yMDM3MjExMzQvY29tcHV0ZXIrc3RvcmUucG5n"><PhotographIcon className='Icon'></PhotographIcon></a>
            <a href="https://youtu.be/IEOi8NlkUPg"><PlayIcon className='Icon'></PlayIcon></a>

            <h1>Copyrite <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> 2022 PcHouse Website</h1>
        </div>
    );
};

export default Footer;