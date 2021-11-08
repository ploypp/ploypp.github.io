import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import NavbarProject from '../Component/NavBarProject';
import Footnote from '../Component/Footnote';
import classNames from "classnames";
import {Link } from "react-router-dom";
import * as tocbot from 'tocbot';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default class ProjectLink extends Component {
  render() {
    return (
      <div className="Projects">
        <NavbarProject/>
        <div>
          <div className="link-banner banner"/>
          <div className="wrapper">
            <div className="col2-start col7-end">
              <h1 className="project-title">Link</h1>
            </div>
            <div className="col2-start col5-end">
              <p>
                <span><b>ROLE:</b></span>&nbsp; User Experience and Interface Designer<br/>
                <span><b>OTHER TEAMMATE:</b></span>&nbsp; 1 User Experience Designer<br/>
              </p>
            </div>
            <div className="col5-start col7-end">
              <p>
                <span><b>DURATION:</b></span>&nbsp; 7 Days<br/>
                <span><b>TOOLS:</b></span>&nbsp; Adobe XD, Adobe Illustrator, Miro
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>00. OVERVIEW</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                Link is an app to help seniors with or without disabilities keep track of smart home devices.
              </h2>
              <p>
                I designed the Link mobile app as a part of the College + Ring Creative Jam.
              </p>
            </div>
            <div className="col3-start">
              <h2>Challenge</h2>
            </div>
            <div className="col4-start col7-end">
              <p>
                The challenge is to provide peace of mind and help people install, operate, or share devices and information to improve their surveillance, communication, temperature, and entertainment around the home and their neighborhood. Design an inclusive third-party mobile app for a specific persona with special needs to help bridge the technology gap.
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>01. USERS</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                Make it easier for elderly
              </h2>
              <p>
                My teammate and I started by defining the scope of targeted user groups to be  senior citizens and disabled elderly. Since many elderly are living by themselves and may not be familiar with smart home technology, we decided to focus on usability and functionality to provide them with easy and accessible experiences through our app.
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>02. RESEARCH</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                Competitive Analysis
              </h2>
              <p>
                Because of the time constraint, I conducted a competitive analysis to gain insights about common features and feedback from the users of current smart home apps in the market.
              </p>
              <img src="img/link/link-competitive-analysis.png" alt="Link Competitive Analysis"/>              
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>03. IDEATION</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                We brainstormed ideas for the app features and listed smart home devices that would be compatible.
              </h2>
              <p>
                Firstly, we decided to think about necessary features that our app should have, mainly considering desirability and accessibility. Our selected features include the smartboard that shows devices’ current status, devices malfunction alert, electricity usage, voice commands, and smart devices connector.
              </p>
            </div>
            <div className="col2-start col5-end">
              <img src="img/link/ideation-features.jpg" alt="Ideation for Features"/>
            </div>
            <div className="col5-start col8-end">
              <img src="img/link/ideation-devices.jpg" alt="Ideation for Devices"/>
            </div>
            <div className="col3-start col7-end">
              <p>
                After that, I sketched the user interface of the app with all the functions above. The sketches helped me see a rough picture of how the app should look like. My teammate and I also critiqued the sketches together to make them more complete and look clearer for the next step, design.
              </p>
              <img src="img/link/sketches.jpg" alt="Link Interface Design Sketches"/>
              <center><p className="img-caption">My sketch for Link interface design</p></center>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>04. DESIGN</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                Brand Guideline
              </h2>
              <img src="img/link/link-brand-guide.png" alt="Link Brand Guidelines"/>
              <p>
                For the primary and secondary colors used in the app, I decided to use the combination of beige and navy with white as a supportive color. The contrast of beige and navy makes texts and buttons easily readable, and these two colors also work well with both light and dark themes.
              </p>
              <p>
                The font I chose for the whole design is SF Pro Text. I decided to go with Sans Serif font because it is easier to read on a phone screen.
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>05. SOLUTION</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                Play with the prototype
              </h2>
            </div>
            <div className="col3-start col7-end">
              <div className="xd">
                <iframe src="https://xd.adobe.com/embed/d9712a9b-03b4-43a5-b238-2b92897758da-8c22/" frameborder="0" allowfullscreen/>
              </div>
              {/* <p>
                
              </p> */}
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>06. NEXT STEP</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                Testing it with users
              </h2>
              <p>
                If I had more time, I would do the usability testing with a group of targeted users to gain more insights and feedback. Because of a huge age gap, I think I might miss some points that could be important for an experience of the elderly who will be using this app.
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>07. REFLECTION</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                Working under time constraints helped me gain more soft skills.
              </h2>
              <p>
                Because I only had a week to finish this project, I carefully looked at each little detail before moving to the next step because it would waste more time to come back and fix anything. I also gained problem-solving and decision-making skills from working independently on the interactive prototype. However, having a teammate who I could ask for opinions also benefited in finalizing the design choices.
              </p>
            </div>
          </div>
        </div>
        <div className="previous-next">
          <div className="previous">
            <Link to = "/famapp">
              <p>previous</p>
              <h1 className="home-project-title">&#10229; Fam App</h1>
            </Link>
          </div>
          <div className="next">
            <Link to = "/scansit">
              <p>next</p>
              <h1 className="home-project-title">ScansIt &#10230;</h1>
            </Link>
          </div>
        </div>
        <Footnote/>
      </div>
    );
  }
}