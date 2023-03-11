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
        <a href="https://github.com/Pedram-Karimi/BlogYar" target="blank">
          <ProjectComponent
            projectImg={blogImg}
            projectText="This is one of the projects that I am most proud of, it is a full stack website that allows anyone to write thier ideas and also is a competitive platform that writers can compete for the top writers of mounth, web app is completly secure with firebase rules and uses firebase authentication"
          />
        </a>
        <a href="https://github.com/Pedram-Karimi/ChatYar" target="blank">
          <ProjectComponent
            projectImg={chatImg}
            projectText="This is a chating app that allows users to write message to their friends and family you can do all basic things you can do in other chat apps, but I still think it needs some extra features"
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
