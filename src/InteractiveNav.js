import React, { Component } from "react";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

const contentStyle = {
  background: "rgba(0,0,0,0)",
  width: "80%",
  border: "none"
};

export default class InteractiveNav extends Component {
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
      <nav className={classnames("InteractiveNav", {
        "InteractiveNav--hidden": !this.state.visible
      })}>
        <div className="int-project-column int-nav-info">
          <p><NavLink activeStyle={{ color:'#d7d8aa', textDecorationColor: '#d7d8aa' }} to="/interactive">Unspeakable</NavLink></p>
          <p><NavLink activeStyle={{ color:'#d7d8aa', textDecorationColor: '#d7d8aa' }} to="/colorizedcloud">Colorized Cloud</NavLink></p>
          <p><NavLink activeStyle={{ color:'#d7d8aa', textDecorationColor: '#d7d8aa' }} to="/makeitbloom">Make It Bloom</NavLink></p>
          <p><NavLink activeStyle={{ color:'#d7d8aa', textDecorationColor: '#d7d8aa' }} to="/soundofhearthand">The Sound of Heart and Hand</NavLink></p>
          <p><NavLink activeStyle={{ color:'#d7d8aa', textDecorationColor: '#d7d8aa' }} to="/vestmemories">The Vest of Memories</NavLink></p>
          <p><NavLink activeStyle={{ color:'#d7d8aa', textDecorationColor: '#d7d8aa' }} to="/worldfrommyhands">The World from My Hands</NavLink></p> 
        </div>
      </nav>
      );
    }
}