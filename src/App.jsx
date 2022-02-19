/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PsicologiaPage from './pages/PsicologiaPage';
// import PsicoterapiaPage from "./pages/PsicoterapiaPage";
import MindfulnessPage from './pages/MindfulnessPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import AboutPage from './pages/AboutPage';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Switch>
            <Route component={HomePage} exact path="/" />
            <Route component={AboutPage} path="/about" />
            <Route component={PsicologiaPage} path="/psicologia" />
            {/* <Route component={PsicoterapiaPage} path='/psicoterapia'/> */}
            <Route component={MindfulnessPage} path="/mindfulness" />
            <Route component={ContactsPage} path="/contatti" />
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
