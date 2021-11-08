import React, { Component } from 'react';
import './index.css';
import './work.css';
import './graphic.css'
import './Component/menu.css';
import './Project/projects.css';
import './Project/scansit.css';
import './Project/cnc.css';
import './Project/wego.css';
import './webfontkit/stylesheet.css'
import Navbar from './Component/NavBar';
import Footnote from './Component/Footnote';
import {Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default class App extends Component {
  render() {

    return (
      <div className="App2">
        <Navbar />
        <body>
          <div className="toppage"></div>
          <svg className="smile" width="180" height="180">
            <circle cx="80" cy="80" r="70" stroke="#000" stroke-width="1.5" fill="#fff" />
            <circle cx="45" cy="75" r="2" fill="#000" />
            <circle cx="85" cy="80" r="2" fill="#000"/>
            <path d="M 34 80 C 34 100, 73 120, 95 90" stroke="#000" stroke-width="1.5" fill="transparent"/>
          </svg>
          <div className="greetcolumns greet">
            <div className="Greeting">
              Hello! I'm <i>Ploy</i>, an aspiring designer
              who aims to create a meaningful 
              experience through human-centered 
              design and interactive media.
            </div>
            <div></div>
          </div>
        
          <div id="scroll-down" className="main-arrow">
            <span className="arrow-down"/>
          </div>
          
          <h2 className="featuredtitle paddingtop150" id="design">DESIGN<br/>WORKS</h2>
          <svg className="after-title-path" height="100" width="100">
            <line x1="70" y1="0" x2="30" y2="100"/>
          </svg>
          {/* <div id="container">
            <div id="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xmlSpace="preserve">
                <defs>
                  <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                </defs>
                <circle cx="150" cy="100" r="75" fill="none"/>
                <g>
                    <use xlinkHref="#circlePath" fill="none"/>
                    <text fill="#000">
                      <textPath xlinkHref="#circlePath">user research / user experience design / user interface design / prototyping /</textPath>
                    </text>
                </g>
              </svg>
            </div>
          </div> */}
          <div className="pro-title">
          <div className="twocolumns">
            <div>
              <div id="li-text1">
                <Link to = "/famapp"><div><p><u>Fam App</u> &#8594;</p></div></Link>
              </div>
              <div className="work-img">
                <Link to = "/famapp"><img id="li-img1" src="img/famapp-home.png" alt="Fam App"/></Link>
                <p className="italic-text">—— User research, UX/UI Design</p>
              </div>
            </div>
            <div>
              <div id="li-text1">
                <Link to = "/scansit"><div><p><u>ScansIt Mobile App</u> &#8594;</p></div></Link>
              </div>
              <div className="work-img">
                <Link to = "/scansit"><img id="li-img1" src="img/scansit/scansit-home.png" alt="ScansIt"/></Link>
                <p className="italic-text">—— User Research, UX/UI Design</p>
              </div>
            </div>
          </div>

          <div className="twocolumns">
            <div>
              <div id="li-text1">
                <Link to = "/cnc"><div><p><u>Code&amp;Craft Website Redesign</u> &#8594;</p></div></Link>
              </div>
              <div className="work-img">
                <Link to = "/cnc"><img id="li-img2" src="img/cnc/cnc-home.png" alt="CnC"/></Link>
                <p className="italic-text">—— UX/UI Design</p>
              </div>
            </div>
            <div>
              <div id="li-text1">
                <Link to = "/cbc"><div><p><u>Cascade Bicycle Club<br/>Brand Book</u> &#8594;</p></div></Link>
              </div>
              <div className="work-img">
                <Link to = "/cbc"><img id="li-img3" src="img/cbc/cbc-home.png" alt="CBC"/></Link>
                <p className="italic-text">—— Graphic Design, UX/UI Design</p>
              </div>
            </div>
          </div>
          </div>
          <h2 className="featuredtitle paddingtop150" id="interactive">INTERCTIVE<br/>MEDIA</h2>
          <svg className="after-title-path" height="100" width="100">
            <line x1="70" y1="0" x2="30" y2="100"/>
          </svg>

          <center>
            <div className="interactive">
              <a href="https://youtu.be/0-Ngf4_q-EA" target="_blank">
                <img className="interactive-img" src="img/blooming-flower.png" alt="Blooming Flower"/>
                <p className="interactive-title">Blooming Flower</p>
              </a>
            </div>
            <div className="interactive">
              <a href="https://youtu.be/wv0huFyQkLE" target="_blank">
                <img className="interactive-img" src="img/a-world.png" alt="The World From My Hands"/>
                <p className="interactive-title">The World From My Hands</p>
              </a>
            </div>
            <div className="interactive">
              <a href="https://youtu.be/l7tdk8AF210" target="_blank">
                <img className="interactive-img" src="img/vest-memo.png" alt="The Vest of Memories"/>
                <p className="interactive-title">The Vest of Memories</p>
              </a>
            </div>
          </center>

          <h2 className="featuredtitle paddingtop150" id="about">ABOUT<br/>ME</h2>
          <svg className="after-title-path" height="100" width="100">
            <line x1="70" y1="0" x2="30" y2="100"/>
          </svg>

          <div className="aboutme1 fourcol">
              <div/>
              <div>
                <img src="img/me4.png" alt="My Portrait" className="me"/>
              </div>
              <div className="aboutme2">
                <p>👋 I'm Ploy.</p>
                <p>
                  🌱 I'm currently pursuing a Bachelor degree in <u>Human Centered Design & Engineering</u> with a minor in Informatics at 
                  the University of Washington, Seattle.
                </p>
                <p>
                  👀 I'm interested in user experience design, human-computer interaction, and interactive media/art.
                  As an aspiring designer, I believe that design is a possibility-driven tool that can better improve the community. 
                  I passionate about applying design skills to help people accomplishing their goals.
                </p>
                <p>
                  👉 <a href="https://drive.google.com/file/d/1tPM7DYwudUTJ-ryL2wGG5rgi2H8VuGDp/view?usp=sharing" target="_blank">Click here to see my resume</a>
                </p>
                <p>
                  📫 Feel free to reach out via email: <a href="mailto:ploypp@uw.edu">ploypp@uw.edu </a>
                  or <a href="https://www.linkedin.com/in/ploypruekcharoen/">LinkedIn</a>. 
                </p>
                <p>
                  💞️ I appreciate your time here a lot! Let's get in touch!
                </p>
              </div>
            </div>
          
        </body>
        <Footnote/>
      </div>
    );
  }
}
