import React, {Component} from 'react';
import Navbar from './../../Component/NavBar';
import Footnote from './../../Component/Footnote';
import InteractiveNav from './../../InteractiveNav';
import {Link } from "react-router-dom";
import './../../interactive.css';

export default class Interactive extends Component {
  componentDidMount(){
    document.title = "The Vest of Memories | Ploy Pruekcharoen"
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
              <h2>The Vest of Memories</h2>
                <br/>
                <img className="paddingtop30" src="img/vestmemo/vm4.png" alt="The Vest of Memories Project"/>
                <p className="paddingtop30">
                  With the concept of "sentience" and my interest in exploring the human's state of feelings and mind, 
                  I worked on this project with the idea of nostalgia. The pandemic world makes it difficult for people 
                  to communicate and gather, so I created a wearable piece that brings the old memories back to me when 
                  I interact with it.
                </p>
                <img className="paddingtop30" src="img/vestmemo/vm1.png" alt="The Vest of Memories Project"/>
                <p className="paddingtop30">
                  I would like to become a part of the project, so my idea is to make myself a 'canvas' that illustrates 
                  those memories. I started by sewing the vest and attached an LED at the center of it. I used conductive 
                  threads to connect the LED and the ultrasonic sensor to the breadboard. The way I interact with this vest 
                  is to move my hand near the ultrasonic sensor, which has been placed next to where the heart is supposed 
                  to locate inside the body. If the distance between my hand and the ultrasonic sensor is close enough, the 
                  LED will light up and the video containing my memories will be triggered to play.
                </p>
                <img className="paddingtop30" src="img/vestmemo/vm2.png" alt="The Vest of Memories Project"/>
                <p className="paddingtop30">
                  For the coding part, I used Arduino and Python. I received the serial data of distance between my hand and 
                  the ultrasonic sensor from Arduino and used the Pyserial library in Python to read it. I then wrote the code 
                  to control the LED and the video in Python. If the distance is less than 10 cm, the LED and the video will be on. 
                  On the other hand, if the distance is more than 10 cm, the LED will be off and the video will be paused. This 
                  esture highlights the fact that these memories have been triggered by heart, and I want to convey this message 
                  through an interactive experience.
                </p>
                <img className="paddingtop30" src="img/vestmemo/vm3.png" alt="The Vest of Memories Project"/>
              </div>
              <div className="col3-start col7-end">
                <br/>
                <span>March 2021</span>
                <br/>
                <span>role: interactive artist<br/>tools: Arduino, Python, Physical Computing</span>
                <br/><br/>
                <span><a href="https://youtu.be/l7tdk8AF210">Link to the video</a></span>
              </div>

              <div className="col3-start col7-end int-nav-mobile">
                <p><Link to="/soundofhearthand">&#10229; The Sound of Heart and Hand</Link></p>
                <p><Link to="/worldfrommyhands">The World from My Hands &#10230;</Link></p>
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