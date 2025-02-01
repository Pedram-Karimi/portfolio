import logo from "../../assets/images/logo-v3.png";
import "./sideMenu.css";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { usePagePosition } from "../../context/SectionScroll";
import { useEffect, useState } from "react";
import { usePhoneSideMenu } from "../../context/PhoneSideMenu";
function SideMenu() {
  const { pagesPosition } = usePagePosition();
  const { sideMenuStatus, changeSideMenuStatus } = usePhoneSideMenu();
  const [activeLi, setActiveLi] = useState("");
  useEffect(() => {
    setActiveLi("home");
  }, []);
  const hideMenu = () => {
    changeSideMenuStatus(false);
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY >= pagesPosition.home) {
      setActiveLi("home");
    }
    if (window.scrollY + 1 >= pagesPosition.about) {
      setActiveLi("about");
    }
    if (window.scrollY + 1 >= pagesPosition.projects) {
      setActiveLi("projects");
    }
    if (window.scrollY + 1 >= pagesPosition.contact) {
      setActiveLi("contact");
    }
  });
  return (
    <div className={`side-menu ${!sideMenuStatus && "hide-sideMenu"}`}>
      <div className="header">
        <img src={logo} alt="logo" />
      </div>
      <div className="side-menu-body">
        <ul>
          <a href="#home">
            <li
              className={activeLi == "home" ? "li-active" : "li-menu"}
              style={{ borderTop: "1px solid var(--dark-border)" }}
              onClick={hideMenu}
            >
              <div></div>
              Home
            </li>
          </a>
          <a href="#about">
            <li
              className={activeLi == "about" ? "li-active" : "li-menu"}
              onClick={hideMenu}
            >
              <div></div>About
            </li>
          </a>
          <a href="#projects">
            <li
              className={activeLi == "projects" ? "li-active" : "li-menu"}
              onClick={hideMenu}
            >
              <div></div>Projects
            </li>
          </a>
          <a href="#contact">
            <li
              className={activeLi == "contact" ? "li-active" : "li-menu"}
              onClick={hideMenu}
            >
              <div></div>Contact
            </li>
          </a>
        </ul>
        <div className="social-media">
          <a href="https://github.com/Pedram-Karimi">
            <FaGithub className="social-icon" onClick={hideMenu} />{" "}
            <p>Git-hub</p>
          </a>
          {/* <a href="https://twitter.com/pedramk15355881">
            <FaTwitter className="social-icon" onClick={hideMenu} />{" "}
            <p>Twitter</p>
          </a> */}
          {/* <a href="https://www.linkedin.com/in/pedram-karimi-901a32258/">
            <FaLinkedin className="social-icon" onClick={hideMenu} />{" "}
            <p>Linked in</p>
          </a> */}
          <div className="resume-container">
            <div className="resume-style-line"></div>
            <a
              id="resume"
              onClick={hideMenu}
              href="https://docs.google.com/document/d/1zZS5BBXhhz7V_SG8Dmd_fwxilBLxixFCAhVwDx_jQbE/edit?usp=sharing"
              target="blank"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
// (elementTarget.offsetTop + elementTarget.offsetHeight)
