import React from "react";
import {Link } from "react-router-dom";
import Scroll from "react-scroll";
const ScrollLink = Scroll.Link;

export default ({ close }) => (
  <div className="Menu">
    <ul>
      <li><Link to = "/">design</Link></li>
      <li><Link to = "/interactive">interactive</Link></li>
      <li><Link to = "/about">about</Link></li>
      <li><a href="/Ploypilin_Pruekcharoen_Resume.pdf" target="_blank" rel="noreferrer">resume</a></li>
    </ul>
  </div>
);