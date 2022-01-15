import React from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
/*Styles import*/
import './SectionWidgetStyle.css'

const SectionWidget = ({ withBack, list, active, history, match, displayMenu }) => {
    const responsive = useMediaQuery('(min-width: 800px)');
    const selectMenuLinksColors = () => {
        if (!responsive) {
            return { color: '#f5f6fa' }
        } else if (responsive) {
            if (withBack) {
                return {
                    color: '#3b434a', fontWeight: 'bold'
                }
            } else {
                return { color: '#f5f6fa' }
            }
        }
    }
    return (
        <div className="sections-links" style={{ display: displayMenu ? 'flex' : 'none' }}>
            <ul>
                {list.map((obj) => (
                    <li key={obj.linkUrl} >
                        <NavLink activeClassName='active' to={obj.linkUrl}>
                            <span style={selectMenuLinksColors()}>{obj.name}</span>
                        </NavLink>
                    </li>)
                )}
            </ul>
        </div>
    );
};

export default withRouter(SectionWidget);