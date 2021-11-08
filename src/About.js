import React, {Component} from 'react';
import Navbar from './Component/NavBar';
import Footnote from './Component/Footnote';
import {Link } from "react-router-dom";
import classNames from "classnames";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default class About extends Component {
  render() {
    return (
        <div className="About">
          <Navbar />
          <div className="wrapper">
            <div className="col2-start col4-end">
              <div>
                <h1>hello, nice to meet you!</h1>
                <img src="img/me.gif" alt="My Portrait" className="me"/>
              </div>
            </div>
            <div className="col5-start col8-end">
              <div className="aboutme2 paddingtop50">
                <p>👋 My name is Ploy.</p>
                <p>
                  🌱 I'm currently pursuing a Bachelor degree in <b>Human Centered Design & Engineering</b> at 
                  the University of Washington.
                </p>
                <p>
                  👀 I'm passionate about creating meaningful experiences through design and art. Growing up in 
                  a remote area in Thailand, I also am interested in <b>environmental values and cultural diversity</b>. My personal background majorly
                  drives me to work on creative projects and research related to humans and the environment.
                  <ul>
                  <li><a href="https://medium.com/@ploypp/learn-the-heart-of-hmong-culture-through-hmong-embroidery-9f19df6f608a" target="blank">Ethnographic research on Hmong embroidery</a></li>
                  <li><a href="https://medium.com/@ploypp/computer-as-a-medium-for-human-environment-interaction-the-color-of-nature-tangible-interactive-16865e213ad1" target="blank">A proposed interactive art that enhances interactions between human, computer, and environment</a></li>
                  </ul>
                </p>
                <p>
                  💞️ I appreciate your time here a lot! <a href="mailto:ploypp@uw.edu">Let's get in touch!</a>
                </p>
              </div>
            </div>
            
            {/* <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" once="true">
              <p className="paddingtop50">If you want to know me a little more, here are some bits of my life.</p>
              <ul>
                <li>
                  I love taking <b>film photos</b>. I like it when I have some time to think before
                  pressing the shutter button. I also love the process of waiting. <i>Yeah, you didn't read it wrong. </i>
                  It's exciting to wait for the result and some unintended mistakes. And of course, they are
                  all my favorite mistakes.
                </li>
                <li>
                  I also love <b>watching movies and documentaries</b>. My favorite ones, as of now, are <i>Chungking Express</i>,
                  <i> The Grand Budapest Hotel</i> and <i>Oasis: Supersonic</i> (I'm a big fan of Oasis, too!)
                </li>
                <li>
                  I like to <b>draw</b>. It is the best way for me to relax and express myself. Spending time alone with a colored pencil 
                  (now kinda more toward Apple pencil) is the most satisfying moment!
                </li>
              </ul>
            </div> */}
          </div>
          <div className="previous-next">
            <div className="previous">
              <Link to = "/interactive">
                <p>see more</p>
                <h1 className="home-project-title">&#10229; interactive projects</h1>
              </Link>
            </div>
            <div className="next">
              <a href="https://medium.com/@ploypp" target="_blank">
                <p>check out my</p>
                <h1 className="home-project-title">medium posts &#10230;</h1>
              </a>
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

// const Cursor = () => {
//   // if (typeof navigator !== 'undefined' && isMobile()) return null;
//   const [position, setPosition] = React.useState({x: 0, y: 0});
//   const [hidden, setHidden] = React.useState(false);
//   const [linkHovered, setLinkHovered] = React.useState(false);

//   React.useEffect(() => {
//     addEventListeners();
//     handleLinkHoverEvents();
//     return () => removeEventListeners();
//   }, []);

//   const [clicked, setClicked] = React.useState(false);

//   const addEventListeners = () => {
//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("mouseenter", onMouseEnter);
//     document.addEventListener("mouseleave", onMouseLeave);
//     document.addEventListener("mousedown", onMouseDown);
//     document.addEventListener("mouseup", onMouseUp);
//   };

//   const removeEventListeners = () => {
//     document.removeEventListener("mousemove", onMouseMove);
//     document.removeEventListener("mouseenter", onMouseEnter);
//     document.removeEventListener("mouseleave", onMouseLeave);
//     document.removeEventListener("mousedown", onMouseDown);
//     document.removeEventListener("mouseup", onMouseUp);
//   };

//   const onMouseDown = () => {
//     setClicked(true);
//   };

//   const onMouseUp = () => {
//     setClicked(false);
//   };

//   const onMouseLeave = () => {
//     setHidden(true);
//   };

//   const onMouseEnter = () => {
//     setHidden(false);
//   };

//   const handleLinkHoverEvents = () => {
//     document.querySelectorAll("a").forEach(el => {
//       el.addEventListener("mouseover", () => setLinkHovered(true));
//       el.addEventListener("mouseout", () => setLinkHovered(false));
//     });
//   };

//   const cursorClasses = classNames (
//   'cursor',
//     {
//       'cursor--clicked': clicked,
//       'cursor--hidden': hidden,
//       'cursor--link-hovered': linkHovered
//     }
//   );

//   const onMouseMove = (e) => {
//     setTimeout(() => setPosition({x: (e.clientX - 20), y: (e.clientY - 20)}), 50);
//   }

//   return (
//     <div className={cursorClasses}
//       style={{
//       position: 'fixed',
//       transform: 'translate3d(' + position.x + 'px, ' + position.y + 'px, 0)',
//       left: 0,
//       top: 0
//     }}/>
//   );
// }