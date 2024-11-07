import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactComponent = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_65kgn8g",     
      "template_qxv3hxp",    
      form.current,
      "NxgjkJi4wuG_zuQ9I"
    ).then(
      (result) => {
        console.log("Message sent successfully", result.text);
        alert("Message sent successfully!");
        form.current.reset(); 
      },
      (error) => {
        console.log("Failed to send message", error.text);
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <section className="contact-us">
      <div className="row">
        <div className="contact-col">
          <div>
            <FontAwesomeIcon icon={faHome} className="icon" />
            <span>
              <h5>Bhanoki Road, Cool Information</h5>
              <p>Phagwara, Punjab, IN</p>
            </span>
          </div>

          <div>
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <span>
              <h5>+91 8084940404</h5>
              <p>Saturday and Sunday, 10AM to 6PM</p>
            </span>
          </div>

          <div>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <span>
              <h5>rksfgh321@gmail.com</h5>
              <p>Email Us For Collaboration</p>
            </span>
          </div>
        </div>

        <div className="contact-col">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Enter your name" required />
            <input type="email" name="user_email" placeholder="Enter email address" required />
            <input type="text" name="subject" placeholder="Enter your subject" required />
            <textarea name="message" rows="8" placeholder="Message" required></textarea>
            <button type="submit" className="hero-btn red-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
