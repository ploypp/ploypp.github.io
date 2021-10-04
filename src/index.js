import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import ScrollToTop from './ScrollToTop';
import App from './App';
import About from './About';
import Ux from './Ux';

import ScansIt from './Project/ScansIt';
import ProjectScansIt from './Project/ProjectScansIt';
import ProjectCnc from './Project/ProjectCnc';
import ProjectCbc from './Project/ProjectCbc';
import ProjectFamApp from './Project/ProjectFamApp';
import CnC from './Project/CnC';
import WEGO from './Project/WEGO';
import cbc from './Project/cbc';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ArtAndGraphic from './artandgraphic';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <ScrollToTop/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        {/* <Route path="/work" component={Work} /> */}
        <Route path="/design" component={App} />
        <Route path="/interactive" component={App} />
        {/* <Route path="/scansit2" component={ScansIt} /> */}
        <Route path="/scansit" component={ProjectScansIt} />
        <Route path="/cnc" component={ProjectCnc} />
        <Route path="/cbc" component={ProjectCbc} />
        <Route path="/famapp" component={ProjectFamApp} />
        {/* <Route path="/wego" component={WEGO} /> */}
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
