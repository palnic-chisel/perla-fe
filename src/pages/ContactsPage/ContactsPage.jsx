import React from 'react';

import { apiStates, useApi } from '../../utils/useApi/UseApi';

import ContactComponent from '../../component/ContactComponent/ContactComponent';
import FooterComponent from '../../component/FooterComponent/FooterComponent';
import NavigationBarComponent from '../../component/NavigationBarComponent/NavigationBarComponent';
import LoadingPage from '../LoadingPage/LoadingPage';

function ContactsPage() {
  // const {state, error, data} = useApi('http://localhost:1337/contacts/1');
  const { state, error, data } = useApi('https://perla-backend.herokuapp.com/contacts/1');
  switch (state) {
    case apiStates.ERROR:
      return error;
    case apiStates.SUCCESS:
      return (
        <div>
          <NavigationBarComponent />
          <div style={{ marginTop: '150px' }}>
            <ContactComponent data={data} />
            <FooterComponent />
          </div>
        </div>
      );
    default:
      return (
        <LoadingPage />
      );
  }
}

export default ContactsPage;
