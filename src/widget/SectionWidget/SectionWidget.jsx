import React from 'react';

import {withRouter} from 'react-router'
import {NavLink} from 'react-router-dom'
/*Styles import*/
import './SectionWidgetStyle.css'

const SectionWidget = ({withBack, list, active, history, match}) => {
    return (
        <div className="sections-links">
            <ul>
                {list.map((obj) => (
                    <li key={obj.linkUrl}>
                        <NavLink activeClassName='active' to={obj.linkUrl}>
                            <span style={{color: withBack ? '#3b434a' : '#f5f6fa'}}>{obj.name}</span>
                        </NavLink>
                    </li>)
                )}
            </ul>
        </div>
    );
};

export default withRouter(SectionWidget);