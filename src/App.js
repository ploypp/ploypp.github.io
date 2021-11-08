import React, { Component } from 'react';
import './index.css';
import './Component/menu.css';
import './Project/project.css';
import Navbar from './Component/NavBar';
import Footnote from './Component/Footnote';
import {Link } from "react-router-dom";

export default class App extends Component {
  render() {

    return (
      <div className="App">
        <Navbar />
        <div>
          <div className="wrapper">
            <div className="col3-start col7-end">
              <h1>
                hi! i'm ploy.<br/>i'm a product designer who creates experience from research
                and passionate about interactive art.
              </h1>
              <div className="paddingtop50">
                <p>scroll to see my work &#8628;</p>
              </div>
            </div>
          </div>
          <div className="wrapper home-project-wrap">
            <div className="col2-start col5-end">
              <div>
                <Link to = "/famapp">
                  <p>product design & research</p>
                  <h1 className="home-project-title">Fam App</h1>
                </Link>
              </div>
              <div>
                <Link to = "/link">
                  <p>user experience & interface design</p>
                  <h1 className="home-project-title">Link</h1>
                </Link>
              </div>
              <div>
                <Link to = "/scansit">
                  <p>product design & research</p>
                  <h1 className="home-project-title">ScansIt</h1>
                </Link>
              </div>
              <div>
                <Link to = "/waparks">
                  <p>field study & user research</p>
                  <h1 className="home-project-title">Exercising in Washington Parks — Pandemic Edition</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footnote/>
      </div>
    );
  }
}
