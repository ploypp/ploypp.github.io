import React, {Component} from 'react';
import Navbar from './Component/NavBar';
import Footnote from './Component/Footnote';
import {Link } from "react-router-dom";

export default class About extends Component {
  componentDidMount(){
    document.title = "About | Ploy Pruekcharoen"
  }
  render() {
    return (
        <div className="About">
          <Navbar />
          <div className="wrapper">
            <div className="col2-start col4-end">
              <div>
                <h1>hello, nice to meet you!</h1>
                <img src="img/me.gif" alt="My Portrait" className="me"/>
              </div>
            </div>
            <div className="col5-start col8-end">
              <div className="aboutme2 paddingtop100">
                <p>👋 My name is Ploy. I use she/her/hers pronouns.</p>
                <p>
                  🌱 I'm currently pursuing a Master's degree in <b>Integrated Design &amp; Media</b> at NYU Tandon School of Engineering. 
                  In Spring 2022, I received a Bachelor degree in <b>Human Centered Design & Engineering</b> from the University of Washington.
                </p>
                <p>
                  👀 I'm passionate about creating meaningful experiences through design and art. Growing up in 
                  a remote area in Thailand, I also am interested in <b>environmental values and cultural diversity</b>. My personal background majorly
                  drives me to work on creative projects and research related to humans and the environment.
                  <ul>
                  <li><a href="https://medium.com/@ploypp/learn-the-heart-of-hmong-culture-through-hmong-embroidery-9f19df6f608a" target="_blank" rel="noreferrer">Ethnographic research on Hmong embroidery</a></li>
                  <li><a href="https://medium.com/@ploypp/computer-as-a-medium-for-human-environment-interaction-the-color-of-nature-tangible-interactive-16865e213ad1" target="_blank" rel="noreferrer">A proposed interactive art that enhances interactions between human, computer, and environment</a></li>
                  </ul>
                </p>
                <p>
                  💞️ I appreciate your time here a lot! <a href="mailto:ploypilinpcr@gmail.com">Let's get in touch!</a>
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="col2-start col7-end">
              <div>
                <p><b>now listening: </b>check out my <a href="https://open.spotify.com/playlist/1VRyoaF9WgAZnEoUgE2Bgl?si=4f0oB-2kQqWJh4D7_qvZ3Q" target="_blank" rel="noreferrer">spotify playlist</a></p>
                <b>now reading: </b>
                <ul>
                  <li>The VR Book: Human-Centered Design for Virtual Reality <i>by Jason Jerald</i></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="previous-next">
            <div className="previous">
              <Link to = "/interactive">
                <p>see more</p>
                <h1 className="home-project-title">&#10229; interactive projects</h1>
              </Link>
            </div>
            <div className="next">
              <a href="https://medium.com/@ploypp" target="_blank" rel="noreferrer">
                <p>check out my</p>
                <h1 className="home-project-title">medium posts &#10230;</h1>
              </a>
            </div>
          </div>
          <Footnote/>
        </div>
    );
  }
}