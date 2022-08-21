import "./sideMenu.css";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { usePagePosition } from "../../context/SectionScroll";
import { useEffect, useState } from "react";
function SideMenu() {
  const { pagesPosition } = usePagePosition();
  const [activeLi, setActiveLi] = useState("");
  useEffect(() => {
    setActiveLi("home");
  }, []);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= pagesPosition.home) {
      setActiveLi("home");
    }
    if (window.scrollY >= pagesPosition.about) {
      setActiveLi("about");
    }
    if (window.scrollY >= pagesPosition.projects) {
      setActiveLi("projects");
    }
    if (window.scrollY >= pagesPosition.contact) {
      setActiveLi("contact");
    }
  });
  return (
    <div className="side-menu">
      <div className="header">
        <img src="./images/logo-v3.png" alt="logo" />
      </div>
      <div className="side-menu-body">
        <ul>
          <a href="#home">
            <li
              className={activeLi == "home" ? "li-active" : "li-menu"}
              style={{ borderTop: "1px solid var(--dark-border)" }}
            >
              <div></div>
              Home
            </li>
          </a>
          <a href="#about">
            <li className={activeLi == "about" ? "li-active" : "li-menu"}>
              <div></div>About
            </li>
          </a>
          <a href="#projects">
            <li className={activeLi == "projects" ? "li-active" : "li-menu"}>
              <div></div>Projects
            </li>
          </a>
          <a href="#contact">
            <li className={activeLi == "contact" ? "li-active" : "li-menu"}>
              <div></div>Contact
            </li>
          </a>
        </ul>
        <div className="social-media">
          <a>
            <FaGithub className="social-icon" /> <p>Git-hub</p>
          </a>
          <a>
            <FaTwitter className="social-icon" /> <p>Twitter</p>
          </a>
          <a>
            <FaLinkedin className="social-icon" /> <p>Linked in</p>
          </a>
          <div className="resume-container">
            <div className="resume-style-line"></div>
            <a id="resume">Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
// (elementTarget.offsetTop + elementTarget.offsetHeight)
