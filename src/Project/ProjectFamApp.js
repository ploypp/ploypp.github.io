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

export default class ProjectFamApp extends Component {
  render() {
    return (
      <div className="Projects">
        <NavbarProject/>
        <div>
          <center>
            <img src="img/famapp/famapp-overview2.png" alt="FamApp Overview" className="project-main-image"/>
          </center>
          <div className="project-overview" id="project-overview">
            <div className="project-info fivecol">
              <div />
              <div className="column1">
                <h1 className="project-title famapp-color">Fam App</h1>
                <p>
                  A mobile application that connects to smart home devices and allows family members to update 
                  their current mood status, schedule events, edit a collective To-Do list, and add songs to a 
                  family playlist to easily and effectively communicate with one another in the same platform.
                </p>
              </div>
              <div />
              <div className="column2">
                <p className="projects-description">
                  <br/>
                  <p><b>Role: </b>User Researcher, UX/UI Designer<br/>
                  <b>Duration: </b>January - March 2021<br/>
                  <b>Tools: </b>Adobe Photoshop, Figma</p>
                </p>
              </div>
              <div />
            </div>
          </div>

          <center>
            <a className="famapp-link" href="https://famapp.weebly.com/" target="_blank">Link to the project site</a>
          </center>

          <div className="other-project twocolums">
            <div className="col-right">
              <Link to = "/scansit">
                <p>Next &gt; Project ScansIt</p>
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