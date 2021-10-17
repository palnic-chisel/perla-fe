import React, {useEffect} from 'react';
import "./LandingPageComponentStyle.css"
import image from "../../utils/mind.jpg";

import Parallax from 'react-rellax'
import Aos from 'aos';
import 'aos/dist/aos.css'
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import {animateScroll as scroll} from "react-scroll";

const scrollTo = () => {
    scroll.scrollTo(window.innerHeight);
}

const LandingPageComponent = ({data}) => {

    useEffect(() => {
        Aos.init({duration: 500});
    }, []);

    return (
        <div className='landing-page-container'>
            <div className='landing-page-inner-container'>
                <div data-aos='fade-right' className='landing-page-text-container'>
                    <Parallax speed={-0.5}><span className='landing-page-section-title'>{data.title}</span></Parallax>
                    <Parallax speed={1}><span className='landing-page-section-description'>{data.caption} </span>
                        {data.seeMoreButtonActive && <ButtonComponent buttonText={data.seeMoreButtonText} onClickFnc={scrollTo}/>}
                    </Parallax>
                </div>
            </div>

            <div style={{
                content: "",
                backgroundImage: `url(http://localhost:1337${data.backgroundImage.url})`,
                backgroundSize: 'cover',
                opacity: '0.5',
                top: '0',
                left: '0',
                bottom: '0',
                right: '0',
                position: 'absolute',
                zIndex: '-1'
            }}/>
        </div>
    )
        ;
};

export default LandingPageComponent;
