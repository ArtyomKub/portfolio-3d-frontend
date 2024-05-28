import React from 'react';
import {Link} from "react-router-dom";
import {arrow} from "../assets/icons";


const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)


const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I
            am <span className='font-semibold'>ARTEM</span>👋
            <br/>
            Front-End Developer from Poland
        </h1>
    ),
    2: (
        <InfoBox
            text='Make it work, make it right, make it fast.'
            link='/about'
            btnText='Learn more'/>
    ),
    3: (
        <InfoBox
            text='Coding: Where Logic Becomes Magic.'
            link='/project'
            btnText='Visit my portfolio'/>
    ),
    4: (
        <InfoBox
            text='Looking for a Front-end dev? I am just a few keystrokes away'
            link='/contact'
            btnText='Let is talk'/>
    ),
}


const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo;