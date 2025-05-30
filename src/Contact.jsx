import React, { useState } from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      alert("Please enter a message");
      return;
    }

    const serviceID = "service_v2sf7jj";    // replace with your EmailJS service ID
    const templateID = "template_ktskemr";  // replace with your EmailJS template ID
    const userID = "VSl34M3YZfYnesNc3";          // replace with your EmailJS user ID

    const templateParams = {
      message: message,
      to_email: "muppidathibecse@gmail.com",
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(
        (response) => {
          alert("Message sent successfully!");
          setMessage("");
        },
        (err) => {
          alert("Failed to send message. Try again later.");
          console.error(err);
        }
      );
  };

  return (
    <div className="contact-section">
      <h2 className="contact-heading">Contact Me</h2>

      <div className="contact-icons">
        <a
          href="https://github.com/MUPPIDATHI-82"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/muppidathi"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:muppidathibecse@gmail.com" className="contact-icon">
          <FaEnvelope />
        </a>
      </div>

      <form className="contact-form" onSubmit={sendEmail}>
        <textarea
          placeholder="Type your message..."
          className="message-box"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="send-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
