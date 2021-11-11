import React from "react";
import {Link } from "react-router-dom";

export default ({ close }) => (
  <div className="Menu">
    <ul>
      <a href="/#design"><li onClick={close}>design</li></a>
      <a href="/interactive"><li onClick={close}>interactive</li></a>
      <a href="/about"><li onClick={close}>about</li></a>
      <li onClick={close}><a href="/Ploypilin_Pruekcharoen_Resume.pdf" target="_blank" rel="noreferrer">resume</a></li>
    </ul>
  </div>
);