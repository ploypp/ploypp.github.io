import React, {Component} from 'react';
import NavbarProject from '../Component/NavBarProject';
import Footnote from '../Component/Footnote';
import {Link } from "react-router-dom";

export default class ProjectWego extends Component {
  componentDidMount(){
    document.title = "WEGO Word Tool | Ploy Pruekcharoen"
  }
  render() {
    return (
      <div className="Projects">
        <NavbarProject/>
        <div>
          <div className="wego-banner banner"/>
          <div className="wrapper">
            <div className="col2-start col7-end">
              <h1 className="project-title">WEGO Word Tool</h1>
            </div>
            <div className="col2-start col5-end">
              <p>
                <span><b>ROLE:</b></span>&nbsp; User Experience and Interface Designer<br/>
                <span><b>COLLABORATION:</b></span>&nbsp; 2 Developers, 1 Project manager<br/>
              </p>
            </div>
            <div className="col5-start col7-end">
              <p>
                <span><b>DURATION:</b></span>&nbsp; June 2020 - March 2021<br/>
                <span><b>TOOLS:</b></span>&nbsp; Adobe Photoshop, Figma
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>00. OVERVIEW</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                WEGO is a tool for formatteing captioned figures, tables, and equations in Microsoft Word.
              </h2>
            </div>
            <div className="col3-start col5-end">
              <h2>Problem</h2>
            </div>
            <div className="col5-start col8-end">
              <h3>A tiring process of organizing documents</h3>
              <p>
                Writing manuscripts and reports is an essential process for researchers to communicate and share their work 
                with the public. However, many researchers have spent too much time on formatting, which could be better 
                utilized for more necessary tasks.
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>01. USERS &amp; STAKEHOLDERS</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                Researchers and manuscript writers
              </h2>
            </div>
            <div className="col3-start col4-end users">
              <img src="img/wego/researcher.png" alt="user illustration" className="stakeholder-img"/>
            </div>
            <div className="col5-start col6-end users">
              <img src="img/wego/notebook.png" alt="user illustration"/>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>02. DESIGN SOLUTION</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">
                Microsoft Word tools to get cross references, captions, and positioning right in just one click.
              </h2>
              <p>
                The purpose of implementing WEGO is to assist with organizing captioned figures and cross references 
                in just a few clicks. Generally, a commonly-used figure in manuscripts consists of various images and 
                captions. The more images in the documents, the more time-consuming the task will be. To fasten  
                the process and propose choices for the researchers, we developed WEGO add-in with the capability to 
                insert a different number of figures and formats
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>03. RIBBON TOOL DESIGN</span>
            </div>
            <div className="col3-start col7-end">
              <p>
                WEGO is a simple add-in with a variety of functions that are easy to use. We initially developed this 
                tool as a Microsoft Word ribbon, which is located below the Toolbar.
              </p>
            </div>
            <div className="col2-start col8-end">
              <img src="img/wego/wego-ribbon.png" alt="WEGO Ribbon"/> 
            </div>
            <div className="col3-start col7-end">
              <h3>
                Ribbon Tool Prototype
              </h3>
            </div>
            <div className="col3-start col7-end">
              <img src="img/wego/ribbon.gif" alt="WEGO Ribbon"/> 
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>04. TASK PANE DESIGN</span>
            </div>
            <div className="col3-start col7-end">
              <p>
                Apart from the ribbon, I also designed another version of WEGO Word Tool as Microsoft Word task pane, which 
                appears on the right side of the window.
              </p>
            </div>
            <div className="col3-start col7-end">
              <h3>
                Guide Pages
              </h3>
            </div>
            <div className="col2-start col4-end">
              <img src="img/wego/taskpane-gp-1.png" alt="WEGO Task Pane Guide Pages"/>
            </div>
            <div className="col4-start col6-end">
              <img src="img/wego/taskpane-gp-2.png" alt="WEGO Task Pane Guide Pages"/>
            </div>
            <div className="col6-start col8-end">
              <img src="img/wego/taskpane-gp-3.png" alt="WEGO Task Pane Guide Pages"/>
            </div>
            <div className="col3-start col7-end">
              <h3>
                Adding Figures
              </h3>
            </div>
            <div className="col3-start col7-end">
              <img src="img/wego/taskpane.png" alt="WEGO Task Pane Guide Pages"/>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>05. ICON DESIGN</span>
            </div>
            <div className="col3-start col7-end">
              <p>
                I designed a set of icons for WEGO Word Tool, following the Office UI customization for custom ribbons and task panes.
              </p>
            </div>
            <div className="col3-start col7-end">
              <img src="img/wego/wego-icons.png" alt="WEGO Icons"/>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start process">
              <span>06. DESIGN DECISIONS</span>
            </div>
            <div className="col3-start col7-end">
              <h2 className="headline">Design choices for Accessibility</h2>
              <p>
                The main reason for having both ribbon and task pane is that we focused on users who have different operating 
                systems. Ribbon works on Windows but not on macOS. Even though it looks cleaner and easier to access, we include a 
                task pane option for macOS users to increase the accessibility of our tool. We decided to develop the task pane in 
                the Office Add-ins platform that Microsoft provides to external developers to build solutions that extend Office 
                applications and interact with content in Office documents.
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
        </div>
        <Footnote/>
      </div>
    );
  }
}