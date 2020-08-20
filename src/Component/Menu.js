import React from "react";

export default ({ close }) => (
  <div className="Menu">
    <ul>
      <li onClick={close}>Work</li>
      <li onClick={close}>About</li>
      <li onClick={close}>Contact</li>
      <li onClick={close}>Interest</li>
    </ul>
  </div>
);
