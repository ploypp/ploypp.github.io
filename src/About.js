import React, {Component} from 'react';
import Navbar from './Component/NavBar';
import Footnote from './Component/Footnote';
import classNames from "classnames";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default class About extends Component {
  render() {
    return (
        <div className="About">
          {/* <Cursor /> */}
          <Navbar />
          <div className="wrapper">
            <div className="col2-start col4-end">
              <div>
                <h1>Hello, nice to meet you!</h1>
                <img src="img/me3.jpg" alt="My Portrait" className="me"/>
              </div>
            </div>
            <div className="col5-start col8-end">
              <div className="aboutme2 paddingtop50">
                <p>👋 I'm Ploy.</p>
                <p>
                  🌱 I'm currently pursuing a Bachelor degree in <u>Human Centered Design & Engineering</u> with a minor in Informatics at 
                  the University of Washington, Seattle.
                </p>
                <p>
                  👀 I'm interested in user experience design, human-computer interaction, and interactive media/art.
                  As an aspiring designer, I believe that design is a possibility-driven tool that can better improve the community. 
                  I passionate about applying design skills to help people accomplishing their goals.
                </p>
                <p>
                  📫 Feel free to reach out via email: <a href="mailto:ploypp@uw.edu">ploypp@uw.edu </a>
                  or <a href="https://www.linkedin.com/in/ploypruekcharoen/">LinkedIn</a>. 
                </p>
                <p>
                  💞️ I appreciate your time here a lot! Let's get in touch!
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