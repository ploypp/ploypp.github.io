import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Navbar from '../Component/NavBar';
import Footnote from '../Component/Footnote';
import classNames from "classnames";
import {Link } from "react-router-dom";
import * as tocbot from 'tocbot';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

class ScrollItem extends React.Component {
  state = {
    isActive: false
  }
  
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  };
  
  handleScroll = () => {
    // const { top } = this.wrapRef.getBoundingClientRect();
    if (window.scrollY < 1250) {
      this.setState({ isActive: true });
    }
    if (window.scrollY >= 1250) {
      this.setState({ isActive: false });
    }
  }
  
  setWrapRef = ref => {
    this.wrapRef = ref;
  }
  
  render() {
    const { isActive } = this.state;
    return (
      <div
        className={`sidenav ${isActive && 'sidenav--active'}`}
        ref={this.setWrapRef}
        >
        {this.props.children}
      </div>
    )
  }
}

export default class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <Navbar />
        <div>
          <div className="project-overview" id="project-overview">
            <h1 className="project-title">Project ScansIt</h1>
            <div className="project-info twocolumns">
              <div className="column1">
                <p className="project-description">
                  A mobile application for a better experience of riding the Link Light Rail, including a
                  digital card for scanning into the station and real-time schedule. It is as simple as Schedule, 
                  Scan, and Ride.
                </p>
              </div>
              <div className="column2">
                <p><b>Role: </b>UX Researcher, UX/UI Designer</p>
                <p><b>Duration: </b>February - March 2020</p>
                <p><b>Other Teammates: </b>1 Project manager, 2 UX Researchers</p>
                <p><b>Tools: </b>Adobe Photoshop, Figma</p>
              </div>
            </div>
          </div>
          <center>
            <img src="img/scansit/scansit-overview.png" alt="ScansIt Overview" className="project-main-image"/>
          </center>
          <div className="row columns25-75">
            <div className="column1">
              <ScrollItem>
                  {/* <a href="#project-overview">Project Overview</a> */}
                  <a href="#project-overview">Project Overview</a>
                  <a href="#project-background">Background</a>
                  <a href="#project-contribution">My Contributions</a>
                  <a href="#project-process">Design Process</a>
                  <a href="#project-problem">Problem Statement</a>
                  <a href="#project-research">Research</a>
                  <a href="#project-insight">Insights</a>
                  <a href="#project-stakeholder">Stakeholder Analysis</a>
                  <a href="#project-competitive">Competitive Analysis</a>
                  {/* <a href="#project-stakeholder">Analysis</a> */}
                  {/* <a href="#project-brainstorm">Research Summary</a> */}
                  <a href="#project-ideation">Ideation</a>
                  {/* <a href="#project-initiative-epic">Initiatives and Epics</a>
                  <a href="#project-userstories">User Stories</a> */}
                  <a href="#project-solution">Solution</a>
                  <a href="#project-brandguide">Brand Guidelines</a>
                  <a href="#project-ia">Information Architecture</a>
                  <a href="#project-prototype">Prototype</a>
                  <a href="#project-next">Next Steps</a>
                  <a href="#project-learn">Lessons Learned</a>
              </ScrollItem>
            </div>
            <div className="project-body column2">
              <div className="project-background" id="project-background" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <h2>Background</h2>
                <p>
                  The ScansIt team was tasked with solving the following issue:
                </p>
                <blockquote>How can the city of Seattle improve 
                  local residents’ lives with digital solutions?
                </blockquote>
                <p>
                  My teammates and I began by thinking about different areas of interest that dealt with local government such as access to 
                  education, health & wellness, and transportation. After discussing all these topics we found a shared focus 
                  in transportation, specifically Sound Transit’s Light Rail system, since it is something that we have all used 
                  and know could use improvement. 
                </p>
              </div>
              <div className="project-contribution" id="project-contribution" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <h2>My Contributions</h2>
                <div className="list">
                  <li>
                    Conducted <b>user research</b> and brainstormed with the team to come up with ideas for improving the problems
                    getting from interviews and surveys.
                  </li>
                  <li>Mainly contributed <b>UI design</b> and <b>user flow</b>.</li>
                  <li>Fixed and <b>developed</b> the mockups based on comments after peer reviews.</li>
                </div>
              </div>
              <div className="project-process" id="project-process" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <h2>Design Process</h2>
                <img src="img/scansit/scansit_process.png" alt="ScansIt Design Process"/>
              </div>
              <div className="project-problem" id="project-problem" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <h2>Problem Statement</h2>
                <p>
                  Seattle is a forward-thinking, technologically advanced and environmentally influential city and 
                  its transportation systems should reflect that. It is something that residents, commuters, and visitors use. 
                  <b> Transportation greatly impacts the traffic flow of the city and affects everyone’s lives.</b>
                </p>
                <p>
                  The visitors and local inhabitants of metropolitan cities — with diverse transit system options — 
                  command <b>accessibility, reliability, convenience, and safety</b> through a digital commuter card solution. 
                  The City of Seattle, as a center of technology and innovation, should also lead the way in this pursuit.
                </p>
              </div>
              <div className="project-research" id="project-research" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <h2>Research</h2>
                <img src="img/scansit/scansit_research.png" alt="ScansIt Research"/>
                <br/><b>Research process: </b>
                <ul>
                  <li>Completed a <b>stakeholder analysis</b> of two identified stakeholders: the mayor (Jenny Durkan) and the users of Link Light Rail.</li>
                  <li>Did research about Seattle’s transportation <b>compared with other cities</b> in the United States.</li>
                  <li>Collected information that could be used for another phase of brainstorming.</li>
                  <li>Conducted <b>in-person interviews</b>.</li>
                  <li>Sent out the first <b>survey</b> to get the main scope of the problems from the riders.</li>
                </ul>
              </div>
              <div className="project-insight" id="project-insight" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <h3>Insights</h3>
                <p>From the Link Light Rail’s riders (interviewees and survey takers):</p>
                <b>#1 Looking for more convenient ways to pay for fares</b>
                <p>
                  People who have to reperchase the pass for each ride tend to be interested in having a new method
                  to save their time since the current existing methods to pay for fares are only
                </p>
                <ul>
                  <li className="paddingleft30">buying a one-way or round-trip ticket at the station.</li>
                  <li className="paddingleft30">using ORCA card, which is a stored-value card that works like cash or a pass.</li>
                  <li className="paddingleft30">using identification cards under institutions, for example, UW Husky card.</li>
                </ul>
                
                <b>
                  #2 Seeing the Link schedules and know when the trains are arriving at and leaving the stations
                </b>
                <p>
                  During the prime time, the riders need to plan for their travel to avoid unexpected situations that
                  might cause in wasting time or meney, the problem is no real-time schedule is currently available for them 
                  to check.
                </p>
              </div>
              <div className="project-stakeholder" id="project-stakeholder" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <h3>Stakeholder Analysis</h3>
                <b>The Mayor</b>
                <p>
                  Mayor Durkin’s perspective is considered continually as it influences the transportation strategy. 
                  This included <b>considering funding, policies in place, new potential policies and 
                  vision</b> of the City of Seattle and King County as a whole
                </p>
                <b>The Users</b>
                <p>
                  For the users, we identified that users wanted more ease of use in paying for fares. This meant making the card 
                  accessible in a way currently not available. Daily riders looking for <b>convenient and advanced technological solutions,
                  safety, reduction of stress, increased daily productivity and participation in reduced carbon footprint</b>.
                </p>
              </div>
              <div className="project-competitive" id="project-competitive" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <h3>Competitive Analysis</h3>
                <img src="img/scansit/competitive1.png" alt="Competitive Analysis"/>
                <div className="competitive-scansit-text">
                  <ol>
                    <li><b>More convenient with the digital card option.</b></li>
                    <p>ScansIt app (on any device) can scan digitally to access the link.</p>
                    <li><b>Lower chance of getting lost or scammed.</b></li>
                    <p>Physical cards can easily be lost, stolen, and scammed — but on the app, only the user can access the card.</p>
                    <li><b>Accessing the link or other transits become faster.</b></li>
                    <p>As simple as scanning.</p>
                    <li><b>Does not ask for current location.</b></li>
                    <p>Unlike most other transit apps, ScansIt app does not need to ask for a user’s location, enhancing privacy and security.</p>
                  </ol>
                </div>
              </div>
              {/* <div className="project-brainstorm" id="project-brainstorm">
                <h3>Research Summary</h3>
                <img src="img/scansit/scansit_brainstorm.png" alt="ScansIt Brainstorm"/>
              </div> */}
              <div className="project-ideation" id="project-ideation" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <h2>Ideation</h2>
                <div className="inline">
                  <img src="img/scansit/sketch.png" alt-="ScansIt Sketch"/>
                  <img src="img/scansit/sketch2.png" alt-="ScansIt Sketch"/>
                  <img src="img/scansit/sketch3.png" alt-="ScansIt Sketch"/>
                </div>
                <p>
                My teammates and I did rapid ideation to roughly design the <b>user flow</b>. The goal was to provide our targeted users with 
                the most <b>effective solution</b> where combined <b>all necessary features</b> for riding the Link in one place. From 
                that point, we all agreed on making it a mobile application since the research team from Statista said that 
                the number of people owning smartphones is continuing to increase. Therefore, this choice was the best option to promote accessibility.
                </p>
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
              <div className="project-solution" id="project-solution" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <h2>Solution</h2>
                <p>
                  For our solution, we created ScansIt, which stands for <b>Scanning for Transit</b>. It is a simple and seamless 
                  digital card and scheduling app for your public transit needs.
                </p>
              </div>
              <div className="project-brandguide" id="project-brandguide" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <h3>Brand Guidelines</h3>
                <img src="img/scansit/brandguide.png" alt="ScansIt Brand Guidelines" className="ScansItGuide"/>
                <p>
                  Since I was in charge of the designing process, when I thought about the visual guidelines, I decided on using 
                  the primary colors of navy and yellow since they <b>mimic the current colors used by SoundTransit</b>. 
                  To demonstrate <b>individuality and uniqueness</b>, mint and coral are added to the branding design as supportive colors. 
                  The grayscale colors were used to signify inactive or deactivated functions. Since gray is not a very eye catching 
                  color, but soft to look at, it is used for information that is not as important, and it flows nicely with the 
                  primary and secondary colors.
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
              <div className="project-ia" id="project-ia" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <h3>Information Architecture</h3>
                <a href="https://ploypil.in/img/scansit/ScansIt_IA2.jpg" target="_blank">
                  <img src="img/scansit/ScansIt_IA2.jpg" alt="ScansIt Information Architecture" className="ScansItSitemap "/>
                </a>
              </div>
              <div className="project-final" id="project-final" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <h3>Featured Functions</h3>
                <div className="columns35-65">
                  <div className="column1">
                    <img src="img/scansit/3_homepage_2.png" alt="" className="ScansIt Homepage"/>
                  </div>
                  <div className="column2">
                    <p>Homepage includes <b>links to main focused features</b>: login/sign up, digital card, schedule, setting.</p>
                  </div>
                </div>
                <div className="columns35-65">
                  <div className="column1">
                    <img src="img/scansit/4_digital_card_front.png" alt="" className="ScansIt Digital Card"/>
                  </div>
                  <div className="column2">
                    <p>
                      Digital card can be <b>scanned to get into the station</b>. Users have an option to connect to their existing cards,
                      there will be a page that contains card information with remaining card value and different available payment methods.
                    </p>
                  </div>
                </div>
                <div className="columns35-65">
                  <div className="column1">
                    <img src="img/scansit/7_schedule_dropdown.png" alt="" className="ScansIt Schedule"/>
                  </div>
                  <div className="column2">
                    <p>Schedule page is available to check the train's <b>up-to-date arriving and departing time</b> from each station.</p>
                  </div>
                </div>
              </div>
              <div className="project-prototype" id="project-prototype" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <h3>Prototype</h3>
                <div className="figma">
                  <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FkqdCcVRZ4j7XyMqxuEreN8%2FScansIt%3Fnode-id%3D1%253A7%26scaling%3Dscale-down" allowfullscreen></iframe>
                </div>
              </div>
              <div className="project-next" id="project-next" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <h2>Next Steps</h2>
                <p>
                  Since this project is a part of INFO 360: Design Methods class, we did not have a chance to build the real 
                  app and conduct <b>usability testing</b>. I would love to get the user’s comments and see how they interact with 
                  the app, so we can further develop it to better fit their needs. Also, if we have more time, I think we could 
                  look <b>more on accessibility</b> since now we only had some features for disabilities to opt-in and opt-out in the 
                  setting page. We can see that public transportation is being utilized by all groups of people; therefore, 
                  enhancing the ability to serve all their needs would benefit not only the user but the community as a whole too.
                </p>
              </div>
              <div className="project-learn" id="project-learn" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true"> 
                <h2>Lessons Learned</h2>
                <b>Insights lead to a solution.</b>
                <p>
                  As we interviewed and conducted the surveys, I have seen various perspectives from the users. 
                  Some may like what already the Link has, some may not. The key is what problems they have faced 
                  rom their riding experience. From that point, I think to deeply understand and analyze the insights 
                  can even direct to the solution simply.
                </p>
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
          <div className="other-project twocolums">
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