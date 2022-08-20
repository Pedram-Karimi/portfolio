import "./home.css";
import { useEffect, useRef } from "react";
import { usePagePosition } from "../../context/SectionScroll";
function Home() {
  const homeRef = useRef<any>();
  const { changePagePosition } = usePagePosition();
  useEffect(() => {
    changePagePosition({ home: homeRef.current.offsetTop });
    window.addEventListener("resize", () => {
      changePagePosition({ home: homeRef.current.offsetTop });
    });
  }, [homeRef]);
  return (
    <div className="homeBody" id="home" ref={homeRef}>
      <p className="hi" style={{ fontFamily: "Pacifico" }}>
        Hi,
      </p>
      <p className="name">
        my name is <span>Pedram Karimi</span>
      </p>
      <p className="title">I am a front-end web developer</p>
      <p className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <a href="#projects">
        <div className="see-projects-btn">See some of my works</div>
      </a>
    </div>
  );
}

export default Home;
