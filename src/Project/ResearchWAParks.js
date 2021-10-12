import React, {Component} from 'react';
import Footnote from '../Component/Footnote';
import {Link } from "react-router-dom";
import * as tocbot from 'tocbot';

import AOS from 'aos';
import 'aos/dist/aos.css';
import NavbarProject from '../Component/NavBarProject';

AOS.init();

export default class ResearchWAParks extends Component {
  render() {
    return (
      <div className="Projects">
        <NavbarProject/>
        <div>
          <center>
            <img src="img/waparks/waparks-overview.jpg" alt="Gas Works Park" className="project-main-image"/>
          </center>
          <div className="project-overview" id="project-overview">
            <div className="project-info fivecol">
              <div />
              <div className="column1">
                <h1 className="project-title waparks-color">Exercising in Washington Parks — Pandemic Edition</h1>
                {/* <p>
                  
                </p> */}
              </div>
              <div />
              <div className="column2">
                <p className="projects-description">
                  <br/>
                  <p><b>Role: </b>User Researcher<br/>
                  <b>Duration: </b>April - June 2021<br/>
                  <b>Tools: </b>Otter.ai, Tableau</p>
                </p>
              </div>
              <div />
            </div>
          </div>

          <div className="project-body">
            <div className="project-background threecol paddingtop50" id="project-background">
              <div/>
              <div>
                <h2 className="waparks-color">Background &amp; Research Questions </h2>
                <b>Study motivations</b>
                <li>Washington state slowly lifting restrictions and distributing vaccines</li>
                <li>Recognize and understand people’s behavior pertained to the changing CDC guidelines for outdoor settings</li>
                <li>
                  Understand if and how people resort to public parks as outlets during the pandemic, a phenomenon that greatly 
                  impacts people’s health and well-being
                </li>
                <br/>
                <b>Initial design research question</b>
                <blockquote>
                  How can we make Washington urban parks  a safer space for individuals 
                  to exercise during the pandemic?
                </blockquote>
              </div>
            </div>
          </div>

          <div className="project-body">
            <div className="project-contribution fivecol paddingtop50" id="project-contribution">
              <div/>
              <div>
                <h2 className="waparks-color">My Contributions</h2>
                <li>
                  Did a <b>field study</b> at Gas Works Park, specifically focused on traffic, mask wearing,
                  activities, social distancing, and cleanliness. Then analyzed results from the observations.
                </li>
                <li>Conducted <b>interviews</b> with park users, transcribed, and worked on qualitative coding.</li>
                <li>Conducted a <b>survey</b> and visualized data using Tableau.</li>
                <li>Brainstormed recommendations to solve existing problems we have found.</li>
              </div>
            </div>

            <div className="threecol paddingtop50">
              <div/>
              <div>
                <h2 className="waparks-color">Field Study</h2>
              </div>
            </div>

            <div className="waparks-field-method-banner">
              <div className="fivecol paddingtop50" id="project-background">
                <div/>
                <div className="project-background-box">
                  <div className="h-box waparks-color">Field study research questions</div>
                  <p>
                    <li>
                        What COVID-19 precautions are people taking when being around others at the park?
                      </li>
                      <li>
                        Where in the park do people exercise? 
                      </li>
                      <li>
                        When do people take their mask off, and when do they put it back on?
                      </li>
                  </p>
                </div>
              </div>
            </div>

            <div className="site-selection threecol paddingtop50" id="site-selection">
              <div/>
              <div>
                <p>
                  <b>Sites:</b> <b>Gas Works Park</b> <i>(Seattle)</i>,
                  <b> Manito Park</b> <i>(Spokane)</i>, and
                  <b> Sammamish Lower Commons</b> <i>(Sammamish)</i>
                </p>
              </div>
            </div>
            
            <div className="threecol paddingtop50">
              <div/>
              <div className="threecol-forbox">
                <div>
                  <h3>Site Selection</h3>
                  <li>Nearby urban parks in Washington</li>
                  <li>All contained playgrounds and pathways</li>
                </div>
                <div/>
                <div>
                  <h3>Observation focus</h3>
                  <li>Traffic and crowds</li>
                  <li>COVID-19 guideline adherence: mask wearing, social distancing, hand washing/sanitizing</li>
                  <li>Exercising and other activities</li>
                </div>
              </div>
            </div>

            <div className="research-result threecol paddingtop50">
              <div/>
              <div className="waparks-box">
                <p><b>Result 1: Mask wearing habits differed by activity types</b></p>
                <li>Most people performing endurance exercises did not wear a mask</li>
                <li>People pulled their masks off to smoke, eat food, drink, wipe their noses, or sing</li>
                <p><b>Result 2: Space and crowds impacted social distancing</b></p>
                <li>People who came together stayed together in groups</li>
                <li>Lack of social distancing in crowded playgrounds and during peak hours</li>
              </div>
            </div>

            <div className="threecol paddingtop50">
              <div/>
              <div>
                <h3>From field study to interviews</h3>
                <p>
                  <b>Connecting field results to interviews</b>
                  <li>Focus on finding the reasons why people adhere or not adhere to guidelines</li>
                  <li>Complement the key findings:  inconsistent mask-wearing habits and lack of social distancing</li>
                </p>
                <p>  
                  <b>Revised design research question</b>
                  <blockquote>
                    How can we make <u>high traffic areas</u> in Washington urban parks safer for individuals to exercise during the pandemic?
                  </blockquote>
                  <p>
                    <b>Interview research questions</b>
                    <li>How do people feel about exercising in high traffic areas of the park during the pandemic?</li>
                    <li>How do people determine which area(s) of the park they exercise at?</li>
                    <li>How does the layout of the park influence people’s comfort level when exercising?</li>
                    <li>
                      What are people currently doing to make themselves feel safe when exercising in high traffic areas of 
                      the park during the pandemic?
                    </li>
                  </p>
                </p>
              </div>
            </div>
            
            <div className="threecol paddingtop50">
              <div/>
              <div>
                <h2 className="waparks-color">Interview</h2>
              </div>
            </div>

            <div className="waparks-interview-method-banner">
              <div className="fivecol paddingtop50" id="project-background">
                <div/>
                <div className="project-background-box">
                  <div className="h-box waparks-color">Interview Study Methods</div>
                  <p>
                    <b>Participants</b>
                    <li>
                      Inclusion criteria: over 18, exercise at any parks in Washington during pandemic
                    </li>
                    <li>
                      Exclusion criteria: under 18, have not exercised in any Washington parks during the pandemic
                    </li>
                  </p>
                </div>
              </div>
            </div>

            <div className="threecol paddingtop50">
              <div/>
              <div>
                <h3>Interview Participants</h3>
                <li>Male and female college-aged students</li>
                <li>All have exercised at parks in Washington periodically during the pandemic</li>
                <h3>Location and Time</h3>
                <li>1 interview done in person, 8 interviews conducted on Zoom</li>
                <li>Each one-on-one session lasted 20-30 minutes</li>
                <li>All were audio recorded</li>
                <h3>Sample interview questions</h3>
                <li>Which area of the park do you usually exercise at?</li>
                <li>Have you ever felt that you’re at risk of contracting COVID when you exercise at the park? </li>
                <li>Do you wear a mask when exercising? Why?</li>
                <li>Do you keep a 6-feet distance between yourself and others when exercising? Why?</li>
              </div>
            </div>

            <div className="research-result threecol paddingtop50">
              <div/>
              <div className="waparks-box">
                <p><b>Result 1: Difficulty with mask-wearing during exercise and being around others</b></p>
                <li>
                  Participants reported difficulty breathing in a mask during their exercise, but 
                  the presence of people in the area made mask-wearing unavoidable
                </li>
                <li>
                  Participants found having to sacrifice their physical comfort to keep 
                  themselves and the community safe
                </li>
                <p><b>Result 2: Motivation to stay active and be with people safely</b></p>
                <li>The pandemic itself motivated the participants to stay active</li>
                <li>
                  Consistently being indoors and the inability to exercise with people inside urged 
                  participants to find an alternative location to improve their mental and physical health
                </li>
              </div>
            </div>

            <div className="threecol paddingtop50">
              <div/>
              <div>
                <h3>From interviews to surveys</h3>
                <p>
                  <b>Connecting field results to interviews</b>
                  <li>Address the social aspect of our interviewees’ outdoor exercise motivations</li>
                  <li>Complement the key findings:  sense of safety, comfort levels when practicing guidelines, and exercising with others</li>
                </p>
                <p>  
                  <b>Revised design research question</b>
                  <blockquote>
                    How can we help individuals who exercise in high traffic areas in Washington urban parks 
                    <u>feel safe and socially supported</u> during the pandemic?
                  </blockquote>
                  <p>
                    <b>Survey research questions</b>
                    <li>How is people’s sense of safety influenced by different types of exercise? [confirm/extend]</li>
                    <li>How is people’s sense of safety influenced by types of exercise companions? [explore]</li>
                    <li>What are people’s most important personal and social motivators to exercise ? [confirm/elaborate]</li>
                  </p>
                </p>
              </div>
            </div>

            <div className="waparks-survey-method-banner">
              <div className="fivecol paddingtop50" id="project-background">
                <div/>
                <div className="project-background-box">
                  <div className="h-box waparks-color">Interview Study Methods</div>
                  <p>
                    <b>Tool and Platforms</b>
                    <li>
                      Google Forms, Subreddits (outdoor exercises and Washington cities),
                      HCDE Slack channel (same platform as interview recruitment)
                    </li>
                  </p>
                  <p>
                    <b>Population</b>
                    <li>23 respondents</li>
                    <li>
                      Inclusion criteria: over 18, exercise at any parks in Washington during pandemic
                    </li>
                    <li>
                      Exclusion criteria: under 18, have not exercised in any Washington parks during the pandemic
                    </li>
                  </p>
                </div>
              </div>
            </div>

            <div className="threecol paddingtop50">
              <div/>
              <div>
                <h3>Sample survey questions</h3>
                <li>
                  Rate how much you feel comfortable practicing COVID-19 guidelines 
                  when exercising: wearing a mask/social distancing
                </li>
                <li>
                  From always to never, how often do you feel at risk of contracting COVID-19 when exercising with the 
                  following people: strangers/others you know from the same household/others you know from different households
                </li>
              </div>
            </div>

            <div className="research-result threecol paddingtop50">
              <div/>
              <div className="waparks-box">
                <p><b>Result 1: People wore a mask less often than social distancing but still wanted to make themselves and others feel safe</b></p>
                {/* <img src=""/> */}
                <p><b>Result 2: People exercised less frequently with those who made them feel more at risk</b></p>
              </div>
            </div>

            <div className="research-recommendation threecol paddingtop50">
              <div/>
              <div>
                <p><b>Revised design research question</b></p>
                <blockquote>
                  How can we help individuals who exercise in high traffic areas in Washington urban parks 
                  feel safe and socially supported during the pandemic?
                </blockquote>
              </div>
            </div>

            <div className="threecol paddingtop50">
              <div/>
              <div>
                <h2 className="waparks-color paddingtop50">
                  Design recommendations
                </h2>
                <p>
                  <b>Recommendation 1:</b> Paint on the pathways to indicate traffic directions and group/solo exercise lanes
                </p>
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