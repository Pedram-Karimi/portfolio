import "./contact.css";
import { useEffect, useRef } from "react";
import { usePagePosition } from "../../context/SectionScroll";
function Contact() {
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
  return <div className="contact" id="contact" ref={contactRef}></div>;
}

export default Contact;
