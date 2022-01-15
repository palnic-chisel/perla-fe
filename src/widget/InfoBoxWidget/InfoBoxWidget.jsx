import React from 'react';

/*Styles import*/
import './InfoBoxStyle.css'

const InfoBoxWidget = ({ boxTitle, list }) => {
    return (
        <div className='about-box-info'>
            <h4>{boxTitle}</h4>
            <div className='about-info-container'>
                <ul className='footer-personal-info-list'>
                    {list.map((obj) => (
                        <li key={obj.key}>
                            <span className='about-info-key'>{obj.key}</span>
                            {obj.key !== 'Telefono' ? <span>{obj.value}</span> : <a href={`tel:${obj.value}`}>{obj.value}</a>}
                            
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default InfoBoxWidget;
