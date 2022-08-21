import "./contact.css";
import { useEffect, useRef } from "react";
import { usePagePosition } from "../../context/SectionScroll";

//--
const Contact: React.FC = () => {
  const contactRef = useRef<any>();
  const { changePagePosition } = usePagePosition();
  useEffect(() => {
    if (contactRef) {
      changePagePosition({ contact: contactRef.current.offsetTop });
      window.addEventListener("resize", () => {
        changePagePosition({ contact: contactRef.current.offsetTop });
      });
    }
  }, [contactRef]);
  return (
    <div className="contact" id="contact" ref={contactRef}>
      <div className="projects-title-wrapper">
        <h2>Contact me</h2>
        <div className="title-line"></div>
      </div>
      <div className="contacts-container">
        <div className="email-send-form">
          <input placeholder="Your name" />
          <input placeholder="Your email" />
          <textarea placeholder="what you want to say" />
          <button>Send</button>
        </div>
        <div className="email-invitation">
          <h2>Say Hi</h2>
          <p>
            I will be happy to receive your emails, I will do my best to answer
            your email
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
