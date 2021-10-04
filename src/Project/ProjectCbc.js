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

export default class ProjectCbc extends Component {
  render() {
    return (
      <div className="Projects">
        <NavbarProject/>
        <div>
          <center>
            <img src="img/cbc/scene2.png" alt="Cascade Bicycle Club's Design" className="project-main-image"/>
          </center>
          <div className="project-overview" id="project-overview">
            <div className="project-info fivecol">
              <div />
              <div className="column1">
                <h1 className="project-title cbc-color">Cascade Bicycle Club Brand Book</h1>
                <p>
                  The brand guidlines of Cascade Bicycle Club's new design, including logo, color scheme, typography, 
                  iconography, photography, and selected task application prototypes.
                </p>
              </div>
              <div />
              <div className="column2">
                <p className="projects-description">
                  <br/>
                  <p><b>Individual project: </b>Brand Research, Graphic Design, UX/UI Design<br/>
                  <b>Duration: </b>November - December 2020<br/>
                  <b>Other Teammates: </b>1 Project manager, 2 UX Researchers<br/>
                  <b>Tools: </b>Adobe Photoshop, Adobe Illustrator</p>
                </p>
              </div>
              <div />
            </div>
          </div>

          <center>
            {/* <img src="img/cbc/file/1.png" alt="" className="brandbookimg"></img> */}
            <img src="img/cbc/file/2.png" alt="" className="brandbookimg"></img><br/>
            <img src="img/cbc/file/3.png" alt="" className="brandbookimg"></img><br/>
            <img src="img/cbc/file/4.png" alt="" className="brandbookimg"></img><br/>
            <img src="img/cbc/file/5.png" alt="" className="brandbookimg"></img><br/>
            <img src="img/cbc/file/6.png" alt="" className="brandbookimg"></img><br/>
            <img src="img/cbc/file/7.png" alt="" className="brandbookimg"></img><br/>
            <img src="img/cbc/file/8.png" alt="" className="brandbookimg"></img><br/>
            <img src="img/cbc/file/9.png" alt="" className="brandbookimg"></img><br/>
            <img src="img/cbc/file/10.png" alt="" className="brandbookimg"></img><br/>
            <img src="img/cbc/file/11.png" alt="" className="brandbookimg"></img><br/>
            <img src="img/cbc/file/12.png" alt="" className="brandbookimg"></img><br/>
            <img src="img/cbc/file/13.png" alt="" className="brandbookimg"></img>
          </center>

          <div className="other-project">
            <div className="col-left">
              <Link to = "/cnc">
                <p>Previous &lt; Code&amp;Craft Website Redesign Project</p>
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