import React, {Component} from 'react';
import Navbar from './Component/NavBar';
import Footnote from './Component/Footnote';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link } from "react-router-dom";

AOS.init();

export default class Work extends Component {
  render() {
    return (
        <div className="Work">
          {/* <Cursor /> */}
          <Navbar />
          <div className="allworks">
            <div className="twocolumns">
              <div className="work-wrapper">
                <img className="work-img" src="img/scansit/scansit-main.png" alt="ScansIt"/>
                <div className="project-textbox">
                  {/* <p className="project-main-role">UX RESEARCH<br/>UX/UI DESIGN</p> */}
                  <p>A mobile application for a better experience of riding the Link Light Rail.</p>
                </div>
              </div>
              <div className="work-wrapper">
                <img className="work-img" src="img/cnc/cnc-main.png" alt="CnC"/>
                <div className="project-textbox">
                  {/* <p className="project-main-role">UX/UI DESIGN</p> */}
                  <p>The new design of Thailand's growing digital product developer company — Code&amp;Craft.</p>
                </div>
              </div>
              <div className="work-wrapper">
                <img className="work-img" src="img/cbc/cbc-main.png" alt="CBC"/>
                <div className="project-textbox">
                  {/* <p className="project-main-role">Graphic Design<br/>UX/UI DESIGN</p> */}
                  <p>The brand guidlines of Cascade Bicycle Club's new design.</p>
                </div>
              </div>
              <div className="work-wrapper">
                <img className="work-img" src="img/musicmood/musicmood-main.png" alt="MusicMood"/>
                <div className="project-textbox">
                  <p className="project-main-role">Web Development<br/>UX/UI DESIGN</p>
                  <p>The brand guidlines of Cascade Bicycle Club's new design. <br/>(in progress)</p>
                </div>
              </div>
            </div>
          </div>
          <Footnote/>
        </div>
    );
  }
}