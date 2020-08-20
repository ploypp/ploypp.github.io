import React from "react";

export default ({ open, ...props }) => (
    <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
        <div className="bar1" key="b1" />
        <div className="bar2" key="b2" />
    </div>
);