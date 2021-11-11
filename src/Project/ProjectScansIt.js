import React, {Component} from 'react';
import Footnote from '../Component/Footnote';
import {Link } from "react-router-dom";

import NavbarProject from '../Component/NavBarProject';

export default class ProjectScansIt extends Component {
  componentDidMount(){
    document.title = "ScansIt | Ploy Pruekcharoen"
  }
  render() {
    return (
      <div className="Projects">
        <NavbarProject/>
        <div>
          <div className="scansit-banner banner"/>
          <div className="wrapper">
            <div className="col2-start col7-end">
              <h1 className="project-title">ScansIt</h1>
            </div>
            <div className="col2-start col5-end">
              <p>
                <span><b>ROLE:</b></span>&nbsp; Product Designer and Researcher<br/>
                <span><b>OTHER TEAMMATES:</b></span>&nbsp; 1 Project manager, 2 UX Researchers<br/>
              </p>
            </div>
            <div className="col5-start col7-end">
              <p>
                <span><b>DURATION:</b></span>&nbsp; February - March 2020<br/>
                <span><b>TOOLS:</b></span>&nbsp; Adobe Photoshop, Figma, Miro, Trello
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>00. OVERVIEW</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                ScansIt is a transit app for a better experience of riding the Link Light Rail.
              </h2>
            </div>
            <div className="col3-start col5-end">
              <h2 className="headline">
                Challenge
              </h2>
            </div>
            <div className="col5-start col8-end">
              <p>
                How can the city of Seattle improve local residents’ lives with digital solutions?
              </p>
            </div>
            <div className="col3-start col5-end">
              <h2>Problem</h2>
            </div>
            <div className="col5-start col8-end">
              <p>
                A complex public transportation system requires people to spend more time, which could lead to other problems, especially during rush hours. While many other metropolitan cities already have a digital solution for transit systems that is accessible, reliable, convenient, and safe, Seattle’s transportation system is still far behind.
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>01. USERS &amp; STAKEHOLDERS</span>
            </div>
            <div className="col3-start col5-end">
              <h2 className="headline">
                Primary Stakeholders:
              </h2>
            </div>
            <div className="col5-start col8-end">
             <ul>
               <li>The mayor (Jenny Durkan) wants to show that Seattle is an innovative and booming city.</li>
               <li>Sound Transit and its employees.</li>
             </ul>
            </div>
            <div className="col3-start col5-end">
              <h2 className="headline">
                Primary Users:
              </h2>
            </div>
            <div className="col5-start col8-end">
             <ul>
               <li>Link Light Rail commuters.</li>
               <li>Visitors.</li>
             </ul>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>02. RESEARCH</span>
            </div>
            <div className="col3-start col7-end">
              <p>
                We sent out two surveys to gain more insights on the users’ need for Link Light Rail improvement. The first survey was intended to collect information about problems that the riders have experienced, while the second survey asked for potential features that the Link mobile app should have.
              </p>
              <h2 className="headline">
                From the survey results, we found that...
              </h2>
              <ol>
                <li>Transit riders are looking for more convenient ways to pay for fares.</li>
                <li>Transit riders want to see Link Light Rail's real-time schedule.</li>
              </ol>
              <p>
                From these insights, we created user stories and epics to brainstorm the features for our app.
              </p>
              <img src="img/scansit/stories-epics.png" alt="ScansIt User Stories and Epics"/>              
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>03. DEFINING</span>
            </div>
            <div className="col3-start col5-end">
              <h2 className="headline">
                Design Requirements
              </h2>
            </div>
            <div className="col5-start col8-end">
              <ul>
                <li>Option for using a digital card to enter the station, with the ability to add payment.</li>
                <li>Update real-time schedule when the train is departing or arriving at the selected station.</li>
                <li>Accessibility for all types of users.</li>
              </ul>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>04. ANALYSIS</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                Competitive Analysis
              </h2>
              <p>
                We conducted a competitive analysis to compare ScansIt with other travel and transportation apps in the market.
              </p>
              <img src="img/scansit/scansit-competitive-analysis.png" alt="ScansIt Competitive Analysis"/>
              <br/>
            </div>
            <div className="col3-start col5-end">
              <h2 className="headline">
                Competitive Analysis Findings
              </h2>
            </div>
            <div className="col5-start col8-end">
              <ol>
                <li>More convenient with the digital card option. — ScansIt app (on any device) can scan digitally to access the link.</li>
                <li>Lower chance of getting lost or scammed. — Physical cards can easily be lost, stolen, and scammed, but on the app, only the user can access the card.</li>
                <li>Accessing the link or other transits becomes faster — as simple as scanning.</li>
                <li>Does not ask for the current location. — Unlike most other transit apps, the ScansIt app does not need to ask for a user’s location, enhancing privacy and security.</li>
              </ol>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>05. DESIGN</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                Brand Guidelines
              </h2>
              <img src="img/scansit/scansit-brand-guide.png" alt="ScansIt Brand Guidelines"/>
              <p>
                As a design lead, I decided on using the primary colors of navy and yellow since they mimic the current colors used by SoundTransit. To demonstrate individuality and uniqueness, mint and coral are added to the branding design as supportive colors.
              </p>
              <p>
                To make the ScansIt app interface clean, friendly, and modern, Montserrat (a geometric sans serif font) is used. The rectangle shape is applied mainly in the ScansIt app to represent solidity and stability, with rounded edges that improve friendliness and prevent interrupting thoughts from sharp corners. The icons in ScansIt are geometric and have obvious meanings in themselves to easily gain user understanding of the functions.
              </p>
              <p>
                Finally, “S” from the name ScansIt has been used for a logo. As the app is mainly used for Link Light Rail, “S” becomes the shape of the train that represents ScanIts app’s ability to access the schedule and scan for a ride.
              </p>
              <h2 className="headline paddingtop50">
                Information Architecture
              </h2>
              <p>
                After reviewing the features and user flow, I created an information architecture to  organize, structure, and label provided tasks.
              </p>
              <img src="img/scansit/scansit-info-arch.png" alt="ScansIt Information Architecture"/>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>06. SOLUTION</span>
            </div>
          </div>

          <div class="prototype paddingtop50">
            <div class="prototype-left">
              <center>
                <img src="img/scansit/gif/scansit-login.gif"/>
              </center>
            </div>
            <div class="prototype-right">
              <h3>Home</h3>
              <p>main focused features on Home: login/sign up, digital card, schedule, setting.</p>
            </div>
          </div>

          <div class="prototype paddingtop50">
            <div class="prototype-right">
              <center>
                <img src="img/scansit/gif/scansit-card.gif"/>
              </center>
            </div>
            <div class="prototype-left">
              <h3>Digital Card</h3>
              <p>scan to get into the station, able to connect to the user's existing cards, check remaining card value and different available payment methods</p>
            </div>
          </div>

          <div class="prototype paddingtop50">
            <div class="prototype-left">
              <center>
                <img src="img/scansit/gif/scansit-schedule.gif"/>
              </center>
            </div>
            <div class="prototype-right">
              <h3>Schedule</h3>
              <p>check the train's up-to-date arrival and departing time from each station</p>
            </div>
          </div>

          <div class="prototype paddingtop50">
            <div class="prototype-right">
              <center>
                <img src="img/scansit/gif/scansit-setting.gif"/>
              </center>
            </div>
            <div class="prototype-left">
              <h3>Setting</h3>
              <p>able to set up profile, notification, accessibility, privacy, and security preferences</p>
            </div>
          </div>

          <div className="wrapper">
            <div className="col3-start col7-end">
              <h2 className="headline">
                Play with the prototype
              </h2>
              <div className="figma">
                <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FkqdCcVRZ4j7XyMqxuEreN8%2FScansIt%3Fnode-id%3D55%253A22%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A7" allowfullscreen/>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>07. NEXT STEP</span>
            </div>
            <div className="col3-start col7-end">
              <p>
                For the next step, I want to focus more on accessibility as we only included features for people with visually impaired. We can see that public transportation is being utilized by all groups of people; therefore, enhancing the ability to serve all their needs would benefit not only the user but the community as a whole too.
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>08. REFLECTION</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
              Insights lead to a solution.
              </h2>
              <p>
                As we interviewed and conducted the surveys, I have seen various perspectives from the users. Some may like what the Link already has, some may not. The key is what problems they have faced from their riding experience. From that point, to deeply understand and analyze the insights can direct to the solution simply.
              </p>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                Asking is learning.
              </h2>
              <p>
                As I designed the solution, I had been facing some indecisiveness and dissatisfaction with my own work. One thing I experienced from this project was to always ask for opinions. To ask my teammates for comments, suggestions, or even questions they had on my design brought me more ideas. Although we did not have a chance to do usability testing with the outsiders, my teammates provided helpful feedback as they played with the prototype. Their comments reflected things my design did well and what it lacked so that I could improve it.
              </p>
            </div>
          </div>
        </div>
        <div className="previous-next">
          <div className="previous">
            <Link to = "/link">
              <p>previous</p>
              <h1 className="home-project-title">&#10229; Link</h1>
            </Link>
          </div>
          <div className="next">
            <Link to = "/waparks">
              <p>next</p>
              <h1 className="home-project-title">Exercising in WA Parks &#10230;</h1>
            </Link>
          </div>
        </div>
        <Footnote/>
      </div>
    );
  }
}
