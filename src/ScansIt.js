import React, {Component} from 'react';
import Navbar from './Component/NavBar';
import Footnote from './Component/Footnote';
import classNames from "classnames";

export default class ScansIt extends Component {
  render() {
    return (
        <div className="ScansIt">
          <Cursor />
          <Navbar />
          <body>
            <div className="section1">
              <h1>Project ScansIt</h1>
              <p>A mobile application for better experiences of riding the Link Light Rail, including a
                digital card for scanning into the station and real-time schedule.
              </p>
              <div className="period">February - March 2020</div>
              <div className="tool">UX/UI Design</div>
              <div className="tool">Adobe Photoshop</div>
              <div className="tool">Figma</div>
              <img src="img/scansit_animated_logo_crop.gif" alt="ScansIt Animated Logo" className="ScansItAnimated"></img>
            </div>
            <div className="section2">
              <h2>Problem Statement</h2>
              <p>
              The visitors and local inhabitants of metropolitan cities — with diverse transit system options — 
              command accessibility, reliability, convenience, and safety through a digital commuter card solution. 
              While maintaining characteristics like this is a challenge, a city’s progress, development, and success 
              insists upon such core pillars. The City of Seattle, a centerpiece of technology and innovation, should 
              lead the way in this pursuit.
              </p>
            </div>
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

  const cursorClasses = classNames (
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