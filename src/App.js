import React, { Component } from 'react';
import './index.css';
import './Component/menu.css';
import './Project/projects.css';
import './Project/scansit.css';
import './Project/cnc.css';
import './Project/wego.css';
import './webfontkit/stylesheet.css'
import Navbar from './Component/NavBar';
// import Cursor from './Component/Cursor';
import classNames from "classnames";
// import _ from 'lodash';
import Footnote from './Component/Footnote';
import {Link } from "react-router-dom";
import $ from "jquery";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

// App

export default class App extends Component {
  render() {

    // $(document).ready(function () {

    //   $(window).scroll(function () {
    //     if ($(this).scrollTop() > 300 && $(this).scrollTop() < 600) {
    //       $('#wording').html('STUDY .');
    //       $('.Greeting').css("position", "fixed");
    //       $('.subhead').css("position", "fixed");
    //       $('#wording').css("position", "fixed");
    //     } else if ($(this).scrollTop() > 600 && $(this).scrollTop() < 900) { 
    //       $('#wording').html('SKETCH .');

    //     } else if ($(this).scrollTop() > 900) {
    //       $('#wording').html('REVIEW .');
    //     } 
    //   });
    // });
    
    return (
      <div className="App">
        {/* <Cursor /> */}
        <Navbar />
        <body>
          <center>
            <div className="Greeting">
              Hi, I'm <b>Ploy</b><strike>pilin</strike><br/>Pruekcharoen.
            </div>
          </center>
          <svg className="smile" width="180" height="180">
          {/* <svg className="smile"> */}
            <circle cx="80" cy="80" r="70" stroke="#B48AB2" stroke-width="3" fill="#F2E9E4" />
            <circle cx="45" cy="75" r="3" fill="#B48AB2" />
            <circle cx="85" cy="80" r="3" fill="#B48AB2"/>
            <path d="M 34 80 C 34 100, 73 120, 95 90" stroke="#B48AB2" stroke-width="3" fill="transparent"/>
          </svg> 
          <div className="subhead">
            <p>An aspiring UX/UI designer /</p>
            <p>For every design I create, I <b>study</b>, <b>sketch</b>, and <b>review</b>.</p>
          </div>
          {/* <div id="scroll-down">
            <span class="arrow-down">
            </span>
          </div> */}
          <center>
            <div className="featuredintro">
              Some of my <br/><b>featured <u>works</u></b>
            </div>
          </center>
          <svg className="star" width="200" height="180" stroke="#B48AB2" stroke-width="3" fill="#F2E9E4">
            <path class="star"  d="
            M 90.000 155.000
            L 142.901 172.812
            L 142.308 116.996
            L 175.595 72.188
            L 122.328 55.504
            L 90.000 10.000
            L 57.672 55.504
            L 4.405 72.188
            L 37.692 116.996
            L 37.099 172.812
            L 90.000 155.000
            "/>
            <circle cx="55" cy="75" r="1.5" fill="#B48AB2" />
            <circle cx="95" cy="80" r="1.5" fill="#B48AB2"/>
            <path d="M 44 80 C 44 100, 83 120, 105 90" stroke="#B48AB2" stroke-width="3" fill="transparent"/>
          </svg>
          {/* <center>
            <svg className="line" height="150" width="10" stroke="#B48AB2" stroke-width="5">
              <line x1="0" y1="0" x2="0" y2="150"/>
            </svg>
          </center> */}
          <div id="scroll-down" className="main-arrow">
            <span className="arrow-down"/>
          </div>

          <div className="wrapper">
            <ul className="work-list">
              <li>
                <Link to = "/scansit">
                  <svg className="project-link" id="project-link" width="160" height="160">
                    <circle cx="80" cy="80" r="75" stroke="#22223B" stroke-width="3" fill="#B48AB2" />
                    <text x="0" y="30" letter-spacing="4px" fill="#22223B">
                      <textPath xlinkHref="#textcircle">Click here to view</textPath>
                    </text>
                    <path d="M10,80a70,70 0 1,0 140,0a70,70 0 1,0 -140,0" stroke="#22223B" stroke-width="0" fill="transparent" id="textcircle" />
                    <circle cx="45" cy="75" r="3" fill="#22223B" />
                    <circle cx="85" cy="80" r="3" fill="#22223B"/>
                    <path d="M 34 80 C 34 100, 73 120, 95 90" stroke="#22223B" stroke-width="3" fill="transparent"/>
                  </svg>
                </Link>
                <div className="twocolumns">
                  <div className="project-img">
                    <img id="li-img1" src="img/scansit/scansit-main.png" alt="ScansIt"/>
                  </div>
                  <div className="project-description">
                    <h1 id="li-text1">ScansIt<br/>Mobile App</h1>
                    <div className="project-textbox">
                      <p className="project-main-role">UX RESEARCH<br/>UX/UI DESIGN</p>
                      <p>A mobile application for a better experience of riding the Link Light Rail.</p>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <Link to = "/cnc">
                  <svg className="project-link" id="project-link" width="160" height="160">
                    <circle cx="80" cy="80" r="75" stroke="#22223B" stroke-width="3" fill="#B48AB2" />
                    <text x="0" y="30" letter-spacing="4px" fill="#22223B">
                      <textPath xlinkHref="#textcircle">Click here to view</textPath>
                    </text>
                    <path d="M10,80a70,70 0 1,0 140,0a70,70 0 1,0 -140,0" stroke="#22223B" stroke-width="0" fill="transparent" id="textcircle" />
                    <circle cx="45" cy="75" r="3" fill="#22223B" />
                    <circle cx="85" cy="80" r="3" fill="#22223B"/>
                    <path d="M 34 80 C 34 100, 73 120, 95 90" stroke="#22223B" stroke-width="3" fill="transparent"/>
                  </svg>
                </Link>
                <div className="twocolumns">
                  <div className="project-img">
                    <img id="li-img2" src="img/cnc/cnc-main.png" alt="CnC"/>
                  </div>
                  <div className="project-description">
                    <h1 id="li-text1">Code&amp;Craft<br/>Website Redesign</h1>
                    <div className="project-textbox">
                      <p className="project-main-role">UX/UI DESIGN</p>
                      <p>The new design of Thailand's growing digital product developer company — Code&amp;Craft.</p>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <Link to = "/cbc">
                  <svg className="project-link" id="project-link" width="160" height="160">
                    <circle cx="80" cy="80" r="75" stroke="#22223B" stroke-width="3" fill="#B48AB2" />
                    <text x="0" y="30" letter-spacing="4px" fill="#22223B">
                      <textPath xlinkHref="#textcircle">Click here to view</textPath>
                    </text>
                    <path d="M10,80a70,70 0 1,0 140,0a70,70 0 1,0 -140,0" stroke="#22223B" stroke-width="0" fill="transparent" id="textcircle" />
                    <circle cx="45" cy="75" r="3" fill="#22223B" />
                    <circle cx="85" cy="80" r="3" fill="#22223B"/>
                    <path d="M 34 80 C 34 100, 73 120, 95 90" stroke="#22223B" stroke-width="3" fill="transparent"/>
                  </svg>
                </Link>
                <div className="twocolumns">
                  <div className="project-img">
                    <img id="li-img3" src="img/cbc/cbc-main.png" alt="CBC"/>
                  </div>
                  <div className="project-description">
                    <h1 id="li-text1">Cascade Bicycle Club<br/>Brand Book</h1>
                    <div className="project-textbox">
                      <p className="project-main-role">Graphic Design<br/>UX/UI DESIGN</p>
                      <p>The brand guidlines of Cascade Bicycle Club's new design. <br/>(in progress)</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* <div className="project2 twocolumns"> */}
            {/* <div className="description" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
              <h1>Project ScansIt</h1>
              <p>
                A mobile application for better experiences of riding the Link Light Rail, including a
                digital card for scanning into the station and real-time schedule. It is as simple as Schedule, 
                Scan, and Ride.
              </p>
              <Link to = "/scansit"><div className="period">View more</div></Link>
          </div> */}
          {/* <div className="project2 twocolumns">
            <div className="image" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">        
              <img src="img/cnc/cnc_home.png" alt="Code&amp;Craft"/>
            </div>
            <div className="description" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
              <h1>Code&amp;Craft Website Redesign Project</h1>
              <p>
                The new design of Thailand's growing digital product developer company — Code&amp;Craft.
                Introduce to you the more creative, functional and promising site to learn more about Code&amp;Craft's
                all-rounded services with its vision to combine technology, art and humanity.
              </p>
              <Link to = "/cnc"><div className="period">View more</div></Link>
            </div>
          </div> */}
          
        </body>
        <Footnote/>
      </div>
    );
  }
}

