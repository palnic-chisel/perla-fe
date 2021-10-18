/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import "./NavigationBarComponentStyle.css";
import LogoComponent from "../LogoComponent/LogoComponent";
import ToggleButtonComponent from "../ToggleButtonComponent/ToggleButtonComponent";
import SectionWidget from "../../widget/SectionWidget/SectionWidget";

const sectionList = [
    {
        name: "chi sono",
        linkUrl: "about"
    },
    {
        name: "psicologa",
        linkUrl: "psicologia"
    },
    // {
    //     name: "psicoterapia",
    //     linkUrl: "psicoterapia"
    // },
    {
        name: "mindfulness",
        linkUrl: "mindfulness"
    },
    {
        name: "contatti",
        linkUrl: "contatti"
    }
];



const NavigationBarComponent = () => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [withBack, setWithBack] = useState(true);

    const handleScroll = () => {
        // find current scroll position
        const currentScrollPos = window.pageYOffset;

        // set state based on location info (explained in more detail below)
        setWithBack((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

        // set state to new scroll position
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, withBack, handleScroll]);

    return (
        <header className='navigation' style={{
            backgroundColor: withBack ? 'transparent' : '#1f2d41',
            padding: withBack ? '3vw 10vw' : '1vw 10vw'
        }}>
            <nav className="navigation-bar">
                <LogoComponent withBack={withBack}/>
                <ToggleButtonComponent withBack={withBack}/>
                <SectionWidget withBack={withBack} list={sectionList}/>
            </nav>
        </header>
    );
};

export default NavigationBarComponent;
