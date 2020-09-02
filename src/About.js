import React, {Component} from 'react';
import Navbar from './Component/NavBar';
import Footnote from './Component/Footnote';

export default class About extends Component {
  render() {
    return (
        <div className="About">
          <Navbar />
          <body>
            <h2>Let's know more about me!</h2>
            <div>
              <img src="img/me2.jpg" className="me"></img>
              <p>Ploy</p>
            </div>
          </body>
          <Footnote/>
        </div>
    );
  }
}