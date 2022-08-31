import React, {Component} from 'react';
import Navbar from './Component/NavBar';
import Footnote from './Component/Footnote';
import InteractiveNav from './InteractiveNav';
import {Link } from "react-router-dom";
import './interactive.css';

export default class Interactive extends Component {
  componentDidMount(){
    document.title = "Unspeakable | Ploy Pruekcharoen"
  }
  render() {
    return (
      <div className="Interactive">
        <Navbar />
          <div className="wrapper">
            <div className="col1-start col3-end paddingleft40 paddingtop30">
              <InteractiveNav />
            </div>
            <div className="col3-start col7-end">
              <h2>Unspeakable</h2>
              <br/>
              <img className="paddingtop30" src="img/unspeakable/threeviz.jpg" alt="Unspeakble Project"/>
              <p className="paddingtop30">
                Unspeakable is a set of data visualizations that shows the story of people who have been prosecuted under 
                Thailand's Lèse Majesté Law. <br/>
                “Whoever, defames, insults or threatens the King, the Queen, the Heir-apparent or the Regent, shall be punished 
                with imprisonment of three to fifteen years.” (Section 112 of Thai Criminal Code)
              </p>
              <p className="paddingtop30">
                Unspeakable shows the number of prosecutions regarding the Lèse Majesté Law from November 2020 to May 2022 and 
                is separated into three parts based on different variables, including gender and age (part 1), months and 
                causation (part 2), and locations of the court/police station (part 3).
              </p>
              <br/>
              <span>June 2022</span>
              <br/>
              <span>role: e-textile artist<br/>tools: Arduino, LEDs, Thermochromic Paints, 3D Print, Fabrication</span>
              <br/><br/>
              <span><a href="https://www.dx-softlab.com/research/2022/7/21/unspeakable-by-ploy-pruekcharoen">Link to the full blog post</a></span>
            </div>
            <div className="col3-start col7-end int-nav-mobile">
              <p><Link to="/colorizedcloud">Colorized Cloud &#10230;</Link></p>
            </div>
          </div>
          <div className="previous-next">
            <div className="previous">
              <Link to = "/">
                <p>see more</p>
                <h1 className="home-project-title">&#10229; design projects</h1>
              </Link>
            </div>
            <div className="next">
              <Link to = "/about">
                <p>get to know more</p>
                <h1 className="home-project-title">about me &#10230;</h1>
              </Link>
            </div>
          </div>
        <div>
        <Footnote/>
        </div>
      </div>
    );
  }
}