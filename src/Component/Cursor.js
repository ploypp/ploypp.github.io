import React, { Component } from "react";
import classNames from "classnames";

const Cursor = () => {
  // if (typeof navigator !== 'undefined' && isMobile()) return null;
  const [position, setPosition] = React.useState({x: 0, y: 0});
  const [hidden, setHidden] = React.useState(false);
  const [linkHovered, setLinkHovered] = React.useState(false);

  React.useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, []);

  const [clicked, setClicked] = React.useState(false);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach(el => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };

  const cursorClasses = classNames(
  'cursor',
    {
      'cursor--clicked': clicked,
      'cursor--hidden': hidden,
      'cursor--link-hovered': linkHovered
    }
  );

  const onMouseMove = (e) => {
    setTimeout(() => setPosition({x: e.pageX, y: e.pageY}), 100);
  }
}

export default class Cursor extends Component {
  render() {
      return (
      <div className={cursorClasses}
        style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}/>
    );
  }
}