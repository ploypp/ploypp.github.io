import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import ScrollToTop from './ScrollToTop';
import App from './App';
import About from './About';

import ScansIt from './Project/ScansIt';
import CnC from './Project/CnC';
import WEGO from './Project/WEGO';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <ScrollToTop/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/About" component={About} />
        <Route path="/ScansIt" component={ScansIt} />
        <Route path="/CnC" component={CnC} />
        <Route path="/WEGO" component={WEGO} />
      </Switch>
  </Router>
 ,document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
