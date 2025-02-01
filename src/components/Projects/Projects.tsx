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
        <h2>Projects</h2>
        <div className="title-line"></div>
      </div>
      <div className="projects-conatainer">
        <ProjectComponent
          projectImg={blogImg}
          link="https://github.com/Pedram-Karimi/BlogYar"
          webLink="https://pedram-karimi.github.io/blogyar"
          projectText="BlogYar is an open source web app for writing blogs. The app provides a platform for writers to create a profile and spread their ideas through writing. Blogyar provides users with a comment section, subscribe system, text editor, like, bookmark, etc... This app is made using reactJS and Firestore database."
        />

        <ProjectComponent
          projectImg={chatImg}
          link="https://github.com/Pedram-Karimi/chatyar"
          webLink="https://pedram-karimi.github.io/chatyar"
          projectText="Chatyar is a messaging app in which you can create a profile, customize it, and chat with people. It has the functionalities of a modern messaging app, and allows for authentication via email, without the need for a phone number. The app is made using React and Firestore database."
        />
        <ProjectComponent
          link="https://github.com/Pedram-Karimi/debate-app"
          webLink="https://github.com/Pedram-Karimi/debate-app"
          projectText="'Debate App', as the name suggests, is a platform for people to find opposing views and engage in debate. This project is still under development, but major work has been done on it in regards to building an sql based database, authentication system, important backend apis, and the essential UI. The app is made using NextJS and a postgresql database."
        />
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
