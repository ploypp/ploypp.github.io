import React from 'react';
import './Cursor.css';
import classNames from "classnames";

class Cursor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: {x: 0, y: 0},
      hidden: true,
      scale: 1,
      picture: null
    };
  }

  componentDidMount() {
    document.addEventListener("mousemove", (e) => this.onMouseMove(e));
    document.addEventListener("mouseenter", () => this.onMouseEnter());
    document.addEventListener("mouseleave", () => this.onMouseLeave());
    if (document.querySelector(".experience-text") != null) {
      document.querySelector(".experience-text").addEventListener("mouseover", () => this.onMouseOver(35, "/img/experience.gif"));
      document.querySelector(".experience-text").addEventListener("mouseout", () => this.onMouseOut());

      document.querySelector(".research-text").addEventListener("mouseover", () => this.onMouseOver(35, "/img/research.gif"));
      document.querySelector(".research-text").addEventListener("mouseout", () => this.onMouseOut());

      document.querySelector(".interactive-text").addEventListener("mouseover", () => this.onMouseOver(35, "/img/interactive-art.gif"));
      document.querySelector(".interactive-text").addEventListener("mouseout", () => this.onMouseOut());

      document.querySelector(".home-famapp").addEventListener("mouseover", () => this.onMouseOver(35, "/img/famapp/famapp-home.png"));
      document.querySelector(".home-famapp").addEventListener("mouseout", () => this.onMouseOut());

      document.querySelector(".home-link").addEventListener("mouseover", () => this.onMouseOver(35, "/img/link/link-home.png"));
      document.querySelector(".home-link").addEventListener("mouseout", () => this.onMouseOut());

      document.querySelector(".home-scansit").addEventListener("mouseover", () => this.onMouseOver(35, "/img/scansit/scansit-home.png"));
      document.querySelector(".home-scansit").addEventListener("mouseout", () => this.onMouseOut());

      document.querySelector(".home-waparks").addEventListener("mouseover", () => this.onMouseOver(35, "/img/waparks/waparks-home.png"));
      document.querySelector(".home-waparks").addEventListener("mouseout", () => this.onMouseOut());
    }
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", (e) => this.onMouseMove(e));
    document.removeEventListener("mouseenter", () => this.onMouseEnter());
    document.removeEventListener("mouseleave", () => this.onMouseLeave());
  }

  onMouseMove(e) {
    this.setState(state => ({
      position: {x: e.clientX, y: e.clientY},
      hidden: false
    }));
  }

  onMouseEnter() {
    this.setState(state => ({
      hidden: false
    }));
  }

  onMouseLeave() {
    this.setState(state => ({
      hidden: true
    }));
  }

  onMouseOver(scale, picture) {
    this.setState(state => ({
      scale,
      picture
    }));
  }

  onMouseOut() {
    this.setState(state => ({
      scale: 1,
      picture: null
    }));
  }

  render() {
    const cursorClasses = classNames(
      'cursor',
      {
        'cursor--hidden': this.state.hidden,
        'cursor--media': this.state.picture != null
      }
    )

    let style={
      left: `${this.state.position.x}px`,
      top: `${this.state.position.y}px`,
      width: `${7 * this.state.scale}px`,
      height: `${7 * this.state.scale}px`,
      //transform: `translate(-50%, -50%) scale(${this.state.scale})`
    };
    if (this.state.picture != null) {
      style["backgroundImage"] = `url(${this.state.picture})`;
    }

    return (
      <div id="cursor" className={cursorClasses}
        style={style}
      />);
  }
}

export default Cursor;