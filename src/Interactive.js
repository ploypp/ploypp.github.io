import React, {Component} from 'react';
import Navbar from './Component/NavBar';
import Footnote from './Component/Footnote';
import {Link } from "react-router-dom";
import classNames from "classnames";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default class Interactive extends Component {
  render() {
    return (
      <div className="Interactive">
        <Navbar />
        <center className="paddingtop100">
          <div className="interactive-project">
            <a href="https://youtu.be/0-Ngf4_q-EA" target="_blank">
              <img className="interactive-img" src="img/blooming-flower.png" alt="Blooming Flower"/>
              <p className="interactive-title">Blooming Flower</p>
            </a>
          </div>
          <div className="interactive-project">
            <a href="https://youtu.be/wv0huFyQkLE" target="_blank">
              <img className="interactive-img" src="img/a-world.png" alt="The World From My Hands"/>
              <p className="interactive-title">The World From My Hands</p>
            </a>
          </div>
          <div className="interactive-project">
            <a href="https://youtu.be/l7tdk8AF210" target="_blank">
              <img className="interactive-img" src="img/vest-memo.png" alt="The Vest of Memories"/>
              <p className="interactive-title">The Vest of Memories</p>
            </a>
          </div>
        </center>
        <div className="previous-next">
          <div className="previous">
            <Link to = "/#design">
              <p>see more</p>
              <h1 className="home-project-title">&#10229; Design Projects</h1>
            </Link>
          </div>
          <div className="next">
            <Link to = "/about">
              <p>get to know more</p>
              <h1 className="home-project-title">About Me &#10230;</h1>
            </Link>
          </div>
        </div>
        <Footnote/>
      </div>
    );
  }
}