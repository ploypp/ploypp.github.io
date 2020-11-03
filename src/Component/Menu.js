import React from "react";
import {Link } from "react-router-dom";

export default ({ close }) => (
  <div className="Menu">
    <ul>
      <Link to = "/" className="nav-link"><li onClick={close}>Work</li></Link>
      <Link to = "/About" className="nav-link"><li onClick={close}>About</li></Link>
      <li onClick={close}><a href="https://drive.google.com/file/d/1V-zYSe3f6kY6Uri4Ioi3p9R3u_jxmeyn/view?usp=sharing" target="_blank">Resume</a></li>
      <Link to = "/snapanddraw" className="nav-link"><li onClick={close}>Snap&Draw</li></Link>
    </ul>
  </div>
);