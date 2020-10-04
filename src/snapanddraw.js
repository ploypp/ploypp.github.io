import React, {Component} from 'react';
import Navbar from './Component/NavBar';
import Footnote from './Component/Footnote';
import classNames from "classnames";
import Gallery from "react-photo-gallery";

const photos = [
  {
    src: 'img/gallery/draw/1.png',
  },
  {
    src: 'img/gallery/draw/2.png',
  },
  {
    src: 'img/gallery/draw/3.png',
  },
  {
    src: 'img/gallery/draw/4.png',
  },
  {
    src: 'img/gallery/draw/5.png',
  },
  {
    src: 'img/gallery/draw/6.png',
  },
  {
    src: 'img/gallery/draw/7.png',
  },
  {
    src: 'img/gallery/draw/8.png',
  },
  {
    src: 'img/gallery/snap/1.jpeg',
  },
  {
    src: 'img/gallery/snap/2.jpeg',
  },
  {
    src: 'img/gallery/snap/3.jpeg',
  },
  {
    src: 'img/gallery/snap/6.jpeg',
  },
  {
    src: 'img/gallery/snap/4.jpeg',
  },
  {
    src: 'img/gallery/snap/8.jpeg',
  },
  {
    src: 'img/gallery/snap/5.jpeg',
  },
  {
    src: 'img/gallery/snap/7.jpeg',
  },

];

export default class SnapAndDraw extends Component {
  render() {
    return (
        <div className="SnapAndDraw">
          <Cursor />
          <Navbar />
          <div className="gallery paddingtop100">
            <div className="photo">
              <Gallery photos={photos} />
            </div>
          </div>
          {/* <div className="inline">
            <div><img src="img/gallery/snap/1.jpeg"/></div>
            <div><img src="img/gallery/snap/2.jpeg"/></div>
            <div><img src="img/gallery/snap/3.jpeg"/></div>
            <div><img src="img/gallery/snap/4.jpeg"/></div>
            <div><img src="img/gallery/snap/5.jpeg"/></div>
            <div><img src="img/gallery/snap/6.jpeg"/></div>
          </div> */}
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