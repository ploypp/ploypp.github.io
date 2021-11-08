import React, {Component} from 'react';
import NavbarProject from '../Component/NavBarProject';
import Footnote from '../Component/Footnote';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link } from "react-router-dom";

AOS.init();

export default class ProjectFamApp extends Component {
  render() {
    return (
      <div className="Projects">
        <NavbarProject/>
        <div>
          <div className="famapp-banner banner"/>
          <div className="wrapper">
            <div className="col2-start col7-end">
              <h1 className="project-title">Fam App</h1>
            </div>
            <div className="col2-start col5-end">
              <p>
                <span><b>ROLE:</b></span>&nbsp; Product Designer and Researcher<br/>
                <span><b>COLLABORATION:</b></span>&nbsp; Team of 3<br/>
              </p>
            </div>
            <div className="col5-start col7-end">
              <p>
                <span><b>DURATION:</b></span>&nbsp; January - March 2021<br/>
                <span><b>TOOLS:</b></span>&nbsp; Adobe Photoshop, Figma, Miro
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>00. OVERVIEW</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                Fam app is an app to control smart home devices with a goal to enhance communication within the family.
              </h2>
              <p>
                Our team found that staying at home for extended periods of time during COVID leads to higher levels of stress; therefore, we decided to build an app that creates empathy and makes communication easier among parents and teenage children.
              </p>
            </div>
            <div className="col3-start">
              <h2>Problem</h2>
            </div>
            <div className="col4-start col7-end">
              <p>
                Middle-aged parents have been affected to a significant degree as a result of COVID-19, which has led to mental and emotional stress because mental problems can further affect relationships within family members as well as a lack of communication between family members.
              </p>
            </div>
          </div>
          <div className="wrapper users-stakeholders">
            <div className="col2-start process">
              <span>01. USERS &amp; STAKEHOLDERS</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                Who are we focusing on?
              </h2>
            </div>
            <div className="col3-start col4-end users">
              <img src="img/famapp/father.png"/>
            </div>
            <div className="col5-start col6-end users">
              <img src="img/famapp/mother.png"/>
            </div>
            <div className="col3-start col7-end">
              <p>
                Our primary users are parents who have their teenage children living with them during COVID times. Parents can struggle with forms of communication with their kids who may vary in age gaps and we want to help with that problem.
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
                As part of our research stage, each team member analyzed an existing application or product that addressed a similar area as our problem statement. The analysis consisted of figuring out what worked well for them and determining possible areas of improvement for future opportunities. This helped determine what areas we could focus on for our solution to stand out and improve the user experience with new innovative features.
              </p>
              <br/>
              <img src="img/famapp/famapp-competitive-analysis.png" alt="Fam App Competitive Analysis"/>              
              <h2 className="headline paddingtop100">
                Interviews
              </h2>
              <blockquote>
                "How do parents communicate with their teenage children?"
              </blockquote>
              <p>
                We conducted semi-structured interviews with middle-aged parents who have teenage kids living at home with them during COVID and asked questions to better understand their current communication situation.
              </p>
            </div>
            <div className="col3-start">
              <h3>Goal</h3>
            </div>
            <div className="col4-start col7-end">
              <p>
                To understand how users currently communicate with their children, their experiences, pain points, and whether anything changed during COVID.
              </p>
            </div>
            <div className="col3-start col7-end">
              <a href="https://drive.google.com/file/d/1zFOk5w3FdFVIGP_ZhwTZbWqn7rKpnsMD/view" target="blank">view full competitive analysis and user research</a>
            </div>
            <div className="col3-start">
              <h3>Interview findings</h3>
            </div>
            <div className="col4-start col7-end">
              <ol>
                <li>Parents and children see each other more often during COVID, but they have limited time to spend together due to different schedules.</li>
                <li>Some parents are mostly concerned about their children’s educational goals and learning performance.</li>
                <li>Parents want to create deeper communication and connections rather than superficial small talk, but don’t want the conversation to be interrogative or invasive to the teenager’s privacy.</li>
                <li>Parents are at different levels of using technology, such as smartphones and smart devices.</li>
              </ol>
            </div>
            <div className="col3-start">
              <h3>Personas</h3>
            </div>
            <div className="col4-start col7-end">
              <p>
                We created provisional personas from collected data and interviews to ​​represent the unique features we found. With both of our polished personas done, we made sure to always keep them in mind throughout the rest of the design process.
              </p>
            </div>
          </div>
          <center>
            <div className="img-inline">
              <img src="img/famapp/provisional-persona.jpg" alt="Fam App Provisional Persona"/>
              <img src="img/famapp/polish-persona1.png" alt="Fam App Polished Persona"/>
              <img src="img/famapp/polish-persona2.png" alt="Fam App Polished Persona"/>
            </div>
            <p className="img-caption">My sketch and polished personas</p>
          </center>
          <div className="wrapper">
            <div className="col3-start">
              <h3>User Journey Map</h3>
            </div>
            <div className="col4-start col7-end">
              <p>
                We created a user journey map to represent the emotional experience of our persona when trying to communicate with their teenage children.
              </p>
            </div>
            <div className="col3-start col8-end">
              <img src="img/famapp/famapp-journey-map.jpg" alt="Fam App User Journey Map"/>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>03. DEFINING</span>
            </div>
            <div className="col3-start">
              <h2 className="headline">
                Design Requirements
              </h2>
            </div>
            <div className="col4-start col7-end">
              <p>
                Combination of all user interviews, personas, user journeys and synthesis of this data brought us to the design requirements, which guided to interpreting and evaluating interactions we wanted our user to experience with our product. 
              </p>
              <ul>
                <li>Inform family members how the user is currently feeling.</li>
                <li>Reduce stress levels of not having to guess when the right time comes along to talk about something deep/personal.</li>
                <li>Schedule the most effective time for all members to gather and converse.</li>
                <li>Collect users’ song selections to create family mood playlists and interact as a family.</li>
                <li>Track users’ feelings throughout the day or week based on the color or contexts they choose to interact with on the app.</li>
              </ul>
            </div>
            <div className="col3-start">
              <h2 className="headline">
                Storyboards
              </h2>
            </div>
            <div className="col4-start col7-end">
              <p>
                With the list of requirements, we drew storyboards to create a bigger picture of possible user experiences. Our storyboards focused on facilitating the initiation of conversation. We came up with different possible solutions that incorporated features that could be the answer for our user’s needs.
              </p>
            </div>
            <div className="col3-start col7-end">
              <img src="img/famapp/storyboard-1.jpg" alt="Fam App Storyboard 1"/>
              <img src="img/famapp/storyboard-2.jpg" alt="Fam App Storyboard 2"/>
              <center><p className="img-caption">parts of the storyboards that I created</p></center>
              <br/>
              <a href="https://drive.google.com/file/d/1A4mHPvDSLPddBtD0__bnYg3J8m2hrp-m/view" target="blank">view full storyboards</a>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>04. IDEATION &amp; DESIGN</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                Iterations
              </h2>
              <p>
                Our team did sketches and discussed the key features of the design solution. I then created an information architecture to make a structural design of the app and the annotated wireframes that provide information about how to interact with our prototype.
              </p>
              <img src="img/famapp/interface-sketches.png" alt="Fam App Interface Design Sketches"/>
              <center><p className="img-caption">My interface design sketches</p></center>
              <br/>
              <h2 className="headline">
                Information Architecture
              </h2>
              <img src="img/famapp/famapp-info-arch.png" alt="Fam App Information Architecture"/>
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
              <div className="figma">
                <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FyuGozk181NKerSs642kach%2FFamApp%3Fnode-id%3D2%253A3249%26starting-point-node-id%3D2%253A3249%26scaling%3Dscale-down" allowfullscreen/>
              </div>
              {/* <p>
                
              </p> */}
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>O6. TEST</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                Usability Testing
              </h2>
              <p>
                I conducted user testing to observe the usability of our prototype and to highlight the strengths and weaknesses of our design. The user feedback helped the team observe possible improvements that we could make in our future plan and process.
              </p>
            </div>
            <div className="col3-start">
              <h2 className="headline">
                Evaluation Findings
              </h2>
            </div>
            <div className="col4-start col7-end">
              <ol>
                <li>Users are unable to edit on other family members’ pages.</li>
                <li>Users are not aware of scrollable design.</li>
                <li>Users tried viewing mood updates on the graph that were more than a week ago.</li>
              </ol>
            </div>
            <div className="col3-start">
              <h2 className="headline">
                Suggestions for refining
              </h2>
            </div>
            <div className="col4-start col7-end">
              <ol>
                <li>Give users the option to make edits on other members’ pages and send requests for editing and scheduling for others.</li>
                <li>Rearrange the add/update button location.</li>
                <li>Add a feature to see past history on mood and status updates.</li>
              </ol>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>07. NEXT STEP</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                Based on the usability testing…
              </h2>
              <p>
                I would like to work on the interaction design, especially considering the current user flow, design transparency, and the user’s ability to interact with our design solution. Since we focused more on the parents' side this time, I think that we could do more research on teenage kids to get more insights from other viewpoints.
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>08. REFLECTION</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                Adjust to the new tools and methods while working remotely.
              </h2>
              <p>
                Due to the pandemic, I had to conduct the user interviews and usability testing remotely, which made it harder to read body language and get the full user experience. However, these experiences helped me gain more skills in research and also encouraged me to be more prepared before meeting with interviewees and product testers.
              </p>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                Good communication results in a better workflow.
              </h2>
              <p>
                One thing I learned from working with my team is how to manage time and deadlines well. We always communicated with each other, took notes during the meetings, and finished our assigned work on time. Having clear communication and expectations, we were able to keep ourselves on track and work together remotely.
              </p>
            </div>
          </div>
        </div>
        <div className="previous-next">
          <div className="previous">
            <Link to = "/#design">
              <p>back to</p>
              <h1 className="home-project-title">&#10229; selected projects</h1>
            </Link>
          </div>
          <div className="next">
            <Link to = "/link">
              <p>next</p>
              <h1 className="home-project-title">Link &#10230;</h1>
            </Link>
          </div>
        </div>
        <Footnote/>
      </div>
    );
  }
}