import "./home.css";
import { useEffect, useRef } from "react";
import { usePagePosition } from "../../context/SectionScroll";
import "./homeAnimation.css";

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
    <>
      <div className="homeBody" id="home" ref={homeRef}>
        <p className="hi" style={{ fontFamily: "Pacifico" }}>
          Hi,
        </p>
        <p className="name">
          my name is <span>Pedram Karimi</span>
        </p>
        <p className="title">I am a front-end web developer</p>
        <p className="content">
          I'm a software engineer specializing in front-end (graphical user
          interface of a website), I build web apps that users can view and
          interact with.
        </p>

        <a href="#projects">
          <div className="see-projects-btn">See some of my works</div>
        </a>
      </div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default Home;
