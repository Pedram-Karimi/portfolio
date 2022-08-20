import "./about.css";
import { usePagePosition } from "../../context/SectionScroll";
import { useRef, useEffect } from "react";
function About() {
  const aboutRef = useRef<any>();
  const { changePagePosition } = usePagePosition();
  useEffect(() => {
    changePagePosition({ about: aboutRef.current.offsetTop });
    window.addEventListener("resize", () => {
      changePagePosition({ about: aboutRef.current.offsetTop });
    });
  }, [aboutRef]);
  return (
    <div className="about" id="about" ref={aboutRef}>
      <div className="about-title-wrapper">
        <h2>About me</h2>
        <div className="title-line"></div>
      </div>
      <div className="about-text-side">
        <div className="about-content">
          <p>
            Hello! My name is Pedram and I enjoy building cool web apps that are
            accessible to thousands of peaple. my intrest in web development
            started back in 2018 when I wanted to build the first online store
            in my country, process of building this website taught me alot about
            HTML, CSS and web development in genrall, since then I have been
            learning varios technologys to be able to build awesome and stunning
            websites.
            <br />
            <br /> Here are a few technologies I've been working with recently:
          </p>
          <br />
          <div className="about-recent-tech">
            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>Typescript</li>
              <li>Firebase</li>
              <li>Node.js</li>
              <li>Mongo db</li>
            </ul>
          </div>
        </div>
        <div className="my-image-container">
          <img src="./images/avatar.jpg" />
        </div>
      </div>
    </div>
  );
}

export default About;
{
}
