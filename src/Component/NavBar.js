import React, { Component } from "react";
import Popup from "reactjs-popup";
import Burger from "./Burger";
import Menu from "./Menu";
import {Link } from "react-router-dom";
import classnames from "classnames";

const contentStyle = {
  background: "rgba(0,0,0,0)",
  width: "80%",
  border: "none"
};

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <nav className={classnames("Navbar", {
        "Navbar--hidden": !this.state.visible
      })}>
        <div className="Logo left">
          <Link to = "/">
              ploypil.in
          </Link>
        </div>
        <div className="nav-info right">
          <Link to = "/#design">design</Link>
          <Link to = "/interactive">interactive</Link>
          <Link to = "/about">about</Link>
          <a href="/Ploypilin_Pruekcharoen_Resume.pdf" target="_blank" rel="noreferrer">resume</a>
        </div>
        <Popup
          modal
          overlayStyle={{ background: "rgba(0,0,0,1" }}
          contentStyle={contentStyle}
          closeOnDocumentClick={false}
          trigger={open => <Burger open={open} />}
        >
          {close => <Menu close={close} />}
        </Popup>
      </nav>
      );
    }
}