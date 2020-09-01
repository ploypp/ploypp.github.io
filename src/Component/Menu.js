import React from "react";
import {Link } from "react-router-dom";

export default ({ close }) => (
  <div className="Menu">
    <ul>
      <Link to = "/" className="nav-link"><li onClick={close}>Works</li></Link>
      <Link to = "/About" className="nav-link"><li onClick={close}>About</li></Link>
      <li onClick={close}>Resume</li>
      <li onClick={close}>Interest</li>
    </ul>
  </div>
);
