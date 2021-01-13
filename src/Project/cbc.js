import React, {Component} from 'react';
import Navbar from '../Component/NavBar';
import Footnote from '../Component/Footnote';
import classNames from "classnames";
import {Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default class cbc extends Component {
  render() {
    return (
      <div className="cbc">
        {/* <Cursor /> */}
        <Navbar />
        <div className="project-content">
          <h1 className="project-title">Cascade Bicycle Club Brand Book</h1>
          <div className="project-info twocolumns">
            <div className="column1">
              <p>
                The brand guidlines of Cascade Bicycle Club's new design, including logo, color scheme, typography, 
                iconography, photography, and selected task application prototypes.
              </p>
            </div>
            <div className="column2">
              <p><b>Individual project: </b>Brand Research, Graphic Design, UX/UI Design</p>
              <p><b>Duration: </b>November - December 2020</p>
              <p><b>Tools: </b>Adobe Photoshop, Adobe Illustrator</p>
            </div>
        </div>
          <center>
            <img src="img/cbc/scene2.png" alt="Cascade Bicycle Club's Design" className="main-image"></img>

            {/* <img src="img/cbc/file/1.png" alt="" className="brandbookimg"></img> */}
            <img src="img/cbc/file/2.png" alt="" className="brandbookimg"></img>
            <img src="img/cbc/file/3.png" alt="" className="brandbookimg"></img>
            <img src="img/cbc/file/4.png" alt="" className="brandbookimg"></img>
            <img src="img/cbc/file/5.png" alt="" className="brandbookimg"></img>
            <img src="img/cbc/file/6.png" alt="" className="brandbookimg"></img>
            <img src="img/cbc/file/7.png" alt="" className="brandbookimg"></img>
            <img src="img/cbc/file/8.png" alt="" className="brandbookimg"></img>
            <img src="img/cbc/file/9.png" alt="" className="brandbookimg"></img>
            <img src="img/cbc/file/10.png" alt="" className="brandbookimg"></img>
            <img src="img/cbc/file/11.png" alt="" className="brandbookimg"></img>
            <img src="img/cbc/file/12.png" alt="" className="brandbookimg"></img>
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