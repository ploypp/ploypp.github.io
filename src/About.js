import React, {Component} from 'react';
import Navbar from './Component/NavBar';
import Footnote from './Component/Footnote';
import classNames from "classnames";

export default class About extends Component {
  render() {
    return (
        <div className="About">
          <Cursor />
          <Navbar />
          <div>
            <h1>Hello, nice to meet you! </h1>
            <div className="container">
              <div className="image">
                <img src="img/me2.jpg" alt="My Portrait" className="me"/>
              </div>
              <div className="text">
                <p>
                  I'm currently pursuing a Bachelor degree in <b>Human Centered Design & Engineering</b> with a minor in <b>Informatics</b> at 
                  the University of Washington, Seattle.
                </p>
                <p>If you want to know me a little more, here are some bits of my life.</p>
                <ul>
                  <li>
                    I love taking <b>film photos</b>! Old-school? Not really. I like it when I have some time to think before
                    pressing the shutter button. I also love the process of waiting. <i>Yeah, you didn't read it wrong. </i>
                    It's exciting to wait for the result and probably some unintended mistakes. And of course, they are
                    all my favorite mistakes.
                  </li>
                  <li>
                    I also love <b>watching movies and documentaries</b>. My favorite ones, as of now, are <i>Chungking Express</i>,
                    <i>The Grand Budapest Hotel</i>, and <i>Oasis: Supersonic</i> (I'm a big fan of Oasis, too!)
                  </li>
                  <li>
                    I like to <b>draw</b>. It is the best way for me to relax and express myself. Spending time alone with colored pencil 
                    (actually turned to iPad now) is the most satisfying moment!
                  </li>
                </ul>
              </div>
            </div>
            <div className="steptodesign">
              <p>
                My interest in design started when...
              </p>
            </div>
          </div>
          <Footnote/>
        </div>
    );
  }
}

// Cursor

// const isMobile = () => {
//   const ua = navigator.userAgent;
//   return /Android|Mobi/i.test(ua);
// };

/////////////

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

  const cursorClasses = classNames (
  'cursor',
    {
      'cursor--clicked': clicked,
      'cursor--hidden': hidden,
      'cursor--link-hovered': linkHovered
    }
  );

  const onMouseMove = (e) => {
    setTimeout(() => setPosition({x: (e.clientX - 20), y: (e.clientY - 20)}), 50);
  }

  return (
    <div className={cursorClasses}
      style={{
      position: 'fixed',
      transform: 'translate3d(' + position.x + 'px, ' + position.y + 'px, 0)',
      left: 0,
      top: 0
    }}/>
  );
}