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
              <div className="tool">Group Project</div>
            </div>
          </body>
          <center>
            <img src="img/scansit/scansit_animated_logo_crop.gif" alt="ScansIt Animated Logo" className="ScansItAnimated"></img>
          </center>
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
                  <li>I </li>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                </p>
                {/* <h2>Stakeholders</h2>
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
                </p> */}
              </div>
            </div>
            <div className="reverse-brainstorm">
              <center>
                <img src="img/scansit/scansit_research.png" alt="ScansIt Research" className="ScansItResearch"></img>
              </center>
              <p className="paddingtop50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus 
                error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
              </p>
            </div>
            <div className="solution">
              <h2>Solution</h2>
              <p>For our solution, we created ScansIt, which stands for <b>Scanning for Transit</b>. It is a simple and seamless 
                digital card and scheduling app for your public transit needs.
              </p>
              <h3>Brand Guidelines</h3>
              <img src="img/scansit/brandguide.png" alt="ScansIt Brand Guidelines" className="ScansItGuide"></img>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h3>Sitemap</h3>
              <center>
                <img src="img/scansit/sitemap_transparent.png" alt="ScansIt Sitemap" className="ScansItSitemap"></img>
              </center>
              <h3>Prototype</h3>
              <div className="prototype">
                {/* <a href="https://www.figma.com/proto/kqdCcVRZ4j7XyMqxuEreN8/ScansIt?node-id=1%3A7&scaling=scale-down" target="_blank" rel="noopener noreferrer">
                  <img src="img/scansit/prototype.png" alt="ScansIt Prototype" className="ScansItPrototype"></img>
                  <div classname="middle">
                    <div className="text">Click to try the prototype</div>
                  </div>
                </a> */}
                <div className="wireframe">
                  <center>
                    <div className="container">
                      <div className="content">
                        <a href="https://www.figma.com/proto/kqdCcVRZ4j7XyMqxuEreN8/ScansIt?node-id=1%3A7&scaling=scale-down" target="_blank">
                          <div className="content-overlay"></div>
                          <img src="img/scansit/1_loading_1.png" alt="ScansIt Loading Page"/>
                          <div className="content-details fadeIn-top">
                            <h3>Loading</h3>
                            <p>This is a short description asfdsfjglsd njghuselrhgsjdf znskhgrre wiabfk husgfewaukf cbkhad shfbcasud gvckuaysdvc
                              jdas blih vle adsbca, mhsdbvhasb dkzdvbaerv
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="container">
                      <div className="content">
                        <a href="https://www.figma.com/proto/kqdCcVRZ4j7XyMqxuEreN8/ScansIt?node-id=55%3A22&scaling=scale-down" target="_blank">
                          <div className="content-overlay"></div>
                          <img src="img/scansit/2_login.png" alt="ScansIt Login"/>
                          <div className="content-details fadeIn-top">
                            <h3>Login/Sign Up</h3>
                            <p>This is a short description</p>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="container">
                      <div className="content">
                        <a href="https://www.figma.com/proto/kqdCcVRZ4j7XyMqxuEreN8/ScansIt?node-id=1%3A6&scaling=scale-down" target="_blank">
                          <div className="content-overlay"></div>
                          <img src="img/scansit/3_homepage_2.png" alt="ScansIt Homepage"/>
                          <div className="content-details fadeIn-top">
                            <h3>Homepage</h3>
                            <p>This is a short description</p>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="container">
                      <div className="content">
                        <a href="https://www.figma.com/proto/kqdCcVRZ4j7XyMqxuEreN8/ScansIt?node-id=3%3A11&scaling=scale-down" target="_blank">
                          <div className="content-overlay"></div>
                          <img src="img/scansit/4_digital_card_front.png" alt="ScansIt Digital Card"/>
                          <div className="content-details fadeIn-top">
                            <h3>Digital Card</h3>
                            <p>This is a short description</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </center>

                  <center>
                    <div className="container">
                      <div className="content">
                        <a href="https://www.figma.com/proto/kqdCcVRZ4j7XyMqxuEreN8/ScansIt?node-id=32%3A0&scaling=scale-down" target="_blank">
                          <div className="content-overlay"></div>
                          <img src="img/scansit/5_digital_card_back.png" alt="ScansIt Card Information"/>
                          <div className="content-details fadeIn-top">
                            <h3>Card Information</h3>
                            <p>This is a short description</p>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="container">
                      <div className="content">
                        <a href="https://www.figma.com/proto/kqdCcVRZ4j7XyMqxuEreN8/ScansIt?node-id=35%3A49&scaling=scale-down" target="_blank">
                          <div className="content-overlay"></div> 
                          <img src="img/scansit/6_add_value.png" alt="ScansIt Add Value"/>
                          <div className="content-details fadeIn-top">
                            <h3>Add Value</h3>
                            <p>This is a short description</p>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="container">
                      <div className="content">
                        <a href="https://www.figma.com/proto/kqdCcVRZ4j7XyMqxuEreN8/ScansIt?node-id=1%3A5&scaling=scale-down" target="_blank">
                          <div className="content-overlay"></div> 
                          <img src="img/scansit/7_schedule_dropdown.png" alt="ScansIt Schedule"/>
                          <div className="content-details fadeIn-top">
                            <h3>Schedule</h3>
                            <p>This is a short description</p>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="container">
                      <div className="content">
                        <a href="https://www.figma.com/proto/kqdCcVRZ4j7XyMqxuEreN8/ScansIt?node-id=26%3A17&scaling=scale-down" target="_blank">
                          <div className="content-overlay"></div> 
                          <img src="img/scansit/8_setting.png" alt="ScansIt Setting"/>
                          <div className="content-details fadeIn-top">
                            <h3>Setting</h3>
                            <p>This is a short description</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </center>
                </div>

                <p className="paddingtop50">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                  sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

              </div>
              <div className="appendix">
                <h3>Initiatives and Epics</h3>
                <div className="ini-epic">
                  <img src="img/scansit/initiatives.png" alt="ScansIt Initiatives" className="initiatives"></img>
                  <img src="img/scansit/epics.png" alt="ScansIt Epics" className="epics"></img>
                </div>
                <h3>User Stories</h3>
                <img src="img/scansit/stories.png" alt="ScansIt Stories" className="stories"></img>
              </div>
            </div>
            <div className="next">
              <h2>Next Steps</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus 
                error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
              </p>
              <h2>Lessons Learned</h2>
              <h4>Title 1</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <h4>Title 2</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur.
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
    setTimeout(() => setPosition({x: (e.clientX - 20), y: (e.clientY - 20)}), 50);
  }

  return (
    <div className={cursorClasses}
      style={{
      position: 'fixed',
      transform: 'translate3d(' + position.x + 'px, ' + position.y + 'px, 0)',
      left: 0,
      top: 0
    }}/>
  );
}