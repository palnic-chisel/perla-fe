import React from 'react';
import "./LogoComponentStyle.css"

import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import {animateScroll as scroll} from "react-scroll";

const scrollToTop = () => {
    scroll.scrollToTop();
};

const LogoComponent = ({withBack, history, match}) => {
    return (
        <div className="logo-container">
            <Link  onClick={scrollToTop} to='/'>
                <span className='logo-name' style={{color: withBack? '#3b434a' : '#f5f6fa'}}>Chiara</span>
                <span className='logo-lastname' style={{color: withBack? '#3b434a' : '#f5f6fa'}}>Ganga</span>
            </Link>
        </div>
    );
};

export default withRouter(LogoComponent);
