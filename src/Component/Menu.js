import React from "react";
import {Link } from "react-router-dom";

export default ({ close }) => (
  <div className="Menu">
    <ul>
      <a href="#design"><li onClick={close}>DESIGN</li></a>
      <a href="#interactive"><li onClick={close}>INTERACTIVE</li></a>
      <a href="#about"><li onClick={close}>ABOUT</li></a>
      <li onClick={close}><a href="https://drive.google.com/file/d/1tPM7DYwudUTJ-ryL2wGG5rgi2H8VuGDp/view?usp=sharing" target="_blank">RESUME</a></li>
    </ul>
  </div>
);