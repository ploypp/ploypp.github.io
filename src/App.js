import React, { Component } from 'react';
import './index.css';
import './work.css';
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
          <div className="toppage"></div>
          <svg className="smile" width="180" height="180">
          {/* <svg className="smile"> */}
            <circle cx="80" cy="80" r="70" stroke="#000" stroke-width="3" fill="#fff" />
            <circle cx="45" cy="75" r="3" fill="#000" />
            <circle cx="85" cy="80" r="3" fill="#000"/>
            <path d="M 34 80 C 34 100, 73 120, 95 90" stroke="#000" stroke-width="3" fill="transparent"/>
          </svg>
          <div className="twocolumns greet">
            <div className="Greeting">
              Hello! I'm <b>Ploy</b>, an aspiring designer 
              who aims to create a meaningful 
              experience through human-centered 
              design and interactive media.
            </div>
            <div></div>
          </div>
          {/* <svg className="star" width="200" height="180" stroke="#fff" stroke-width="3" fill="#000">
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
            <circle cx="55" cy="75" r="1.5" fill="#fff" />
            <circle cx="95" cy="80" r="1.5" fill="#fff"/>
            <path d="M 44 80 C 44 100, 83 120, 105 90" stroke="#fff" stroke-width="3" fill="transparent"/>
          </svg> */}
        
          <div id="scroll-down" className="main-arrow">
            <span className="arrow-down"/>
          </div>
          
          <h2 className="featuredtitle paddingtop100">— Featured Works</h2>

          <div className="twocolumns">
            <div>
              <div id="li-text1">
                <a href="https://famapp.weebly.com/" target="_blank"><div><p><u>Fam App</u> &#8594;</p></div></a>
              </div>
              <div className="work-img">
                <img id="li-img1" src="img/famapp-main.png" alt="Fam App"/>
                <p className="italic-text">—— User research, UX/UI Design</p>
              </div>
            </div>
            <div>
              <div id="li-text1">
                <Link to = "/scansit"><div><p><u>ScansIt Mobile App</u> &#8594;</p></div></Link>
                {/* <p>A mobile application for a better experience of riding the Link Light Rail.</p> */}
              </div>
              <div className="work-img">
                <img id="li-img1" src="img/scansit/scansit-main.png" alt="ScansIt"/>
                <p className="italic-text">—— User Research, UX/UI Design</p>
              </div>
            </div>
          </div>

          <div className="twocolumns paddingtop100">
            <div>
              <div id="li-text1">
                <Link to = "/cnc"><div><p><u>Code&amp;Craft Website Redesign</u> &#8594;</p></div></Link>
                {/* <p>The new design of Thailand's growing digital product developer company — Code&Craft.</p> */}
              </div>
              <div className="work-img">
                <img id="li-img2" src="img/cnc/cnc-main.png" alt="CnC"/>
                <p className="italic-text">—— UX/UI Design</p>
              </div>
            </div>
            <div>
              <div id="li-text1">
                <Link to = "/cbc"><div><p><u>Cascade Bicycle Club<br/>Brand Book</u> &#8594;</p></div></Link>
              </div>
              <div className="work-img">
                <img id="li-img3" src="img/cbc/cbc-main.png" alt="CBC"/>
                <p className="italic-text">—— Graphic Design, UX/UI Design</p>
              </div>
            </div>
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