import React, {Component} from 'react';
import Navbar from './Component/NavBar';
import Footnote from './Component/Footnote';

export default class About extends Component {
  render() {
    return (
        <div className="About">
          <Navbar />
          <body>
            <h1>Let's know more about me!</h1>
          </body>
          <Footnote/>
        </div>
    );
  }
}