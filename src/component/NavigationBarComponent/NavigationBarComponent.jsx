/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import "./NavigationBarComponentStyle.css";
import LogoComponent from "../LogoComponent/LogoComponent";
import ToggleButtonComponent from "../ToggleButtonComponent/ToggleButtonComponent";
import SectionWidget from "../../widget/SectionWidget/SectionWidget";
import { useMediaQuery } from '../../hooks/useMediaQuery';

const sectionList = [
    {
        name: "formazione",
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
    const [displayMenu, setDisplayMenu] = useState(false);
    const responsive = useMediaQuery('(min-width: 800px)');

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

    useEffect(() => {
        if(responsive){
            setDisplayMenu(true)
        } else {
            setDisplayMenu(false)
        }

    }, [responsive]);

    return (
        <header className='navigation' style={{
            backgroundColor: withBack && responsive ? 'transparent' : '#1f2d41',
            padding: withBack ? '3vw 10vw' : '1vw 10vw'
        }}>
            <nav className="navigation-bar">
                <LogoComponent withBack={withBack} responsive={responsive}/>
                <ToggleButtonComponent withBack={withBack} burgerHandler={() => setDisplayMenu(!displayMenu)}/>
                <SectionWidget withBack={withBack} list={sectionList} displayMenu={displayMenu}/>
            </nav>
        </header>
    );
};

export default NavigationBarComponent;
