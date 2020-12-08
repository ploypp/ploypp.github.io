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
            <div className="Greeting" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
              Hi, I'm Ploy Pruekcharoen.
            </div>
            
            <div className="subhead" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
              For every design I create, I
              <span id="wording">
                STUDY, SKETCH and REVIEW.
              </span>
            </div>
          </center>
          
          <h2 className="mainpagetitle" id="featured-works">Featured Works</h2>
          <div className="wrapper">
            <ul className="work-list">
              <Link to = "/scansit"><li>
                <center>
                  <img id="li-img1" src="img/scansit/scansit-main.png" alt="ScansIt"/>
                  <b id="li-text1">Project ScansIt</b>
                  <p id="li-text1">A mobile application for better experiences of riding the Link Light Rail.</p>
                  <div className="period">UX Research</div>
                  <div className="period">UX/UI Design</div>
                </center>
              </li></Link>

              <Link to = "/cnc"><li>     
                <center>
                  <img id="li-img2" src="img/cnc/cnc-main.png" alt="CnC"/>
                  <b id="li-text2">Code&amp;Craft Website Redesign Project</b>
                  <p id="li-text2">The new design of Thailand's growing digital product developer company — Code&amp;Craft.</p>
                  <div className="period">UX/UI Design</div>
                </center>
              </li></Link>

              <li>     
                <center>
                  <img id="li-img3" src="img/cbc/cbc-main.png" alt="CBC"/>
                  <b id="li-text3">Cascade Bicycle Club Brandbook</b>
                  <p id="li-text3">The brand guidlines of Cascade Bicycle Club's new design. (in progress)</p>
                  <div className="period">Graphic Design</div>
                  <div className="period">UX/UI Design</div>
                </center>
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