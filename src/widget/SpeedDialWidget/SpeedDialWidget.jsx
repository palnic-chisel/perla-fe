/* eslint-disable jsx-a11y/control-has-associated-label */
import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from '../../hooks/useMediaQuery';

function SpeedDialWidget() {
  const history = useHistory();
  const responsive = useMediaQuery();

  const onClickEnvelope = () => {
    history.push('/contatti');
  };

  const actions = [
    { icon: <a target="_blank" href="https://api.whatsapp.com/send/?phone=+393450383042" rel="noreferrer"><FontAwesomeIcon color="rgba(46, 49, 49, 1)" icon={faWhatsapp} style={{ height: '25px', width: '25px' }} /></a>, name: 'Scrivimi su Whatsapp' },
    { icon: <a target="_blank" href="https://www.facebook.com/psicologaChiaraGanga" rel="noreferrer"><FontAwesomeIcon color="rgba(46, 49, 49, 1)" icon={faFacebook} style={{ height: '25px', width: '25px' }} /></a>, name: 'Contattami su Facebook' },
    { icon: <a href="tel:+393450383042"><FontAwesomeIcon color="rgba(46, 49, 49, 1)" icon={faPhone} style={{ height: '18px', width: '18px' }} /></a>, name: 'Chiamami' },
    { icon: <FontAwesomeIcon color="rgba(46, 49, 49, 1)" icon={faEnvelope} style={{ height: '18px', width: '18px' }} />, name: 'Mandami una email', click: () => onClickEnvelope() },
  ];

  return (
    <SpeedDial
      ariaLabel="SpeedDial"
      sx={{
        position: 'fixed', bottom: responsive ? 30 : 20, right: responsive ? 45 : 5, color: 'rgba(45, 152, 218, 1)',
      }}
      icon={(
        <FontAwesomeIcon
          color="rgba(255, 255, 255, 1)"
          icon={faPhone}
          style={{ height: '18px', width: '18px' }}
        />
)}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.click ? action.click : null}
        />
      ))}
    </SpeedDial>
  );
}

export default SpeedDialWidget;
