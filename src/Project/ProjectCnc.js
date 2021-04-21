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

export default class ProjectCnc extends Component {
  render() {
    return (
      <div className="Projects">
        <Navbar />
        <div>
          <div className="project-overview" id="project-overview">
            <div className="project-info fourcol">
              <div/>
              <h1 className="project-title">Code&amp;Craft Website Redesign Project</h1>
              <div/>
              <div/>
            </div>
            <div className="project-info fourcol">
              <div/>
              <div className="column1">
                <p><b>Role: </b>UX/UI Designer</p>
                <p><b>Duration: </b>July - August 2019</p>
                <p><b>Other Teammates: </b> 1 Developer, 2 Account Executives</p>
                <p><b>Tools: </b>Adobe Photoshop, Adobe XD</p>
              </div>
              <div className="column2">
                <p className="projects-description">
                  The new design of Thailand's growing digital product developer company — Code&Craft.
                  Introduce to you the more creative, functional and promising site to learn more about Code&Craft's
                  all-rounded services with its vision to combine technology, art and humanity.
                </p>
              </div>
            </div>
          </div>
          <center>
            <img src="img/cnc/vision.png" alt="Code&amp;Craft's Vision" className="project-main-image paddingtop150"/>
          </center>

            <div className="project-body">
              <div className="project-background fourcol paddingtop150" id="project-background" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <div/>
                <div><h2>Background</h2></div>
                <div>
                  <p>
                    During my internship at Rabbit Digital Group, I was put into the Code&amp;Craft team, which dealt with digital 
                    experience, including website and mobile application design and development, user experience (UX), user 
                    interface (UI), usability research, search engine optimization (SEO), and e-commerce service. The other interns 
                    and I were tasked with <b>redesigning the Code&amp;Craft website</b> to fulfill the following objectives:
                  </p>
                  {/* <ul className="inlineblock"> */}
                    <li className="paddingright100">Easy to use</li>
                    <li className="paddingright100">Create a new experience</li>
                  {/* </ul> */}
                  {/* <ul className="inlineblock"> */}
                    <li className="paddingright100">Good UX/UI</li>
                    <li className="paddingright100">Better SEO</li>
                  {/* </ul> */}
                </div>
              </div>

              <div className="project-contribution fourcol paddingtop150" id="project-contribution" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <div/>
                <div><h2>My Contributions</h2></div>
                <div className="list">
                  <li><b>Analyzed</b> the old version of the website.</li>
                  <li>Created <b>storyboard</b> and <b>user flow</b>.</li>
                  <li><b>Designed</b> wireframes and mockups</li>
                  <li>Gave a <b>presentation</b> to the managing director and the team.</li>
                </div>
              </div>
              <div className="project-process fourcol paddingtop150" id="project-process" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <div/>
                <div><h2>Design Process</h2></div>
              </div>
              <center><img src="img/cnc/cnc_process.png" alt="Code&amp;Craft Design Process"/></center>

              <div className="project-problem fourcol paddingtop150" id="project-problem" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <div/>
                <div><h2>Problem Statement</h2></div>
                <div>
                  <p>
                    Code&amp;Craft is a digital experience agency that assists its clients to provide the best for their business. 
                    With its goal to create seamless digital assets experience and effective performance using strategy, 
                    design principle and cutting-edge technology, its <b>website is the main entrance</b>. To <b>redesign</b> the website is 
                    the task we needed to accomplish to help Code&amp;Craft <b>gain new clients as well as ensure its current clients 
                    to stay</b>. As there are other digital experience companies outside, we need to make Code&amp;Craft <b>outstanding</b> and 
                    have triumphed over the competitors.
                  </p>
                </div>
              </div>

              {/* <center className="paddingtop150"><img src="img/scansit/scansit_research.png" alt="ScansIt Research"/></center> */}
              <div className="project-research fourcol paddingtop150" id="project-research" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <div/>
                <div><h2>Research</h2></div>
                <div>
                  <p>
                    I started the research by <b>visiting the current version</b> of the <a href="http://codeandcrafts.com/" target="_blank"><b>Code&Craft website</b></a> and 
                    critiquing the problems I saw while playing with it. Apart from that, I also <b>interviewed the senior 
                    designer</b> who had worked on designing the website to understand his idea before revamping it.<br/>
                    I found some problems as follows:
                  </p>
                </div>
              </div>
              <div className="padding-center">
                <ol className="web-analyze">
                  <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                    <li className="paddingtop50"><b>Single-paged</b></li>
                    <img src="img/cnc/cnc1.png" alt=""/>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                    <li className="paddingtop50"><b>No details for works</b></li>
                    <img src="img/cnc/cnc2.png" alt=""/>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                    <li className="paddingtop50"><b>No information in "About us"</b></li>
                    <img src="img/cnc/cnc3.png" alt=""/>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                    <li className="paddingtop50"><b>Not so functional map and contact information</b></li>
                    <img src="img/cnc/cnc4.png" alt=""/>
                  </div>
                </ol>
              </div>

              <div className="project-insight fourcol paddingtop150" id="project-insight" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <div/>
                <div><h3>Insights</h3></div>
                <div>
                  <p>From the interview, I discovered initial ideas from the designer.</p>
                  
                  <p>
                    1. The idea of <b>astronaut</b> was used as it related to the identity of Rabbit Digital Group. For clarification, 
                    Rabbit Digital Group was originally built from the company called Rabbit’s Tale, which served the creative 
                    marketing solutions and has the logo of a moon rabbit. Thus, the astronaut had been chosen to represent 
                    the media to the moon.
                  </p>
                  <p>
                    2. The <b>colors</b> used on the website were from Code&amp;Craft’s <b>corporate identity</b>, with the primary color being 
                    dodger blue and secondary colors being black and white.
                  </p>
                  <p>3. <b>Simplicity</b> was the key element.</p>
                </div>
              </div>

              {/* <div className="project-stakeholder fourcol paddingtop150" id="project-stakeholder" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <div/>
                <div><h3>Stakeholder Analysis</h3></div>
                <div>
                  <b>1. Mayor</b>
                  <p>
                    Mayor Durkin’s perspective is considered continually as it influences the transportation strategy. 
                    This included <b>considering funding, policies in place, new potential policies and 
                    vision</b> of the City of Seattle and King County as a whole
                  </p>
                  <b>2. Users</b>
                  <p>
                    For the users, we identified that users wanted more ease of use in paying for fares. This meant making the card 
                    accessible in a way currently not available. Daily riders looking for <b>convenient and advanced technological solutions,
                    safety, reduction of stress, increased daily productivity and participation in reduced carbon footprint</b>.
                  </p>
                </div>
              </div> */}

              {/* <div className="project-competitive">
                <center className="paddingtop150"><img src="img/scansit/competitive1.png" alt="Competitive Analysis"/></center>
              </div>
              <div className="project-competitive fourcol paddingtop50" id="project-competitive" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <div/>
                <div><h3>Competitive Analysis</h3></div>
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
               */}
              {/* <div className="project-brainstorm" id="project-brainstorm">
                <h3>Research Summary</h3>
                <img src="img/scansit/scansit_brainstorm.png" alt="ScansIt Brainstorm"/>
              </div> */}

              <div className="project-ideation fourcol paddingtop50" id="project-ideation" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <div/>
                <div><h2>Ideation</h2></div>
              </div>

              <div className="project-ideation fourcol paddingtop50" id="project-ideation" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <div/>
                <div><h3>Storyboarding</h3></div>
              </div>
              <center>
                <div>
                  <img src="img/cnc/storyboard.png" alt="storyboard"/>
                </div>
              </center>

              <div className="project-ideation fourcol paddingtop50" id="project-ideation" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <div/>
                <div><h3>Sitemap</h3></div>
              </div>
              <center>
                <div>
                  <img src="img/cnc/sitemap2.png" alt="ScansIt Information Architecture" className="CnCSitemap"/>
                </div>
              </center>

              <div className="project-ideation fourcol paddingtop50" id="project-ideation" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <div/>
                <div><h3>Sketch</h3></div>
                <div>
                  <p>
                    As I had a chance to interview the designer who designed the current version of Code&amp;Craft website, 
                    I saw that the idea of astronaut and the space were interesting, Therefore, I decided to play with it. 
                    Instead of being only an astronaut, the new design I sketched had a concept of <b>Space Travel</b>, which each 
                    team portrayed as a different machine to bring Code&amp;Craft to the moon.
                  </p>
                </div>
              </div>
              <center className="paddingtop50">
                <div className="inline sketch">
                  <img src="img/cnc/sketch1-1.png" alt-="Code&amp;Craft Sketch"/>
                  <img src="img/cnc/sketch1-2.png" alt-="Code&amp;Craft Sketch"/>
                  <img src="img/cnc/sketch1-3.png" alt-="Code&amp;Craft Sketch"/>
                </div>
              </center>

              <div className="padding-center" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <h3>Prototype 1</h3>
                <div className="web-box">
                  <div className="wireframe">
                    <img src="img/cnc/wireframe1.jpg" alt="Code&amp;Craft 1st prototype"/>
                  </div>
                  <div className="scroll-box sb1">
                    <img src="img/cnc/wireframe1.jpg" alt="Code&amp;Craft 1st prototype"/>
                  </div>
                </div>
                <p className="paddingtop50">
                  When I designed this first prototype, I chose to maintain a lot of features and the functionality that 
                  Code&amp;Craft currently had in their website and select the primary font to mimic the coding font to 
                  display main services of the company. I changed the design from single-paged to multi-paged by adding
                  <i> About Us</i> and <i>Contact</i>, but since we had limited time to work on this project, we were expected 
                  to finish only the homepage. For the visualization, I mainly used line stroke icons to represent the services 
                  Code&amp;Craft provides.
                </p>
              </div>

              <div className="project-iteration fourcol paddingtop50" id="project-iteration1" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <div/>
                <div>
                  <h3>Iteration 1</h3>
                </div>
                <div>
                  <p>
                    After doing usability testing and review with the team and some of Code&amp;Craft employees, 
                    we got the feedback as following:
                  </p>
                  {/* <ul> */}
                    <li>Still over scrolling.</li>
                    <li>Not so interesting UI.</li>
                    <li>How does it differ from the current version?</li>
                  {/* </ul> */}
                  <p>
                    I then brainstormed with the team and began to work on the second prototype, in which we added 
                    more functions to the website.
                  </p>
                </div>
              </div>

              <div className="padding-center" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <h3>Prototype 2</h3>
                <div className="web-box">
                  <div className="wireframe">
                    <img src="img/cnc/wireframe2.jpg" alt="Code&amp;Craft 2nd prototype"/>
                  </div>
                  <div className="scroll-box sb2">
                    <img src="img/cnc/wireframe2.jpg" alt="Code&amp;Craft 2nd prototype"/>
                  </div>
                </div>
                <p className="paddingtop50">
                  As I worked on this second prototype, I added more pages for each section, including <i>Services, Works, Blog, About Us</i>
                  <i>, and Contact</i> as well as provided an option to change language since 
                  the main clients are Thai companies that have their goal to grow the business beyond borders. I also changed 
                  the services section on the homepage to show just one of all services at a time to solve an over-scrolling issue.
                </p>
              </div>

              <div className="project-iteration fourcol paddingtop50" id="project-iteration2" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <div/>
                <div>
                  <h3>Iteration 2</h3>
                </div>
                <div>
                  <p>
                    As same as for the first prototype, we also did usability testing and reviewed. We then got more feedback as following:
                  </p>
                  {/* <ul> */}
                    <li>Does not have a lot of changes.</li>
                    <li>Why choose line stroke icons?</li>
                    <li>The secondary color looks more outstanding than the primary one.</li>
                  {/* </ul> */}
                  <p>
                    After getting feedback, I deeply thought about the usability and the visual attraction of the prototype once 
                    again, and I decided to redesign all of it.
                  </p>
                  <p>
                    One primary reason was that I did more competitive analysis of the other companies that had done similar job 
                    as Code&amp;Craft. I found that most of their websites contained simple graphics with a clean template. I 
                    consulted with the team, and we agreed to start designing again from the beginning with more research. Therefore, 
                    we had our third prototype being totally different from the previous one.
                  </p>
                </div>
              </div>

              <div className="padding-center" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <h3>Prototype 3</h3>
                <div className="web-box">
                  <div className="wireframe">
                    <img src="img/cnc/wireframe3.jpg" alt="Code&amp;Craft 3rd prototype"/>
                  </div>
                  <div className="scroll-box sb3">
                    <img src="img/cnc/wireframe3.jpg" alt="Code&amp;Craft 3rd prototype"/>
                  </div>
                </div>
                <p className="paddingtop50">
                  I had an idea about using circles as the main theme when I looked at the objectivity of the company to combine 
                  technology, art and humanity within every digital product created. Since Code&amp;Craft describes itself as a 
                  digital experience agency that provides all-rounded services, circles could be used as a visual element to 
                  illustrate that. I also included messages along the page to interact with users and make them feel engaged.
                </p>
              </div>

              <div className="project-iteration fourcol paddingtop50" id="project-iteration3" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <div/>
                <div>
                  <h3>Iteration 3</h3>
                </div>
                <div>
                  <p>Feedback we got from usability testing and reviewed for our third prototype includes:</p>
                  {/* <ul> */}
                    <li>Better UI.</li>
                    <li>Customers only see one service.</li>
                    <li>Why change the old concept to this concept?</li>
                  {/* </ul> */}
                  <p>
                    Before the pitching day, I collaborated with the team and fixed the last design to solve problems we received 
                    from our users. We reviewed the initial objectives and decided to remove <i>Blog</i> section as it did not highly 
                    fulfill our main goal.
                  </p>
                </div>
              </div>
              
              <div className="project-brandguide fourcol paddingtop150" id="project-brandguide" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <div/>
                <div><h3>Brand Guidelines</h3></div>
              </div>
              <center className="solution-intro paddingtop50 padding-center">
                <img src="img/cnc/moodboard.jpg" alt="Code&amp;Craft Moodboard" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true"/>
                <img src="img/cnc/photography.jpg" alt="Code&amp;Craft Photography Guide" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true"/>
                <img src="img/cnc/font.jpg" alt="Code&amp;Craft Font Guide" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true"/>
              </center>

              <div className="project-solution fourcol paddingtop150" id="project-solution" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <div/>
                <div className="paddingbottom100"><h2>Final Solution</h2></div>
                <div>
                  <p>
                    Then it came to the final solution. My idea was to follow the animated circle throughout the site. 
                    I also redesigned <i>Services</i> as when users scroll down, the small circle will move around the 
                    bigger one and completely guide Code&amp;Craft clients to meet all services we have.
                  </p>
                </div>
              </div>
              <div className="web-box paddingtop50 padding-center">
                <div className="wireframe">
                  <img src="img/cnc/wireframe4.jpg" alt="Code&amp;Craft 4th prototype"/>
                </div>
                <div className="scroll-box sb4">
                  <img src="img/cnc/wireframe4.jpg" alt="Code&amp;Craft 4th prototype"/>
                </div>
              </div>

              <div className="project-next fourcol paddingtop150" id="project-next" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
                <div/>
                <div><h2>Next Steps</h2></div>
                <div>
                <p>
                  The presentation went well and there were some comments we could bring to evaluate to improve our web, 
                  such as a back-to-top button, <b>considering even more on competitive analysis</b>; as well as improve on our 
                  presentation such as adding the old concept and led to why we changed it to the new concept. Due to the 
                  limited time, we only finished the landing page of the desktop version. However, we would like to <b>develop 
                  the other pages</b> including Services, Works, About Us, and Contact; on which we already brainstormed some ideas, 
                  as well as conduct an <b>interactive prototype</b> with animation that can clearly demonstrate our idea. Moreover, 
                  to enhance the <b>accessibility</b>, we would like to work on the <b>mobile version</b> of the website as well.
                </p>
                </div>
              </div>

              <div className="project-learn fourcol paddingtop150" id="project-learn" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true"> 
                <div/>
                <div><h2>Lessons Learned</h2></div>
                <div>
                  <b>Iteration is the key.</b>
                  <p>
                    Design is not only about moving forward but also about coming back to look at what we have and see 
                    if we can improve it. I have learned a lot from this project that we can always make the design better 
                    by looking at it over and over again. Even though it may seem like we are standing at the same place, 
                    we have got to know the place more. I did not feel bad making many new designs because I see that it 
                    has been improved every time, and I like the process of making improvement.
                  </p>
                  <b>Negative feedback always has a positive side.</b>
                  <p>
                    As this work was assigned within the real-business environment, I felt pressured at first. Even though it 
                    was only a project for interns, the commentators gave us genuine feedback to make us work better. Sometimes 
                    those comments were not good with our feelings, but they were good for improving. When I heard the 
                    critiques, I tried not to overthink about the bad side of them. Rather, I took them to be the new standard 
                    for my new design, and I can see in the end that I have grown and learned a lot from them.
                  </p>
                </div>
              </div>
            {/* </div> */}
          </div>

          <div className="other-project twocolumns">
            <div className="col-left">
              <Link to = "/scansit">
                <p>Previous &lt; Project ScansIt</p>
              </Link>
            </div>
            <div className="col-right">
              <Link to = "/cbc">
                <p>Next &gt; Cascade Bicycle Club Brand Book</p>
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