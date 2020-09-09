import React, {Component} from 'react';
import Navbar from '../Component/NavBar';
import Footnote from '../Component/Footnote';
import classNames from "classnames";

export default class ScansIt extends Component {
  render() {
    return (
      <div className="ScansIt">
        <Cursor />
        <Navbar />
        <div className="project-content">
          <div className="overview">
            <h1>Project ScansIt</h1>
            <p>
              A mobile application for a better experience of riding the Link Light Rail, including a
              digital card for scanning into the station and real-time schedule. It is as simple as Schedule, 
              Scan, and Ride.
            </p>
            <div className="tool">Class INFO 360: Design Methods</div>
            <div className="twocolumns project-info">
              <div className="column1">
                <p><b>Role: </b>UX Researcher, UI Designer</p>
                <p><b>Duration: </b>February - March 2020</p>
              </div>
              <div className="column2">
                <p>
                  <b>Team: </b> Savannah Umali-Jepson, Roger St. Louis, Jae Choi
                </p>
                <p><b>Tools: </b>Adobe Photoshop, Figma</p>
              </div>
            </div>
          </div>

          <center>
            <img src="img/scansit/scansit_animated_logo_crop.gif" alt="ScansIt Animated Logo" className="main-image"/>
          </center>
        
          <div className="introduce twocolumns">
            <div className="background">
              <h2>Background</h2>
              <p>
                The ScansIt team was tasked with solving the following issue:
              </p>
              <b className="quote">how can the city of Seattle improve 
                local residents’ lives with digital solutions?
              </b>
              <p>
                My teammates and I began by thinking about different areas of interest that dealt with local government such as access to 
                education, health & wellness, and transportation. After discussing all these topics we found a shared focus 
                in transportation, specifically Sound Transit’s Light Rail System, since it is something that we have all used 
                and know could use improvement. 
              </p>
            </div>
            <div className="contribution">
              <h2>My contributions</h2>
              <div className="list">
                <li>
                  Conducted <b>user research</b> and brainstormed with the team to come up with ideas for improving the problems
                  getting from interviews and surveys.
                </li>
                <li>Mainly contributed <b>UI design</b> and <b>user flow</b>.</li>
                <li>Fixed and <b>developed</b> the mockups based on comments after peer reviews.</li>
              </div>
            </div>
          </div>

          <div className="process">
            <h2>Design Process</h2>
            <center>
              <img src="img/scansit/scansit_process.png" alt="ScansIt Design Process"/>
            </center>
          </div>

          <div className="problem">
            <h2>Problem Statement</h2>
            <p>
              Seattle is a forward-thinking, technologically advanced and environmentally influential city and we believe that 
              its transportation systems should reflect that. It is something that residents, commuters, and visitors use. 
              More importantly it greatly impacts the traffic flow of the entire city thus affecting everyone’s lives. While 
              Seattle was honored with having the best large transit system in North America, its transit payment system 
              remains archaic.
            </p>
            <p>
              The visitors and local inhabitants of metropolitan cities — with diverse transit system options — 
              command accessibility, reliability, convenience, and safety through a digital commuter card solution. 
              While maintaining characteristics like this is a challenge, a city’s progress, development, and success 
              insists upon such core pillars. The City of Seattle, a centerpiece of technology and innovation, should 
              lead the way in this pursuit.
            </p>
          </div>

          {/* Design process here (Timeline) */}

          <div className="UserResearch">
            <h2>Research</h2>
            <div className="reverse-brainstorm">
              <center>
                <img src="img/scansit/scansit_research.png" alt="ScansIt Research" className="ScansItResearch"/>
              </center>
              <p className="paddingtop50">
                After the team was assigned with the prompt, we started with discussing among the group to identify the 
                problem space. Since we were all students of the University of Washington and living in the city of Seattle, 
                we were interested in its transportation system, especially the Link Light Rail. Then, we completed a 
                stakeholder analysis of two identified stakeholders: the mayor (Jenny Durkan) and the users of Link Light Rail. 
                After that, we did research about Seattle’s transportation compared with other cities in the United States, 
                collected information that could be used for another phase of brainstorming, conducted in-person interviews, 
                and sent out the first survey that we created together to get the main scope of the problems from the riders.
              </p>

              <h4 className="paddingtop50">Insights</h4>
              <p>From the Link Light Rail’s riders (interviewees and survey takers):</p>
              <b>#1 Looking for more convenient ways to pay for fares
                <ul>
                  since the current existing methods to pay for fares are only:
                  <li>buying a one-way or round-trip ticket at the station.</li>
                  <li>using ORCA card, which is a stored-value card that works like cash or a pass.</li>
                  <li>using identification cards under institutions, for example, UW Husky card.</li>
                </ul>
              </b>
              <b>
                #2 Seeing the Link schedules and know when the trains are arriving at and leaving the stations
              </b>

              <h4 className="paddingtop50">Stakeholder Analysis</h4>
              <div className="twocolumns">
                <div className="column1">
                  <p>
                    As we conducted a stakeholder analysis, we considered <b>Mayor Durkin</b>’s perspective continually. We wanted to make 
                    sure we had a holistic vision. This included considering funding, policies in place, new potential policies and 
                    vision of the City of Seattle and King County as a whole
                  </p>
                  {/* <ul>
                    <li>Funding</li>
                    <li>Policies in place</li>
                    <li>New potential policies</li>
                    <li>Vision of the City of Seattle and King County as a whole</li>
                  </ul> */}
                </div>
                <div className="column2">
                  <p>
                    For the <b>users</b>, We identified that users wanted more ease of use in paying for fares. This meant making the card 
                    accessible in a way currently not available. Daily riders looking for convenient and advanced technological solutions,
                    safety, reduction of stress, increased daily productivity and participation in reduced carbon footprint.
                  </p>
                  {/* <ul>
                    <li>
                      We identified that users wanted more ease of use in paying for fares. This meant making the card 
                      accessible in a way currently not available.
                    </li>
                    <li>Daily riders looking for convenient and advanced technological solutions</li>
                    <li>Safety</li>
                    <li>Reduction of stress</li>
                    <li>Increased daily productivity</li>
                    <li>Participation in reduced Carbon footprint</li>
                  </ul> */}
                </div>
              </div>

            </div>
            <div className="twocolumns">
              <div className="research">
                <img src="img/scansit/scansit_brainstorm.png" alt="ScansIt Brainstorm"/>
              </div>
              <div className="brainstorm">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  In regard to identifying the problem through this intensive dive, we were able to uncover that the majority of people 
                  we interviewed want a digital payment solution.  This problem is timely, relevant, and is specifically user-identified.
                </p>
                <p>
                  The most compelling unveiling from our inquiry was that as a metropolitan leader we are in-line with advanced technology. 
                  This was a major and confident confirmation we were on the correct path leading Seattle towards a solid future.
                </p>

              </div>
            </div>
            <div className="appendix">
              <h3>Initiatives and Epics</h3>
              <div className="ini-epic">
                <img src="img/scansit/initiatives.png" alt="ScansIt Initiatives" className="initiatives"/>
                <img src="img/scansit/epics.png" alt="ScansIt Epics" className="epics"/>
              </div>
              <h3>User Stories</h3>
                <img src="img/scansit/stories.png" alt="ScansIt Stories" className="stories"/>
            </div>
          </div>
          
          <div className="ideation">
            <h2>Ideation</h2>
            <center>
              <div className="inline">
                <img src="img/scansit/sketch.png" alt-="ScansIt Sketch"/>
                <img src="img/scansit/sketch2.png" alt-="ScansIt Sketch"/>
                <img src="img/scansit/sketch3.png" alt-="ScansIt Sketch"/>
              </div>
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
            <p>
              For our solution, we created ScansIt, which stands for <b>Scanning for Transit</b>. It is a simple and seamless 
              digital card and scheduling app for your public transit needs.
            </p>
            <h3>Brand Guidelines</h3>
            <center>
              <img src="img/scansit/brandguide.png" alt="ScansIt Brand Guidelines" className="ScansItGuide"/>
            </center>
            <p>
              When I thought about the visual guidelines, I decided on using the primary colors of navy and yellow since they 
              mimic the current colors used by SoundTransit. To demonstrate individuality and uniqueness, mint and coral are 
              added to the branding design as supportive colors. The grayscale colors were used to signify inactive or deactivated 
              functions. Since gray is not a very eye catching color, but soft to look at, it is used for information that is 
              not as important, and it flows nicely with the primary and secondary colors.
            </p>
            <p>
              To make the ScansIt app interface clean, friendly and modern, Montserrat (a geometric sans serif font) is used.
              The rectangle shape is applied mainly in ScansIt app to represent solidity and stability, with rounded edges that 
              improve friendliness and prevent interrupt thoughts from sharp corners. The icons in ScansIt are geometric and have 
              obvious meanings in themselves to easily gain user understanding of the functions. 
            </p>
            <p>
              Finally, “S” from the name ScansIt has been used for a logo. As the app is mainly used for Link Light Rail, “S” becomes 
              the shape of the train that represents ScanIts app’s ability to access the schedule and scan for a ride.
            </p>
            <h3>Information Architecture</h3>
            <center>
              <img src="img/scansit/sitemap_transparent.png" alt="ScansIt Sitemap" className="ScansItSitemap"/>
            </center>
            <h3>Prototype</h3>
            <div className="prototype">
              {/* <a href="https://www.figma.com/proto/kqdCcVRZ4j7XyMqxuEreN8/ScansIt?node-id=1%3A7&scaling=scale-down" target="_blank" rel="noopener noreferrer">
                <img src="img/scansit/prototype.png" alt="ScansIt Prototype" className="ScansItPrototype"/>
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
                          <b>Loading</b>
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
                          <b>Login/Sign Up</b>
                          <p>for a security purpose of the app</p>
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
                          <b>Homepage</b>
                          <p>includes links to main focused features: login/sign up, digital card, schedule, setting</p>
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
                          <b>Digital Card</b>
                          <p>can be scanned to get into the station. Users have an option to connect to their existing cards</p>
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
                          <b>Card Information</b>
                          <p>contains card information with remaining card value</p>
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
                          <b>Add Value</b>
                          <p>with different available payment methods</p>
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
                          <b>Schedule</b>
                          <p>to check the train's up-to-date arriving and departing time from each station</p>
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
                          <b>Setting</b>
                          <p>notification, privacy and security customization with options for accessibility</p>
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
          </div>
        </div>
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