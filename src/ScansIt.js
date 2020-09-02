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
            <div className="overview">
              <h1>Project ScansIt</h1>
              <p>A mobile application for better experiences of riding the Link Light Rail, including a
                digital card for scanning into the station and real-time schedule. It is as simple as Schedule, 
                Scan, and Ride.
              </p>
              <div className="period">February - March 2020</div>
              <div className="tool">Role: UX Researcher, UI Designer</div>

            </div>
          </body>
          <img src="img/scansit/scansit_animated_logo_crop.gif" alt="ScansIt Animated Logo" className="ScansItAnimated"></img>
          <body>
            <div className="introduce">
              <div className="background">
                <h2>Background</h2>
                <p>
                The ScansIt team was tasked with solving the following issue: how can the city of Seattle improve 
                local residents’ lives with digital solutions?
                We began by thinking about different areas of interest that dealt with local government such as access to 
                education, health & wellness, and transportation. After discussing all these topics we found a shared focus 
                in transportation, specifically Sound Transit’s Light Rail System, since it is something that we have all used 
                and know could use improvement. 
                </p>
              </div>
              <div className="contribution">
                <h2>My contributions</h2>
                <div className="list">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</li>
                </div>
              </div>
            </div>
            <div className="problem">
              <h2>Problem Statement</h2>
              <p>
              The visitors and local inhabitants of metropolitan cities — with diverse transit system options — 
              command accessibility, reliability, convenience, and safety through a digital commuter card solution. 
              While maintaining characteristics like this is a challenge, a city’s progress, development, and success 
              insists upon such core pillars. The City of Seattle, a centerpiece of technology and innovation, should 
              lead the way in this pursuit.
              </p>
            </div>
            <div className="research">
              <div>
                <h2>Research</h2>
                <img src="img/scansit/scansit_brainstorm.png" alt="ScansIt Brainstorm"></img>
              </div>
              <div className="stakeholder">
                <h2>Stakeholders</h2>
                <p>
                  Our stakeholders for our solution focused on two main groups: The Mayor and Users of the Light Rail.
                </p>
                <p>
                  <b>The Mayor</b> most cares about: 
                  <li>Showing that Seattle is innovative and a booming city</li>
                  <li>Implementing new trends before they become commonplace</li>
                  <li>Greater usage of Link will lead to:
                    <ul>
                      <li>Less Uber/driving</li>
                      <li>Better traffic flow throughout the city</li>
                      <li>A higher number of visitors and overall satisfaction</li>
                      <li>Increased tourism and economic boom at station neighborhoods </li>
                    </ul>
                  </li>
                  <li>Transparent collection of data that can be used to improve systems and get customer feedback</li>
                  <p>
                    <b>Users</b> care about having a convenient and highly efficient system that will take them where they need to 
                    go with ease. They do not want to be stressed when using the Light Rail, or have to worry about their safety. 
                    Instead they want to be highly productive people and not be concerned with how they are getting places. 
                  </p>
                </p>
              </div>
            </div>
            <img src="img/scansit/scansit_research.png" alt="ScansIt Research" className="ScansItResearch"></img>
            <div className="solution">
              <h2>Solution</h2>
              <p>For our solution, we created ScansIt, which stands for <b>Scanning for Transit</b>. It is a simple and seamless 
                digital card and scheduling app for your public transit needs.
              </p>
              <h3>Brand Guidelines</h3>
              <img src="img/scansit/brandguide.png" alt="ScansIt Brand Guidelines" className="ScansItGuide"></img>
              <h3>Sitemap</h3>
              <img src="img/scansit/sitemap_transparent.png" alt="ScansIt Sitemap" className="ScansItSitemap"></img>
              <div className="appendix">
                <h3>Initiatives and Epics</h3>
                <div className="container">
                  <img src="img/scansit/initiatives.png" className="initiatives"></img>
                  <img src="img/scansit/epics.png" className="epics"></img>
                </div>
                <h3>User Stories</h3>
                <img src="img/scansit/stories.png"></img>
              </div>
              <h3>Prototype</h3>
              <div className="prototype">
                <a href="https://www.figma.com/proto/kqdCcVRZ4j7XyMqxuEreN8/ScansIt?node-id=1%3A7&scaling=scale-down" target="_blank">
                  <img src="img/scansit/prototype.png" className="ScansItPrototype"></img>
                  {/* <div classname="middle">
                    <div className="text">Click to try the prototype</div>
                  </div> */}
                </a>
                <h4 class="prototype-section">Log in/Sign up</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h4 class="prototype-section">Homepage</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h4 class="prototype-section">Digital Card</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h4 class="prototype-section">Card information/Add value</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h4 class="prototype-section">Schedule</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h4 class="prototype-section">Setting</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              
              </div>
              
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