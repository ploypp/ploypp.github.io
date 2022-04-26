import React, { Component } from "react";
import Popup from "reactjs-popup";
import Burger from "./Burger";
import Menu from "./Menu";
import {Link } from "react-router-dom";
import Scroll from "react-scroll";
const ScrollLink = Scroll.Link;

const contentStyle = {
  background: "rgba(0,0,0,0)",
  width: "80%",
  border: "none"
};

export default class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <div className="Logo left">
          <Link to = "/">
              ploypil.in
          </Link>
        </div>
        <div className="nav-info right">
          
          <ScrollLink
              to="design"
            >
              <Link to = "/">
              design
              </Link>
          </ScrollLink>
          {/* <Link to="/#design">design</Link> */}
          <Link to = "/interactive">interactive</Link>
          <Link to = "/about">about</Link>
          <a href="/Ploypilin_Pruekcharoen_Resume.pdf" target="_blank" rel="noreferrer">resume</a>
        </div>
        <div className="right">
          <Popup
            modal
            overlayStyle={{ background: "rgba(0,0,0,1" }}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={open => <Burger open={open} />}
          >
            {close => <Menu close={close} />}
          </Popup>
        </div>
      </nav>
      );
    }
}