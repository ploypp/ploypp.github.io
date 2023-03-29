import React, { Component } from 'react';
import './index.css';
import './Component/menu.css';
import './Project/project.css';
import {Link } from "react-router-dom";
import Cursor from './Cursor';

export default class Home extends Component {
  componentDidMount(){
    document.title = "Ploy Pruekcharoen"
  }
  render() {
    return (
      <div className="Home">
        <Cursor />
        <div className="updated-intro">
          <center>
            <h1>thanks for visiting my site! please see my updated portfolio <a href="https://www.ploypruekcharoen.com/">here!</a></h1>
            <p>or proceed to the <Link to = "/old-site">old site</Link></p>
          </center>
        </div>
      </div>
    );
  }
}
