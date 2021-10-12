import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Navbar from '../Component/NavBar';
import Footnote from '../Component/Footnote';
import classNames from "classnames";
import {Link } from "react-router-dom";
import * as tocbot from 'tocbot';

import AOS from 'aos';
import 'aos/dist/aos.css';
import NavbarProject from '../Component/NavBarProject';

AOS.init();

export default class ProjectScansIt extends Component {
  render() {
    return (
      <div className="Projects">
        <NavbarProject/>
        <div>
          <center>
            <img src="img/scansit/scansit-overview.png" alt="ScansIt Overview" className="project-main-image"/>
          </center>
          <div className="project-overview" id="project-overview">
            <div className="project-info fivecol">
              <div />
              <div className="column1">
                <h1 className="project-title scansit-color">Project ScansIt</h1>
                <p>
                  A mobile application for a better experience of riding the Link Light Rail, including a
                  digital card for scanning into the station and real-time schedule. It is as simple as Schedule, 
                  Scan, and Ride.
                </p>
              </div>
              <div />
              <div className="column2">
                <p className="projects-description">
                  <br/>
                  <p><b>Role: </b>UX Researcher, UX/UI Designer<br/>
                  <b>Duration: </b>February - March 2020<br/>
                  <b>Other Teammates: </b>1 Project manager, 2 UX Researchers<br/>
                  <b>Tools: </b>Adobe Photoshop, Figma</p>
                </p>
              </div>
              <div />
            </div>
          </div>

          <div className="scansit-challenge-banner">
            <div className="fivecol paddingtop50" id="project-background">
              <div/>
              <div className="project-background-box">
                <div className="h-box scansit-color">Challenge</div>
                <blockquote>How can the city of Seattle improve 
                  local residents’ lives with digital solutions?
                </blockquote>
                <p>
                  Our team thought about Seattle’s transportation. Since transportation 
                  greatly impacts the traffic flow of the city and affects everyone’s 
                  lives, the visitors and local inhabitants of metropolitan cities command 
                  accessibility, reliability, convenience, and safety through a digital solution. 
                  The City of Seattle, as a center of technology and innovation, should also lead the 
                  way in this pursuit.
                </p>
              </div>
            </div>
          </div>

          <div className="project-body">
            <div className="project-contribution fivecol paddingtop50" id="project-contribution">
              <div/>
              <div>
                <h2 className="waparks-color">My Contributions</h2>
                <li>
                  Conducted <b>user research</b> and brainstormed with the team to come up with ideas for improving the problems
                  getting from interviews and surveys.
                </li>
                <li>Mainly contributed <b>UI design</b> and <b>user flow</b>.</li>
                <li>Fixed and <b>developed</b> the mockups based on comments after peer reviews.</li>
              </div>
              <div/>
              <div className="fivecol-image">
                <img src="img/scansit/flow2.png" alt="ScansIt Overview"/>
              </div>
            </div>

            <div className="project-process threecol paddingtop50" id="project-process">
              <div/>
              <div><h2 className="scansit-color">Design Process</h2></div>
            </div>
            <center><img src="img/scansit/scansit_process.png" alt="ScansIt Design Process"/></center>

            <center className="paddingtop50"><img src="img/scansit/scansit_research.png" alt="ScansIt Research"/></center>
            <div className="project-research threecol paddingtop50" id="project-research">
              <div/>
              <div>
                <h2 className="scansit-color">Research</h2>
                {/* <ul> */}
                  <li>Completed a <b>stakeholder analysis</b> of two identified stakeholders: the mayor (Jenny Durkan) and the users of Link Light Rail.</li>
                  <li>Did research about Seattle’s transportation <b>compared with other cities</b> in the United States.</li>
                  <li>Collected information that could be used for another phase of brainstorming.</li>
                  <li>Conducted <b>in-person interviews</b>.</li>
                  <li>Sent out the first <b>survey</b> to get the main scope of the problems from the riders.</li>
                {/* </ul> */}
              </div>
            </div>

            <div className="project-insight threecol paddingtop50" id="project-insight">
              <div/>
              <div>
                <h3>Insights</h3>
                <p>From the Link Light Rail’s riders (interviewees and survey takers):</p>
                <div className="scansit-project-box">
                  <b>1. Looking for more convenient ways to pay for fares</b>
                  <p>
                    People who have to reperchase the pass for each ride tend to be interested in having a new method
                    to save their time since the current existing methods to pay for fares are only
                  </p>
                  <ul>
                    <li className="paddingleft30">buying a one-way or round-trip ticket at the station.</li>
                    <li className="paddingleft30">using ORCA card, which is a stored-value card that works like cash or a pass.</li>
                    <li className="paddingleft30">using identification cards under institutions, for example, UW Husky card.</li>
                  </ul>
                </div>
                <br/>
                <div className="scansit-project-box">
                  <b>2. Seeing the Link schedules and know when the trains are arriving at and leaving the stations</b>
                  <p>
                    During the prime time, the riders need to plan for their travel to avoid unexpected situations that
                    might cause in wasting time or meney, the problem is no real-time schedule is currently available for them 
                    to check.
                  </p>
                </div>
              </div>
            </div>

            <div className="project-stakeholder threecol paddingtop50" id="project-stakeholder">
              <div/>
              <div>
                <h3>Stakeholder Analysis</h3>
                <div className="threecol-forbox">
                  <div className="scansit-project-box">
                    <b>1. Mayor</b>
                    <p>
                      Mayor Durkin’s perspective is considered continually as it influences the transportation strategy. 
                      This included <b>considering funding, policies in place, new potential policies and 
                      vision</b> of the City of Seattle and King County as a whole
                    </p>
                  </div>
                  <div/>
                  <div className="scansit-project-box">
                    <b>2. Users</b>
                    <p>
                      For the users, we identified that users wanted more ease of use in paying for fares. This meant making the card 
                      accessible in a way currently not available. Daily riders looking for <b>convenient and advanced technological solutions,
                      safety, reduction of stress, increased daily productivity and participation in reduced carbon footprint</b>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-competitive threecol paddingtop50" id="project-competitive">
              <div/>
              <div>
                <h3>Competitive Analysis</h3>
                <div className="competitive-scansit-text">
                  <div className="project-competitive">
                    <center><img src="img/scansit/scansit-competitive.png" alt="Competitive Analysis"/></center>
                  </div>
                  <ol>
                    <li><p><b>More convenient with the digital card option. </b>
                    — ScansIt app (on any device) can scan digitally to access the link.</p></li>
                    <li><p><b>Lower chance of getting lost or scammed. </b>
                    — Physical cards can easily be lost, stolen, and scammed, but on the app, only the user can access the card.</p></li>
                    <li><p><b>Accessing the link or other transits become faster. </b>
                    — As simple as scanning.</p></li>
                    <li><p><b>Does not ask for current location. </b>
                    — Unlike most other transit apps, ScansIt app does not need to ask for a user’s location, enhancing privacy and security.</p></li>
                  </ol>
                </div>
              </div>
            </div>
              
            {/* <div className="project-brainstorm" id="project-brainstorm">
              <h3>Research Summary</h3>
              <img src="img/scansit/scansit_brainstorm.png" alt="ScansIt Brainstorm"/>
            </div>

            <center className="paddingtop50">
              <div className="project-ideationimg inline">
                <img src="img/scansit/sketch.png" alt-="ScansIt Sketch"/>
                <img src="img/scansit/sketch2.png" alt-="ScansIt Sketch"/>
                <img src="img/scansit/sketch3.png" alt-="ScansIt Sketch"/>
              </div>
            </center> */}

            <div className="project-ideation threecol paddingtop50" id="project-ideation">
              <div/>
              <div>
                <h2 className="scansit-color">Ideation</h2>
                <h3>Brand Guidelines</h3>
              </div>
            </div>

            {/* <div className="project-initiative-epic" id="project-initiative-epic">
              <h3>Initiatives and Epics</h3>
              <div className="columns40-60">
                <img src="img/scansit/initiatives.png" alt="ScansIt Initiatives" className="initiatives"/>
                <img src="img/scansit/epics.png" alt="ScansIt Epics" className="epics"/>
              </div>
            </div>
            <div className="project-userstories" id="project-userstories">
              <h3>User Stories</h3>
              <img src="img/scansit/stories.png" alt="ScansIt Stories" className="stories"/>
            </div> */}

            {/* <div className="project-solution fourcol paddingtop50" id="project-solution">
              <div/>
              <div><h2>Solution</h2></div>
              <div>
                <p>
                  For our solution, we created ScansIt, which stands for <b>Scanning for Transit</b>. It is a simple and seamless 
                  digital card and scheduling app for your public transit needs.
                </p>
              </div>
            </div> */}

            <center><img src="img/scansit/brandguide.png" alt="ScansIt Brand Guidelines" className="ScansItGuide"/></center>

            <div className="threecol">
              <div/>
              <div className="scansit-project-box">
                <p>
                  I decided on using the primary colors of navy and yellow since they <b>mimic the current colors used by SoundTransit</b>. 
                  To demonstrate <b>individuality and uniqueness</b>, mint and coral are added to the branding design as supportive colors.
                </p>
                <p>
                  To make the ScansIt app interface <b>clean, friendly and modern</b>, Montserrat (a geometric sans serif font) is used.
                  The rectangle shape is applied mainly in ScansIt app to represent <b>solidity and stability</b>, with rounded edges that 
                  improve <b>friendliness</b> and prevent interrupt thoughts from sharp corners. The icons in ScansIt are geometric and have 
                  obvious meanings in themselves to easily gain user understanding of the functions. 
                </p>
                <p>
                  Finally, “S” from the name ScansIt has been used for a logo. As the app is mainly used for Link Light Rail, “S” becomes 
                  the shape of the train that represents ScanIts app’s ability to access the schedule and scan for a ride.
                </p>
              </div>
            </div>

            <div className="project-ia threecol paddingtop50" id="project-ia">
              <div/>
              <div>
                <h3>Information Architecture</h3>
                <center className="project-ia">
                  <a href="https://ploypil.in/img/scansit/ScansIt_IA2.jpg" target="_blank">
                    <img src="img/scansit/ScansIt_IA2.jpg" alt="ScansIt Information Architecture" className="scansit-ia"/>
                  </a>
                </center>
              </div>
            </div>
            <div className="project-final threecol paddingtop50" id="project-final">
              <div/>
              <div>
                <h3>Featured Functions</h3>
                <div className="scansit-project-box">
                  <p>
                    1. Homepage includes <b>links to main focused features</b>: login/sign up, digital card, schedule, setting.
                  </p>
                  <p>
                    2. Digital card can be <b>scanned to get into the station</b>. Users have an option to connect to their 
                    existing cards, there will be a page that contains card information with remaining card value and different 
                    available payment methods.
                  </p>
                  <p>
                    3. Schedule page is available to check the train's <b>up-to-date arriving and 
                    departing time</b> from each station.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="project-prototype threecol paddingtop50" id="project-prototype">
              <div/>
              <div>
                <h3>Prototype</h3>
                <div className="figma">
                <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FkqdCcVRZ4j7XyMqxuEreN8%2FScansIt%3Fnode-id%3D1%253A7%26scaling%3Dscale-down" allowfullscreen></iframe>
                </div>
              </div>
            </div>

            <div className="project-next threecol paddingtop150" id="project-next">
              <div/>
              <div>
                <h2 className="scansit-color">Next Steps</h2>
                <p className="scansit-project-box">
                  Since this project is a part of INFO 360: Design Methods class, we did not have a chance to build the real 
                  app and conduct <b>usability testing</b>. I would love to get the user’s comments and see how they interact with 
                  the app, so we can further develop it to better fit their needs. Also, if we have more time, I think we could 
                  look <b>more on accessibility</b> since now we only had some features for disabilities to opt-in and opt-out in the 
                  setting page. We can see that public transportation is being utilized by all groups of people; therefore, 
                  enhancing the ability to serve all their needs would benefit not only the user but the community as a whole too.
                </p>
              </div>
            </div>

            <div className="project-learn threecol paddingtop50" id="project-learn"> 
              <div/>
              <div>
                <h2 className="scansit-color">Lessons Learned</h2>
                <div className="threecol-forbox">
                  <div className="scansit-project-box">
                    <b>Insights lead to a solution.</b>
                    <p>
                      As we interviewed and conducted the surveys, I have seen various perspectives from the users. 
                      Some may like what already the Link has, some may not. The key is what problems they have faced 
                      rom their riding experience. From that point, I think to deeply understand and analyze the insights 
                      can even direct to the solution simply.
                    </p>
                  </div>
                  <div/>
                  <div className="scansit-project-box">
                    <b>Always ask for the team’s opinions.</b>
                    <p>
                      As I designed, I had been facing some indecisiveness and dissatisfaction with my own works. One thing 
                      I experienced from this project was “asking is learning”. To ask my teammates for comments, suggestions, 
                      or even questions they had on my design was the way I gained more ideas to improve. Also, even though 
                      we did not have a chance to do usability testing with the outsiders, my teammates provided good feedback 
                      when I let them play with the prototype. Their comments reflected things my design did well as well as what 
                      it lacked so that I could make it better.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
          </div>
          
          <div className="other-project twocolumns">
            <div className="col-left">
              <Link to = "/famapp">
                <p>Previous &lt; Fam App</p>
              </Link>
            </div>
            <div className="col-right">
              <Link to = "/cnc">
                <p>Next &gt; Code&amp;Craft Website Redesign Project</p>
              </Link>
            </div>
          </div>
        </div>
        <Footnote/>
      </div>
    );
  }
}

tocbot.init({
  // Where to render the table of contents.
  tocSelector: '.js-toc',
  // Where to grab the headings to build the table of contents.
  contentSelector: '.js-toc-content',
  // Which headings to grab inside of the contentSelector element.
  headingSelector: 'h1, h2, h3',
  // For headings inside relative or absolute positioned containers within content.
  hasInnerContainers: true,
});