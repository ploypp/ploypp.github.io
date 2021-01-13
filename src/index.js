import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import ScrollToTop from './ScrollToTop';
import App from './App';
import About from './About';
import SnapAndDraw from './artandgraphic';

import ScansIt from './Project/ScansIt';
import Projects from './Project/Projects';
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
        <Route path="/artandgraphic" component={ArtAndGraphic} />
        <Route path="/scansit2" component={ScansIt} />
        <Route path="/scansit" component={Projects} />
        <Route path="/cnc" component={CnC} />
        <Route path="/cbc" component={cbc} />
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
