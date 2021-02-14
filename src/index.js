import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './index.css';
import Navbar from './components/Navbar'
import LoadoutPicker from './components/LoadoutPicker';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>

    <Router>
      <Switch>
        <Route exact path="/loadout-picker">
          <LoadoutPicker />
        </Route>
        <Route exact path="/loadout-picker/about">
          <div className="uk-text-center">
            <h3>WIP - About Page</h3>
          </div>
        </Route>
        <Route exact path="/loadout-picker/how-to">
        <div className="uk-text-center">
            <h3>WIP - How-To</h3>
          </div>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
