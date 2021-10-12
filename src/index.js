import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import ScrollToTop from './ScrollToTop';
import App from './App';
import About from './About';

import ProjectScansIt from './Project/ProjectScansIt';
import ProjectCnc from './Project/ProjectCnc';
import ProjectCbc from './Project/ProjectCbc';
import ProjectFamApp from './Project/ProjectFamApp';
import ResearchWAParks from './Project/ResearchWAParks';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <ScrollToTop/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/scansit" component={ProjectScansIt} />
        <Route path="/cnc" component={ProjectCnc} />
        <Route path="/cbc" component={ProjectCbc} />
        <Route path="/waparks" component={ResearchWAParks} />
        <Route path="/famapp" component={ProjectFamApp} />
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
