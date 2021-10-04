import React from "react";
import {Link } from "react-router-dom";

export default ({ close }) => (
  <div className="Menu">
    <ul>
      <Link to = "/design" className="nav-link"><li onClick={close}>DESIGN</li></Link>
      <Link to = "/interactive" className="nav-link"><li onClick={close}>INTERACTIVE</li></Link>
      <Link to = "/about" className="nav-link"><li onClick={close}>ABOUT</li></Link>
      <li onClick={close}><a href="https://drive.google.com/file/d/1tPM7DYwudUTJ-ryL2wGG5rgi2H8VuGDp/view?usp=sharing" target="_blank">RESUME</a></li>
    </ul>
  </div>
);