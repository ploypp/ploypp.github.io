import React from 'react';

import ReactDOM from 'react-dom';
import './index-new.css';
import ScrollToTop from './ScrollToTop';
import App from './App';
import About from './About';

import ProjectScansIt from './Project/ProjectScansIt';
import ProjectCnc from './Project/ProjectCnc';
import ProjectCbc from './Project/ProjectCbc';
import ProjectFamApp from './Project/ProjectFamApp';
import ProjectLink from './Project/ProjectLink';
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
        <Route path="/link" component={ProjectLink} />
      </Switch>
  </Router>
 ,document.getElementById('root'));
serviceWorker.unregister();
