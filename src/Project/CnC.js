import React, {Component} from 'react';
import Navbar from '../Component/NavBar';
import Footnote from '../Component/Footnote';
import classNames from "classnames";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default class CnC extends Component {
  render() {
    return (
      <div className="CnC">
        <Cursor />
        <Navbar />
        <div className="project-content">
          <div className="overview">
            <h1>Code&Craft Website Redesign Project</h1>
            <p>
              The new design of Thailand's growing digital product developer company — Code&Craft.
              Introduce to you the more creative, functional and promising site to learn more about Code&Craft's
              all-rounded services with its vision to combine technology, art and humanity.
            </p>
            <div className="tool">Internship Project</div>
            <div className="twocolumns project-info">
              <div className="column1">
                <p><b>Role: </b>UX/UI Designer</p>
                <p><b>Duration: </b>July - August 2019</p>
              </div>
              <div className="column2">
                <p>
                  <b>Team: </b>
                  Thun Thunkijjanukij (Developer),
                  <br/>Ginn Charoenchitrwattana (Account Executive),
                  <br/>Apichaya Thitawatkul (Account Executive)
                </p>
                <p><b>Tools: </b>Adobe Photoshop, Adobe XD</p>
              </div>
            </div>
          </div>
          <center>
            <img src="img/cnc/vision.png" alt="Code&Craft's Vision" className="main-image"></img>
          </center>

          <div className="introduce twocolumns" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <div className="background">
              <h2>Background</h2>
              <p>
                During my internship at Rabbit Digital Group, I was put into the Code&Craft team, which dealt with digital 
                experience, including website and mobile application design and development, user experience (UX), user 
                interface (UI), usability research, search engine optimization (SEO), and e-commerce service. The other interns 
                and I were tasked with <b>redesigning the Code&Craft website</b> to fulfill the following objectives:
              </p>
              <ul className="inlineblock">
                <li className="paddingright100">Easy to use</li>
                <li className="paddingright100">Create a new experience</li>
              </ul>
              <ul className="inlineblock">
                <li className="paddingright100">Good UX/UI</li>
                <li className="paddingright100">Better SEO</li>
              </ul>
            </div>
            <div className="contribution">
              <h2>My contributions</h2>
              <div className="list">
                <li><b>Analyzed</b> the old version of the website.</li>
                <li>Created <b>storyboard</b> and <b>user flow</b>.</li>
                <li><b>Designed</b> wireframes and mockups</li>
                <li>Gave a <b>presentation</b> to the managing director and the team.</li>
              </div>
            </div>
          </div>

          <div className="process" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <center>
              <h2>Design Process</h2>
              <img src="img/cnc/cnc_process.png" alt="Code&Craft Design Process"/>
            </center>
          </div>

          <div className="problem" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <center>
              <h2>Problem Statement</h2>
            </center>
            <p className="padding-center">
              Code&Craft is a digital experience agency that assists its clients to provide the best for their business. 
              With its goal to create seamless digital assets experience and effective performance using strategy, 
              design principle and cutting-edge technology, its <b>website is the main entrance</b>. To <b>redesign</b> the website is 
              the task we needed to accomplish to help Code&Craft <b>gain new clients as well as ensure its current clients 
              to stay</b>. As there are other digital experience companies outside, we need to make Code&Craft <b>outstanding</b> and 
              have triumphed over the competitors.
            </p>
          </div>

          <div className="research" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <div>
              <h2>Research</h2>
              {/* <img src="" alt="ScansIt Brainstorm"/> */}
              <p>
                I started the research by <b>visiting the current version</b> of the <a href="http://codeandcrafts.com/" target="_blank"><b>Code&Craft website</b></a> and 
                critiquing the problems I saw while playing with it. Apart from that, I also <b>interviewed the senior 
                designer</b> who had worked on designing the website to understand his idea before revamping it.
              </p>

              <p className="paddingtop50">Here are the problems I found.</p>
              <ol className="web-analyze">
                <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                  <li className="paddingtop50"><b>Single-paged</b></li>
                  <img src="img/cnc/cnc1.png" alt=""/>
                </div>
                <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                  <li className="paddingtop50"><b>No details for works</b></li>
                  <img src="img/cnc/cnc2.png" alt=""/>
                </div>
                <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                  <li className="paddingtop50"><b>No information in "About us"</b></li>
                  <img src="img/cnc/cnc3.png" alt=""/>
                </div>
                <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                  <li className="paddingtop50"><b>Not so functional map and contact information</b></li>
                  <img src="img/cnc/cnc4.png" alt=""/>
                </div>
              </ol>

              <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">

                <center>
                  <p className="paddingtop200">From the <b>interview</b>, I discovered initial ideas from the designer.</p>
                </center>

                <ol className="padding-center">
                  <li>
                    The idea of <b>astronaut</b> was used as it related to the identity of Rabbit Digital Group. For clarification, 
                    Rabbit Digital Group was originally built from the company called Rabbit’s Tale, which served the creative 
                    marketing solutions and has the logo of a moon rabbit. Thus, the astronaut had been chosen to represent 
                    the media to the moon.
                  </li>
                  <li>
                    The <b>colors</b> used on the website were from Code&Craft’s <b>corporate identity</b>, with the primary color being 
                    dodger blue and secondary colors being black and white.
                  </li>
                  <li><b>Simplicity</b> was the key element.</li>
                </ol>

              </div>

            </div>
          </div>

          <div className="ideation" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <h2>Ideation</h2>
            
            <center className="storyboard">
              <h3>Storyboarding</h3>
              <div>
                <img src="img/cnc/storyboard.png" alt="storyboard"/>
              </div>
            </center>

            {/* <h3>Information Architecture</h3> */}

            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
              <h3>Sketch</h3>
              <center>
                <div className="inline sketch">
                  <img src="img/cnc/sketch1-1.png" alt-="Code&Craft Sketch"/>
                  <img src="img/cnc/sketch1-2.png" alt-="Code&Craft Sketch"/>
                  <img src="img/cnc/sketch1-3.png" alt-="Code&Craft Sketch"/>
                </div>
              </center>
            </div>
            
            <p className="paddingtop50">
              As I had a chance to interview the designer who designed the current version of Code&Craft website, 
              I saw that the idea of astronaut and the space were interesting, Therefore, I decided to play with it. 
              Instead of being only an astronaut, the new design I sketched had a concept of <b>Space Travel</b>, which each 
              team portrayed as a different machine to bring Code&Craft to the moon.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <h3>Prototype 1</h3>
            <div className="web-box">
              <div className="wireframe">
                <img src="img/cnc/wireframe1.jpg" alt="Code&Craft 1st prototype"/>
              </div>
              <div className="scroll-box sb1">
                <img src="img/cnc/wireframe1.jpg" alt="Code&Craft 1st prototype"/>
              </div>
            </div>
          </div>          

          {/* <center>
            <div className="wireframe paddingtop100">
              <input type="checkbox" id="zoomCheck"/>
                <label for="zoomCheck">
                  <img src="img/cnc/wireframe1.jpg" alt="Code&Craft 1st prototype"/>
                </label>
            </div>
          </center> */}

          <div className="iteration" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <h3>Iteration 1</h3>
            <b>Comments</b>
            <ul>
              <li>Still over scrolling.</li>
              <li>Not so interesting UI.</li>
              <li>How does it differ from the current version?</li>
            </ul>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <h3>Prototype 2</h3>
            <div className="web-box">
              <div className="wireframe">
                <img src="img/cnc/wireframe2.jpg" alt="Code&Craft 2nd prototype"/>
              </div>
              <div className="scroll-box sb2">
                <img src="img/cnc/wireframe2.jpg" alt="Code&Craft 2nd prototype"/>
              </div>
            </div>
          </div>

          <div className="iteration" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <h3>Iteration 2</h3>
            <b>Comments</b>
            <ul>
              <li>Does not have a lot of changes.</li>
              <li>Why choose line stroke icons?</li>
              <li>The secondary color looks more outstanding than the primary one.</li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <h3>Prototype 3</h3>
            <div className="web-box">
              <div className="wireframe">
                <img src="img/cnc/wireframe3.jpg" alt="Code&Craft 3rd prototype"/>
              </div>
              <div className="scroll-box sb3">
                <img src="img/cnc/wireframe3.jpg" alt="Code&Craft 3rd prototype"/>
              </div>
            </div>
          </div>

          <div className="iteration" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <h3>Iteration 3</h3>
            <b>Comments</b>
            <ul>
              <li>Better UI.</li>
              <li>Customers only see one service.</li>
              <li>Why change the old concept to this concept?</li>
            </ul>
          </div>

          <div className="solution" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <h3>Brand Guidelines</h3>
            <center>
              <div className="solution-intro paddingtop50">
                <img src="img/cnc/moodboard.jpg" alt="Code&Craft Moodboard" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000"/>
                <img src="img/cnc/photography.jpg" alt="Code&Craft Photography Guide" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000"/>
                <img src="img/cnc/font.jpg" alt="Code&Craft Font Guide" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000"/>
              </div>
            </center>
            
            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
              <h2>Final Solution</h2>
              <div className="web-box paddingtop50">
                <div className="wireframe">
                  <img src="img/cnc/wireframe4.jpg" alt="Code&Craft 4th prototype"/>
                </div>
                <div className="scroll-box sb4">
                  <img src="img/cnc/wireframe4.jpg" alt="Code&Craft 4th prototype"/>
                </div>
              </div>

              {/* <p className="paddingtop50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p> */}
            </div>

          </div>

          <div className="next padding-center" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <center>
              <h2>Next Steps</h2>
            </center>
            <p>
              The presentation went well and there were some comments we could bring to evaluate to improve our web, 
              such as a back-to-top button, <b>considering more on competitive analysis</b>; as well as improve on our presentation 
              such as <b>adding the old concept and led to why we changed it to the new concept</b>. Due to the limited time, 
              we only finished the landing page of the desktop version. However, we would like to <b>develop the other pages </b>
              including Services, Works, About Us, and Contact; on which we already brainstormed some ideas. Moreover, to 
              enhance the accessibility, we would like to work on the <b>mobile version</b> of the website as well.
            </p>

            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
              <center>
                <h2>Lessons Learned</h2>
              </center>

              <b>Iteration is the key.</b>
              <p>
                Design is not only about moving forward but also about coming back to look at what we have and see 
                if we can improve it. I have learned a lot from this project that we can always make the design better 
                by looking at it over and over again. Even though it may seem like we are standing at the same place, 
                we have got to know the place more. I did not feel bad making many new designs because I see that it 
                has been improved every time, and I like the process of making improvement.
              </p>
              <b>Negative feedback always has a positive side.</b>
              <p>
                As this work was assigned within the real-business environment, I felt pressured at first. Even though it 
                was only a project for interns, the commentators gave us genuine feedback to make us work better. Sometimes 
                those comments were not good with our feelings, but they were good for improving. When I heard the 
                critiques, I tried not to overthink about the bad side of them. Rather, I took them to be the new standard 
                for my new design, and I can see in the end that I have grown and learned a lot from them.
              </p>
            </div>

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