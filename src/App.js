import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import './menu.css';
import Navbar from './Component/NavBar';
// import Cursor from './Component/Cursor';
import classNames from "classnames";
import _ from 'lodash';

// Cursor

// const isMobile = () => {
//   const ua = navigator.userAgent;
//   return /Android|Mobi/i.test(ua);
// };

const Cursor = () => {
  // if (typeof navigator !== 'undefined' && isMobile()) return null;
  const [position, setPosition] = React.useState({x: 0, y: 0});
  const [hidden, setHidden] = React.useState(false);
  const [linkHovered, setLinkHovered] = React.useState(false);

  React.useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, []);

  const [clicked, setClicked] = React.useState(false);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach(el => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };

  const cursorClasses = classNames(
  'cursor',
    {
      'cursor--clicked': clicked,
      'cursor--hidden': hidden,
      'cursor--link-hovered': linkHovered
    }
  );

  const onMouseMove = (e) => {
    setTimeout(() => setPosition({x: e.pageX, y: e.pageY}), 100);
  }

  return (
    <div className={cursorClasses}
      style={{
      left: `${position.x}px`,
      top: `${position.y}px`
    }}/>
  );
}

// App

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Cursor />
        <Navbar />
        <body>
          <div className="Greeting">
            Hi, I'm Ploy Pruekcharoen
          </div>
          <div className="project">
            <div className="description">
              <h1>Project ScansIt</h1>
              <p>A mobile application for better experiences of riding the Link Light Rail, including a
                digital card for scanning into the station and real-time schedule.
              </p>
              <div className="tool">
                UX/UI Design
              </div>
              <div className="tool">
                Adobe Photoshop
              </div>
              <div className="tool">
                Figma
              </div>
            </div>
            <div className="image">
              <img src="img/scansit_logo.png" alt="ScansIt Logo"></img>
            </div>
          </div>
        </body>
      </div>
    );
  }
}
  

