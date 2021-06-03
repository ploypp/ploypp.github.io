import React, {Component} from 'react';
import Navbar from './Component/NavBar';
import Footnote from './Component/Footnote';
import classNames from "classnames";
import Gallery from "react-photo-gallery";

const photos = [
  {
    src: 'img/gallery/graphic/1.jpg',
  },
  {
    src: 'img/gallery/graphic/2.png',
  },
  {
    src: 'img/gallery/graphic/3.jpg',
  },
  {
    src: 'img/gallery/graphic/4.jpg',
  },
  {
    src: 'img/gallery/graphic/5.jpg',
  },
  {
    src: 'img/gallery/graphic/6.png',
  },
  {
    src: 'img/gallery/graphic/7.png',
  },
  {
    src: 'img/gallery/graphic/8.png',
  },
  {
    src: 'img/gallery/graphic/9.png',
  },
  {
    src: 'img/gallery/graphic/11.png',
  },
  {
    src: 'img/gallery/graphic/12.jpg',
  },

];

export default class ArtAndGraphic extends Component {
  render() {
    return (
        <div className="SnapAndDraw">
          {/* <Cursor /> */}
          <Navbar />
          <div className="gallery">
            <div className="grow">
              <div className="gcolumn">
                <img src="img/gallery/graphic/6.png"/>
                <img src="img/gallery/graphic/1.jpg"/>
                <img src="img/gallery/graphic/13.png"/>
              </div>
              <div className="gcolumn">
                <img src="img/gallery/graphic/11.png"/>           
                <img src="img/gallery/graphic/7.png"/>
                <img src="img/gallery/graphic/14.png"/>
                <img src="img/gallery/graphic/12.jpg"/>
              </div>
              <div className="gcolumn">
                <img src="img/gallery/graphic/3.jpg"/>
                <img src="img/gallery/graphic/9.png"/>
                <img src="img/gallery/graphic/8.png"/>              
                <img src="img/gallery/graphic/2.png"/>
              </div>
            </div>
            {/* <div className="photo">
              <Gallery photos={photos} />
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