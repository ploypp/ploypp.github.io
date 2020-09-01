import React, { Component } from "react";
import Popup from "reactjs-popup";
import Burger from "./Burger";
import Menu from "./Menu";
import {Link } from "react-router-dom";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    marginTop: "40px"
  };
  const contentStyle = {
    background: "rgba(0,0,0,0)",
    width: "80%",
    border: "none"
  };

export default class Navbar extends Component {

  render() {
    return (
      <nav className="Navbar">
        <div className="Logo">
          <Link to = "/">
              Pp
          </Link>
        </div>
        <div className="Hamburger">
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