import React, { Component } from 'react';
import './index.css';
import './Component/menu.css';
import './Project/project.css';
import Navbar from './Component/NavBar';
import Footnote from './Component/Footnote';
import {Link } from "react-router-dom";
import Cursor from './Cursor';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Cursor />
        <Navbar />
        <div>
          <div className="wrapper">
            <div className="greeting col3-start col7-end">
              <h1>
                hi! i'm ploy.<br/>i'm a product designer who creates <span className="experience-text">experience </span>
                from <span className="research-text">research </span>and passionate about
                <span className="interactive-text"> interactive art.</span>
              </h1>
              <div className="paddingtop50">
                <p>scroll to see my work &nbsp; &#10549;</p>
              </div>
            </div>
          </div>
          <div className="wrapper home-project-wrap" id="design">
            <div className="col2-start col5-end">
              <div className="home-famapp">
                <Link to = "/famapp">
                  <p>product design & research</p>
                  <h1 className="home-project-title">Fam App</h1>
                </Link>
              </div>
              <div className="home-link">
                <Link to = "/link">
                  <p>user experience & interface design</p>
                  <h1 className="home-project-title">Link</h1>
                </Link>
              </div>
              <div className="home-scansit">
                <Link to = "/scansit">
                  <p>product design & research</p>
                  <h1 className="home-project-title">ScansIt</h1>
                </Link>
              </div>
              <div className="home-waparks">
                <Link to = "/waparks">
                  <p>field study & user research</p>
                  <h1 className="home-project-title">Exercising in Washington Parks — Pandemic Edition</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="previous-next">
          <div className="previous"/>
          <div className="next">
            <Link to = "/interactive">
              <p>see more</p>
              <h1 className="home-project-title">interactive projects &#10230;</h1>
            </Link>
          </div>
        </div>
        <Footnote/>
      </div>
    );
  }
}