// Cursor

// const isMobile = () => {
//   const ua = navigator.userAgent;
//   return /Android|Mobi/i.test(ua);
// };

/////////////

// const Cursor = () => {
//   // if (typeof navigator !== 'undefined' && isMobile()) return null;
//   const [position, setPosition] = React.useState({x: 0, y: 0});
//   const [hidden, setHidden] = React.useState(false);
//   const [linkHovered, setLinkHovered] = React.useState(false);

//   React.useEffect(() => {
//     addEventListeners();
//     handleLinkHoverEvents();
//     return () => removeEventListeners();
//   }, []);

//   const [clicked, setClicked] = React.useState(false);

//   const addEventListeners = () => {
//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("mouseenter", onMouseEnter);
//     document.addEventListener("mouseleave", onMouseLeave);
//     document.addEventListener("mousedown", onMouseDown);
//     document.addEventListener("mouseup", onMouseUp);
//   };

//   const removeEventListeners = () => {
//     document.removeEventListener("mousemove", onMouseMove);
//     document.removeEventListener("mouseenter", onMouseEnter);
//     document.removeEventListener("mouseleave", onMouseLeave);
//     document.removeEventListener("mousedown", onMouseDown);
//     document.removeEventListener("mouseup", onMouseUp);
//   };

//   const onMouseDown = () => {
//     setClicked(true);
//   };

//   const onMouseUp = () => {
//     setClicked(false);
//   };

//   const onMouseLeave = () => {
//     setHidden(true);
//   };

//   const onMouseEnter = () => {
//     setHidden(false);
//   };

//   const handleLinkHoverEvents = () => {
//     document.querySelectorAll("a").forEach(el => {
//       el.addEventListener("mouseover", () => setLinkHovered(true));
//       el.addEventListener("mouseout", () => setLinkHovered(false));
//     });
//   };

//   const cursorClasses = classNames (
//   'cursor',
//     {
//       'cursor--clicked': clicked,
//       'cursor--hidden': hidden,
//       'cursor--link-hovered': linkHovered
//     }
//   );

//   const onMouseMove = (e) => {
//     setTimeout(() => setPosition({x: (e.clientX - 20), y: (e.clientY - 20)}), 50);
//   }

//   return (
//     <div className={cursorClasses}
//       style={{
//       position: 'fixed',
//       transform: 'translate3d(' + position.x + 'px, ' + position.y + 'px, 0)',
//       left: 0,
//       top: 0
//     }}/>
//   );
// }