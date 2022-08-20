import ProjectComponent from "./components/ProjectComponent";
import { useEffect, useRef, useState } from "react";
import "./projects.css";
import { usePagePosition } from "../../context/SectionScroll";
function Projects() {
  const projectsRef = useRef<any>();
  const { changePagePosition } = usePagePosition();
  useEffect(() => {
    changePagePosition({ projects: projectsRef.current.offsetTop });
    window.addEventListener("resize", () => {
      changePagePosition({ projects: projectsRef.current.offsetTop });
    });
  }, [projectsRef]);
  return (
    <div className="projects" id="projects" ref={projectsRef}>
      <div className="projects-title-wrapper">
        <h2>Some projects i have build</h2>
        <div className="title-line"></div>
      </div>
      <div className="projects-conatainer">
        <ProjectComponent />
        <ProjectComponent />
        <ProjectComponent />
      </div>
    </div>
  );
}

export default Projects;
