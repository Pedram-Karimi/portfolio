// images

import blogImg from "../../assets/images/blog-screen.png";
import chatImg from "../../assets/images/chat-screen.png";

import ProjectComponent from "./components/ProjectComponent";
import { useEffect, useRef, useState } from "react";
import "./projects.css";
import { usePagePosition } from "../../context/SectionScroll";
function Projects() {
  const projectsRef = useRef<any>();
  const { changePagePosition, pagesPosition } = usePagePosition();

  useEffect(() => {
    changePagePosition({ projects: projectsRef.current.offsetTop });
    window.addEventListener("resize", () => {
      changePagePosition({ projects: projectsRef.current.offsetTop });
    });
  }, [projectsRef]);
  return (
    <div className="projects" id="projects" ref={projectsRef}>
      <div className="projects-title-wrapper">
        <h2>Sample projects</h2>
        <div className="title-line"></div>
      </div>
      <div className="projects-conatainer">
        <a href="https://pedram-karimi.github.io/BlogYar" target="blank">
          <ProjectComponent
            projectImg={blogImg}
            link="https://github.com/Pedram-Karimi/BlogYar"
            projectText="BlogYar is a powerful, user-friendly blog platform built with React and Firebase. Users can create accounts, publish posts, and interact with others via comments and likes. It's ideal for writers of all levels, providing an intuitive interface and a robust backend."
          />
        </a>
        <a href="https://pedram-karimi.github.io/chatyar" target="blank">
          <ProjectComponent
            projectImg={chatImg}
            link="https://github.com/Pedram-Karimi/chatyar"
            projectText="Chatyar is built with React and Firebase, offering real-time messaging and file-sharing. The app has a user-friendly interface and leverages Firebase's backend infrastructure for seamless functionality."
          />
        </a>
      </div>
      <div className="area-projects">
        <ul className="circles-projects">
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
  );
}

export default Projects;
