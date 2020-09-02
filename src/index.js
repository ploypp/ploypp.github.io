import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import ScrollToTop from './ScrollToTop';
import App from './App';
import About from './About';

import ScansIt from './ScansIt';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router>
    <ScrollToTop/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/About" component={About} />
        <Route path="/ScansIt" component={ScansIt} />
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
