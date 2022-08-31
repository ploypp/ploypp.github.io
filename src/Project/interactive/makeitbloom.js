import React, {Component} from 'react';
import Navbar from './../../Component/NavBar';
import Footnote from './../../Component/Footnote';
import InteractiveNav from './../../InteractiveNav';
import {Link } from "react-router-dom";
import './../../interactive.css';

export default class Interactive extends Component {
  componentDidMount(){
    document.title = "Make It Bloom | Ploy Pruekcharoen"
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
                <h2>Make It Bloom</h2>
                <br/>
                <img className="paddingtop30" src="img/makeitbloom/mib1.png" alt="Make It Bloom Project"/>
                <p className="paddingtop30">
                  This project was created with a goal to help people reconnect to nature, using machine learning of 
                  hand gestures and flower photos to control the handcrafted flower.
                </p>
                <img className="paddingtop30" src="img/makeitbloom/mib4.png" alt="Make It Bloom Project"/>
                <p className="paddingtop30">
                  One day during the pandemic, I realized that it had been so long since last time I walked under trees and appreciated 
                  the natural surroundings. Although I understand the objectives of having COVID guidelines, I could not refuse that social 
                  distancing and face coverings limited the chance to fully 'feel' nature. While we still have to protect ourselves and the 
                  community, it would be nice if there is something that could remind us about the feeling of nature.
                </p>
                <img className="paddingtop30" src="img/makeitbloom/mib2.png" alt="Make It Bloom Project"/>
                <img className="paddingtop30" src="img/makeitbloom/mib3.png" alt="Make It Bloom Project"/>
                <p className="paddingtop30">
                  I used Microsoft Lobe to train the machine learning model of bud and blooming flowers as well as the hand gestures. 
                  Then I ran the Python code on Adafruit Braincraft and used it as an interface for interaction. 
                  A camera that is connected to the Adafruit BrainCraft will capture the interaction and trigger a servo motor to 
                  change the state of handcrafted flower, either bud or blooming.
                </p>
                <img className="paddingtop30" src="img/makeitbloom/mib5.png" alt="Make It Bloom Project"/>
              </div>
              <div className="col3-start col7-end">
                <br/>
                <span>June 2021</span>
                <br/>
                <span>role: interactive artist<br/>tools: Adafruit Braincraft, Python, Lobe, Physical Computing, Digital Fabrication, Machine Learning</span>
                <br/><br/>
                <span><a href="https://youtu.be/0-Ngf4_q-EA">Link to the video</a></span>
              </div>
              <div className="col3-start col7-end int-nav-mobile">
                <p><Link to="/colorizedcloud">&#10229; Colorized Cloud</Link></p>
                <p><Link to="/soundofhearthand">The Sound of Heart and Hand &#10230;</Link></p>
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