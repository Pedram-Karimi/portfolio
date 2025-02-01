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
      <div className="home" id="home" ref={homeRef}>
        <p className="hi" style={{ fontFamily: "Pacifico" }}>
          Hi,
        </p>
        <p className="name">
          My name is <span>Pedram Karimi</span>
        </p>
        <p className="title">I am a Full-stack web developer</p>
        <p className="content">
          Passionate fullstack developer dedicated to building high-quality,
          accessible web applications.
        </p>
        <div className="see-projects-btn">
          <a href="#projects">
            <p>See some of my works</p>
          </a>
        </div>
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
