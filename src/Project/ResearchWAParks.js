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
          <div className="waparks-banner banner"/>
          <div className="wrapper">
            <div className="col2-start col7-end">
              <h1 className="project-title">Exercising in Washington Parks — Pandemic Edition</h1>
            </div>
            <div className="col2-start col5-end">
              <p>
                <span><b>ROLE:</b></span>&nbsp; User Researcher<br/>
                <span><b>COLLABORATION:</b></span>&nbsp; Team of 3<br/>
              </p>
            </div>
            <div className="col5-start col7-end">
              <p>
                <span><b>DURATION:</b></span>&nbsp;  April - June 2021<br/>
                <span><b>TOOLS:</b></span>&nbsp; Otter.ai, ATLAS.ti, Miro
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>00. OVERVIEW</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                Research about exercise experience at parks in Washington state during the pandemic.
              </h2>
              <p>
                Our team conducted field research and used various user research methods to gain insights from the park users. We worked independently at different parks and combined research findings to analyze together.
              </p>
            </div>
            <div className="col3-start">
              <h2>Background</h2>
            </div>
            <div className="col4-start col7-end">
              <p>
                While Washington state slowly lifted restrictions regarding COVID situations and distributed vaccines, our team was interested in understanding people’s behavior pertained to the changing CDC guidelines for outdoor settings, understanding if and how people resort to public parks as outlets during the pandemic, a phenomenon that greatly impacts people’s health and well-being
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>01. DESIGN RESEARCH QUESTION</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                How can we make individuals who exercise in high traffic areas in Washington urban parks feel safe and socially supported during the pandemic?
              </h2>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>02. FIELD STUDY</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                Field Study Research Questions
              </h2>
              <ul>
                <li>What COVID-19 precautions are people taking when being around others at the park?</li>
                <li>Where in the park do people exercise? </li>
                <li>When do people take their mask off, and when do they put it back on?</li>
              </ul>
            </div>
            <div className="col3-start">
              <h2>Site Selection</h2>
            </div>
            <div className="col4-start col7-end">
              <p>
                Each of us selected the nearby urban parks in Washington that contain playgrounds and pathways, as we planned to observe people who exercise at the parks. During observation, we focused on traffic and crowds; COVID-19 guideline adherence such as mask wearing, social distancing, hand washing/sanitizing; and types of exercise.
              </p>
              <img src="img/waparks/field.jpg" alt="Gas Works Park"/>
              <p className="img-caption">My selected location for field observation study</p>
            </div>
            <div className="col3-start col7-end">
              <h2>
                From the field study, we found some common results...
              </h2>
              <p><b>01. Mask wearing habits differed by activity types.</b></p>
              <p>
                Most people performing endurance exercises did not wear a mask. Some of them also pulled their masks off to smoke, eat food, drink, wipe their noses, and sing.
              </p>
              <p><b>02. Space and crowds impacted social distancing.</b></p>
              <p>
                People who came together stayed together in groups. There was a lack of social distancing in crowded playgrounds and during peak hours.
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>03. INTERVIEW</span>
            </div>
            <div className="col3-start">
              <h2 className="headline">
                Interview Research Questions
              </h2>
            </div>
            <div className="col4-start col7-end">
              <p>
                From the field research, we found that some people follow the COVID guidelines, while some do not, which makes us interested in knowing the reasons “why” they choose or choose not to do that.
              </p>
            </div>
            <div className="col3-start col7-end">
              <ul>
                <li>How do people feel about exercising in high traffic areas of the park during the pandemic?</li>
                <li>How do people determine which area(s) of the park they exercise at?</li>
                <li>How does the layout of the park influence people’s comfort level when exercising?</li>
                <li>What are people currently doing to make themselves feel safe when exercising in high traffic areas of the park during the pandemic?</li>
              </ul>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                From the interviews, we gained insights that led to the following results.
              </h2>
              <p><b>01. Difficulty with mask-wearing during exercise and being around others.</b></p>
              <p>
                Participants reported difficulty breathing in a mask during their exercise, but the presence of people in the area made mask-wearing unavoidable. They found having to sacrifice their physical comfort to keep themselves and the community safe.
              </p>
              <p><b>02. Motivation to stay active and be with people safely.</b></p>
              <p>
                The pandemic itself motivated the participants to stay active. Consistently being indoors and the inability to exercise with people inside urged participants to find an alternative location to improve their mental and physical health.
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>04. SURVEY</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                Survey Research Questions
              </h2>
              <p>
                The interviews helped address the social aspect of our interviewees’ outdoor exercise motivations. According to that, we would like to understand how people’s sense of safety is influenced by different types of exercise or types of exercise companions, as well as people’s most important personal and social motivators to exercise.
              </p>
              <ul>
                <li>How is people’s sense of safety influenced by different types of exercise? [confirm/extend]</li>
                <li>How is people’s sense of safety influenced by types of exercise companions? [explore]</li>
                <li>What are people’s most important personal and social motivators to exercise ? [confirm/elaborate]</li>
              </ul>
              <br/>
              <h2>We analyzed the survey responses and found the following results.</h2>
              <img src="img/waparks/chart1.png" alt="Guidelines Adherence by Type of Exercise"/>
              <p className="img-caption">People practiced social distancing more often than mask wearing during exercise.</p>
              <p>
                This chart shows how different types of exercise influence whether or not people would follow the guidelines. We compared the responses regarding mask wearing and social distancing. From the chart, most people tend to do endurance exercise, and it is not possible to compare them fairly. However, we see that most people found it harder to wear a mask while exercising.
              </p>
              <img src="img/waparks/chart2.png" alt="Reasons of Following Guidelines Regarding Safety by Type of Exercise"/>
              <p className="img-caption">People wanted to make themselves and others feel safe by following guidelines.</p>
              <p>
                This second chart shows the reason why people follow the guidelines, and we can see that most people want to make themselves and others feel safe regardless of exercise types
              </p>
              <p>
                From the findings, we made an implication that wearing a mask can cause trouble while exercising, so less people do that although they prioritize their safety and other’s safety. It also confirms our interview finding that people choose not to wear a mask since it’s hard to breathe, and elaborates on the field research about why people follow the guidelines. However, we cannot assume which types of exercise influence the most because the responses are from a small number of people and they tend to do more endurance exercise.
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>05. DESIGN RECOMMENDATIONS</span>
            </div>
            <div className="col3-start col7-end">
              <p><b>01. Group/Solo Lanes</b></p>
              <img src="img/waparks/rec1.png" alt="Recommendation 1"/>
              <p>
                With adequate space in each lane, parks can paint or have words embedded on the pathways to indicate directions and group/solo exercise. Would allow people to feel safer exercising in groups and alone (social aspect and safety found during all studies).
              </p>
              <p><b>02. Social Distancing Circles</b></p>
              <img src="img/waparks/rec2.png" alt="Recommendation 2"/>
              <p>
                From the findings regarding people’s desire to social distance, be safe, and stay in their groups across the three studies, parks could draw “social distancing circles” on the ground so people who do stationary exercises can be spaced apart whether alone or in groups.
              </p>
              <p><b>03. Stopping Points for Taking A Mask Off</b></p>
              <img src="img/waparks/rec3.png" alt="Recommendation 3"/>
              <p>
                Although wearing a mask during high intensity activities can cause difficulty breathing, some people may still choose to wear a mask to make themselves and others feel safe, especially when parks are very crowded. Parks can provide stopping points as an option along paths (six feet apart) for runners to take off their mask and catch their breath if needed.
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>06. LIMITATIONS</span>
            </div>
            <div className="col3-start col7-end">
              <p>
                During the research, we had faced some changes in COVID-19 guidelines due to increasing vaccination rates, which directly affects our study.
              </p>
              <p>
                We also found response bias regarding guideline adherence during interview and survey studies, since most people might not want others to blame them for a lack of responsibilities in public space.
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>07. NEXT STEP</span>
            </div>
            <div className="col3-start col7-end">
              <p>
                From the interesting findings and results, I think we could consider flu seasons where mask wearing would be beneficial. Because this research is related to health and well-being, it could be extended to serve other types of illness or disease outbreaks. I also would like to evaluate design recommendations and their impact beyond pandemic safety to make them more useful for the park users even when the pandemic ends.
              </p>
            </div>
          </div>
          {/* <div className="wrapper">
            <div className="col2-start process">
              <span>08. REFLECTION</span>
            </div>
            <div className="col3-start col7-end">
              <ul>
                <li>Some research questions did not lead to interesting results.</li>
                <li>Choose specific findings to focus on as we move to the next stage.</li>
              </ul>
            </div>
          </div> */}
        </div>
        <div className="previous-next">
          <div className="previous">
            <Link to = "/scansit">
              <p>previous</p>
              <h1 className="home-project-title">&#10229; ScansIt</h1>
            </Link>
          </div>
          <div className="next">
            <Link to = "/interactive">
              <p>see more</p>
              <h1 className="home-project-title">Interactive Projects &#10230;</h1>
            </Link>
          </div>
        </div>
        <Footnote/>
      </div>
    );
  }
}