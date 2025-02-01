import "./contact.css";
import { useEffect, useRef, useState } from "react";
import { usePagePosition } from "../../context/SectionScroll";
import emailjs from "@emailjs/browser";

//--
const Contact: React.FC = () => {
  const contactRef = useRef<any>();
  const { changePagePosition, pagesPosition } = usePagePosition();
  const [senderName, setSenderName] = useState<string>();
  const [senderText, setSenderText] = useState<string>();
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();
    setSenderName("");
    setSenderText("");
    emailjs
      .sendForm(
        "service_agl8p4u",
        "template_g2acs3o",
        form.current,
        "3Zd_FfZFOO-o7_g1o"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
      <div className="contact-title-wrapper">
        <h2>Contact me</h2>
        <div className="title-line"></div>
      </div>
      <div className="contacts-container">
        <form className="email-send-form" ref={form} onSubmit={sendEmail}>
          <input
            placeholder="Your email"
            name="from_email"
            value={senderName}
            onChange={(e) => {
              setSenderName(e.target.value);
            }}
          />
          <textarea
            placeholder="what you want to say"
            name="message"
            value={senderText}
            onChange={(e) => {
              setSenderText(e.target.value);
            }}
          />
          <button>Send</button>
        </form>
      </div>
      <p className="email-ref">
        Email: <span>pedramkarimi1001@gmail.com</span>
      </p>
    </div>
  );
};

export default Contact;
