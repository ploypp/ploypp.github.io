import React, {Component} from 'react';
import Navbar from '../../Component/NavBar';
import Footnote from '../../Component/Footnote';
import InteractiveNav from '../../InteractiveNav';
import {Link } from "react-router-dom";
import './../../interactive.css';

export default class Interactive extends Component {
  componentDidMount(){
    document.title = "The Sound of Heart and Hand | Ploy Pruekcharoen"
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
              <h2>The Sound of Heart and Hand</h2>
                <br/>
                <img className="paddingtop30" src="img/soundhh/shh1.png" alt="The Sound of Heart and Hand Project"/>
                <p className="paddingtop30">
                  As a person who is always fascinated by performing arts, I have been inspired by the beauty of dance and music. 
                  During my sophomore year, I went to UW Chamber Dance Company Concert and was impressed by the feelings that the 
                  dancers convey, not with words but with body movements. With an intention to explore the connection between the 
                  inner and outer body while performing, I created an interactive object that reads a person's heart rate and 
                  movement to control sound.
                </p>
                <img className="paddingtop30" src="img/soundhh/shh2.png" alt="The Sound of Heart and Hand Project"/>
                <img className="paddingtop30" src="img/soundhh/shh3.png" alt="The Sound of Heart and Hand Project"/>
                <p className="paddingtop30">
                  Learning about the artist's mind and intention is part of knowing the art itself. My motivation for creating this 
                  interactive object is to enhance the sense of feeling using sound as a medium, to sense not only what the artist 
                  performs but also how they feel at the moment. The Sound of Heart and Hand is made in a form of wearable art using 
                  a hand glove. In the process of creating this interactive object, I used a heart rate sensor to detect the heart rate, 
                  an ultrasonic sensor to determine the distance between the artist's hand and other objects, and a speaker that makes 
                  different sounds based on heart rate and distance data received.
                </p>
              </div>
              <div className="col3-start col7-end">
                <br/>
                <span>November 2021</span>
                <br/>
                <span>role: interactive artist<br/>tools: Arduino, Arduino IDLE, Physical Computing</span>
                <br/><br/>
                <span><a href="https://youtu.be/vi8gXhpl6ig">Link to the video</a></span>
              </div>
              <div className="col3-start col7-end int-nav-mobile">
                <p><Link to="/makeitbloom">&#10229; Make It Bloom</Link></p>
                <p><Link to="/vestmemories">The Vest of Memories &#10230;</Link></p>
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