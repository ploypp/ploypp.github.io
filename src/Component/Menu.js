import React from "react";
import {Link } from "react-router-dom";

export default ({ close }) => (
  <div className="Menu">
    <ul>
      <a href="/#design"><li onClick={close}>design</li></a>
      <a href="/interactive"><li onClick={close}>interactive</li></a>
      <a href="/about"><li onClick={close}>about</li></a>
      <li onClick={close}><a href="https://drive.google.com/file/d/1aRxGnr9faSMWo8gbUeCIKEz71bKxiDa6/view?usp=sharing" target="_blank">RESUME</a></li>
    </ul>
  </div>
);