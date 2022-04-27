import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import ScrollToTop from './ScrollToTop';
import App from './App';
import About from './About';
import Interactive from './Interactive';

import ProjectScansIt from './Project/ProjectScansIt';
import ProjectFamApp from './Project/ProjectFamApp';
import ProjectLink from './Project/ProjectLink';
import ResearchWAParks from './Project/ResearchWAParks';
import ProjectWego from './Project/ProjectWego';

import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router>
    <ScrollToTop/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/interactive" component={Interactive} />
        <Route path="/scansit" component={ProjectScansIt} />
        <Route path="/waparks" component={ResearchWAParks} />
        <Route path="/famapp" component={ProjectFamApp} />
        <Route path="/link" component={ProjectLink} />
        <Route path="/wego" component={ProjectWego} />
      </Switch>
  </Router>
 ,document.getElementById('root'));
serviceWorker.unregister();
