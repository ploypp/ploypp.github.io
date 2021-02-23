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

export default class ProjectCbc extends Component {
  render() {
    return (
      <div className="Projects">
        <Navbar />
        <div>
          <div className="project-overview" id="project-overview">
            <div className="project-info fourcol">
              <div/>
              <h1 className="project-title">Cascade Bicycle Club Brand Book</h1>
              <div/>
              <div/>
            </div>
            <div className="project-info fourcol">
              <div/>
              <div className="column1">
                <p><b>Individual project: </b>Brand Research, Graphic Design, UX/UI Design</p>
                <p><b>Duration: </b>November - December 2020</p>
                <p><b>Tools: </b>Adobe Photoshop, Adobe Illustrator</p>
              </div>
              <div className="column2">
                <p className="projects-description">
                  The brand guidlines of Cascade Bicycle Club's new design, including logo, color scheme, typography, 
                  iconography, photography, and selected task application prototypes.
                </p>
              </div>
            </div>
          </div>
          <center>
            <img src="img/cbc/scene2.png" alt="Cascade Bicycle Club's Design" className="project-main-image paddingtop150"/>
          </center>

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