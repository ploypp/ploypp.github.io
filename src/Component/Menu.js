import React from "react";
import {Link } from "react-router-dom";

export default ({ close }) => (
  <div className="Menu">
    <ul>
      <Link to = "/" className="nav-link"><li onClick={close}>UX</li></Link>
      <Link to = "/graphic" className="nav-link"><li onClick={close}>Graphic</li></Link>
      <Link to = "/About" className="nav-link"><li onClick={close}>About</li></Link>
      <li onClick={close}><a href="https://drive.google.com/file/d/1tPM7DYwudUTJ-ryL2wGG5rgi2H8VuGDp/view?usp=sharing" target="_blank">Resume</a></li>
    </ul>
  </div>
);