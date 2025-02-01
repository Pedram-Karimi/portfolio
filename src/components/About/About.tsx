import avatar from "../../assets/images/MyImage.jpg";

import "./about.css";
import { usePagePosition } from "../../context/SectionScroll";
import { useRef, useEffect, useState } from "react";
function About() {
  const aboutRef = useRef<any>();
  const { changePagePosition, pagesPosition } = usePagePosition();

  useEffect(() => {
    changePagePosition({ about: aboutRef.current.offsetTop });
    window.addEventListener("resize", () => {
      changePagePosition({ about: aboutRef.current.offsetTop });
    });
  }, [aboutRef]);
  return (
    <>
      <div className="about" id="about" ref={aboutRef}>
        <div className="about-title-wrapper">
          <h2>About me</h2>
          <div className="title-line"></div>
        </div>
        <div className="about-text-side">
          <div className="about-content">
            <p>
              Hello, I'm Pedram, a flexible and adaptable fullstack developer
              with a passion for building exciting web applications. My love for
              programming began in 2018 when I built my first website using
              HTML, CSS and JS. Since then, I've continued to learn and expand
              my skills in various technologies.
              <br /> <br /> As a fullstack developer, I specialize in both
              front-end and back-end development. I have expertise in popular
              frameworks such as React, Next and Node.js, as well as various
              databases such as MySQL, MongoDB, and Firestore. I'm always eager
              to learn and adapt to new technologies, and I'm confident in my
              ability to quickly pick up and work with any tech stack. <br />{" "}
              <br />
              I'm dedicated to creating high-quality, scalable web applications
              that provide an excellent user experience. When I'm not coding, I
              enjoy doing side projects and staying up-to-date with the latest
              industry trends.
              <br />
              <br /> Here are a few technologies I've been working with
              recently:
            </p>
            <br />
            <div className="about-recent-tech">
              <ul>
                <li>Javascript</li>
                <li>React</li>
                <li>Typescript</li>
                <li>Firestore</li>
                <li>Node.js</li>
                <li>Mongo db</li>
                <li>Postgresql</li>
                <li>ٔNextJS</li>
              </ul>
            </div>
          </div>
          <div className="my-image-container">
            <div className="my-image-cover"></div>
            <div className="box-border-my-image"></div>
            <img src={avatar} />
          </div>
        </div>
        <div className="area-about">
          <ul className="circles-about">
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
      </div>
    </>
  );
}

export default About;
{
}
