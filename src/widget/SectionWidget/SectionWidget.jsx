import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '../../hooks/useMediaQuery';
/* Styles import */
import './SectionWidgetStyle.css';

function SectionWidget({
  withBack, list, displayMenu,
}) {
  const responsive = useMediaQuery('(min-width: 800px)');
  const selectMenuLinksColors = () => {
    if (!responsive) {
      return { color: '#f5f6fa' };
    } if (responsive) {
      if (withBack) {
        return {
          color: '#3b434a', fontWeight: 'bold',
        };
      }
      return { color: '#f5f6fa' };
    }
    return {};
  };
  return (
    <div className="sections-links" style={{ display: displayMenu ? 'flex' : 'none' }}>
      <ul>
        {list.map((obj) => (
          <li key={obj.linkUrl}>
            <NavLink activeClassName="active" to={obj.linkUrl}>
              <span style={selectMenuLinksColors()}>{obj.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default withRouter(SectionWidget);
